import React, { useState } from 'react';
import '../../css/mypage/Profile.css';

const Profile = () => {
  const [profiles] = useState([
    {
      id: 5,
      name: 'Eat-Lv01',
      image: require('../../img/Eat-Lv02.png')
    },
    {
      id: 6,
      name: 'Eat-Lv02',
      image: require('../../img/Eat-Lv03.png')
    },
    {
      id: 7,
      name: 'Eat-Lv03',
      image: require('../../img/Eat-Lv04.png')
    },
    {
      id: 8,
      name: 'Eat-Lv04',
      image: require('../../img/Eat-Lv04.png')
    },
    
  ]);

  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const handleProfileChange = (profiles) => {
    setSelectedProfile(profiles);
  };


 
  return (
    <div className="profile-change-container">
      <h5 className='Profile_name'>식습관</h5>
      <div className="profile-list">
        {profiles.map((profiles) => (
          <div
            key={profiles.id}
            className={`profile-item ${selectedProfile.id === profiles.id ? 'selected' : ''}`}
            onClick={() => handleProfileChange(profiles)} >
            <img src={profiles.image} alt={profiles.name} /><br/>
            <span>{profiles.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Profile;