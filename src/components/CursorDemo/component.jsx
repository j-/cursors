import React from 'react';
import styles from './styles.less';

export default class CursorDemo extends React.Component {
	constructor () {
		super();
		this.state = { supported: null };
	}

	componentDidMount () {
		if (!this.el) {
			return;
		}
		this.el.style.cursor = this.props.type;
		const style = this.el.style.cursor;
		const supported = this.props.matches.indexOf(style) >= 0;
		this.setState({ supported });
	}

	render () {
		const className = this.state.supported ? styles.active : styles.inactive;
		return <div ref={ (el) => this.el = el } className={ className }>{ this.props.type }</div>
	}
}
