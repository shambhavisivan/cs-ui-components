import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSLabel from './CSLabel';
import CSIcon from './CSIcon';

export interface CSInputSearchProps {
	borderType?: string;
	error?: boolean;
	label: string;
	id?: string;
	helpText?: string;
	tooltipPosition?: string;
	required?: boolean;
	placeholder?: string;
	disabled?: boolean;
	iconPosition?: string;
	value?: string;
	className?: string;
	width?: string;
	onChange?(): any;
}

export interface CSInputSearchState {
	value: string;
}

class CSInputSearch extends React.Component<CSInputSearchProps, CSInputSearchState> {

	public static defaultProps = {
		iconPosition: 'left'
	};

	static getDoc() {

		const onChangeHandler = () => alert('Input search changed!');

		const json = {
			name: 'Input Search',
			usage: 'Search input is used for search value entry.',
			examples: [
				{
					propName: 'Value',
					customText: '',
					variations: [
						{
							variationName: ['Value'],
							string: '',
							component:
									<CSInputSearch label="Type here:" value="Value" />
						}
					]
				},
				{
					propName: 'Label',
					variations: [
						{
							variationName: ['Label'],
							string: '',
							component:
									<CSInputSearch label="Type here:"  id="searchName" />
						}
					]
				},
				{
					propName: 'Help Text',
					variations: [
						{
							variationName: ['helpText'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" />
						}
					]
				},
				{
					propName: 'Tooltip Position',
					variations: [
						{
							variationName: ['tooltipPosition'],
							string: '',
							component:
									<CSInputSearch label="Type here:" helpText="Help text example" tooltipPosition="top-left" />
						}
					]
				},
				{
					propName: 'Placeholder',
					variations: [
						{
							variationName: ['Placeholder'],
							string: '',
							component:
									<CSInputSearch label="Type here:" placeholder="Search name" />
						}
					]
				},
				{
					propName: 'Id',
					variations: [
						{
							variationName: ['Id'],
							string: '',
							component:
									<CSInputSearch label="Type here:" id="search" />
						}
					]
				},
				{
					propName: 'Disabled',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
									<CSInputSearch label="Type here:" disabled />
						}
					]
				},
				{
					propName: 'Required',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
									<CSInputSearch label="Type here:" required id="searchItem" />
						}
					]
				},
				{
					propName: 'Error',
					variations: [
						{
							variationName: ['true', 'false'],
							string: '',
							component:
									<CSInputSearch label="Type here:" error />
						}
					]
				},
				{
					propName: 'Icon Position',
					variations: [
						{
							variationName: ['right'],
							string: '',
							component:
								<CSInputSearch label="Type here:" iconPosition="right" />
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
									<CSInputSearch label="Type here:" borderType="square" />
						}
					]
				},
				{
					propName: 'width',
					variations: [
						{
							variationName: ['50%'],
							string: '',
							component:
									<CSInputSearch label="Type here:" width="50%" />
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
									<CSInputSearch label="Type here:" className="custom-class" />
						}
					]
				},
				{
					propName: 'onChange',
					variations: [
						{
							variationName: ['onChange'],
							string: '',
							component:
									<CSInputSearch label="Type here:" onChange={onChangeHandler} />
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'value',
					description: 'Input search value to display',
					options: []
				},
				{
					propertyName: 'label',
					description: 'Input label text to display',
					options: []
				},
				{
					propertyName: 'helpText',
					description: 'Input help text for tooltip display',
					options: []
				},
				{
					propertyName: 'tooltipPosition',
					description: 'Input tooltip position',
					options: [
						'top-right',
						'top-left',
						'bottom-right',
						'bottom-left'
					]
				},
				{
					propertyName: 'placeholder',
					description: 'Input search placeholder to display',
					options: []
				},
				{
					propertyName: 'id',
					description: 'Input search id value',
					options: []
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
					propertyName: 'read-only',
					description: 'Read only description',
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
					propertyName: 'iconPosition',
					description: 'Input search icon position',
					options: [
						'left',
						'right'
					]
				},
				{
					propertyName: 'borderType',
					description: 'Input border type',
					options: [
						'round',
						'square'
					]
				},
				{
					propertyName: 'width',
					description: 'Width of the input search',
					options: [
						'e.g.',
						'50%',
						'30rem',
						'25px'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: [
						'square'
					]
				},
				{
					propertyName: 'onChange',
					description: 'Logic for onChange event',
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
	constructor(props: CSInputSearchProps) {
		super(props);

		this.clearSearch = this.clearSearch.bind(this);
		this.setValue = this.setValue.bind(this);

		this.state = {
			value: this.props.value || ''
		};
	}
	componentDidMount() {
		if (this.props.value) {
			this.setState({
				value: this.props.value
			});
		}
	}
	setValue(e: any) {
		this.setState({
			value: e.target.value
		});
		if (this.props.onChange) {
			this.props.onChange();
		}

	}
	clearSearch() {
		this.setState({
			value: ''
		});
	}
	render() {
		const inputSearchClasses = classNames(
			'cs-input-search',
			{
				[`cs-input-search-${this.props.borderType}`]: this.props.borderType,
				'cs-input-search-error': this.props.error
			}
		);

		const inputSearchWrapperClasses = classNames(
			'cs-input-search-wrapper',
			{
				'cs-clear': this.state.value,
				'cs-icon-left': this.props.iconPosition === 'left',
				'cs-icon-right': this.props.iconPosition === 'right',
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<>
				{this.props.label &&
					<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
				}
				<div className={inputSearchWrapperClasses}>
					<div className="cs-input-icon-wrapper">
						<CSIcon name="search" />
					</div>
					<input className={inputSearchClasses}
						onChange={this.setValue}
						id={this.props.id}
						placeholder={this.props.placeholder}
						disabled={this.props.disabled}
						required={this.props.required}
						value={this.state.value}
						type="text"
						style={{width: this.props.width}}
					/>
					{this.state.value &&
						<div className="cs-input-search-clear" onClick={this.clearSearch}>
							<CSIcon name="close" />
						</div>
					}
				</div>
			</>
		);
	}
}

export default CSInputSearch;
