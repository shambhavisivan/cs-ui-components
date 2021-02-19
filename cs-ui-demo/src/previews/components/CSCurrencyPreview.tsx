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
						description: 'Currency code consists of a ISO 4217 3-letter code',
						variations: [
							{
								primaryVariants: 'currency="EUR"',
								secondaryVariants: 'locale="en"',
								quickLink: 'EUR',
								component: <CSCurrency
									value="1337"
									currency="eur"
									locale="en"
								/>,
								code: `<CSCurrency
									value="1337"
									currency="eur"
									locale="en"
								/>`
							},
							{
								primaryVariants: 'currency="INR"',
								secondaryVariants: 'locale="en"',
								quickLink: 'INR',
								component: <CSCurrency
									value="1337"
									currency="INR"
									locale="en"
								/>,
								code: `<CSCurrency
									value="1337"
									currency="INR"
									locale="en"
								/>`
							},
							{
								primaryVariants: 'currency="USD"',
								secondaryVariants: 'locale="en"',
								quickLink: 'USD',
								component: <CSCurrency
									value="1337"
									currency="USD"
									locale="en"
								/>,
								code: `<CSCurrency
									value="1337"
									currency="USD"
									locale="en"
								/>`
							}
						]
					},
					{
						propName: 'currencyDisplay',
						variations: [
							{
								primaryVariants: 'currencyDisplay="code"',
								quickLink: 'code',
								component: <CSCurrency
									value="10000"
									currencyDisplay="code"
									currency="USD"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="10000"
									currencyDisplay="code"
									currency="USD"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'currencyDisplay="symbol"',
								quickLink: 'symbol',
								component: <CSCurrency
									value="10000"
									currencyDisplay="symbol"
									currency="USD"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="10000"
									currencyDisplay="symbol"
									currency="USD"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'currencyDisplay="narrowSymbol"',
								quickLink: 'narrowSymbol',
								component: <CSCurrency
									value="10000"
									currencyDisplay="narrowSymbol"
									currency="USD"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="10000"
									currencyDisplay="narrowSymbol"
									currency="USD"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'currencyDisplay="name"',
								quickLink: 'name',
								component: <CSCurrency
									value="10000"
									currencyDisplay="name"
									currency="USD"
									locale="en-US"
								/>,
								code: ``
							}
						]
					},
					{
						propName: 'currencySign',
						alert: {
							variant: 'info',
							text: 'Not supported in Safari'
						},
						variations: [
							{
								primaryVariants: 'currencySign="accounting"',
								quickLink: 'accounting',
								component: <CSCurrency
									currencySign="accounting"
									value="-500"
									currency="USD"
									locale="en"
								/>,
								code: `<CSCurrency
									currencySign="accounting"
									value="-500"
									currency="USD"
									locale="en"
								/>`
							}
						]
					},
					{
						propName: 'notation',
						alert: {
							variant: 'info',
							text: 'Not supported in Safari'
						},
						variations: [
							{
								primaryVariants: 'notation="engineering"',
								quickLink: 'engineering',
								component: <CSCurrency
									notation="engineering"
									value="10000"
									currency="USD"
									locale="en"
								/>,
								code: `<CSCurrency
									notation="engineering"
									value="10000"
									currency="USD"
									locale="en"
								/>`
							},
							{
								primaryVariants: 'notation="scientific"',
								quickLink: 'scientific',
								component: <CSCurrency
									notation="scientific"
									value="10000"
									currency="USD"
									locale="en"
								/>,
								code: `<CSCurrency
									notation="scientific"
									value="10000"
									currency="USD"
									locale="en"
								/>`
							},
							{
								primaryVariants: 'notation="compact"',
								quickLink: 'compact',
								component: <CSCurrency
									notation="compact"
									value="9876543210000"
									currency="EUR"
									locale="en-US"
								/>,
								code: `<CSCurrency
									notation="compact"
									value="9876543210000"
									currency="EUR"
									locale="en"
								/>`
							}
						]
					},
					{
						propName: 'signDisplay',
						alert: {
							variant: 'info',
							text: 'Not supported in Safari'
						},
						variations: [
							{
								primaryVariants: 'signDisplay="always"',
								quickLink: 'always',
								component: <CSCurrency
									signDisplay="always"
									value="1000"
									currency="USD"
									locale="en"
								/>,
								code: `<CSCurrency
									signDisplay="always"
									value="1000"
									currency="USD"
									locale="en"
								/>`
							},
							{
								primaryVariants: 'signDisplay="exceptZero"',
								quickLink: 'exceptZero',
								component: <CSCurrency
									signDisplay="exceptZero"
									value="0"
									currency="USD"
									locale="en"
								/>,
								code: `<CSCurrency
									signDisplay="exceptZero"
									value="0"
									currency="USD"
									locale="en"
								/>`
							},
							{
								primaryVariants: 'signDisplay="never"',
								quickLink: 'never',
								component: <CSCurrency
									signDisplay="never"
									value="-1000"
									currency="USD"
									locale="en"
								/>,
								code: `<CSCurrency
									signDisplay="never"
									value="-1000"
									currency="USD"
									locale="en"
								/>`
							}
						]
					},
					{
						propName: 'locale',
						description: 'Locale identifier consists of a language identifier in a form of a string holding a BCP 47 language tag and all parts are separated by hyphens.',
						variations: [
							{
								primaryVariants: 'locale="en-GB" (English, United Kingdom)',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'en-GB',
								component: <CSCurrency
									value="10000"
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="10000"
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'locale="de" (German)',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'de',
								component: <CSCurrency
									value="10000"
									currency="EUR"
									locale="de-DE"
								/>,
								code: `<CSCurrency
									value="10000"
									currency="EUR"
									locale="de-DE"
								/>`
							},
							{
								primaryVariants: 'locale="de-CH" (German, Switzerland)',
								secondaryVariants: 'currency="CHF"',
								quickLink: 'de-CH',
								component: <CSCurrency
									value="10000"
									currency="CHF"
									locale="de-CH"
								/>,
								code: `<CSCurrency
									value="10000"
									currency="CHF"
									locale="de-CH"
								/>`
							},
							{
								primaryVariants: 'locale="nl" (Dutch)',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'nl',
								component: <CSCurrency
									value="10000"
									currency="EUR"
									locale="nl"
								/>,
								code: `<CSCurrency
									value="10000"
									currency="EUR"
									locale="nl"
								/>`
							},
							{
								primaryVariants: 'locale="sv-SE" (Swedish)',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'sv-SE',
								component: <CSCurrency
									value="10000"
									currency="EUR"
									locale="sv-SE"
								/>,
								code: `<CSCurrency
									value="10000"
									currency="EUR"
									locale="sv-SE"
								/>`
							}
						]
					},
					{
						propName: 'minimumIntegerDigits',
						variations: [
							{
								primaryVariants: 'minimumIntegerDigits={5}',
								quickLink: '5',
								component: <CSCurrency
									value="123"
									minimumIntegerDigits={5}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="123"
									minimumIntegerDigits={5}
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'minimumFractionDigits',
						variations: [
							{
								primaryVariants: 'minimumFractionDigits={3}',
								secondaryVariants: 'maximumFractionDigits={3}',
								quickLink: '3',
								component: <CSCurrency
									value="123.45678"
									minimumFractionDigits={3}
									maximumFractionDigits={3}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="123.45678"
									minimumFractionDigits={3}
									maximumFractionDigits={3}
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'minimumFractionDigits={5}',
								secondaryVariants: 'maximumFractionDigits={5}',
								quickLink: '5',
								component: <CSCurrency
									value="123.456"
									minimumFractionDigits={5}
									maximumFractionDigits={5}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="123.456"
									minimumFractionDigits={5}
									maximumFractionDigits={5}
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'maximumFractionDigits',
						alert: {
							variant: 'warning',
							text: 'Safari: maximumFractionDigits needs to be higher or equal as minimumFractionDigits'
						},
						variations: [
							{
								primaryVariants: 'maximumFractionDigits={3}',
								quickLink: '3',
								component: <CSCurrency
									value="9876.54321"
									maximumFractionDigits={3}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="9876.54321"
									maximumFractionDigits={3}
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'maximumFractionDigits={0}',
								secondaryVariant: 'minimumFractionDigits={0}',
								quickLink: '0',
								component: <CSCurrency
									value="9876.54321"
									maximumFractionDigits={0}
									minimumFractionDigits={0}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="9876.54321"
									maximumFractionDigits={0}
									minimumFractionDigits={0}
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'minimumSignificantDigits',
						alert: {
							variant: 'info',
							text: 'If at least one property minimumSignificantDigits or maximumSignificantDigits is defined, then the maximumFractionDigits, minimumFractionDigits or minimumIntegerDigits is ignored.'
						},
						variations: [
							{
								primaryVariants: 'minimumSignificantDigits={7}',
								quickLink: '7',
								component: <CSCurrency
									value="54.321"
									minimumSignificantDigits={7}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="54.321"
									minimumSignificantDigits={7}
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'minimumSignificantDigits={5}',
								quickLink: '5',
								component: <CSCurrency
									value="10"
									minimumSignificantDigits={5}
									currency="EUR"
									locale="en-GB"
								/>,
								code: ` <CSCurrency
									value="10"
									minimumSignificantDigits={5}
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'maximumSignificantDigits',
						alert: {
							variant: 'info',
							text: 'If at least one property minimumSignificantDigits or maximumSignificantDigits is defined, then the maximumFractionDigits, minimumFractionDigits or minimumIntegerDigits is ignored.'
						},
						variations: [
							{
								primaryVariants: 'maximumSignificantDigits={3}',
								quickLink: '3',
								component: <CSCurrency
									value="98765.4321"
									maximumSignificantDigits={3}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="98765.4321"
									maximumSignificantDigits={3}
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'maximumSignificantDigits={1}',
								quickLink: '1',
								component: <CSCurrency
									value="98765.54321"
									maximumSignificantDigits={1}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="98765.54321"
									maximumSignificantDigits={1}
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'title',
						variations: [
							{
								primaryVariants: 'title="custom title"',
								component: <CSCurrency
									value="10000"
									title="custom title"
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="10000"
									title="custom title"
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'useGrouping',
						variations: [
							{
								primaryVariants: 'useGrouping={true}',
								quickLink: 'true',
								component: <CSCurrency
									value="100000"
									useGrouping
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="100000"
									useGrouping
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'useGrouping={false}',
								quickLink: 'false',
								component: <CSCurrency
									value="100000"
									useGrouping={false}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="100000"
									useGrouping={false}
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'value',
						variations: [
							{
								primaryVariants: 'no value',
								secondaryVariants: 'currency="EUR"',
								quickLink: 'empty',
								component: <CSCurrency
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'value={50.5}',
								quickLink: '{50.5}',
								component: <CSCurrency
									value={50.5}
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value={50.5}
									currency="EUR"
									locale="en-GB"
								/>`
							},
							{
								primaryVariants: 'value="10500"',
								quickLink: '10500',
								component: <CSCurrency
									value="10500"
									currency="EUR"
									locale="en-GB"
								/>,
								code: `<CSCurrency
									value="10500"
									currency="EUR"
									locale="en-GB"
								/>`
							}
						]
					},
					{
						propName: 'id | class',
						variations: [
							{
								primaryVariant: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component:  <CSCurrency
									id="id"
									className="custom-class"
									value="1000"
									currency="USD"
									locale="en-IN"
								/>,
								code: `<CSCurrency
									id="id"
									className="custom-class"
									value="1000"
									currency="USD"
									locale="en-IN"
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
				default: ['symbol'],
				customTypes: [{
					name: 'CSCurrencyDisplay',
					types: ['\'symbol\'', '\'code\'', '\'name\'', '\'narrowSymbol\'']
				}],
				description: 'Set the currency display. Value "narrowSymbol" is not supported in Safari and "symbol" value will be used instead.'
			}, {
				name: 'currencySign',
				default: ['standard'],
				customTypes: [{
					name: 'CSCurrencySign',
					types: ['\'standard\'', '\'accounting\'']
				}],
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
				default: ['1'],
				types: ['number'],
				description: 'The minimum number of integer digits to use. Possible values 1-21.'
			}, {
				name: 'minimumFractionDigits',
				default: ['0'],
				types: ['number'],
				description: 'The minimum number of fraction digits to use. Possible values 0-20.'
			}, {
				name: 'maximumFractionDigits',
				default: ['3'],
				types: ['number'],
				description: 'The maximum number of fraction digits to use. Possible values 0-20. For Safari maximumFractionDigits must be >= minimumFractionDigits'
			}, {
				name: 'minimumSignificantDigits',
				default: ['1'],
				types: ['number'],
				description: 'The minimum number of significant digits. Possible values 0-21.'
			}, {
				name: 'maximumSignificantDigits',
				default: ['21'],
				types: ['number'],
				description: 'The maximum number of significant digits. Possible values 0-21.'
			}, {
				name: 'notation',
				default: ['standard'],
				types: ['string'],
				description: 'The formatting that should be displayed for the number. Not supported in Safari, default value will be used.'
			}, {
				name: 'signDisplay',
				default: ['auto'],
				customTypes: [{
					name: 'CSSignDisplay',
					types: ['\'auto\'', '\'never\'', '\'always\'', '\'exceptZero\'']
				}],
				description: 'Set the sign display. Not supported in Safari, default value will be used.'
			}, {
				name: 'title',
				types: ['string'],
				description: 'Set the value of the title attribute'
			}, {
				name: 'useGrouping',
				default: ['true'],
				types: ['boolean'],
				description: 'Set whether to use grouping separators, such as thousands separators'
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
