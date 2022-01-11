import { CSFormData } from '@cloudsense/cs-form-v2';

export const numberLocaleData: CSFormData = [
	{
		sectionKey: 'number-locale-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'NUMBER',
			name: 'number-1',
			label: 'Number field with locale',
			useLocale: true,
			value: 100
		}, {
			fieldType: 'NUMBER',
			name: 'number-2',
			label: 'Number field without locale',
			useLocale: false,
			value: 100
		}]
	}
];

export const radioPropsData: CSFormData = [
	{
		sectionKey: 'radio-properties-section',
		label: 'Section',
		collapsible: true,
		fields: [{
			fieldType: 'RADIO',
			label: 'Select color:',
			name: 'radio-color',
			radioOptions: [{
				radioOptionValue: 'red',
				label: 'Red'

			}, {
				radioOptionValue: 'blue',
				label: 'Blue'
			}]
		}, {
			fieldType: 'RADIO',
			label: 'Select fruit:',
			name: 'radio-fruit',
			radioOptions: [{
				radioOptionValue: 'apple',
				label: 'Apple'

			}, {
				radioOptionValue: 'banana',
				label: 'Banana',
				disabled: true
			}]
		}, {
			fieldType: 'RADIO',
			label: 'Select drink:',
			name: 'radio-drink',
			radioOptions: [{
				radioOptionValue: 'cola',
				label: 'Coca-cola',
				readOnly: true
			}, {
				radioOptionValue: 'pepsi',
				label: 'Pepsi'
			}]
		}, {
			fieldType: 'RADIO',
			label: 'Select season:',
			name: 'radio-season',
			radioOptions: [{
				radioOptionValue: 'summer',
				label: 'Summer',
				title: 'Summer season'
			}, {
				radioOptionValue: 'winter',
				label: 'Winter',
				title: 'Winter season'
			}]
		}]
	}
];

export const selectPropsData: CSFormData = [
	{
		sectionKey: 'radio-properties-section',
		label: 'Section',
		collapsible: true,
		fields: [
			{
				fieldType: 'SELECT',
				label: 'Select car',
				name: 'select-car',
				selectOptions: [{
					key: 'rimac',
					value: 'Rimac'
				}, {
					key: 'audi',
					value: 'Audi'
				}, {
					key: 'bmw',
					value: 'BMW'
				}]
			}
		]
	}
];
