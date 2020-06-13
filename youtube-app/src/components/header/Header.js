import React, { Component } from 'react';
import Menu from './Menu';
import SearchBar from './SearchBar';
import ProfileFeatures from './ProfileFeatures';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { handleSearchInput, handleSubmit } = this.props;

        return (
            <nav className="nav">
                <Menu />
                <SearchBar
                    onChangeSearchInput={handleSearchInput}
                    onClickHandleSubmit={handleSubmit}
                />
                <ProfileFeatures />
            </nav>
        );
    }
}

export default Header;