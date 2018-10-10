import React, { Component}from 'react';
import './UsefulInfo.css';
import { Redirect } from 'react-router';

class UsefulInfoButton extends Component{
  state = {
    toBank: false,
    toCampus: false,
    toTransportation: false,
    toPhone: false,
    toJob: false,
    toOhsc: false
  }
  toBank = () => {
      this.setState({
        toBank: true,
      })
    }
  toCampus = () => {
      this.setState({
        toCampus: true,
      })
    }
  toTransportation = () => {
      this.setState({
        toTransportation: true,
      })
    }
  toPhone = () => {
      this.setState({
        toPhone: true,
      })
    }
  toJob = () => {
      this.setState({
        toJob: true,
      })
    }
  toOhsc = () => {
      this.setState({
        toOhsc: true,
      })
    }


  render(){
    const { toBank,toCampus,toTransportation,toPhone,toJob,toOhsc } = this.state

    return (
      <div>
      <div className="beforeContainer">
          <div className="usefulSection" style={{marginBottom:'20px'}}>
            <button style={{border:'none', background:'none'}} onClick={this.toBank}>
              <span style={{fontSize:'14px'}} className="beforeTitle">
                International Student Banking
                {toBank && (
                <Redirect to='/usefulinfobank' />)}
              </span>
            </button>
          </div>
          <div className="usefulSection" style={{marginBottom:'20px'}}>
            <button style={{border:'none', background:'none'}} onClick={this.toCampus}>
              <span style={{fontSize:'14px'}} className="beforeTitle">
                Housing On and Off Campus
                {toCampus && (
                <Redirect to='/usefulinfocampus' />)}
              </span>
            </button>
          </div>
          <div className="usefulSection" style={{marginBottom:'20px'}}>
            <button style={{border:'none', background:'none'}} onClick={this.toTransportation}>
              <span style={{fontSize:'14px'}} className="beforeTitle">
                Public Transportation
                {toTransportation && (
                <Redirect to='/usefulinfotransportation' />)}
              </span>
            </button>
          </div>
          <div className="usefulSection" style={{marginBottom:'20px'}}>
            <button style={{border:'none', background:'none'}} onClick={this.toPhone}>
              <span style={{fontSize:'14px'}} className="beforeTitle">
                Australian Mobile Carriers
                {toPhone && (
                <Redirect to='/usefulinfophone' />)}
              </span>
            </button>
          </div>
          <div className="usefulSection" style={{marginBottom:'20px'}}>
            <button style={{border:'none', background:'none'}} onClick={this.toJob}>
              <span style={{fontSize:'14px'}} className="beforeTitle">
                Jobs Information
                {toJob && (
                <Redirect to='/usefulinfojob' />)}
              </span>
            </button>
          </div>
          <div className="usefulSection" style={{marginBottom:'20px'}}>
            <button style={{border:'none', background:'none'}} onClick={this.toOhsc}>
              <span style={{fontSize:'14px'}} className="beforeTitle">
                Overseas Student Health Cover
                {toOhsc && (
                <Redirect to='/usefulinfoohsc' />)}
              </span>
            </button>
          </div>
      </div>
      </div>
    )
}
}
export default UsefulInfoButton;
