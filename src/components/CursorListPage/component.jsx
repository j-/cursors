import React from 'react';
import CursorDemo from '../CursorDemo/component';
import styles from './styles.less';
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
		return (
			<div>
				<p><strong>Red</strong>: Style failed to apply to element</p>
				<p><strong>Blue</strong>: Style successfully applied to element</p>
				<ul className={ styles.cursorList }>{ contents }</ul>
			</div>
		);
	}
}
