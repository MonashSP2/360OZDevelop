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
            <div id="dayDetail">

          </div>
        </div>
        <div id="infoContainer">
          <h3>Devloped by Team  (SP)^2</h3>
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
