import React from 'react';
import '../../styles/UserProfileButton.sass';
import { Link } from 'react-router-dom';

const UserProfileButton = ({ username, profilePhoto }) => {
  const defaultPhoto = profilePhoto || '../../assets/images/User.png';

  return (
    <Link to="/settings" className="user-profile-link">
      <div className="user-profile">
        <img src={defaultPhoto} alt="Profile" className="profile-photo"/>
        <div>
          <span>{username}</span>
          <small>View profile</small>
        </div>
      </div>
    </Link>
  );
};

export default UserProfileButton;
