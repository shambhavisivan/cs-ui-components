import React from 'react';
import CSButton from './CSButton';
import classNames from 'classnames';
import { CSIconOrigin } from './CSIcon';

export type CSButtonDropdownAlign = 'left' | 'right';
export type CSButtonDropdownIconPosition = 'left' | 'right';
export type CSButtonDropdownSize = 'xsmall' | 'small' | 'normal' | 'large';
export type CSButtonDropdownStyle = 'initial' | 'brand' | 'outline';
export type CSButtonDropdownType = 'default' | 'error' | 'success' | 'transparent';

export interface CSButtonDropdownProps {
	align?: CSButtonDropdownAlign;
	btnStyle?: CSButtonDropdownStyle;
	btnType?: CSButtonDropdownType;
	className?: string;
	disabled?: boolean;
	hover?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconPosition?: CSButtonDropdownIconPosition;
	iconRotate?: string;
	id?: string;
	label?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	size?: CSButtonDropdownSize;
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

		const childrenWithWrapper =  React.Children.map(this.props.children, child => {
			return (
				<li role="none">
					{React.cloneElement(
						child as React.ReactElement<any>,
						{ role: 'menuitem' }
					)}
				</li>
			);
		});

		return (
			<div
				className={btnDropdownWrapperClasses}
				ref={node => this.node = node}
				id={this.props.id}
			>
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
					ariaExpanded={this.state.active}
					ariaHaspopup={!!Object(this.props.children).length}
				/>
				{this.props.hover ?
					(<div className={btnDropdownItemClasses}>
						<ul className="cs-btn-dropdown-item-wrapper" role="menu">
							{childrenWithWrapper}
						</ul>
					</div>) :
					(this.state.active &&
					<div className={btnDropdownItemClasses}>
						<ul className="cs-btn-dropdown-item-wrapper" role="menu">
							{childrenWithWrapper}
						</ul>
					</div>)
				}
			</div>
		);
	}
}

export default CSButtonDropdown;
