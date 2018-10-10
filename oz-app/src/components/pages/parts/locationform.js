import React,{Component} from "react";
import './form.css';
import Geolocation from "react-geolocation";
import Autocomplete from 'react-google-autocomplete';
import { Switch } from 'antd';


class LocationForm extends Component{
  constructor(props) {
    super(props);
    this.state = {value: '',
      latitude:'',
      longitude:'',
      isActive: false,

    };
    this.handleChange = this.handleChange.bind(this);
  }

  onChange = (checked) => {
    if (checked === false){
      this.setState({isActive: true})
    }else{
      this.setState({isActive: false})
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){
    let planId = ''

    if (this.state.isActive === true) {
      planId = 'planIdLanguage';
    }else{
      //console.log(this.state.isActive);
    }

    return(
      <div>
        <Switch id="translateSwitchForm" checkedChildren="英" unCheckedChildren="中" onChange={this.onChange} defaultChecked />

      <div id={planId}>
        <h1 style={{paddingBottom: '20px'}} id='homeTitle'>3-Day Plan</h1>
        <p style={{paddingBottom: '10px', fontSize:'16px', color:'#7F7F7F'}}>This 3-day plan is designed to <span style={{color:'#F08B6F'}}>practically plan for your first 3 days</span> in Melbourne involving activities that will help you transition into this new environment. There will be lists of things to do and an optimal route for you to follow.</p>
      </div>
      <form onSubmit={this.props.regionSearch} style={{paddingTop: '100px'}}>
        <div className = 'inputCustomeLocation' >

            <Autocomplete
              name="location"
              placeholder='Enter a location'
              style={{width: '100%',border:'none',fontSize:'16px'}}
              onPlaceSelected={(place) => {
                this.setState({value: place.geometry
                });
              }}
              types={['address']}
              componentRestrictions={{country: "au"}}
              required/>

        </div>

        <div id="challengeSearchSection">
          <button className="locationsubmit" style={{backgroundColor:'white'}} ><span id='searchButton' style={{marginTop:'0px'}}>Start Planning</span></button>
        </div>
        <div style={{position:'absolute',bottom:'-22%'}}>
          <p style={{color:'grey',marginBottom:'0px'}}>Eg. 900 Dandenong Road, </p>
          <p  style={{color:'grey'}}>Caulfield East VIC, Australia</p>
        </div>

    	</form>
      </div>
    )
  }
}
export default LocationForm;
