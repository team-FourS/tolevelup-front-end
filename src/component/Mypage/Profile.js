import React, { useState } from 'react';
import '../../css/mypage/Profile.css';

import ExerciseLv01 from '../../img/Exercise-Lv01.png';
import ExerciseLv02 from '../../img/Exercise-Lv02.png';
import ExerciseLv03 from '../../img/Exercise-Lv03.png';
import ExerciseLv04 from '../../img/Exercise-Lv04.png';
import EatLv01 from '../../img/Eat-Lv01.png';
import EatLv02 from '../../img/Eat-Lv02.png';
import EatLv03 from '../../img/Eat-Lv03.png';
import EatLv04 from '../../img/Eat-Lv04.png';
import CultureLv01 from '../../img/Culture-Lv01.png';
import CultureLv02 from '../../img/Culture-Lv02.png';
import CultureLv03 from '../../img/Culture-Lv03.png';
import CultureLv04 from '../../img/Culture-Lv04.png';
import HobbyLv01 from '../../img/Hobby-Lv01.png';
import HobbyLv02 from '../../img/Hobby-Lv02.png';
import HobbyLv03 from '../../img/Hobby-Lv03.png';
import HobbyLv04 from '../../img/Hobby-Lv04.png';

const Profile = ({ onSelectImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageName) => {
    if (selectedImage === imageName) {
      setSelectedImage(null); // 이미 선택된 이미지를 다시 클릭하면 선택 해제
    } else {
      setSelectedImage(imageName);
    }
  };

  const renderCheckOverlay = (imageName) => {
    if (selectedImage === imageName) {
      return <div className="check-overlay">&#9989;</div>
    }
    return null;
  };

  return (
    <div className="profile-change-container">
      <h5 className='Profile_name'>운동</h5>
      <div className="profile-list">
        {/* 이미지 클릭 시 처리 */}
        <div
          className={`profile-item ${selectedImage === 'ExerciseLv01' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('ExerciseLv01');
          onSelectImage(ExerciseLv01);}}
        >
          <img src={ExerciseLv01} alt='1' className='eat_size' />
          {renderCheckOverlay('ExerciseLv01')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'ExerciseLv02' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('ExerciseLv02')
          onSelectImage(ExerciseLv02);}}
        >
          <img src={ExerciseLv02} alt='2' className='eat_size' />
          {renderCheckOverlay('ExerciseLv02')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'ExerciseLv03' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('ExerciseLv03')
          onSelectImage(ExerciseLv03);}}
        >
          <img src={ExerciseLv03} alt='3' className='eat_size' />
          {renderCheckOverlay('ExerciseLv03')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'ExerciseLv04' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('ExerciseLv04')
          onSelectImage(ExerciseLv04);}}
        >
          <img src={ExerciseLv04} alt='1' className='eat_size' />
          {renderCheckOverlay('ExerciseLv04')}
        </div>
      </div>
      <hr />


      <h5 className='Profile_name'>식습관 </h5>
      <div className="profile-list">
        <div
          className={`profile-item ${selectedImage === 'EatLv01' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('EatLv01');
          onSelectImage(EatLv01);}}
        >
          <img src={EatLv01} alt='1' className='eat_size' />
          {renderCheckOverlay('EatLv01')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'EatLv02' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('EatLv02')
          onSelectImage(EatLv02);}}
        >
          <img src={EatLv02} alt='2' className='eat_size' />
          {renderCheckOverlay('EatLv02')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'EatLv03' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('EatLv03')
          onSelectImage(EatLv03);}}
        >
          <img src={EatLv03} alt='3' className='eat_size' />
          {renderCheckOverlay('EatLv03')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'EatLv04' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('EatLv04')
          onSelectImage(EatLv04);}}
        >
          <img src={EatLv04} alt='1' className='eat_size' />
          {renderCheckOverlay('EatLv04')}
        </div>
      </div>
      <hr />


      <h5 className='Profile_name'>문화생활</h5>
      <div className="profile-list">
        <div
          className={`profile-item ${selectedImage === 'CultureLv01' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('CultureLv01');
          onSelectImage(CultureLv01);}}
        >
          <img src={CultureLv01} alt='1' className='eat_size' />
          {renderCheckOverlay('CultureLv01')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'CultureLv02' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('CultureLv02')
          onSelectImage(CultureLv02);}}
        >
          <img src={CultureLv02} alt='2' className='eat_size' />
          {renderCheckOverlay('CultureLv02')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'CultureLv03' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('CultureLv03')
          onSelectImage(CultureLv03);}}
        >
          <img src={CultureLv03} alt='3' className='eat_size' />
          {renderCheckOverlay('CultureLv03')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'CultureLv04' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('CultureLv04')
          onSelectImage(CultureLv04);}}
        >
          <img src={CultureLv04} alt='1' className='eat_size' />
          {renderCheckOverlay('CultureLv04')}
        </div>
      </div>
      <hr />


      <h5 className='Profile_name'>취미</h5>
      <div className="profile-list">
        <div
          className={`profile-item ${selectedImage === 'HobbyLv01' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('HobbyLv01');
          onSelectImage(HobbyLv01);}}
        >
          <img src={HobbyLv01} alt='1' className='eat_size' />
          {renderCheckOverlay('HobbyLv01')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'HobbyLv02' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('HobbyLv02')
          onSelectImage(HobbyLv02);}}
        >
          <img src={HobbyLv02} alt='2' className='eat_size' />
          {renderCheckOverlay('HobbyLv02')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'HobbyLv03' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('HobbyLv03')
          onSelectImage(HobbyLv03);}}
        >
          <img src={HobbyLv03} alt='3' className='eat_size' />
          {renderCheckOverlay('HobbyLv03')}
        </div>
        <div
          className={`profile-item ${selectedImage === 'HobbyLv04' ? 'selected' : ''}`}
          onClick={() => {handleImageClick('HobbyLv04')
          onSelectImage(HobbyLv04);}}
        >
          <img src={HobbyLv04} alt='1' className='eat_size' />
          {renderCheckOverlay('HobbyLv04')}
        </div>
      </div>
    </div>
  );
};

export default Profile;