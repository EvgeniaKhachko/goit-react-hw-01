import React from "react";
import s from "./Profile.module.css";

const Profile = (userData) => {
  return (
    <div className={s.profileColumn}>
      <div className={s.profileAll}>
        <img className={s.avatar} src={userData.image} alt={userData.name} />
        <p className={s.username}>{userData.name}</p>
        <p className={s.tag}>@{userData.tag}</p>
        <p className={s.location}>{userData.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span className={s.follow_view_like}>{userData.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.follow_view_like}>{userData.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>

          <span className={s.follow_view_like}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
