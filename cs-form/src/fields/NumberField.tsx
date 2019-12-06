import React from 'react';
import { FormFieldProps } from './FormField';
import { FieldType } from '../types/FormDescriptor';

export interface NumberFieldLocale {
	userLocaleLang: string;
	userLocaleCountry: string;
	decimalSeparator: string;
}

interface NumberFieldState {
	value: string;
	locale: NumberFieldLocale;
	shouldFormat: boolean;
}

export class NumberField extends React.Component<FormFieldProps, NumberFieldState> {
	constructor(props: FormFieldProps) {
		super(props);
		let numberLocale: NumberFieldLocale = {
			userLocaleLang: 'en',
			userLocaleCountry: 'US',
			decimalSeparator: '.'
		};
		if (Object.keys(props.locale).includes('number') && props.locale.number) {
			numberLocale = props.locale.number;
		}
		this.state = {
			locale: numberLocale,
			value: (this.props.value.length > 0) ?
				this.numberFormatter(this.props.value, numberLocale) : '',
			shouldFormat: false
		};
	}

	componentDidUpdate(prevProps: FormFieldProps) {
		if (prevProps.value.length > 0 && prevProps.value !== this.props.value) {
			if (!this.state.shouldFormat) {
				this.setState({ value: this.props.value });
			} else {
				this.setState({ value: this.numberFormatter(this.props.value, this.state.locale), shouldFormat: false });
			}
		}
	}

	render() {
		return (
			<input
				{...this.props.wrapper.injectInputProps(
					this.props.descriptor.name,
					this.props.descriptor.fieldType as FieldType,
					this.props.status
				)}
				type="text"
				name={this.props.descriptor.name}
				value={this.state.value}
				onChange={e => this.handleBasicValidations(e)}
				required={this.props.status === 'mandatory'}
				readOnly={this.props.status === 'visible'}
				maxLength={20} // formatter does not support values with length > 20
				onBlur={e => this.handleFormattingOnBlur(e.target.value)}
				min={this.props.descriptor.minVal}
				max={this.props.descriptor.maxVal}
			/>
		);
	}

	handleBasicValidations(e: any) {
		const inputVal = e.target.value;
		const onlyNumberCommasSpaces = /^(-{0,1}?\+{0,1}?)[0-9,.{0,1}\s]*$/;

		if (!onlyNumberCommasSpaces.test(inputVal)) {
			return;
		}

		const splittedvalue: Array<string> = inputVal.split('\.');
		if (splittedvalue.length > 2) {
			return;
		} else {
			if (splittedvalue.length === 2 && splittedvalue[1].split(',').length > 1) {
				return;
			}
		}
		const isValid = this.validateByLocale(inputVal);
		if (!isValid) {
			return;
		}

		this.props.handleFieldChange(inputVal);
	}

	validateByLocale(inputVal: string): boolean {
		let numberOfSeparatorOccurences;
		const localeDecimalSeparator = this.state.locale.decimalSeparator;
		const regex = new RegExp(`[${localeDecimalSeparator}]`, 'g');
		numberOfSeparatorOccurences = (inputVal.match(regex) || []).length;

		if (numberOfSeparatorOccurences > 1) {
			return false;
		}

		// Can only have numbers after decimalSeparator
		if (numberOfSeparatorOccurences === 1) {
			const decimalPart = inputVal.substring(
				inputVal.indexOf(localeDecimalSeparator) + 1,
				inputVal.length
			);

			if (decimalPart.length > 0 && !/[0-9]/.test(decimalPart)) {
				return false;
			}
		}
		// Integer part of number cant be bigger than (precision - scale)
		if (this.props.descriptor.precision && this.props.descriptor.scale) {
			const intergerPartMaxLength =
				this.props.descriptor.precision - this.props.descriptor.scale;
			const stripAllNonSeparator = new RegExp(
				`[^\\d${localeDecimalSeparator}]`,
				'g'
			);
			const stripped = inputVal.replace(stripAllNonSeparator, '');
			if (numberOfSeparatorOccurences === 1) {
				const separatorIndex = stripped.indexOf(
					localeDecimalSeparator
				);
				const subStrLength = stripped.substring(0, separatorIndex)
					.length;
				if (subStrLength > intergerPartMaxLength) {
					return false;
				}
			} else {
				if (stripped.length > intergerPartMaxLength) {
					return false;
				}
			}
		}
		return true;
	}

	numberFormatter(
		unformattedValue: string,
		localeInfo: NumberFieldLocale
	): string {
		const numberLocale = `${localeInfo.userLocaleLang}-${localeInfo.userLocaleCountry}`;
		const localeDecimalSeparator = localeInfo.decimalSeparator;
		const f = new Intl.NumberFormat(numberLocale, {
			style: 'decimal',
			maximumFractionDigits: this.props.descriptor.scale,
			minimumFractionDigits: this.props.descriptor.scale
		});

		const replaceHelper = () => {
			let replaced;
			if (localeDecimalSeparator === ',') {
				// remove periods;
				replaced = unformattedValue.replace(/[\s.]+/g, '');
				// replace remaining comma with a period;
				replaced = replaced.replace(/\,/, '.');
			} else {
				replaced = unformattedValue.replace(/[\s,]+/g, '');
			}
			return replaced;
		};

		const toFormat =
			typeof unformattedValue === 'string'
				? replaceHelper()
				: unformattedValue;
		return f.format(Number(toFormat));
	}

	handleFormattingOnBlur(value: string): void {
		if (value.length > 0) {
			if (value !== '-' && value !== '+') {
				const formattedValue = this.numberFormatter(value, this.state.locale);
				this.setState({ value: formattedValue, shouldFormat: true });
				const unformatValueArray = formattedValue.split(this.state.locale.decimalSeparator);
				// removes non-numbers but escapes {-} and replaces {,} with {.}
				unformatValueArray[0] = unformatValueArray[0].replace(/[^0-9\-]+/g, '');

				this.props.handleFieldChange(unformatValueArray.join('.'));
			} else {
				this.props.handleFieldChange(value);
			}
		}
	}
}
