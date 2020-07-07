import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
const newDiv = document.createElement('div');

export function renderCSModal(element: ReactElement) {
	root.appendChild(newDiv);
	ReactDOM.render(
		element,
		newDiv
	);
}

export function removeCSModal() {
	root.removeChild(newDiv);
}

const CSModalApi = {
	renderCSModal,
	removeCSModal
};

export default CSModalApi;
