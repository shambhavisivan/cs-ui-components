import React from 'react';

export interface CSModalFooterProps {
	align?: string;
}

class CSModalFooter extends React.Component<CSModalFooterProps> {

	static getDoc() {
		const json = {
			name: 'ModalFooter',
			properties: [
				{
					propertyName: 'align',
					description: 'Alignment of buttons',
					options: [
						'center',
						'flex-start',
						'flex-end'
					]
				}
			]
		};

		return json;
	}

	render() {
		return (
			<footer className={`modal-footer modal-footer-${this.props.align}`}>
				{this.props.children}
			</footer>
		);
	}
}

export default CSModalFooter;
