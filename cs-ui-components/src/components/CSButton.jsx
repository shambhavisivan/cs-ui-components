import React from 'react';
import jsxToString from 'jsx-to-string';
import CSIcon from "./CSIcon";

class CSButton extends React.Component {
	render() {

		return (
			<button className="cs-btn">
				<CSIcon name={this.props.icon}/>
				<span className="label">Button label</span>
			</button>
		);
	}

	static getDoc() {

		let json = {
			name: "Button",
			examples: [
				{
					propName: "Style",
					variations: [
						{
							variationName: ["Style Brand"],
							component:
								<CSButton icon="add" label="dfdsfs">
									<p>Test</p>
								</CSButton>
						},
						{
							variationName: ["Style Brand", "Icon Left"],
							component: <CSButton icon="switch"/>
						}
					]
				},
				{
					propName: "Test",
					variations: [
						{
							variationName: ["Style neutral"],
							component: <CSButton icon="wifi" label="Do Something" onClick="alert(test)"/>
						}
					]
				}
			],
			properties: {
				icon: {
					description: "Icon name"
				},
				label: {
					description: "Button label to display"
				},
				size: {
					description: "Button size",
					options: [
						"normal",
						"small",
						"large"
					]
				},
				link: {
					description: "Link path"
				},
				iconPosition: {
					description: "Icon position",
					options: [
						"left",
						"right"
					]
				},
				width: {
					description: "Button width",
					options: [
						"auto",
						"max"
					]
				},
				style: {
					description: "Button style",
					options: [
						"neutral",
						"brand",
						"outline",
						"transparent",
						"error",
						"success"
					]
				},
				disabled: {
					description: "Logic for disabled state",
					options: [
						"false",
						"true"
					]
				}
			}
		};

		for (let i = 0; i < json.examples.length; i++) {
			for (let j = 0; j < json.examples[i].variations.length; j++) {
				json.examples[i].variations[j].string = jsxToString(json.examples[i].variations[j].component);
			}
		}

		return json;
	}
}

export default CSButton;