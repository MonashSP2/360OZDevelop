import React from 'react';
import './UsefulInfo.css';
import UsefulllinksButtons from './Usefullinksbuttons';

const UsefulInfoPhone =()=>{
    return (
      <div>
        <UsefulllinksButtons />

        <div id="infoContainer">
        <h3>
          Public Transportation
        </h3>
          <ul id="infoLink">
          <li><a href="https://www.ptv.vic.gov.au/tickets/myki">PTV</a>- Public Transport Victoria (PTV) is a statutory authority that manages Victoria’s train, tram and bus services. It provides a single contact point for you to gain information on public transport services, fares, tickets and initiatives. To access public transport, a myki card is required. The myki card is a re-usable, credit card-sized, contactless smartcard that stores value which can be used as payment for public transport fares.</li>
          <li><a href="https://www.monash.edu/connect/travel/concessions#tabs__541549">Public transport concessions</a>- As a Monash University student, you may be eligible to apply for a card that entitles you to cheaper public transport fares. There are different concessions for domestic and international students.</li>
          </ul>
        </div>
      </div>
    )
}
export default UsefulInfoPhone;
