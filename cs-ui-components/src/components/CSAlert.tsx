import React from 'react';
import jsxToString from 'jsx-to-string';
import CSIcon from './CSIcon';

export interface CSAlertProps {
	title?: string;
	variant?: string;
	textAlign?: string;
	iconName?: string;
	closeButton?: boolean;
	onClose?: undefined;
}

class CSAlert extends React.Component<CSAlertProps> {

	static getDoc() {

		const json = {
			name: 'Alert',
			usage: 'Alert banners communicate a state that affects the entire system, not just a feature or page. They persist over a session and appear without the user initiating an action.',
			examples: [
				{
					propName: 'variant',
					variations: [
						{
							variationName: ['info'],
							string: '',
							component:
								<CSAlert
									variant="info"
									closeButton
									title="This is an example info alert"
								/>
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSAlert
									variant="warning"
									closeButton
									title="This is an example warning alert"
								/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSAlert
									variant="error"
									closeButton
									title="This is an example error alert"
								/>
						},
						{
							variationName: ['offline'],
							string: '',
							component:
								<CSAlert
									variant="offline"
									closeButton
									title="This is an example offline alert"
								/>
						}
					]
				},
				{
					propName: 'textAlign',
					variations: [
						{
							variationName: ['left'],
							string: '',
							component:
								<CSAlert
									variant="info"
									textAlign="left"
									closeButton
									title="This is an example toast with text aligned left"
								/>
						},
						{
							variationName: ['center'],
							string: '',
							component:
								<CSAlert
									variant="info"
									textAlign="center"
									closeButton
									title="This is an example toast with text aligned center"
								/>
						}
					]
				},
				{
					propName: 'iconName',
					customText: 'This is how it looks when used on other variants that aren\'t custom.',
					variations: [
						{
							variationName: ['info'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconName="info"
									closeButton
									title="This is an example alert with iconName prop info"
								/>
						},
						{
							variationName: ['warning'],
							string: '',
							component:
								<CSAlert
									variant="warning"
									iconName="warning"
									closeButton
									title="This is an example alert with iconName prop warning"
								/>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSAlert
									variant="error"
									iconName="error"
									closeButton
									title="This is an example alert with iconName prop error"
								/>
						},
						{
							variationName: ['offline'],
							string: '',
							component:
								<CSAlert
									variant="offline"
									iconName="offline"
									closeButton
									title="This is an example alert with iconName prop offline"
								/>
						}
					]
				},
				{
					propName: 'closeButton',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconName="info"
									closeButton
									title="This is an example alert with a close button"
								/>
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconName="info"
									closeButton={false}
									title="This is an example alert without a close button"
								/>
						}
					]
				},
				{
					propName: 'custom',
					customText: 'Want to add custom styling or features? Anything besides plain text isn\'t supported using props so you can use children instead. Just write the code inside the component tags as shown below. If you need to add a link there is already a .cs-alert-link class to make it easy. Inspect the example below for a better look.',
					variations: [
						{
							variationName: ['Add a custom link'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconName="info"
								>
									<span>This is a custom line of code which includes a <a href="./CSAlert" className="cs-alert-link">link</a></span>
								</CSAlert>
						},
						{
							variationName: ['Bold and italic text'],
							string: '',
							component:
								<CSAlert
									variant="info"
									iconName="info"
								>
									<span>This is a custom line of code which includes <b>bold</b> and <i>italic</i> text</span>
								</CSAlert>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'variant',
					description: 'Color variant of alert',
					options: [
						'info',
						'warning',
						'error',
						'offline'
					]
				},
				{
					propertyName: 'textAlign',
					description: 'Alignment of the text inside the alert',
					options: [
						'centre',
						'left'
					]
				},
				{
					propertyName: 'iconName',
					description: 'Name of icon from icons library',
					options: [
					]
				},
				{
					propertyName: 'title',
					description: 'Text content of alert',
					options: [
					]
				},
				{
					propertyName: 'closeButton',
					description: 'Show Close button',
					options: [
					]
				},
				{
					propertyName: 'onClose',
					description: 'Close Alert',
					options: [
					]
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}
	render() {
		return (
			<div className={`cs-alert ${this.props.variant} ${this.props.textAlign}`} role="alert">
				<h4 className="cs-alert-text">
					{this.props.iconName ? (
						<CSIcon name={this.props.iconName}/>
					) : null }
					{this.props.title}
					{this.props.children}
				</h4>
				{this.props.closeButton ? (
					<button className="cs-alert-close" onClick={this.props.onClose} aria-label="close">
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 52 52">
							<path d="m31 25.4l13-13.1c0.6-0.6 0.6-1.5 0-2.1l-2-2.1c-0.6-0.6-1.5-0.6-2.1 0l-13.1 13.1c-0.4 0.4-1 0.4-1.4 0l-13.1-13.2c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l13.1 13.1c0.4 0.4 0.4 1 0 1.4l-13.2 13.2c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.1-13.1c0.4-0.4 1-0.4 1.4 0l13.1 13.1c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-13-13.1c-0.4-0.4-0.4-1 0-1.4z"/>
						</svg>
					</button>
				) : null}
			</div>
		);
	}
}

export default CSAlert;
