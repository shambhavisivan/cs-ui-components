import React from 'react';
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
	errorMessage?: string;
	autoFocus?: boolean;
	onChange?(): any;
}

export interface CSInputSearchState {
	value: string;
}

class CSInputSearch extends React.Component<CSInputSearchProps, CSInputSearchState> {

	public static defaultProps = {
		iconPosition: 'left'
	};

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
		const inputSearchWrapperClasses = classNames(
			'cs-input-search-wrapper'
		);

		const inputSearchGroupClasses = classNames(
			'cs-input-search-group',
			{
				'cs-clear': this.state.value,
				'cs-icon-left': this.props.iconPosition === 'left',
				'cs-icon-right': this.props.iconPosition === 'right',
				[`${this.props.className}`]: this.props.className
			}
		);

		const inputSearchClasses = classNames(
			'cs-input-search',
			{
				[`cs-input-search-${this.props.borderType}`]: this.props.borderType,
				'cs-input-search-error': this.props.error
			}
		);
		return (
			<>
				<div className={inputSearchWrapperClasses}>
					{this.props.label &&
						<CSLabel for={this.props.id} label={this.props.label} helpText={this.props.helpText} tooltipPosition={this.props.tooltipPosition} required={this.props.required} />
					}
					<div className={inputSearchGroupClasses} style={{'--search-width': this.props.width}}>
						<CSIcon name="search" className="cs-input-search-icon" />
						<input className={inputSearchClasses}
							autoFocus={this.props.autoFocus}
							onChange={this.setValue}
							id={this.props.id}
							placeholder={this.props.placeholder}
							disabled={this.props.disabled}
							required={this.props.required}
							value={this.state.value}
							type="text"
							autoComplete="off"
						/>
						{this.state.value &&
							<button
								className="cs-input-search-clear"
								onClick={this.clearSearch}
								aria-label="close"
							>
								<CSIcon name="close"/>
							</button>
						}
					</div>
					{(this.props.error && this.props.errorMessage) &&
						<span className="cs-input-error-msg">{this.props.errorMessage}</span>
					}
				</div>
			</>
		);
	}
}

export default CSInputSearch;
