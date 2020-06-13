import React, { Component } from 'react';
import youtubeLogo from './../../assets/youlogo.png'

class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <i className="material-icons">menu</i>
                <img className="youlogo" src={youtubeLogo} />
            </div>
        );
    }
}

export default Menu;