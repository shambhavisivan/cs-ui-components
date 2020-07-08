import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
const container = document.createElement('div');
container.classList.add('cs-modal-overlay');
let isContainerRendered = false;

export function renderCSModal(element: ReactElement) {
	if (!isContainerRendered) {
		root.appendChild(container);
		isContainerRendered = true;
	}
	const newDiv = document.createElement('div');
	container.appendChild(newDiv);
	ReactDOM.render(
		element,
		newDiv
	);
}

export function removeCSModal() {
	container.removeChild(container.lastChild);
	if (!container.hasChildNodes()) {
		root.removeChild(container);
		isContainerRendered = false;
	}
}

const CSModalApi = {
	renderCSModal,
	removeCSModal
};

export default CSModalApi;
