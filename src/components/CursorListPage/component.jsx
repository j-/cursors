import React from 'react';
import CursorDemo from '../CursorDemo/component';

import CURSORS from '../../data/cursors';

export default class CursorListPage extends React.Component {
	render () {
		const contents = CURSORS.map(({ type, matches, category, vendor }) => {
			return <CursorDemo
				key={ type }
				type={ type }
				matches={ matches }
				category={ category }
				vendor={ vendor }
			/>;
		});
		return <div>{ contents }</div>;
	}
}
