export const createDocumentListenersMock = () => {
	const listeners: any = {};
	const handler = (domEl: any, event: string) => listeners?.[event]?.({ target: domEl });

	document.addEventListener = jest.fn((event, cb) => {
		listeners[event] = cb;
	});

	document.removeEventListener = jest.fn(event => {
		delete listeners[event];
	});

	return {
		click: (domEl: any) => handler(domEl, 'click')
	};
};
