import React,{Component} from "react";
import './form.css';
import Geolocation from "react-geolocation";

class LocationForm extends Component{
  constructor(props) {
    super(props);
    this.state = {value: '',
      latitude:'',
      longitude:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  // handleChange(event) {
  //   this.setState({latitude: event.target.latitude});
  //   this.setState({longitude: event.target.longitude});
  // }

  render(){
    return(
      <div>
      <div>
        <h1 style={{paddingBottom: '20px'}} id='homeTitle'>3 Day Plan</h1>
        <p style={{paddingBottom: '100px', fontSize:'16px', color:'#7F7F7F'}}>This 3-day plan is designed to <span style={{color:'#F08B6F'}}>practically plan for your first 3 days</span> in Melbourne involving activities that will help you transition into this new environment. There will be lists of things to do and an optimal route for you to follow.</p>
      </div>
      <form onSubmit={this.props.regionSearch}>

        <div className = 'inputCustomeLocation' >

          <span>Input your location(eg. 900 Dandenong Rd)</span>
          <input
            id = 'inputLocation'
            size="large"
            placeholder=" "
            name="location"
            value={this.state.value}
            onChange={this.handleChange} required/>
        </div>
        <div id="challengeSearchSection">
          <button className="submit" ><span id='searchButton'>Search</span></button>
        </div>

    	</form>
      </div>
    )
  }
}
export default LocationForm;
