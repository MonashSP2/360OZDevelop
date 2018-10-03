import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { Progress } from 'antd';
import './Day.css';

const Day1 = props => {
  const { handleSubmit } = props;
  return (
<div>
      <div className="beforeContainer">
          <div className="beforeSection">
            <span className="beforeTitle">
              Arrive Page</span>
          </div>
          <div id="dayDetail">
          Set up the basics as soon as you arrive in Melbourne
        </div>
      </div>
      <form id="challengeForm" onSubmit={handleSubmit}>
        <Progress id='processBar' percent={33.3} strokeWidth={40} showInfo={false} />
        <div id='processBarTitle'><span>Day 1</span><button type="submit" id="processBarButton">Day 2</button><span>Day 3</span>
        </div>
        <div id='planItem'>
            <label >Get a local sim card with</label>
            <span id='fieldItemUnderLine'>
            <Field id='fieldItem' name="simCard" component="select" style={{width:'265px'}}>
              <option> ---Choose a Provider --- </option>
              <option value="vodafone">Vodafone</option>
              <option value="telstra_shop">Telstra</option>
              <option value="optus">Optus</option>
            </Field> </span> <a id="question" target="_blank" rel="noopener noreferrer" href="/usefulinfophone"></a>
            <div>
              <span style={{float:'left',color:'#939393',marginTop:'6px',marginLeft:'26px'}}>
                Stay connected with friends and family.
              </span>
            </div>

        </div>
        <div id='planItem'>
          <Field
            name="mykiCard"
            id="mykiCard"
            component="input"
            type="checkbox"
            style={{marginRight:'10px'}}
          />
        <label htmlFor="mykiCard"><span>Get a Myki card</span></label>
          <div>
            <span style={{float:'left',color:'#939393',marginTop:'6px',marginLeft:'26px'}}>
              Be able to use public transport.
            </span>
          </div>
        </div>


        <div id='planItem'>
        <label>Get a bank card with</label>
            <span id='fieldItemUnderLine'>
            <Field id='fieldItem' name="bankCard" component="select" style={{width:'300px'}}>
              <option> ---Choose a Bank --- </option>
              <option value="commonwealth">Commonwealth Bank</option>
              <option value="anz">ANZ Bank</option>
              <option value="nab">NAB Bank</option>
            </Field></span> <a id="question" target="_blank" rel="noopener noreferrer" href="/usefulinfobank"></a>
            <div>
              <span style={{float:'left',color:'#939393',marginTop:'6px',marginLeft:'26px'}}>
                Be able to make purchases easily.
              </span>
            </div>

        </div>

        <div id='planItem'>
            <label>Go to your University Campus</label>
            <span id='fieldItemUnderLine'>
            <Field id='fieldItem' name="goCampus" component="select" style={{width:'225px'}}>
              <option> ---Choose the Campus --- </option>
              <option value="Monashclayton">Clayton</option>
              <option value="Monashcaulfield">Caulfield</option>
                <option value="Monashparkville">Parkville</option>
                <option value="Monashpeninsula">Peninsula</option>
            </Field>
            <div>
              <span style={{float:'left',color:'#939393',marginTop:'6px',marginLeft:'26px'}}>
                Familiarise on how to get to your University.
              </span>
            </div>
            </span>
        </div>

      <div>
        <button type="submit" className="next" id='dayButton'>Next</button>
      </div>
    </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(Day1);
