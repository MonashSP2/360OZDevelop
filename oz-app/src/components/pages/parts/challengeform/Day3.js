import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { Progress } from 'antd';
import './Day.css';

const Day3 = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <div>
        <div className="beforeContainer">
            <div className="beforeSection">
              <span className="beforeTitle">
                Explore Melbourne</span>
            </div>
            <div id="dayDetail" style={{width:'70%'}}>
              Experience Australian Culture according to your preferences
            </div>
        </div>
        <form  id="challengeForm" onSubmit={handleSubmit}>
          <Progress id='processBar' percent={99.9} strokeWidth={40} showInfo={false} />
            <div id='processBarTitle'>
              <button style={{marginLeft:'10px'}} type="submit" id="processBarButton" onClick={previousPage}>Day 1</button>
              <button style={{marginLeft:'10px'}} type="submit" id="processBarButton" onClick={previousPage}>Day 2</button>
              <span>Day 3</span>
          </div>
          <div id='planItem'>
            <Field
              name="arts"
              id="arts"
              component="input"
              type="checkbox"
              style={{marginRight:'10px'}}
            /><label htmlFor="arts"><span>Arts</span></label>
          </div>

          <div id='planItem'>
          <Field
            name="history"
            id="history"
            component="input"
            type="checkbox"
              style={{marginRight:'10px'}}
          /><label htmlFor="history"><span>History</span></label>
          </div>

          <div id='planItem'>
              <Field
                name="attractions"
                id="attractions"
                component="input"
                type="checkbox"
                style={{marginRight:'10px'}}
              /><label htmlFor="sports"><span>Attractions</span></label>
            </div>
            <div id='planItem'>
                <Field
                  name="wildlife"
                  id="wildlife"
                  component="input"
                  type="checkbox"
                  style={{marginRight:'10px'}}
                /><label htmlFor="sports"><span>Wildlife</span></label>
            </div>

            <div>
              <button type="button" className="previous" id='previousDayButton'  onClick={previousPage}>
                Previous
              </button>
              <button type="submit" id='dayButton' disabled={pristine || submitting}>Submit</button>
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
})(Day3);
