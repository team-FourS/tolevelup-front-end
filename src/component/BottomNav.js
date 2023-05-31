import React from "react";
import "./BottomNav.css";
import { Link } from "react-router-dom";
// 사용할 아이콘 import
import "./FontAwesome";
// FontAwesomIcon 컴포넌트를 사용하기 위해 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BottomNav = () => {
  return (
    <nav className="wrapper">
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon="home" /> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
        <Link to="/feed" className="nav-link">
          <FontAwesomeIcon icon="compass" />
        </Link>
      </div>
      <div>
        <Link to="/rank" className="nav-link">
          <FontAwesomeIcon icon="plus" />
        </Link>
      </div>
      <div>
        <Link to="/char" className="nav-link">
          <FontAwesomeIcon icon="medal" />
        </Link>
      </div>
      <div>
        <Link to="/mypage" className="nav-link">
          <FontAwesomeIcon icon="user" />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;