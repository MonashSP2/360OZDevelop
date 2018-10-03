import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Before from './pages/Before';
import SearchCampus from './pages/SearchCampus';
import SearchCaulfield from './pages/SearchCaulfield';
import SearchClayton from './pages/SearchClayton';
import SearchParkville from './pages/SearchParkville';
import SearchPeninsula from './pages/SearchPeninsula';
import LocationRequest from './pages/LocationRequest';
import PlanTemplate from './pages/PlanTemplate';
import Results from './pages/parts/challengeform/showResults';
import EmailPlan from './pages/parts/challengeform/emailPlan';

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './pages/Login';

import After from './pages/After';
import UsefulInfoPhone from './pages/UsefulInfoPhone';
import UsefulInfoBank from './pages/UsefulInfoBank';
import UsefulInfoJob from './pages/UsefulInfoJob';
import UsefulInfoOhsc from './pages/UsefulInfoOhsc';
import UsefulInfoCampus from './pages/UsefulInfoCampus';
import UsefulInfoTransportation from './pages/UsefulInfoTransportation';
import UsefulLinks from './pages/Usefullinks';

function onAuthRequired({history}) {
  history.push('/login');
}

class Body extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/before' component={Before}/>
          <Route path='/searchcampus' component={SearchCampus}/>
          <Route path='/searchcaulfield' component={SearchCaulfield}/>
          <Route path='/searchclayton' component={SearchClayton}/>
          <Route path='/searchparkville' component={SearchParkville}/>
          <Route path='/searchpeninsula' component={SearchPeninsula}/>
          <Route exact path='/after' component={After}/>
          <Route exact path='/usefullinkes' component={UsefulLinks}/>
          <Route exact path='/usefulinfophone' component={UsefulInfoPhone}/>
          <Route exact path='/usefulinfobank' component={UsefulInfoBank}/>
          <Route exact path='/usefulinfocampus' component={UsefulInfoCampus}/>
          <Route exact path='/usefulinfotransportation' component={UsefulInfoTransportation}/>
          <Route exact path='/usefulinfojob' component={UsefulInfoJob}/>
          <Route exact path='/usefulinfoohsc' component={UsefulInfoOhsc}/>
          <Route exact path='/locationrequest' component={LocationRequest}/>
          <Route exact path='/locationrequest/:locationpara' component={PlanTemplate}/>
          <Route exact path='/locationrequest/:locationpara/challengesubmission' component={Results}/>
          <Route exact path='/email' component={EmailPlan}/>
      </Switch>

      </main>
    )
  }
}

export default Body;
