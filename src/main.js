import './styles/main.less';

import CURSORS from './data/cursors';

document.addEventListener('DOMContentLoaded', () => {
	const cursors = document.getElementById('cursors');
	while (cursors.firstChild) {
		cursors.removeChild(cursors.firstChild);
	}

	const list = document.createDocumentFragment();

	CURSORS
		.forEach(function (cursor) {
			const type = cursor.type;
			const matches = cursor.matches;
			const item = document.createElement('li');
			item.classList.add('cursor-demo');
			item.dataset.cursor = type;
			item.style.cursor = type;
			item.textContent = type;
			list.appendChild(item);

			const style = item.style.cursor;
			const isContained = matches.indexOf(style) >= 0;
			item.classList.add(isContained ? 'style-applied' : 'style-failed');
		});

	cursors.appendChild(list);
});
