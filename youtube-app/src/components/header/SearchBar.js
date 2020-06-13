import React, { Component } from 'react';

class SearchBar extends Component {

	render() {
		const { onChangeSearchInput, onClickHandleSubmit } = this.props;
		return (
			<div className="searchbar">
				<input type="text" name="search" id="search" placeholder="Search" onChange={(e) => onChangeSearchInput(e)} />
				<div className="search-btn">
					<button className="material-icons search-icon" onClick={() => onClickHandleSubmit()}>
						search
					</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;