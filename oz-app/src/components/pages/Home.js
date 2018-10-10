import React, { Component}  from 'react';
import BeforeButton from '../BeforeButton';
import AfterButton from '../ChallengeButton';
import './Home.css';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { Button } from 'antd';
import { Switch } from 'antd';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
     };

  }

  onChange = (checked) => {
    if (checked === false){
      this.setState({isActive: true})
    }else{
      this.setState({isActive: false})
    }
  }

  render() {

    let welcomeId = 'welcomeDesc'
    let beforeDescId = 'beforeDesc'
    let afterDescId = 'afterDesc'
    if (this.state.isActive === true) {
      welcomeId = 'welcomeIdLanguage';
      beforeDescId = 'beforeDescLanguage';
      afterDescId = 'afterDescLanguage';
    }else{
      //console.log(this.state.isActive);
    }





    return (
      <div>
        <div style={{float:'right', margin:'20px'}}>

          <Switch id="translateSwitch" checkedChildren="英" unCheckedChildren="中" onChange={this.onChange} defaultChecked />
          </div>

        <div className="button-container">
          <Link to='/searchcampus'><BeforeButton /></Link>
          <Link to='/locationrequest'><AfterButton /></Link>
        </div>
        <div className="welcomeExplanation">
          <p id='welcomeTitle'>
            Welcome to 360OZ!
          </p>
          <p id={welcomeId}>
            A unique and fun way for <span style={{color:'#FF8567'}}>Chinese International Students</span> to get to know Melbourne and settle in to your new city
          </p>
          </div>
        <div className="beforeExplanation">
          <div>
          <p id='homeTitle'>Your journey starts here...</p>
          </div>
          <div id={beforeDescId}>
          <p >Guide to find the best place to live in Melbourne that suit your needs</p>
          </div>
        </div>
        <div className="beforeExplanation" style={{marginTop:'210px'}}>
          <div>

          <p id='homeTitle'>3-Day Plan</p>
          </div>
          <div id={afterDescId}>
          <p >Exciting 3-day plan to arrive, revive and immerse in Melbourne</p>
          </div>
        </div>
      </div>

    );
  }
};
