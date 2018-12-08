import React, { Component } from 'react';

function Pro(props) {
  if(props.isPro) {
    return <div id="profile-pro-tag">PRO</div>
  } else {
    return <div id="not-pro"></div>
  }
}

module.exports = Pro;