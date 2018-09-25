import React,{Component} from "react";
import { Select } from 'antd';
import './form.css';

class InterestForm extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){


    return(
      <form onSubmit={this.props.interestSearch}>
        <div className = 'inputCustome' >
          <input
            id = 'inputInterest'
            size="large"
            placeholder="Search your interest"
            name="interest"
            value={this.state.value}
            onChange={this.handleChange} required/>
          <button id='searchIcon'></button>
        </div>
    	</form>
    )
  }
}
export default InterestForm;
