import React from 'react';
import CSIcon from './CSIcon';
import CSLabel from './CSLabel';
import classNames from 'classnames';
import { CSTooltipPosition } from './CSTooltip';

// tslint:disable-next-line: no-empty-interface
export interface CSCustomSelectProps {
	borderType?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	helpText?: string;
	id?: string;
	label: string;
	optionsList?: Array<string>;
	required?: boolean;
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
