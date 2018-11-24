import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// MODEL https://www.alltrails.com/members/rpeh

export default class App extends Component {
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
        photo_url: 'http://lorempixel.com/640/480/',
        pro: true
    };

    this.convertDate = this.convertDate.bind(this);
  }

    convertDate() {
        let date = new Date(this.state.date_joined +'Z');
        return date.getMonth() + date.getFullYear();
    }

    render() {
        return (
        <div id="profile-container">
            <div id="profile-topbar">
                <h3>Profile</h3>
            </div>
            <div id="profile-main">
                <div id="profile-info">
                    <div id="profile-image-container">
                        <img src={this.state.photo_url} alt={this.state.full_name}/>
                        <strong>Member Since</strong>
                        <span>{this.convertDate()}</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
