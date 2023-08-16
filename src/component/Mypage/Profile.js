import React from 'react';
import '../../css/mypage/Profile.css';
// import Profile2 from './Profile2';
import EatLv04 from '../../img/Eat-Lv04.png';
import EatLv03 from '../../img/Eat-Lv03.png';
import EatLv02 from '../../img/Eat-Lv02.png';
import EatLv01 from '../../img/Eat-Lv01.png';
import ExerciseLv01 from '../../img/Exercise-Lv01.png';
import ExerciseLv02 from '../../img/Exercise-Lv02.png';
import ExerciseLv03 from '../../img/Exercise-Lv03.png';
import ExerciseLv04 from '../../img/Exercise-Lv04.png';
import CultureLv01 from '../../img/Culture-Lv01.png';
import CultureLv02 from '../../img/Culture-Lv02.png';
import CultureLv03 from '../../img/Culture-Lv03.png';
import CultureLv04 from '../../img/Culture-Lv04.png';

const Profile = () => {

    

//   const [profiles] = useState([
//     {
//       id: 1,
//       name: 'Exercise-Lv01',
//       image: require('../../img/Exercise-Lv01.png')
//     },
//     {
//       id: 2,
//       name: 'Exercise-Lv02',
//       image: require('../../img/Exercise-Lv02.png')
//     },
//     {
//       id: 3,
//       name: 'Exercise-Lv03',
//       image: require('../../img/Exercise-Lv03.png')
//     },
//     {
//       id: 4,
//       name: 'Exercise-Lv04',
//       image: require('../../img/Exercise-Lv04.png')
//     },
    
//     {
//     id: 5,
//     name: 'Eat-Lv01',
//     image: require('../../img/Eat-Lv02.png')
//   },
//   {
//     id: 6,
//     name: 'Eat-Lv02',
//     image: require('../../img/Eat-Lv03.png')
//   },
//   {
//     id: 7,
//     name: 'Eat-Lv03',
//     image: require('../../img/Eat-Lv04.png')
//   },
//   {
//     id: 8,
//     name: 'Eat-Lv04',
//     image: require('../../img/Eat-Lv04.png')
//   },  
//   {
//     name: '음',
//     text: '음'
//   },  
// ]);

  // const [selectedProfile, setSelectedProfile] = useState(profiles[0]);

  // const handleProfileChange = (profiles) => {
  //   setSelectedProfile(profiles);
  // };


 
  return (
    <div className="profile-change-container">
      <h5 className='Profile_name'>운동</h5>
      <div className="profile-list" >
        <div className='profile-item'>
          <img src={ExerciseLv01} alt='1' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={ExerciseLv02} alt='2' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={ExerciseLv03} alt='3' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={ExerciseLv04} alt='4' className='eat_size'/>
        </div>
      </div>
      <hr />
      <h5 className='Profile_name'>식습관</h5>
      <div className="profile-list" >
        <div className='profile-item'>
          <img src={EatLv01} alt='1' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={EatLv02} alt='2' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={EatLv03} alt='3' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={EatLv04} alt='4' className='eat_size'/>
        </div>
        </div>
        <hr />

        <h5 className='Profile_name'>문화생활</h5>
      <div className="profile-list" >
        <div className='profile-item'>
          <img src={CultureLv01} alt='1' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={CultureLv02} alt='2' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={CultureLv03} alt='3' className='eat_size'/>
        </div>

        <div className='profile-item'>
          <img src={CultureLv04} alt='4' className='eat_size'/>
        </div>
        </div>
        <hr />
        
      </div>
      //  <p src={profiles.text} alt='//' />
      //   {profiles.map((profiles) => (
      //     <div
      //       key={profiles.id}
      //       className={`profile-item ${selectedProfile.id === profiles.id ? 'selected' : ''}`}
      //       onClick={() => handleProfileChange(profiles)} >
              
      //       <img src={profiles.image} alt={profiles.name} />
      //       <span>{profiles.name}</span>
      //     </div>
      //   ))}


  )
};

export default Profile;