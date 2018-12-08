import React, { Component } from 'react';
import ActivitiesList from './ActivitiesList.jsx';
import Pro from './Pro.jsx';

// MODEL https://www.alltrails.com/members/rpeh

export default class Profile extends Component {
    constructor() {
    super();

    this.state = {
        id: 22,
        first_name: 'Joel',
        last_name: 'Vandervort',
        full_name: 'Joel Vandervort',
        email: 'tbecker@example.net',
        location: 'Fletachester, VA',
        date_joined: '1979-02-20',
        favorite_activities: ['Hiking', 'Hunting', 'Fishing'],
        bio: 'Aut sequi dolore temporibus quia qui consequatur. Possimus non fugiat perspiciatis voluptas. Enim aut quia minus ipsam. Dolore corrupti et tenetur sit.',
        photo_url: 'http://lorempixel.com/100/100/',
        pro: false
        // Could still add Reputation and followers
    };

    this.convertDate = this.convertDate.bind(this);
  }

    convertDate() {
        const monthNames = ["January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];
        let date = new Date(this.state.date_joined +'Z');

        return monthNames[date.getMonth() - 1] + ' ' + date.getFullYear().toString();
    }

    render() {
        return (
        <div id="profile-container">
            {/* Possibly Add navigation topbar for other profile components */}
            <div id="profile-subbar">
                <h3>Profile</h3>
            </div>
            <div id="profile-main">
                <div id="profile-info">
                    <div id="profile-left-content">
                        <div id="profile-image-container">
                            <img id="profile-image" src={this.state.photo_url} alt={this.state.full_name}/>
                        </div>
                        <strong>Member Since</strong>
                        <span>{this.convertDate()}</span>
                        {/* <button>Follow</button> Followers not implemented yet */}
                    </div>
                    <div id="profile-right-content">
                        <h2 id="profile-user-name">{this.state.full_name}</h2>
                        <Pro isPro={this.state.pro}/>
                        <h4 id="profile-user-location">{this.state.location}</h4>
                        <p id="profile-user-bio">{this.state.bio}</p>
                        <h4 id="profile-favorite-activities-title">Favorite Activities</h4>
                        <ActivitiesList activities={this.state.favorite_activities} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
