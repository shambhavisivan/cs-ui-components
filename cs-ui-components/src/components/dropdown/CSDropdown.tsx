import React, { CSSProperties } from 'react';
import CSButton from '../CSButton';
import classNames from 'classnames';
import { CSIconOrigin } from '../CSIcon';
import CSDropdownItemWrapper from './CSDropdownItemWrapper';
import { Portal, PortalWithState } from 'react-portal';

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
		position: 'bottom'
	};

	private dropdownId = 'cs-dropdown-root';
	private btnDropdownRef: React.RefObject<HTMLButtonElement>;
	private wrapperDropdownRef: React.RefObject<HTMLDivElement>;
	private element: React.RefObject<HTMLButtonElement> | React.RefObject<HTMLDivElement>;

	constructor(props: any) {
		super(props);
		this.state = {
			computedPosition: [this.props.position, this.props.align],
			isOpened: false
		};

		this.btnDropdownRef = React.createRef();
		this.wrapperDropdownRef = React.createRef();

		this.element = this.props.defaultOpen ? this.wrapperDropdownRef : this.btnDropdownRef;

		let dropdownRoot = document.getElementById(this.dropdownId);
		if (!dropdownRoot) {
			dropdownRoot = document.createElement('div');
			dropdownRoot.className = this.dropdownId;
			dropdownRoot.id = this.dropdownId;
			document.body.appendChild(dropdownRoot);
		}
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOutsideClick);
	}

	handleOutsideClick = (e: any) => {
		// ignore clicks on the component itself
		e.stopPropagation();
		if (
			this.element.current &&
			!this.element.current.contains(e.target) &&
			!document.getElementById(this.dropdownId).contains(e.target)) {
			this.closeDropdown();
		}
	}

	openDropdown = () => {
		const { defaultOpen, hover } = this.props;
		const elementRect = this.element.current.getBoundingClientRect();
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
	}

	closeDropdown = () => {
		this.setState({
			computedDropdownStyle: undefined,
			computedPosition: [this.props.position, this.props.align],
			isOpened: false
		});
		document.removeEventListener('click', this.handleOutsideClick);
	}

	toggleDropdown = () => {
		if (!this.state.isOpened) {
			this.openDropdown();
		} else {
			this.closeDropdown();
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
				ref={defaultOpen ? this.wrapperDropdownRef : undefined}
				{...rest}
			>
				{!defaultOpen &&
					<CSButton
						btnStyle={btnStyle}
						btnType={btnType}
						className={btnDropdownClasses}
						disabled={disabled}
						labelHidden={label ? false : true}
						iconName={iconName}
						iconOrigin={iconOrigin}
						iconPosition={(label && iconPosition) ? iconPosition : undefined}
						iconRotate={iconRotate}
						onClick={hover ? undefined : this.toggleDropdown}
						onMouseEnter={hover ? this.openDropdown : undefined}
						onMouseLeave={hover ? this.closeDropdown : undefined}
						size={size}
						label={label ? label : 'Toggle dropdown'}
						ariaExpanded={!!this.state.computedDropdownStyle}
						ariaHaspopup={!!Object(children).length}
						ref={this.btnDropdownRef}
					/>
				}
				<Portal node={document && document.getElementById(this.dropdownId)}>
					<CSDropdownItemWrapper
						maxHeight={maxHeight}
						maxWidth={maxWidth}
						hover={hover}
						padding={padding}
						animated={!hover}
						visible={!!this.state.computedDropdownStyle}
						style={dropdownStyle}
						onMouseEnter={hover ? this.openDropdown : undefined}
						onMouseLeave={hover ? this.closeDropdown : undefined}
						ref={this.dropdownRefCallback}
						align={this.state.computedPosition[1]}
						position={this.state.computedPosition[0]}
					>
						{children}
					</CSDropdownItemWrapper>
				</Portal>
			</div>
		);
	}
}

export default CSDropdown;
