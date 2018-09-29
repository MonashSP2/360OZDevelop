import React,{ Component } from 'react'
import LocationForm from './parts/locationform';
import './LocationRequest.css';
import ChallengeButton from '../ChallengeButton';
import { Redirect } from 'react-router';

class SearchCampus extends Component {
  state = {
    fireRedirect: false,
    latitude: undefined,
    longitude: undefined
  }
  regionSearch = async (e) => {
    e.preventDefault();
    const text = e.target.location.value
    const textsplit = text.split(' ')
    console.log(textsplit);
    const locationAPI = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+ textsplit[0]+ '+'+ textsplit[1]+ '+'+ textsplit[2]+'+au&sensor=true_or_false&key=AIzaSyA9AsNR1CEC9DhDkro8FOnmDXHjaYjz5PM')

    const data = await locationAPI.json();
    console.log(data);
    this.setState({
      latitude:data.results[0].geometry.location.lat,
      longitude:data.results[0].geometry.location.lng,
      locationpara: data.results[0].geometry.location.lat+'&'+data.results[0].geometry.location.lng,
      fireRedirect:true
    });
  }

 render() {
  const { fireRedirect } = this.state
  return (
    <div>
      <div className="challenge-button-container">
        <ChallengeButton />
      </div>
      <div id="ChallengeStart">
        <div>
        <LocationForm regionSearch={this.regionSearch}/>
          {fireRedirect && (
          <Redirect to={{pathname:'/locationrequest/' + this.state.locationpara,
            state: {
              locationpara: this.state.locationpara } }}/>
        )}
      </div>
      </div>

    </div>
  )
}
}

export default SearchCampus;
