import React from 'react';
import classNames from 'classnames';

export type CSCurrencyDisplay = 'code' | 'symbol' | 'name' | 'narrowSymbol';
export type CSNotation = 'standard' | 'scientific' | 'engineering' | 'compact';
export type CSSignDisplay = 'auto' | 'never' | 'always' | 'exceptZero';
export type CSCurrencySign = 'standard' | 'accounting';

export interface CSCurrencyProps {
	[key: string]: any;
	className?: string;
	currency?: string;
	currencyDisplay?: CSCurrencyDisplay;
	currencySign?: CSCurrencySign;
	id?: string;
	locale: string;
	notation?: CSNotation;
	maximumFractionDigits?: number;
	maximumSignificantDigits?: number;
	minimumFractionDigits?: number;
	minimumIntegerDigits?: number;
	minimumSignificantDigits?: number;
	showSymbolOnly?: boolean;
	signDisplay?: CSSignDisplay;
	title?: string | boolean;
	useGrouping?: boolean;
	value?: string | number;
}

class CSCurrency extends React.Component<CSCurrencyProps> {
	constructor(props: CSCurrencyProps) {
		super(props);
	}

	// Typescript does not include currencySign, notation and signDisplay so far. Issue has been raised with microsoft typescript team and is in backlog.
	formatValue = (unformattedValue: any) => new Intl.NumberFormat(this.props.locale,
		{
			localeMatcher: 'best fit',
			currency: this.props.currency,
			currencyDisplay: this.props.currencyDisplay,
			style: this.props.currency ? 'currency' : undefined,
			// @ts-ignore
			currencySign: this.props.currencySign, // Not supported in Safari. Not included in typescript NumberFormatOptions interface
			notation: this.props.notation, // Not supported in Safari. Not included in typescript NumberFormatOptions interface
			signDisplay: this.props.signDisplay, // Not supported in Safari. Not included in typescript NumberFormatOptions interface
			minimumIntegerDigits: this.props.minimumIntegerDigits,
			minimumFractionDigits: this.props.minimumFractionDigits,
			maximumFractionDigits: this.props.maximumFractionDigits,
			minimumSignificantDigits: this.props.minimumSignificantDigits,
			maximumSignificantDigits: this.props.maximumSignificantDigits,
			useGrouping: this.props.useGrouping,
		}).format(unformattedValue)

	// Safari does not support currencySign, notation and signDisplay, so this method is called when using Safari.
	formatSafariValue = (unformattedValue: any) => new Intl.NumberFormat(this.props.locale,
		{
			localeMatcher: 'best fit',
			currency: this.props.currency,
			currencyDisplay: this.props.currencyDisplay === 'narrowSymbol' ? 'symbol' : this.props.currencyDisplay, // "narrowSymbol" value not supported in Safari
			style: this.props.currency ? 'currency' : undefined,
			minimumIntegerDigits: this.props.minimumIntegerDigits,
			minimumFractionDigits: this.props.minimumFractionDigits,
			maximumFractionDigits: this.props.maximumFractionDigits, // In safari if maximumFractionDigits < minimumFractionDigits it breaks app
			minimumSignificantDigits: this.props.minimumSignificantDigits,
			maximumSignificantDigits: this.props.maximumSignificantDigits,
			useGrouping: this.props.useGrouping,
		}).format(unformattedValue)

	render() {
		const {
			className,
			currency,
			currencyDisplay,
			currencySign,
			id,
			locale,
			notation,
			minimumIntegerDigits,
			minimumFractionDigits,
			maximumFractionDigits,
			minimumSignificantDigits,
			maximumSignificantDigits,
			signDisplay,
			title,
			useGrouping,
			value,
			...rest
		} = this.props;

		/* possibly not 100% reliable method to check for browser version as userAgent string can be changed in settings */
		const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

		const currencyClasses = classNames(
			'cs-currency',
			{
				[`${className}`]: className,
			},
		);

		const formattedValue = () => {
			if (!(isSafari || iOS)) {
				if (value) {
					return this.formatValue(value);
				}

				// When value is not defined, it is rendered as NaN next to the currency symbol
				// This part removes NaN so only currency symbol is displayed
				return this.formatValue(value).replace(/(NaN)/g, '');
			}

			return this.formatSafariValue(value);
		};

		const getTitle = () => {
			if (title) {
				if (typeof title === 'boolean') {
					return formattedValue();
				}
				return title;
			}
		};

		return (
			<span
				className={currencyClasses}
				id={id}
				title={getTitle()}
				{...rest}
			>
				{formattedValue()}
			</span>
		);
	}
}

export default CSCurrency;
