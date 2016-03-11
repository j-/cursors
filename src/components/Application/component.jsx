import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import CursorListPage from '../CursorListPage/component';

export default class Application extends React.Component {
	render () {
		return (
			<Router history={ browserHistory }>
				<Route path="/" component={ CursorListPage } />
			</Router>
		);
	}
}
