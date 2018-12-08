import React, { Component } from 'react';

function ActivitiesList(props) {
  const activitiesList = props.activities;
  const activitiesTags = activitiesList.map((activity) => {
    return <div key={activity} className="profile-activity-tag">{activity}</div>
  });
  console.log(activitiesTags);
  return (
    <div id="profile-favorite-activities-tags">{activitiesTags}</div>
  );
}

module.exports = ActivitiesList;