import React, { Component}  from 'react';
import './Before.css';
import './SearchClayton.css';
import InterestForm from './parts/interestform';
import ClaytonMapSection from './parts/mapclayton';
import ControlPanel from './parts/control-panel';
import { Link } from 'react-router-dom';



class Clayton extends Component{
  state = {
    interest: undefined,
    error: undefined
  }

  interestSearch = async (e) => {
    e.preventDefault();
    const text = e.target.elements.interest.value
    this.setState({interest:text})
  }
  render(){
    return (
      <div>
        <div className="beforeContainer">
          <div className="beforeSection">
            <span className="beforeTitle">
              Which is the best suburb for you?</span>
            </div>
            <div className="droplist">
            <InterestForm interestSearch={this.interestSearch}/>
          </div>
        </div>
        <div id = 'mapContainer'>
          <ClaytonMapSection
            interest = {this.state.interest} />
        </div>
      </div>
    )
  }
}
export default Clayton;
