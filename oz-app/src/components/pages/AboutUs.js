import React from 'react';
import './UsefulInfo.css';
import UsefulllinksButtons from './Usefullinksbuttons';
import UsefulllinksBody from './Usefullinksbody';

const UsefulInfoPhone =()=>{
    return (
      <div>
        <div className="beforeContainer">
            <div className="beforeSectionWhite">
              <span className="beforeTitle">
                About US</span>
            </div>
        </div>
        <div id="infoContainer">
          <p>
            <span style={{fontWeight:'600',fontSize:'18px'}}>360OZ</span> is a web based application helping international students with a smooth transition to Melbourne by providing meaningful insights to help them decide accommodation along with an interactive 3-Day Plan which gets them ready for the university life and hence preventing the consequences of homesickness.
            With a 12% increase in international students and pouring $28B into the Australian economy in the year 2018, our team is faced with the challenge of helping provide support to these students to reduce mental and emotional stress that they go through while transitioning into a new country and cut down the impact of culture shock.
          </p>
          <hr />
          <h4>Our Team (SP)^2</h4>
          <hr />
          <p>Shobhit Talwar (Data Scientist)</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shobhittalwar/">https://www.linkedin.com/in/shobhittalwar</a>
          </p>
          <hr />

          <p>Pamela Mae Ymas (Business Analyst)</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/pamela-mae-ymas/">https://www.linkedin.com/in/pamela-mae-ymas</a>
          </p>
          <hr />

          <p>Ping Song(UX/UI, Developer)</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkdin.com/in/ping-song-pson0001/">https://www.linkdin.com/in/ping-song-pson0001</a>
          </p>
          <hr />

          <p>ShuHan Chen (Developer)</p>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shuhan-chen-0915/">https://www.linkedin.com/in/shuhan-chen-0915</a>
          </p>
          <hr />


        </div>
      </div>
    )
}
export default UsefulInfoPhone;
