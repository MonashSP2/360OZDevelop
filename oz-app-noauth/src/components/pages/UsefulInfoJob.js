import React from 'react';
import './UsefulInfo.css';
import UsefulllinksButtons from './Usefullinksbuttons';

const UsefulInfoPhone =()=>{
    return (
      <div>
        <UsefulllinksButtons />

        <div id="infoContainer">
        <h3>
          Jobs
        </h3>
        <p>
            If you need to find jobs while you’re studying, there a large number of job search and career development resources in Australia. You can look for jobs across different industries of your preference in which you can apply for online.</p>
          <p>Below are some of the top job and career sites you can visit:</p>
          <ul id="infoLink">
          <li><a href="https://www.seek.com.au/">Seek</a></li>
          <li><a href="https://au.linkedin.com/">LinkedIn</a></li>
          <li><a href="https://au.indeed.com/">Indeed</a></li>
          <li><a href="https://www.careerone.com.au/">CareerOne</a></li>
          <li><a href="https://au.jora.com/">Jora</a></li>

        </ul>
        </div>
      </div>
    )
}
export default UsefulInfoPhone;
