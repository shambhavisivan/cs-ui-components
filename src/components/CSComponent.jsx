import React from 'react'

class CSComponent extends React.Component {

	static getDoc(component) {
		return {
			examples: [
				<CSButton/>,
				<CSButton label="dsdfsd"/>
			],
			"name": "Button",
			"properties": {
				"icon": {
					"description": "Icon name"
				},
				"label": {
					"description": "Button label to display"
				},
				"size": {
					"description": "Button size",
					"options": [
						"normal",
						"small",
						"large"
					]
				},
				"link": {
					"description": "Link path"
				},
				"icon-position": {
					"description": "Icon position",
					"options": [
						"left",
						"right"
					]
				},
				"width": {
					"description": "Button width",
					"options": [
						"auto",
						"max"
					]
				},
				"style": {
					"description": "Button style",
					"options": [
						"neutral",
						"brand",
						"outline",
						"transparent",
						"error",
						"success"
					]
				},
				"disabled": {
					"description": "Logic for disabled state",
					"options": [
						"false",
						"true"
					]
				}
			}
		}
	}

	render() {
		return (
			<button className="square">Button</button>
		);
	}
}

export default CSComponent;