import React, { CSSProperties } from 'react';
import CSButton from '../CSButton';
import classNames from 'classnames';
import { CSIconOrigin } from '../CSIcon';
import KeyCode from '../../util/KeyCode';
import CSDropdownItemWrapper from './CSDropdownItemWrapper';
import { Portal } from 'react-portal';

export type CSDropdownAlign = 'left' | 'right';
export type CSDropdownIconPosition = 'left' | 'right';
export type CSDropdownMode = 'button' | 'list' | 'custom';
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
	hover?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconPosition?: CSDropdownIconPosition;
	iconRotate?: string;
	id?: string;
	label?: string;
	mode?: CSDropdownMode;
	maxHeight?: string;
	maxWidth?: string;
	onDropdownClose?: () => void;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	padding?: string;
	position?: CSDropdownPosition;
	size?: CSDropdownSize;
}

export interface CSDropdownStates {
	computedDropdownStyle?: CSSProperties;
	computedPosition: Array<string>;
	dropdownBtnWidth?: number;
	isOpened: boolean;
}

class CSDropdown extends React.Component<CSDropdownProps, CSDropdownStates> {
	public static defaultProps = {
		btnType: 'default',
		btnStyle: 'initial',
		align: 'left',
		iconName: 'down',
		hover: false,
		mode: 'button',
		position: 'bottom'
	};

	private dropdownId = 'cs-dropdown-root';
	private btnDropdownRef: React.RefObject<HTMLButtonElement>;

	constructor(props: CSDropdownProps) {
		super(props);
		this.state = {
			computedPosition: [this.props.position, this.props.align],
			isOpened: false
		};

		this.btnDropdownRef = React.createRef();

		let dropdownRoot = document.getElementById(this.dropdownId);
		if (!dropdownRoot) {
			dropdownRoot = document.createElement('div');
			dropdownRoot.className = this.dropdownId;
			dropdownRoot.id = this.dropdownId;
			document.body.appendChild(dropdownRoot);
		}
		this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
		this.openDropdownOnKeyDown = this.openDropdownOnKeyDown.bind(this);
	}

	handleOutsideClick = (e: any) => {
		// ignore clicks on the component itself
		e.stopPropagation();
		if (
			this.btnDropdownRef.current &&
			!this.btnDropdownRef.current.contains(e.target) &&
			!document.getElementById(this.dropdownId).contains(e.target)) {
			this.closeDropdown();
		}
	}

	openDropdown = () => {
		const { hover } = this.props;
		const elementRect = this.btnDropdownRef.current.getBoundingClientRect();
		const top = elementRect.top + elementRect.height + 5;
		const bottom = window.innerHeight - elementRect.top + 5;
		const left = elementRect.left;
		const right = window.innerWidth - elementRect.right;

		const dropdownPosition = this.state.computedPosition.join('-');

		switch (dropdownPosition) {
			case 'top-right':
				this.setState({
					computedDropdownStyle: {
						bottom,
						right
					}
				});
				break;
			case 'top-left':
				this.setState({
					computedDropdownStyle: {
						bottom,
						left
					}
				});
				break;
			case 'bottom-right':
				this.setState({
					computedDropdownStyle: {
						top,
						right
					}
				});
				break;
			case 'bottom-left':
			default:
				this.setState({
					computedDropdownStyle: {
						top,
						left
					}
				});
		}

		if (hover) {
			this.setState({
				dropdownBtnWidth: elementRect.width
			});
		}

		this.setState({ isOpened: true });
		document.addEventListener('click', this.handleOutsideClick);
		document.addEventListener('keydown', this.handleOnKeyDown);
	}

	handleOnKeyDown(event: any) {
		if (this.state.isOpened) {
			// If escape key pressed close the dropdown and return focus to dropdown button
			if (event.key === KeyCode.Escape) {
				this.closeDropdown();
				this.btnDropdownRef.current.focus();
			}

			// If tab key is pressed close dropdown and return focus to dropdown button
			// TODO: When tab is pressed, focus should move to the next focusable element, not the dropdown button
			if (event.key === KeyCode.Tab && this.props.mode === 'button') {
				event.preventDefault();
				this.closeDropdown();
				this.btnDropdownRef.current.focus();
				// onDropdownClose prop - Needed for CSGrid to focus next cell when tab key pressed
				this.props.onDropdownClose?.();
			}
		}
	}

	// If dropdown is closed && arrow down key pressed open the dropdown
	openDropdownOnKeyDown(event: any) {
		if (!this.state.isOpened) {
			if (event.key === KeyCode.ArrowDown) {
				event.preventDefault();
				this.openDropdown();
			}
		}
	}

	closeDropdown = () => {
		this.setState({
			computedDropdownStyle: undefined,
			computedPosition: [this.props.position, this.props.align],
			isOpened: false
		});
		document.removeEventListener('click', this.handleOutsideClick);
		document.removeEventListener('keydown', this.handleOnKeyDown);
	}

	toggleDropdown = (focusBtnAfterClose?: boolean) => {
		if (!this.state.isOpened) {
			this.openDropdown();
		} else {
			this.closeDropdown();
			// Return focus to dropdown button after click on a button inside dropdown
			if (focusBtnAfterClose) {
				this.btnDropdownRef.current.focus();
			}
		}
	}

	autoDropdownPosition = (dropdownRect: DOMRect) => {
		const { computedPosition } = this.state;
		let [openOn, alignTo] = computedPosition;

		// check top position of dropdown
		if (dropdownRect.top <= 0 && openOn === 'top') {
			openOn = 'bottom';
		}
		// check bottom position of dropdown
		if (dropdownRect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight)
			&& openOn === 'bottom') {
			openOn = 'top';
		}
		// check right position of dropdown
		if (dropdownRect.right >=
			(window.innerWidth || document.documentElement.clientWidth) &&
			alignTo === 'left') {
			alignTo = 'right';
		}
		// check left position of dropdown
		if (dropdownRect.left <= 0 && alignTo === 'right') {
			alignTo = 'left';
		}

		const position = [openOn, alignTo];
		if (JSON.stringify(position) !== JSON.stringify(computedPosition)) {
			this.setState({
				computedPosition: position
			}, this.openDropdown);
		}
	}

	dropdownRefCallback = (element: HTMLDivElement) => {
		if (element) {
			const tooltipRect = element.getBoundingClientRect();
			this.autoDropdownPosition(tooltipRect);
		}
	}

	render() {
		const {
			align,
			btnStyle,
			btnType,
			children,
			className,
			onDropdownClose,
			disabled,
			hover,
			iconName,
			iconOrigin,
			iconPosition,
			iconRotate,
			id,
			label,
			maxHeight,
			maxWidth,
			mode,
			onClick,
			padding,
			position,
			size,
			...rest
		} = this.props;

		const dropdownWrapperClasses = classNames(
			'cs-dropdown-wrapper', {
			[`${className}`]: className
		});

		const btnDropdownClasses = classNames({
			'cs-dropdown-active': this.state.computedDropdownStyle
		});

		const dropdownStyle: CSSProperties = {
			...this.state.computedDropdownStyle,
			'--cs-dropdown-btn-width': this.state.dropdownBtnWidth ? this.state.dropdownBtnWidth + 'px' : ''
		};

		return (
			<div
				className={dropdownWrapperClasses}
				id={id}
				{...rest}
			>
				<CSButton
					btnStyle={btnStyle}
					btnType={btnType}
					className={btnDropdownClasses}
					disabled={!children ? true : disabled}
					iconName={iconName}
					iconOrigin={iconOrigin}
					iconPosition={(label && iconPosition) ? iconPosition : undefined}
					iconRotate={iconRotate}
					labelHidden={!label}
					onClick={hover ? undefined : this.toggleDropdown}
					onKeyDown={this.openDropdownOnKeyDown}
					onMouseEnter={hover ? this.openDropdown : undefined}
					onMouseLeave={hover ? this.closeDropdown : undefined}
					size={size}
					label={label ? label : 'Toggle dropdown'}
					ariaExpanded={!!this.state.computedDropdownStyle}
					ariaHaspopup={!!Object(children).length}
					ref={this.btnDropdownRef}
				/>
				{this.state.computedDropdownStyle &&
					<Portal node={document && document.getElementById(this.dropdownId)}>
						<CSDropdownItemWrapper
							maxHeight={maxHeight}
							maxWidth={maxWidth}
							mode={mode}
							hover={hover}
							padding={padding}
							animated={!hover}
							visible={!!this.state.computedDropdownStyle}
							style={dropdownStyle}
							toggleDropdown={this.toggleDropdown}
							onMouseEnter={hover ? this.openDropdown : undefined}
							onMouseLeave={hover ? this.closeDropdown : undefined}
							ref={this.dropdownRefCallback}
							align={this.state.computedPosition[1]}
							position={this.state.computedPosition[0]}
						>
							{children}
						</CSDropdownItemWrapper>
					</Portal>
				}
			</div>
		);
	}
}

export default CSDropdown;
