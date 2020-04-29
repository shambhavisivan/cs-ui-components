import React from 'react';
import CSButton from './CSButton';
import classNames from 'classnames';

export interface CSButtonDropdownProps {
	btnType?: string;
	btnStyle?: string;
	size?: string;
	iconName?: string;
	iconOrigin?: string;
	disabled?: boolean;
	className?: string;
	align?: string;
	iconRotate?: string;
	label?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	iconPosition?: string;
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
		iconName: 'down'
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

	handleOutsideClick(e: any) {
		// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
			return;
		}
		this.toggleActive();
	}

	getLabel() {
		return this.props.label ? this.props.label : 'Toggle dropdown';
	}

	getIconDisplay() {
		return this.props.label ? 'default' : 'icon-only';
	}

	render() {
		const btnDropdownWrapperClasses = classNames(
			'cs-btn-dropdown-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		const btnDropdownClasses = classNames(
			{
				'cs-btn-dropdown-active': (this.state.active === true)
			}
		);

		return (
			<div className={btnDropdownWrapperClasses} ref={node => this.node = node}>
				<CSButton
					className={btnDropdownClasses}
					btnType={this.props.btnType}
					btnStyle={this.props.btnStyle}
					size={this.props.size}
					iconName={this.props.iconName}
					iconOrigin={this.props.iconOrigin}
					iconRotate={this.props.iconRotate}
					iconDisplay={this.getIconDisplay()}
					disabled={this.props.disabled}
					onClick={this.toggleActive}
					label={this.getLabel()}
					iconPosition={(this.props.label && this.props.iconPosition) ? this.props.iconPosition : undefined}
				/>
				{this.state.active ? (
					<div className={`cs-btn-dropdown-item-wrapper cs-btn-dropdown-${this.props.align}`}>
						{this.props.children}
					</div>
				) : null}
			</div>
		);
	}

}

export default CSButtonDropdown;
