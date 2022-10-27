import React from "react";
import './Navigation.css'
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({onRouteChange, isSignedIn, toggleModal}) => {
    if (isSignedIn) {
        return (
            <nav>
                <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal}/>
            </nav> 
        )
    } else {
        return (
            <nav>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signin')}>Sign In</p>
                <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('register')}>Register</p>
            </nav> 
        )
    }
}

export default Navigation;