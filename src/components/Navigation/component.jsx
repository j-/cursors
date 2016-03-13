import React from 'react';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
	render () {
		return (
			<Nav bsStyle="tabs">
				<IndexLinkContainer to="/">
					<NavItem>List cursors</NavItem>
				</IndexLinkContainer>
				<LinkContainer to="/test">
					<NavItem>Test cursors</NavItem>
				</LinkContainer>
			</Nav>
		);
	}
}
