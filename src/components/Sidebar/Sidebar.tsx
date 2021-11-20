import React from 'react';
import './Sidebar.css';
import Avatar from '@material-ui/core/Avatar';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5116AQErzDa0roV1pw/profile-displaybackgroundimage-shrink_200_800/0/1516999213444?e=1642636800&v=beta&t=kXA8KoptMklv02phKzwzVcioyQVmVaN1DJTtUgvnSQw"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sakil Khan</h2>
        <h4>Software Engineer at PAP International LTD.</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">200</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">200</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
