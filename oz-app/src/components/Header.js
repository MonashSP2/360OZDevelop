import React, {Component}from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './image/logo.png';
import { Switch } from 'antd';

class Header extends Component{
  state = {
    isActive: false
  }


  onChange = (checked) => {
    if (checked === false){
      this.setState({isActive: true})
    }else{
      this.setState({isActive: false})
    }
  }


  render() {
    let id = ''
    console.log(this.state.isActive);
    if (this.state.isActive === true) {
      id += 'switchLanguage';
      console.log(id);
    }else{
      console.log(this.state.isActive);
    }

    return (
      <div>
        <input type="checkbox" id="nav" className="hidden"/>

        <label htmlFor="nav" className="nav-btn">
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>
        <nav className="navBar">
          <Link id='logo_link' to='/'><img src={logo} alt="logo" height="40" id='logo_img'></img></Link>
        </nav>
        {/* <Switch id={id} style={{position:"absolute",top:"6%",marginLeft:"10px",backgroundColor:"#FF8567"}} checkedChildren="英" unCheckedChildren="中" onChange={this.onChange} defaultChecked /> */}      
        <div className='navWrapper'>

          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/searchcampus'>BEFORE</Link></li>
            <li><Link to='/locationrequest'>AFTER</Link></li>
          </ul>
        </div>
        </div>
    )
  }
}

export default Header;
