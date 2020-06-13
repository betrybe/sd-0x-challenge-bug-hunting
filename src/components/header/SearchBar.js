import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends Component {

	render() {
		const { onChangeSearchInput, onClickHandleSubmit } = this.props;
		return (
			<div className="searchbar">
				<input type="text" name="search" id="search" placeholder="Search" onChange={(e) => onChangeSearchInput(e)} />
				<div className="search-btn">
					<Link
						className="material-icons search-icon"
						to="/results"
						onClick={() => onClickHandleSubmit()}
					>
						search
					</Link>

				</div>
			</div>
		);
	}
}

export default SearchBar;