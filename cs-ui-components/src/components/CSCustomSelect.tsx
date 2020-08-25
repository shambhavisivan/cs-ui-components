import React from 'react';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';

export type CSCustomSelectBorderType = 'square' | 'round';

export interface CSCustomSelectProps {
	borderType?: CSCustomSelectBorderType;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	hidden?: boolean;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	optionsList?: Array<string>;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
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
	listItems: Array<any>;
	node: HTMLDivElement;

	constructor(props: CSCustomSelectProps) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.search = this.search.bind(this);
		this.listItems = [];

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
		this.setState(
			(e.type === 'click' || e.key === 'Enter') ?
			{term: e.target.textContent} :
			{term: e.target.value}
		);
		this.toggle();
	}

	render() {
		const { options, term } = this.state;

		const customSelectWrapperClasses = classNames(
			'cs-custom-select',
			{
				[`${this.props.className}`]: this.props.className,
				'cs-element-hidden': this.props.hidden
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
			<div className={customSelectWrapperClasses} ref={node => this.node = node}>
				{(this.props.label && !this.props.labelHidden) &&
					<CSLabel
						for={this.props.id}
						label={this.props.label}
						helpText={this.props.helpText}
						tooltipPosition={this.props.tooltipPosition}
						required={this.props.required}
						title={this.props.labelTitle ? this.props.label : null}
					/>
				}
				<form>
					<div className={customSelectInputWrapperClasses} >
						<CSIcon name="search" className="cs-custom-select-search-icon" />
						<div className="cs-input-text-wrapper">
							<input
								className={customSelectInputClasses}
								value={this.state.term}
								type="text"
								onChange={this.search}
								id={this.props.id}
								required={this.props.required}
								disabled={this.props.disabled}
								aria-invalid={this.props.error}
								aria-expanded={this.state.toggle}
								onMouseDown={this.toggle}
								title={this.props.title}
							/>
						</div>
					</div>
					{(this.state.toggle && !this.props.disabled) &&
						<ul className="cs-custom-select-dropdown">
							{this.props.optionsList.filter(searchingFor(term)).map((option, i) => (
								<li role="button"
									tabIndex={0}
									key={i}
									onClick={this.search}
									value={i}
								>
									{option}
								</li>
							))}
						</ul>
					}
				</form>
				{(this.props.error && this.props.errorMessage) &&
					<span className="cs-custom-select-error-msg">{this.props.errorMessage}</span>
				}
			</div>
		);
	}
}

export default CSCustomSelect;
