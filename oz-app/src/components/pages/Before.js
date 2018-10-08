import React, { Component}  from 'react';
import './Before.css';
import Form from './parts/form';
import MapSection from './parts/map';

class Before extends Component{
  state = {
    interest: undefined,
    error: undefined
  }

  regionSearch = async (e) => {
    e.preventDefault();
    const text = e.target.textContent
    const campusText = /Select your campus(.*)Search/;
    const campusMatch = campusText.exec(text);
    this.setState({
      campus: campusMatch[1],
      error: ""
    });
  }


  render(){
    return (
      <div>
        <div className="beforeContainer">
          <div className="beforeSectionWhite">
            <span className="beforeTitle">Before you arrive</span>
            </div>
            <div className="droplist">
            <Form regionSearch={this.regionSearch}/>
          </div>
        </div>
        <div>
          <MapSection
            interest = {this.state.interest}/>
        </div>
      </div>
    )
  }
}
export default Before;
