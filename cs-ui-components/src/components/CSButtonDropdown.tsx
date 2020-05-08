import React from 'react';
import CSButton from './CSButton';
import classNames from 'classnames';

export interface CSButtonDropdownProps {
	align?: string;
	btnStyle?: string;
	btnType?: string;
	className?: string;
	disabled?: boolean;
	hover?: boolean;
	iconName?: string;
	iconOrigin?: string;
	iconPosition?: string;
	iconRotate?: string;
	label?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	size?: string;
}

export interface CSButtonDropdownStates {
	active?: boolean;
	toggleActive?: any;
}

class CSButtonDropdown extends React.Component<CSButtonDropdownProps, CSButtonDropdownStates> {

	public static defaultProps = {
		btnType: 'default',
		btnStyle: 'initial',
		align: 'left',
		iconName: 'down',
		hover: false
	};
	node: HTMLDivElement;

	constructor(props: any) {
		super(props);
		this.toggleActive = this.toggleActive.bind(this);
		this.state = {
			active: false
		};
		this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}
	toggleActive() {
		const currentState = this.state.active;
		if (!this.state.active) {
			document.addEventListener('click', this.handleOutsideClick, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
		this.setState({ active: !currentState });
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick, false);
	}
	handleOutsideClick(e: any) {
		// ignore clicks on the component itself
		if (this.node && this.node.contains(e.target)) {
			return;
		}
		this.toggleActive();
	}

	render() {
		const btnDropdownWrapperClasses = classNames(
			'cs-btn-dropdown-wrapper',
			{
				'cs-btn-dropdown-hover': (this.props.hover === true),
				[`${this.props.className}`]: this.props.className
			}
		);
		const btnDropdownClasses = classNames(
			{
				'cs-btn-dropdown-active': (this.state.active === true)
			}
		);

		const btnDropdownItemClasses = classNames(
			'cs-btn-dropdown-outer-item-wrapper',
			{
				[`cs-btn-dropdown-${this.props.align}`]: this.props.align
			}
		);

		return (
			<div className={btnDropdownWrapperClasses} ref={node => this.node = node}>
					<CSButton
						btnStyle={this.props.btnStyle}
						btnType={this.props.btnType}
						className={btnDropdownClasses}
						disabled={this.props.disabled}
						iconDisplay={this.props.label ? 'default' : 'icon-only'}
						iconName={this.props.iconName}
						iconOrigin={this.props.iconOrigin}
						iconPosition={(this.props.label && this.props.iconPosition) ? this.props.iconPosition : undefined}
						iconRotate={this.props.iconRotate}
						onClick={!this.props.hover ? this.toggleActive : null}
						size={this.props.size}
						label={this.props.label ? this.props.label : 'Toggle dropdown'}
					/>
					{this.props.hover ?
						(<div className={btnDropdownItemClasses}>
							<div className="cs-btn-dropdown-item-wrapper">
								{this.props.children}
							</div>
						</div>) :
						(this.state.active &&
						<div className={btnDropdownItemClasses}>
							<div className="cs-btn-dropdown-item-wrapper">
								{this.props.children}
							</div>
						</div>)
					}
			</div>
		);
	}
}

export default CSButtonDropdown;
