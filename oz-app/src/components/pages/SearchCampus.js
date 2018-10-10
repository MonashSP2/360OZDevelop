import React,{Component} from 'react'
import Form from './parts/form';
import './SearchCampus.css';
import BeforeButton from '../BeforeButton';
import { Redirect } from 'react-router';
import { Switch } from 'antd';


class SearchCampus extends Component {
  state = {
    fireRedirect: false,
    isActive: false,
  }

  onChange = (checked) => {
    if (checked === false){
      this.setState({isActive: true})
    }else{
      this.setState({isActive: false})
    }
  }

  regionSearch = async (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true })
    const text = e.target.textContent
    const campusText = /Select your campus(.*)Search/;
    const campusMatch = campusText.exec(text);
    this.setState({
      campus: campusMatch[1].toLowerCase(),
      error: ""
    });
  }

 render() {
  const { fireRedirect } = this.state

  let exploreId = 'exploreId'

  if (this.state.isActive === true) {
    exploreId = 'exploreIdLanguage';
  }else{
    //console.log(this.state.isActive);
  }

  return (
    <div>
      <Switch id="translateSwitch" checkedChildren="英" unCheckedChildren="中" onChange={this.onChange} defaultChecked />

      <div className="button-container">
        <BeforeButton />
      </div>
      <div id={exploreId}>
        <h1 style={{paddingBottom: '20px'}} id='homeTitle'>Explore Suburbs</h1>
        <p style={{paddingBottom: '100px', fontSize:'16px', color:'#7F7F7F',width:'600px'}}>Find the <span style={{color:'#F08B6F'}}>best suburb</span> based on your preferred lifestyle, interests, demographics and other essential information. 
        </p>
      </div>
      <div id="searchCampusStart">

        <div className="droplist">
        <Form regionSearch={this.regionSearch}/>
          {fireRedirect && (
          <Redirect to={{pathname:'/search'+ this.state.campus,
            state: {
              campus: this.state.campus }
          }}/>
        )}
      </div>
      </div>

    </div>
  )
}
}

export default SearchCampus;
