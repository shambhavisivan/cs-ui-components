import React, { CSSProperties } from 'react';
import CSButton from './CSButton';
import classNames from 'classnames';
import { CSIconOrigin } from './CSIcon';

export type CSDropdownAlign = 'left' | 'right';
export type CSDropdownIconPosition = 'left' | 'right';
export type CSDropdownPosition = 'top' | 'bottom';
export type CSDropdownSize = 'xsmall' | 'small' | 'normal' | 'large';
export type CSDropdownStyle = 'initial' | 'brand' | 'outline';
export type CSDropdownType = 'default' | 'error' | 'success' | 'transparent';

export interface CSDropdownProps {
	align?: CSDropdownAlign;
	btnStyle?: CSDropdownStyle;
	btnType?: CSDropdownType;
	className?: string;
	disabled?: boolean;
	hover?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconPosition?: CSDropdownIconPosition;
	iconRotate?: string;
	id?: string;
	label?: string;
	maxHeight?: string;
	maxWidth?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	padding?: string;
	position?: CSDropdownPosition;
	size?: CSDropdownSize;
}

export interface CSDropdownStates {
	active?: boolean;
	toggleActive?: any;
}

class CSDropdown extends React.Component<CSDropdownProps, CSDropdownStates> {

	public static defaultProps = {
		btnType: 'default',
		btnStyle: 'initial',
		align: 'left',
		iconName: 'down',
		hover: false,
		position: 'bottom'
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
			'cs-dropdown-wrapper',
			{
				'cs-dropdown-hover': (this.props.hover === true),
				[`${this.props.className}`]: this.props.className
			}
		);
		const btnDropdownClasses = classNames(
			{
				'cs-dropdown-active': (this.state.active === true)
			}
		);
		const btnDropdownOuterItemWrapperClasses = classNames(
			'cs-dropdown-outer-item-wrapper',
			{
				[`cs-dropdown-${this.props.align}`]: this.props.align,
				[`cs-dropdown-${this.props.position}`]: this.props.position
			}
		);
		const btnDropdownItemWrapperClasses = classNames(
			'cs-dropdown-item-wrapper', {
			'cs-dropdown-item-wrapper-no-padding': this.props.padding === '0'
		});
		const style: CSSProperties = {
			'--cs-dropdown-max-height': this.props.maxHeight,
			'--cs-dropdown-max-width': this.props.maxWidth,
			'--cs-dropdown-padding': this.props.padding
		};
		const childrenWithWrapper = React.Children.map(this.props.children, (child: any) => {
			if (child) {
				return (
					<li role="none">
						{React.cloneElement(
							child,
							{ role: 'menuitem' }
						)}
					</li>
				);
			}
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
					(<div className={btnDropdownOuterItemWrapperClasses}>
						<ul className={btnDropdownItemWrapperClasses} role="menu" style={style}>
							{childrenWithWrapper}
						</ul>
					</div>) :
					(this.state.active &&
						<div className={btnDropdownOuterItemWrapperClasses}>
							<ul className={btnDropdownItemWrapperClasses} role="menu" style={style}>
								{childrenWithWrapper}
							</ul>
						</div>)
				}
			</div>
		);
	}
}

export default CSDropdown;
