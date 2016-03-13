import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';

export default class Index extends React.Component {
	render () {
		return (
			<div className="container">
				<PageHeader>Cursors</PageHeader>
				<Link to="/">List cursors</Link><br />
				<Link to="/test">Test cursors</Link>
				{ this.props.children }
			</div>
		);
	}
}
