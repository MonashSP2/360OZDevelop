import React, { Component}  from 'react';
import './Before.css';
import './SearchClayton.css';
import InterestForm from './parts/interestform';

import PeninsulaMapSection from './parts/mappeninsula';

class Peninsula extends Component{
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
            <span className="beforeTitle">Explore around Peninsula Campus</span>
            </div>
            <div className="droplist">
              <InterestForm interestSearch={this.interestSearch}/>
          </div>
        </div>
        <div>
          <PeninsulaMapSection
            interest = {this.state.interest}/>
        </div>
      </div>
    )
  }
}
export default Peninsula;
