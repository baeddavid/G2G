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
        <div>
          <span className={styles.name}>Ana J.</span>
          <span className={styles.userName}>@toilet_thoughts</span>
        </div>
        <div className={styles.circle}>
          <img src="#" alt="profile pic"/>
        </div>
        <div className={styles.badge}>
          <img src="#" alt="crown"/>
        </div>
      </div>
      <div className={styles.bodyArea}>
        <div className={styles.titleRow}>
          <span className={styles.title}>Queen of the throne</span>
        </div>
      </div>
      <div onClick={logout}>
        Logout
      </div>
    </div>
  )
}

export default ProfilePage;
