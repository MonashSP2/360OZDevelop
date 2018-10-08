import React,{ Component } from 'react'
import { Tabs } from 'antd';
import './showResults.css';
import './emailPlan.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Modal from 'react-awesome-modal';

class EmailPlan extends Component {
  state = {
      email:'',
      day1message:'',
      day2message:'',
      day3message:''
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

  handleChange = e => {
    this.setState({email: e.target.value})
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log("day1",this.state.day1message);
    console.log("day2",this.state.day2message);
    console.log("day3",this.state.day3message);
    this.openModal();
    const { email, day1message,day2message,day3message } = this.state;
    // const form = await axios.post('http://localhost:3002/sendEmail/',{
        const form = await axios.post('http://35.189.58.222/sendEmail/',{
        email,
        day1message,
        day2message,
        day3message
      })
  };

  componentWillMount(){
    const day1 = this.props.location.state.day1;
    const day2 = this.props.location.state.day2;
    const day3 = this.props.location.state.day3;

    if (this.state.message != day1){
      this.setState({day1message:day1,
                    day2message:day2,
                    day3message:day3,
                    })
    }
    for (let i = 0; i< day1.length; i++){
      if (day1[i]){
        console.log(day1[i].name);
      }
    }
  }

  render(){
    const day1 = this.props.location.state.day1;
    const day2 = this.props.location.state.day2;
    const day3 = this.props.location.state.day3;

    const TabPane = Tabs.TabPane;

    function callback(key) {
      console.log(key);
    }

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
                  <h3 style={{paddingLeft:'40px',paddingTop:'20px', color:'#6C86DB'}}>Email Sent!</h3>
                  <p style={{paddingLeft:'40px'}}>Your plan is on the way to</p>
                  <p style={{paddingLeft:'40px',marginBottom:'20px'}}>{this.state.email}</p>
                  <a style={{marginLeft:'40px',padding:'5px 10px 5px 10px', border:'1px solid #6C86DB',borderRadius:'20px',color:'#6C86DB',textDecoration: 'none'}} href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
              </div>
            </Modal>
          <div className="beforeContainer">
              <div className="beforeSectionWhite">
                <span className="beforeTitle">
                  Save your Plan</span>
              </div>
              <div id="dayDetail">
              Email the plan to yourself
            </div>
          </div>
          <div id='emailTabBackgroud'></div>
            <Tabs style={{position:'absolute',top:'15%',left:'15%',width:'50vw',height:'60vh'}}
              tabBarGutter='200px' tabBarStyle={{border:'none'}} defaultActiveKey="1"  onChange={callback}>
            <TabPane tab="Day 1" key="1">
            <div style={{paddingTop:'60px',paddingLeft:'100px'}}>
              {day1.map(item => (
                  <li id='locationContainer' key={item.id}>{item.name}</li>
                  ))}
                  </div>
            </TabPane>
            <TabPane tab="Day 2" key="2">
              <div style={{paddingTop:'60px',paddingLeft:'100px'}}>

              {day2.map(item => (
                  <li id='locationContainer' key={item.id}>{item.name}</li>
                  ))}
                </div>
            </TabPane>
            <TabPane tab="Day 3" key="3">
              <div style={{paddingTop:'60px',paddingLeft:'100px'}}>
              {day3.map(item => (
                <li id='locationContainer' key={item.id}>{item.name}</li>
                ))}
              </div>
              </TabPane>

          </Tabs>
          <div>

            <form onSubmit={this.handleSubmit} id="emailForm">
              <div>
              <Input type="email" name="email" id="exampleEmail" id="emailSubmit" onChange={this.handleChange} placeholder="Enter your email address" required/>
              <button id="emailSubmitButton">Send</button>
            </div>
              <div>
              </div>
            </form>
          </div>
        </div>
    )
}}

export default EmailPlan;
