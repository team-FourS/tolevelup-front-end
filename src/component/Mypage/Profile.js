import React, { useState } from 'react';
import '../../css/mypage/Profile.css';

const Profile = () => {
  const [profiles] = useState([
    {
      id: 1,
      name: 'exercise',
      image: require('../../img/Exercise-Lv01.png')
    },
    {
      id: 2,
      name: 'eat',
      image: require('../../img/Eat-Lv01.png')
    },
    {
      id: 3,
      name: 'culture',
      image: require('../../img/Culture-Lv01.png')
    },
    {
      id: 4,
      name: 'hobby',
      image: require('../../img/Hobby-Lv01.png')
    }
  ]);

  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  const handleProfileChange = (profiles) => {
    setSelectedProfile(profiles);
  };

 
  return (
    <div className="profile-change-container">
      <h1 className='Profile_name'>프로필 변경</h1>
      <div className="profile-list">
        {profiles.map((profiles) => (
          <div
            key={profiles.id}
            className={`profile-item ${selectedProfile.id === profiles.id ? 'selected' : ''}`}
            onClick={() => handleProfileChange(profiles)} >
            <img src={profiles.image} alt={profiles.name} />
            {/* <span>{profile.name}</span> */}
          </div>
        ))}
      </div>
    </div>
  )
};

export default Profile;