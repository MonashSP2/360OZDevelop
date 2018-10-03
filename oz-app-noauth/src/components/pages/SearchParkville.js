import React, { Component}  from 'react';
import './Before.css';
import './SearchClayton.css';
import InterestForm from './parts/interestform';
import ParkvilleMapSection from './parts/mapparkville';

class Parkville extends Component{
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
            <span className="beforeTitle">Explore around Parkville Campus</span>
            </div>
            <div className="droplist">
              <InterestForm interestSearch={this.interestSearch}/>
          </div>
        </div>
        <div>
          <ParkvilleMapSection
            interest = {this.state.interest}/>
        </div>
      </div>
    )
  }
}
export default Parkville;
