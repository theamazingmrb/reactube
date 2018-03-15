import React, {Component} from 'react';
import {searchBar} from '../css/search_bar.css'


class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

	}


	render() {
		return (
			<div className={searchBar}>
				<input
				 value={this.state.term}
				 onChange={event => this.onChange(event.target.value)}/> 
			</div>	
			);
	}

	onChange(term){
		this.setState({term})
		this.props.onUpdate(term);
	}
	
}

export default SearchBar;