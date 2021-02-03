import React from 'react';
import CSButton from '../CSButton';
import classNames from 'classnames';
import { CSIconOrigin } from '../CSIcon';
import CSDropdownItemWrapper from './CSDropdownItemWrapper';

export type CSDropdownAlign = 'left' | 'right';
export type CSDropdownIconPosition = 'left' | 'right';
export type CSDropdownPosition = 'top' | 'bottom';
export type CSDropdownSize = 'xsmall' | 'small' | 'normal' | 'large';
export type CSDropdownStyle = 'initial' | 'brand' | 'outline';
export type CSDropdownType = 'default' | 'error' | 'success' | 'transparent';

export interface CSDropdownProps {
	[key: string]: any;
	align?: CSDropdownAlign;
	btnStyle?: CSDropdownStyle;
	btnType?: CSDropdownType;
	className?: string;
	disabled?: boolean;
	defaultOpen?: boolean;
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

	componentDidMount() {
		// defaultOpen prop is used for cs-grid to stop dropdown toggle button from rendering within cell editor
		// just dropdown will be rendered which will be open by default
		if (this.props.defaultOpen) {
			this.setState({
				active: true
			});
		}
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
		const {
			align,
			btnStyle,
			btnType,
			children,
			className,
			disabled,
			defaultOpen,
			hover,
			iconName,
			iconOrigin,
			iconPosition,
			iconRotate,
			id,
			label,
			maxHeight,
			maxWidth,
			onClick,
			padding,
			position,
			size,
			...rest
		} = this.props;

		const btnDropdownWrapperClasses = classNames(
			'cs-dropdown-wrapper',
			{
				'cs-dropdown-hover': hover === true,
				[`${className}`]: className
			}
		);

		const btnDropdownClasses = classNames(
			{
				'cs-dropdown-active': (this.state.active === true)
			}
		);

		return (
			<div
				className={btnDropdownWrapperClasses}
				ref={node => this.node = node}
				id={id}
				{...rest}
			>
				{!defaultOpen && (
					<CSButton
						btnStyle={btnStyle}
						btnType={btnType}
						className={btnDropdownClasses}
						disabled={disabled}
						iconDisplay={label ? 'default' : 'icon-only'}
						iconName={iconName}
						iconOrigin={iconOrigin}
						iconPosition={(label && iconPosition) ? iconPosition : undefined}
						iconRotate={iconRotate}
						onClick={!hover ? this.toggleActive : null}
						size={size}
						label={label ? label : 'Toggle dropdown'}
						ariaExpanded={this.state.active}
						ariaHaspopup={!!Object(children).length}
					/>
				)}
				<CSDropdownItemWrapper
					align={align}
					maxHeight={maxHeight}
					maxWidth={maxWidth}
					hover={hover}
					padding={padding}
					position={position}
					size={size}
					animated={!hover}
					visible={this.state.active || hover}
				>
					{children}
				</CSDropdownItemWrapper>
			</div>
		);
	}
}

export default CSDropdown;
