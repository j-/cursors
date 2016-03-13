import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';
import Navigation from '../Navigation/component';

export default class Index extends React.Component {
	render () {
		return (
			<div className="container">
				<PageHeader>Cursors</PageHeader>
				<Navigation />
				{ this.props.children }
			</div>
		);
	}
}
