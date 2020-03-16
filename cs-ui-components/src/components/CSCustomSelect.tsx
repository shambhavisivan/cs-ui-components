import React from 'react';
import jsxToString from 'jsx-to-string';
import CSIcon from './CSIcon';
import CSInputText from './CSInputText';
import CSLabel from './CSLabel';
import classNames from 'classnames';

// tslint:disable-next-line: no-empty-interface
export interface CSCustomSelectProps {
	borderType?: string;
	error?: boolean;
	errorMessage?: string;
	label: string;
	id?: string;
	helpText?: string;
	tooltipPosition?: string;
	required?: boolean;
	disabled?: boolean;
	className?: string;
	optionsList?: Array<string>;
}

export interface CSCustomSelectState {
	toggle: boolean;
	term: string;
	options: Array<string>;
}

const searchingFor = (term: any) => {
	return (option: any) => {
		return option.toLowerCase().includes(term.toLowerCase()) || !term;
	};
};

class CSCustomSelect extends React.Component<CSCustomSelectProps, CSCustomSelectState> {

	static getDoc() {

		const json = {
			name: 'Custom Select',
			usage: 'Select element presents a menu of options.',
			examples: [
				{
					propName: 'Id',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" id="letter" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'label',
					variations: [
						{
							variationName: ['Label'],
							string: '',
							component:
								<CSCustomSelect label="Choose color" id="color" optionsList={['Red', 'Blue', 'Green']} />
						}
					]
				},
				{
					propName: 'borderType',
					variations: [
						{
							variationName: ['square'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" borderType="square" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'helpText',
					variations: [
						{
							variationName: ['helpText'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Example of help text" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'tooltipPosition',
					variations: [
						{
							variationName: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" helpText="Example of help text" tooltipPosition="bottom-right" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['disabled'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" disabled optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'required',
					variations: [
						{
							variationName: ['required'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" id="number" required optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" error optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationName: ['errorMessage'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" error errorMessage="Term not found" optionsList={['A', 'B', 'C']} />
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSCustomSelect label="Choose letter" className="custom-class" optionsList={['A', 'B', 'C']} />
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'id',
					description: 'Select id value',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Select label text to display',
					options: []
				},
				{
					propertyName: 'borderType',
					description: 'Select border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'helpText',
					description: 'Select help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Select tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'required',
					description: 'Required state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error message',
					description: 'Error text message',
					options: []
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
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
	constructor(props: CSCustomSelectProps) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.search = this.search.bind(this);

		this.state = {
			toggle: false,
			term: '',
			options: this.props.optionsList
		};
	}
	toggle() {
		this.setState({
			toggle: !this.state.toggle
		});
	}
	search(e: any) {
		this.setState({
			term: e.target.value
		});
	}

	render() {
		const { options, term } = this.state;

		const customSelectWrapperClasses = classNames(
			'cs-custom-select',
			{
				[`${this.props.className}`]: this.props.className
			}
		);

		const customSelectInputWrapperClasses = classNames(
			'cs-custom-select-input'
		);

		const customSelectInputClasses = classNames(
			'cs-input-text',
			{
				'cs-input-text-error': this.props.error,
				[`cs-input-text-${this.props.borderType}`]: this.props.borderType
			}
		);

		return (
			<div className={customSelectWrapperClasses} onClick={this.toggle}>
				{this.props.label &&
					<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
				}
				<form>
					<div className={customSelectInputWrapperClasses}>
						<CSIcon name="search" className="cs-custom-select-search-icon" />
						<div className="cs-input-text-wrapper">
							<input
								className={customSelectInputClasses}
								defaultValue={this.state.term}
								type="text"
								onChange={this.search}
								id={this.props.id}
								required={this.props.required}
								disabled={this.props.disabled}
								aria-invalid={this.props.error}
							/>
						</div>
					</div>
					{(this.state.toggle && !this.props.disabled) &&
						<ul className="cs-custom-select-dropdown">
							{this.props.optionsList.filter(searchingFor(term)).map((option, i) => (
								<li key={i}>{option}</li>
							))}
						</ul>
					}
				</form>
				{(this.props.error && this.props.errorMessage) &&
					<div className="cs-custom-select-error-msg">{this.props.errorMessage}</div>
				}
			</div>
		);
	}
}

export default CSCustomSelect;
