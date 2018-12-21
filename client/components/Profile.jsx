import React, { Component } from 'react';
import ActivitiesList from './ActivitiesList.jsx';
import Pro from './Pro.jsx';

// MODEL https://www.alltrails.com/members/rpeh

export default class Profile extends Component {
    constructor() {
        super();

        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            full_name: '',
            email: '',
            location: '',
            date_joined: '',
            favorite_activities: [],
            bio: '',
            photo_url: '',
            pro: false
            // Could still add Reputation and followers
        };

        this.convertDate = this.convertDate.bind(this);
    }

    convertDate() {
        const monthNames = ["January", "February", "March",
            "April", "May", "June", "July", "August", "September",
            "October", "November", "December"];
        let date = new Date(this.state.date_joined + 'Z');

        return monthNames[date.getMonth() - 1] + ' ' + date.getFullYear().toString();
    }

    componentDidMount() {
        const determineId = () => {
            if (window.location.pathname.length > 1) {
                return window.location.pathname.substring(1);
            }
            else {
                return '1';
            }
        }
        const url = () => {
            if (window.location.origin === 'http://localhost:3002/') {
                console.log(window.location);
                return 'http://localhost:3002/user/' + determineId();
            } else {
                return 'http://profile-service.be6c6ztrma.us-west-2.elasticbeanstalk.com/user/' + determineId();
            }
        };

        fetch('http://profile-service.be6c6ztrma.us-west-2.elasticbeanstalk.com/user/' + determineId())
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setState({
                    id: res.id,
                    first_name: res.data.attributes.first_name,
                    last_name: res.data.attributes.last_name,
                    full_name: res.data.attributes.first_name + res.data.attributes.last_name,
                    email: res.data.attributes.email,
                    location: res.data.attributes.location,
                    date_joined: res.data.attributes.date_joined,
                    favorite_activities: res.data.attributes.favorite_activities,
                    bio: res.data.attributes.bio,
                    photo_url: res.data.attributes.photo_url,
                    pro: res.data.attributes.pro
                })
            });
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
                                <img id="profile-image" src={this.state.photo_url} alt={this.state.full_name} />
                            </div>
                            <strong>Member Since</strong>
                            <span>{this.convertDate()}</span>
                            {/* <button>Follow</button> Followers not implemented yet */}
                        </div>
                        <div id="profile-right-content">
                            <h2 id="profile-user-name">{this.state.full_name}</h2>
                            <Pro isPro={this.state.pro} />
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
