import React, { Component}  from 'react';
import './Before.css';
import InterestForm from './parts/interestform';
import './SearchClayton.css';

import CaulfieldMapSection from './parts/mapcaulfield';

class Caulfield extends Component{
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
          <div className="beforeSectionWhite">
            <span className="beforeTitle">Explore around Caulfield Campus</span>
            </div>
            <div className="droplist">
              <InterestForm interestSearch={this.interestSearch}/>
          </div>
        </div>
        <div>
          <CaulfieldMapSection
            interest = {this.state.interest}/>
        </div>
      </div>
    )
  }
}
export default Caulfield;
