import React,{ Component } from 'react'
import LocationForm from './parts/locationform';
import './LocationRequest.css';
import ChallengeButton from '../ChallengeButton';
import { Redirect } from 'react-router';
import Modal from 'react-awesome-modal';


class SearchCampus extends Component {
  state = {
    fireRedirect: false,
    latitude: undefined,
    longitude: undefined
  }

  openModal() {
  this.setState({
      visible : true
  });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }

  regionSearch = async (e) => {
    e.preventDefault();
    const text = e.target.location.value
    const textsplit = text.split(' ')
    const locationAPI = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+ textsplit[0]+ '+'+ textsplit[1]+ '+'+ textsplit[2]+'+au&sensor=true_or_false&key=YOURAPIKEY')

    const data = await locationAPI.json();
    console.log(data.results[0]);
    if (data.results[0]){
    this.setState({
      latitude:data.results[0].geometry.location.lat,
      longitude:data.results[0].geometry.location.lng,
      locationpara: data.results[0].geometry.location.lat+'&'+data.results[0].geometry.location.lng,
      fireRedirect:true
    });
  }else{
    this.openModal();
  }
  }

 render() {
  const { fireRedirect } = this.state
  return (
    <div>
      <Modal
          visible={this.state.visible}
          width="400"
          height="200"
          effect="fadeInDown"
          onClickAway={() => this.closeModal()}
          >
          <div>
              <h3 style={{paddingLeft:'40px',paddingTop:'40px', color:'#DC4A4A'}}>Location not found</h3>
              <p style={{paddingLeft:'40px',marginBottom:'30px'}}>Please select address from suggested list</p>
              <a style={{marginLeft:'40px',marginTop:'10px',padding:'5px 10px 5px 10px', border:'1px solid #DC4A4A',borderRadius:'20px',color:'#DC4A4A',textDecoration: 'none'}} href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
          </div>
        </Modal>
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
