import React from 'react';
import classNames from 'classnames';

export type CSCurrencyDisplay = 'code' | 'symbol' | 'name' | 'narrowSymbol';
export type CSNotation = 'standard' | 'scientific' | 'engineering' | 'compact';
export type CSSignDisplay = 'auto' | 'never' | 'always' | 'exceptZero';
export type CSCurrencySign = 'standard' | 'accounting';

// This fixes TS2339: Property 'MSStream' does not exist on type 'Window & typeof globalThis'.
declare global {
	interface Window {
		MSStream: any
	}
}

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
	// Typescript does not include currencySign, notation and signDisplay so far. Issue has been raised with microsoft typescript team and is in backlog.
	formatValue = (unformattedValue: any) => {
		const {
			currency,
			currencyDisplay,
			currencySign,
			locale,
			notation,
			minimumIntegerDigits,
			minimumFractionDigits,
			maximumFractionDigits,
			minimumSignificantDigits,
			maximumSignificantDigits,
			signDisplay,
			useGrouping,
		} = this.props;

		return new Intl.NumberFormat(locale, {
			localeMatcher: 'best fit',
			currency,
			currencyDisplay,
			style: currency ? 'currency' : undefined,
			currencySign, // Not supported in Safari. Not included in typescript NumberFormatOptions interface
			// @ts-ignore
			notation, // Not supported in Safari. Not included in typescript NumberFormatOptions interface
			signDisplay, // Not supported in Safari. Not included in typescript NumberFormatOptions interface
			minimumIntegerDigits,
			minimumFractionDigits,
			maximumFractionDigits,
			minimumSignificantDigits,
			maximumSignificantDigits,
			useGrouping,
		}).format(unformattedValue);
	}

	// Safari does not support currencySign, notation and signDisplay, so this method is called when using Safari.
	formatSafariValue = (unformattedValue: any) => {
		const {
			currency,
			currencyDisplay,
			locale,
			minimumIntegerDigits,
			minimumFractionDigits,
			maximumFractionDigits,
			minimumSignificantDigits,
			maximumSignificantDigits,
			useGrouping,
		} = this.props;

		return new Intl.NumberFormat(locale, {
			localeMatcher: 'best fit',
			currency,
			currencyDisplay: currencyDisplay === 'narrowSymbol' ? 'symbol' : currencyDisplay, // "narrowSymbol" value not supported in Safari
			style: currency ? 'currency' : undefined,
			minimumIntegerDigits,
			minimumFractionDigits,
			maximumFractionDigits, // In safari if maximumFractionDigits < minimumFractionDigits it breaks app
			minimumSignificantDigits,
			maximumSignificantDigits,
			useGrouping,
		}).format(unformattedValue);
	}

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
		const isSafari = !!navigator.userAgent.match(/Version\/[\d.]+.*Safari/);

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
			if (!title) return null;
			if (typeof title === 'boolean') return formattedValue();
			return title;
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
