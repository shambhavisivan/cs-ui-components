import React from 'react';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
import PreviewLinks from '../PreviewLinks';

import { CSCurrency } from '@cloudsense/cs-ui-components';

class CSCurrencyPreview extends React.Component {
	getCurrencyDoc = () => ({
		name: 'Currency',
		usage: 'Currency provides Currency Internationalization (i18n)',
		accessible: 'yes',
		previews: [
			{
				name: 'Currency',
				examples: [
					{
						propName: 'currency',
						description: 'Currency code consists of a ISO 4217 3-letter code.',
						variations: [
							{
								primaryVariants: 'currency="EUR"',
								quickLink: 'EUR',
								component: <CSCurrency
									currency="eur"
									locale="en"
									value={1337}
								/>,
								code: `<CSCurrency
									currency="eur"
									locale="en"
									value={1337}
								/>`
							}, {
								primaryVariants: 'currency="INR"',
								quickLink: 'INR',
								component: <CSCurrency
									currency="INR"
									locale="en"
									value={1337}
								/>,
								code: `<CSCurrency
									currency="INR"
									locale="en"
									value={1337}
								/>`
							}, {
								primaryVariants: 'currency="USD"',
								quickLink: 'USD',
								component: <CSCurrency
									currency="USD"
									locale="en"
									value={1337}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									value={1337}
								/>`
							}
						]
					}, {
						propName: 'locale',
						description: 'Locale identifiers consist of a language identifier in the form of a BCP 47 language tag string where different parts are separated by hyphens.',
						variations: [
							{
								primaryVariants: 'locale="en-GB"',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'en-GB',
								component: <CSCurrency
									currency="EUR"
									locale="en-GB"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en-GB"
									value={10000}
								/>`
							}, {
								primaryVariants: 'locale="de-DE"',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'de',
								component: <CSCurrency
									currency="EUR"
									locale="de-DE"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="de-DE"
									value={10000}
								/>`
							}, {
								primaryVariants: 'locale="de-CH"',
								secondaryVariants: 'currency="CHF"',
								quickLink: 'de-CH',
								component: <CSCurrency
									currency="CHF"
									locale="de-CH"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="CHF"
									locale="de-CH"
									value={10000}
								/>`
							}, {
								primaryVariants: 'locale="nl"',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'nl',
								component: <CSCurrency
									currency="EUR"
									locale="nl"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="nl"
									value={10000}
								/>`
							}, {
								primaryVariants: 'locale="sv-SE"',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'sv-SE',
								component: <CSCurrency
									currency="EUR"
									locale="sv-SE"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="sv-SE"
									value={10000}
								/>`
							}
						]
					}, {
						propName: 'currencyDisplay',
						variations: [
							{
								primaryVariants: 'currencyDisplay="code"',
								quickLink: 'code',
								component: <CSCurrency
									currency="USD"
									locale="en"
									currencyDisplay="code"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									currencyDisplay="code"
									value={10000}
								/>`
							}, {
								primaryVariants: 'currencyDisplay="symbol"',
								quickLink: 'symbol',
								component: <CSCurrency
									currency="USD"
									locale="en-GB"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en-GB"
									value={10000}
								/>`
							}, {
								primaryVariants: 'currencyDisplay="narrowSymbol"',
								quickLink: 'narrowSymbol',
								component: <CSCurrency
									currency="USD"
									locale="en"
									currencyDisplay="narrowSymbol"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									currencyDisplay="narrowSymbol"
									value={10000}
								/>`
							}, {
								primaryVariants: 'currencyDisplay="name"',
								quickLink: 'name',
								component: <CSCurrency
									currency="USD"
									locale="en"
									currencyDisplay="name"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									currencyDisplay="name"
									value={10000}
								/>`
							}
						]
					}, {
						propName: 'currencySign',
						alert: {
							variant: 'info',
							text: 'Not supported in Safari.'
						},
						variations: [
							{
								primaryVariants: 'currencySign="standard"',
								quickLink: 'standard',
								component: <CSCurrency
									currency="USD"
									locale="en"
									value={-500}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									value={-500}
								/>`
							}, {
								primaryVariants: 'currencySign="accounting"',
								quickLink: 'accounting',
								component: <CSCurrency
									currency="USD"
									locale="en"
									currencySign="accounting"
									value={-500}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									currencySign="accounting"
									value={-500}
								/>`
							}
						]
					}, {
						propName: 'maximumFractionDigits',
						alert: {
							variant: 'warning',
							text: 'In Safari, maximumFractionDigits needs to be greater than or equal to minimumFractionDigits.'
						},
						variations: [
							{
								primaryVariants: 'maximumFractionDigits={4}',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									maximumFractionDigits={4}
									value={9876.54321}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									maximumFractionDigits={4}
									value={9876.54321}
								/>`
							}
						]
					}, {
						propName: 'maximumSignificantDigits',
						alert: {
							variant: 'info',
							text: 'If either of minimumSignificantDigits or maximumSignificantDigits is defined, then maximumFractionDigits, minimumFractionDigits and minimumIntegerDigits are ignored.'
						},
						variations: [
							{
								primaryVariants: 'maximumSignificantDigits={3}',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									maximumSignificantDigits={3}
									value={98765.54321}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									maximumSignificantDigits={3}
									value={98765.54321}
								/>`
							}
						]
					}, {
						propName: 'minimumFractionDigits',
						variations: [
							{
								primaryVariants: 'minimumFractionDigits={3}',
								component: <CSCurrency
									value="123.45678"
									minimumFractionDigits={3}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="123.45678"
									minimumFractionDigits={3}
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					}, {
						propName: 'minimumIntegerDigits',
						variations: [
							{
								primaryVariants: 'minimumIntegerDigits={5}',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									minimumIntegerDigits={5}
									value={123}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									minimumIntegerDigits={5}
									value={123}
								/>`
							}
						]
					}, {
						propName: 'minimumSignificantDigits',
						alert: {
							variant: 'info',
							text: 'If either of minimumSignificantDigits or maximumSignificantDigits is defined, then maximumFractionDigits, minimumFractionDigits and minimumIntegerDigits are ignored.'
						},
						variations: [
							{
								primaryVariants: 'minimumSignificantDigits={7}',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									minimumSignificantDigits={7}
									value={10}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									minimumSignificantDigits={7}
									value={10}
								/>`
							}
						]
					}, {
						propName: 'notation',
						alert: {
							variant: 'info',
							text: 'Not supported in Safari.'
						},
						variations: [
							{
								primaryVariants: 'notation="engineering"',
								quickLink: 'engineering',
								component: <CSCurrency
									currency="USD"
									locale="en"
									notation="engineering"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									notation="engineering"
									value={10000}
								/>`
							}, {
								primaryVariants: 'notation="scientific"',
								quickLink: 'scientific',
								component: <CSCurrency
									currency="USD"
									locale="en"
									notation="scientific"
									value={10000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									notation="scientific"
									value={10000}
								/>`
							}, {
								primaryVariants: 'notation="compact"',
								quickLink: 'compact',
								component: <CSCurrency
									currency="EUR"
									locale="en-US"
									notation="compact"
									value={9876543210000}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									notation="compact"
									value={9876543210000}
								/>`
							}
						]
					}, {
						propName: 'signDisplay',
						alert: {
							variant: 'info',
							text: 'Not supported in Safari.'
						},
						variations: [
							{
								primaryVariants: 'signDisplay="always"',
								quickLink: 'always',
								component: <CSCurrency
									currency="USD"
									locale="en"
									signDisplay="always"
									value={1000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									signDisplay="always"
									value={1000}
								/>`
							}, {
								primaryVariants: 'signDisplay="exceptZero"',
								quickLink: 'exceptZero',
								component: <CSCurrency
									currency="USD"
									locale="en"
									signDisplay="exceptZero"
									value={0}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									signDisplay="exceptZero"
									value={0}
								/>`
							}, {
								primaryVariants: 'signDisplay="never"',
								quickLink: 'never',
								component: <CSCurrency
									currency="USD"
									locale="en"
									signDisplay="never"
									value={-1000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en"
									signDisplay="never"
									value={-1000}
								/>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								primaryVariants: 'title="text"',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									value={100000}
									title="custom title"
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									value={100000}
									title="custom title"
								/>`
							}
						]
					}, {
						propName: 'useGrouping',
						variations: [
							{
								primaryVariants: 'useGrouping={true}',
								quickLink: 'true',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									value={100000}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									value={100000}
								/>`
							}, {
								primaryVariants: 'useGrouping={false}',
								quickLink: 'false',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									useGrouping={false}
									value={100000}
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									useGrouping={false}
									value={100000}
								/>`
							}
						]
					}, {
						propName: 'value',
						variations: [
							{
								primaryVariants: 'value={undefined}',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'undefined',
								component: <CSCurrency currency="EUR" locale="en" />,
								code: `<CSCurrency currency="EUR" locale="en" />`
							}, {
								primaryVariants: 'value={50.5}',
								quickLink: 'number',
								component: <CSCurrency
									value={50.5}
									currency="EUR"
									locale="en"
								/>,
								code: `<CSCurrency
									value={50.5}
									currency="EUR"
									locale="en"
								/>`
							}, {
								primaryVariants: 'value="50.5"',
								quickLink: 'string',
								component: <CSCurrency
									currency="EUR"
									locale="en"
									value="50.5"
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en"
									value="50.5"
								/>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariant: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component:  <CSCurrency
									currency="USD"
									locale="en-IN"
									id="custom-id"
									className="custom-class"
									value={1000}
								/>,
								code: `<CSCurrency
									currency="USD"
									locale="en-IN"
									id="custom-id"
									className="custom-class"
									value={1000}
								/>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the wrapper div.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the wrapper div.'
			}, {
				name: 'currency',
				required: true,
				types: ['string'],
				description: 'Set the currency that is displayed next to the value. Currency code consists of a ISO 4217 3-letter code.'
			}, {
				name: 'currencyDisplay',
				customTypes: [{
					name: 'CSCurrencyDisplay',
					types: ['\'symbol\'', '\'code\'', '\'name\'', '\'narrowSymbol\'']
				}],
				default: '\'symbol\'',
				description: 'Set the currency display. Value "narrowSymbol" is not supported in Safari and "symbol" value will be used instead.'
			}, {
				name: 'currencySign',
				customTypes: [{
					name: 'CSCurrencySign',
					types: ['\'standard\'', '\'accounting\'']
				}],
				default: '\'standard\'',
				description: 'Set the currency sign. Not supported in Safari, default value will be used.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the currency wrapper div.'
			}, {
				name: 'locale',
				required: true,
				types: ['string'],
				description: 'Set locale. Locale identifier consists of a language identifier in a form of a string holding a BCP 47 language tag.'
			}, {
				name: 'minimumIntegerDigits',
				types: ['number'],
				default: '1',
				description: 'The minimum number of integer digits to use. Possible values 1-21.'
			}, {
				name: 'minimumFractionDigits',
				types: ['number'],
				default: '0',
				description: 'The minimum number of fraction digits to use. Possible values 0-20.'
			}, {
				name: 'maximumFractionDigits',
				types: ['number'],
				default: '3',
				description: 'The maximum number of fraction digits to use. Possible values 0-20. For Safari maximumFractionDigits must be >= minimumFractionDigits.'
			}, {
				name: 'minimumSignificantDigits',
				types: ['number'],
				default: '1',
				description: 'The minimum number of significant digits. Possible values 0-21.'
			}, {
				name: 'maximumSignificantDigits',
				types: ['number'],
				default: '21',
				description: 'The maximum number of significant digits. Possible values 0-21.'
			}, {
				name: 'notation',
				customTypes: [{
					name: 'CSNotation',
					types: ['\'standard\'', '\'scientific\'', '\'engineering\'', '\'compact\'']
				}],
				default: '\'standard\'',
				description: 'The formatting that should be displayed for the number. Not supported in Safari, default value will be used.'
			}, {
				name: 'signDisplay',
				customTypes: [{
					name: 'CSSignDisplay',
					types: ['\'auto\'', '\'never\'', '\'always\'', '\'exceptZero\'']
				}],
				default: '\'auto\'',
				description: 'Set the sign display. Not supported in Safari, default value will be used.'
			}, {
				name: 'title',
				types: ['string'],
				description: 'Set the value of the title attribute.'
			}, {
				name: 'useGrouping',
				types: ['boolean'],
				default: 'true',
				description: 'Set whether to use grouping separators, such as thousands separators.'
			}, {
				name: 'value',
				types: ['string', 'number'],
				description: 'Set the value.'
			}
		],
		accessibility: [
			{
				criterionList: [
					'1.4.1',
					'1.4.4'
				],
				requirements: [
					{
						structure: [
							'`<span>` with text - visible to screen reader'
						],
						styling: [
							'Color contrast ratio > 4.5'
						]
					}
				]
			}
		]
	})

	render() {
		const component = this.getCurrencyDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<PreviewProperties {...component} />
					<PreviewTable components={[component]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSCurrencyPreview;
