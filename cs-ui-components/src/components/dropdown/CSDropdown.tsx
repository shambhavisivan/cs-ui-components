import React, { CSSProperties } from 'react';
import CSButton from '../CSButton';
import classNames from 'classnames';
import { CSIconOrigin } from '../CSIcon';
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
	maxHeight?: string;
	maxWidth?: string;
	mode?: CSDropdownMode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onDropdownClose?: () => void;
	onDropdownOpen?: () => void;
	onDropdownTabClose?: () => void;
	padding?: string;
	position?: CSDropdownPosition;
	size?: CSDropdownSize;
	width?: string;
}

export interface CSDropdownStates {
	computedDropdownStyle?: CSSProperties;
	computedPosition: Array<string>;
	dropdownBtnWidth?: number;
	isOpen: boolean;
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
			isOpen: false
		};

		this.btnDropdownRef = React.createRef();

		let dropdownRoot = document.getElementById(this.dropdownId);
		if (!dropdownRoot) {
			dropdownRoot = document.createElement('div');
			dropdownRoot.className = this.dropdownId;
			dropdownRoot.id = this.dropdownId;
			document.body.appendChild(dropdownRoot);
		}
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

		this.setState({ isOpen: true });
		if (this.props.onDropdownOpen) {
			this.props.onDropdownOpen();
		}
		document.addEventListener('click', this.handleOutsideClick);
	}

	closeDropdown = () => {
		this.setState({
			computedDropdownStyle: undefined,
			computedPosition: [this.props.position, this.props.align],
			isOpen: false
		}, () => this.props.onDropdownClose?.());

		document.removeEventListener('click', this.handleOutsideClick);
	}

	toggleDropdown = (event?: React.MouseEvent<any>) => {
		// prevent closing the dropdown if click is invoked on mode that isn't button
		if (
			event && event.type === 'click' &&
			this.props.mode !== 'button' &&
			event.target !== event.currentTarget
		) {
			return;
		}

		if (!this.state.isOpen) {
			this.openDropdown();
		} else {
			this.closeDropdown();
			this.btnDropdownRef.current.focus();
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
			onDropdownClose,
			onDropdownOpen,
			onDropdownTabClose,
			padding,
			position,
			size,
			width,
			...rest
		} = this.props;

		const dropdownWrapperClasses = classNames(
			'cs-dropdown-wrapper',
			{
				[`${className}`]: className
			}
		);

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
					onMouseOver={hover ? this.openDropdown : undefined}
					onMouseLeave={hover ? this.closeDropdown : undefined}
					size={size}
					label={label ? label : 'Toggle dropdown'}
					ariaExpanded={!!this.state.computedDropdownStyle}
					ariaHaspopup={!!Object(children).length}
					ref={this.btnDropdownRef}
				>
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
								ref={this.dropdownRefCallback}
								align={this.state.computedPosition[1]}
								position={this.state.computedPosition[0]}
								onDropdownTabClose={onDropdownTabClose}
								width={width}
							>
								{children}
							</CSDropdownItemWrapper>
						</Portal>
					}
				</CSButton>
			</div>
		);
	}
}

export default CSDropdown;
