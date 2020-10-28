import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from './PreviewHeading';
import PreviewProperties from './PreviewProperties';

class CSGettingStarted extends React.Component {
	getDoc() {

		const json = {
			name: 'Getting Started',
			usage: 'Important information for setting up an app',
			examples: [
				{
					propName: '.cs-app-wrapper',
					customText: 'All apps that use the cs-ui-components library need to be wrapped in the class ".cs-app-wrapper" as shown here. This is in order to provide default styles for which to start from.',
					variations: [
						{
							string: '',
							component:
								<div id="root">
									<div className="cs-app-wrapper">
										Hello world
									</div>
								</div>
						}
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
		const component = this.getDoc();

		return (
			<div className="preview-section-wrapper">
				<PreviewHeading name={component.name} usage={component.usage} accessible="hide" />
				<PreviewProperties name={component.name} examples={component.examples}/>
			</div>
		);
	}
}

export default CSGettingStarted;
