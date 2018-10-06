import React from 'react';
import './UsefulInfo.css';
import UsefulllinksButtons from './Usefullinksbuttons';

const UsefulInfoPhone =()=>{
    return (
      <div>
        <UsefulllinksButtons />

        <div id="infoContainer">
        <h3>
          Overseas Student Health Cover
        </h3>
        <p>
          More than a requirement from the Australian Government to meet visa conditions, OSHC helps international students maintain adequate health insurance to cover costs for medical treatments when the need arises.</p>
        <p>For more information, visit the <a href="http://www.health.gov.au/internet/main/publishing.nsf/content/overseas+student+health+cover+faq-1">FAQ</a> page of Australia’s Department of Health website.</p>
        <ul id="infoLink">
          <li>For comparison of all Overseas Student Health Cover providers in one place, visit
<a href="http://www.oshcaustralia.com.au">www.oshcaustralia.com.au</a>.</li>
            </ul>
        </div>
      </div>
    )
}
export default UsefulInfoPhone;
