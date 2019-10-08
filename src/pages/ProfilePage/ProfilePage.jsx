import React from 'react';
import styles from './ProfilePage.module.css';



const ProfilePage = (props) => {

  const logout = () => {
    localStorage.removeItem('auth-token')
    props.setUser({userId: null})
    props.history.push('/')
  }

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.headArea}>
        <div className={styles.logoutBtn} onClick={logout}>
          Logout
        </div>
        <div>
          <span className={styles.name}>Ana J.</span>
          <span className={styles.userName}>@toilet_thoughts</span>
        </div>
        <div className={styles.circle}>
          <div className={styles.profilePictureContainer}>
            <img src="toilet-paper.png" alt="profile pic"/>
          </div>
        </div>
      </div>
      <div className={styles.bodyArea}>
        <div className={styles.titleRow}>
          <span className={styles.title}>Queen of the throne</span>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;
