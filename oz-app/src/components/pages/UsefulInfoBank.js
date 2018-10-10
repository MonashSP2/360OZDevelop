import React from 'react';
import './UsefulInfo.css';
import UsefulllinksButtons from './Usefullinksbuttons';


const UsefulInfoBank =()=>{
    return (
      <div>
        <UsefulllinksButtons />
        <div id="infoContainer">
        <h3>
          International Student Banking
        </h3>
        <p>
          One of the most important things you'll need to organise when moving to Australia is opening up a transaction account which is your basic, everyday bank account and can be used to deposit funds (aka from your wages), pay your bills and manage your everyday expenses such as accommodation, textbooks, food and university parties.
          As an international student, you'll be happy to hear there are a number of banks in Australia that offer transaction accounts from which you can choose.
        </p>
        <p>
          Some of these banks include:
        </p>
          <ul id="infoLink">
          <li><a href="http://bit.ly/2NN48nU">Commonwealth Bank</a></li>
          <li><a href="http://bit.ly/2QylgMX">Westpac</a></li>
          <li><a href="http://bit.ly/2QvMN1n">ANZ</a></li>
          <li><a href="https://nab.co/2xcgU5R">NAB</a></li>
          </ul>
        </div>
      </div>
    )
}
export default UsefulInfoBank;
