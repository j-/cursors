import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Index from '../Index/component';
import CursorListPage from '../CursorListPage/component';
import CursorTestPage from '../CursorTestPage/component';

export default class Application extends React.Component {
	render () {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={ Index }>
					<IndexRoute component={ CursorListPage } />
					<Route path="/test" component={ CursorTestPage } />
				</Route>
			</Router>
		);
	}
}
