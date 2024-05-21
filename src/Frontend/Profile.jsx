import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <h1>User Profile</h1>
            <div className="profile-image">
                <img src="https://example.com/profile.jpg" alt="John Doe" />
            </div>
            <div className="profile-info">
                <h2>John Doe</h2>
                <p>Age: 30</p>
                <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
};

export default Profile;
