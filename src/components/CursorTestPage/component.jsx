import React from 'react';
import styles from './styles.less';

export default class CursorTestPage extends React.Component {
	constructor (props) {
		super(props);
		this.state =  { cursors: [] };
		this.handleDragover = this.handleDragover.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
	}

	componentDidMount () {
		window.addEventListener('dragover', this.handleDragover);
		window.addEventListener('drop', this.handleDrop);
	}

	componentWillUnmount() {
	    window.removeEventListener('dragover', this.handleDragover);
		window.addEventListener('drop', this.handleDrop);
	}

	handleDragover (e) {
		e.preventDefault();
	}

	handleDrop (e) {
		e.preventDefault();
		const files = [...e.dataTransfer.files];
		for (let file of files) {
			this.handleFileDrop(file);
		}
	}

	handleFileDrop (file) {
		console.log(file);
		const reader = new FileReader();
		reader.addEventListener('load', (e) => {
			this.state.cursors.push({
				cursor: e.target.result,
				name: file.name,
			});
			this.setState(this.state);
		});
		reader.readAsDataURL(file);
	}

	getCursorPreviews () {
		const cursors = this.state.cursors;
		return cursors.map(({ cursor, name }, i) => {
			const style = {
				cursor: `url("${cursor}"), auto`,
			};
			return <div className={ styles.cursorPreview } key={ i } style={ style }>{ name }</div>;
		});
	}

	render () {
		return (
			<div>
				<div>Drop a <code>.cur</code> or <code>.png</code> file onto this page to test it.</div>
				<div className="cursorlist">
					{ this.getCursorPreviews() }
				</div>
			</div>
		);
	}
}
