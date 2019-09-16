import React from 'react';
import face from '../face.jpg'
import './UserProfile.css';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='userprofile_wrapper'>
                <div className="container">
                    <span className="float-left">
                        <img src={face} className="rounded" width="150" />
                    </span>
                    <div className="card bg-light">
                        <p>User Details go here</p>
                    </div>
                </div>
                <div className="container">
                    <h6>Recent Answers</h6>
                    <div className="card bg-light row">
                        <div className="card-body">
                            <span className="float-left">
                                Votes
                            </span>
                            <p className='font-weight-bold'>Answer Title goes here...</p>                       
                            <p>Answer Text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;