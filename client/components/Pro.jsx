import React, { Component } from 'react';
import styles from '../css/style.css';

function Pro(props) {
  if(props.isPro) {
    return <div id="profile-pro-tag">PRO</div>
  } else {
    return <div className={styles.none}></div>
  }
}

module.exports = Pro;