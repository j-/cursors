import React from 'react';
import { Link } from 'react-router';

export default class Index extends React.Component {
	render () {
		return (
			<div className="container">
				<Link to="/">List cursors</Link><br />
				<Link to="/test">Test cursors</Link>
				{ this.props.children }
			</div>
		);
	}
}
