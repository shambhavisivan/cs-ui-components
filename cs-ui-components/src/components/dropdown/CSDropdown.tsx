import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSButton from '../CSButton';
import { CSIconOrigin } from '../CSIcon';
import CSDropdownItemWrapper from './CSDropdownItemWrapper';
import KeyCode from '../../util/KeyCode';
import CSAutoposition from '../../helpers/autoposition/CSAutoposition';
import { CSAutopositions, CSAutopositionSchema } from '../../helpers/autoposition/cs-autoposition-types';

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
	dropdownClassName?: string;
	hover?: boolean;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconPosition?: CSDropdownIconPosition;
	iconRotate?: number | string;
	id?: string;
	label?: string;
	maxHeight?: string;
	maxWidth?: string;
	mode?: CSDropdownMode;
	onDropdownClose?: () => void;
	onDropdownOpen?: () => void;
	onDropdownTabClose?: () => void;
	padding?: string;
	position?: CSDropdownPosition;
	routerLink?: JSX.Element;
	size?: CSDropdownSize;
	title?: string;
	width?: string;
}

export interface CSDropdownStates {
	computedPosition: string;
	dropdownBtnWidth?: number;
	isOpen: boolean;
}

class CSDropdown extends React.Component<CSDropdownProps, CSDropdownStates> {
	public static defaultProps = {
		align: 'left',
		btnType: 'default',
		btnStyle: 'initial',
		iconName: 'down',
		iconOrigin: 'slds',
		iconRotate: 0,
		hover: false,
		mode: 'button',
		position: 'bottom',
		size: 'normal',
	};

	private btnDropdownRef: React.RefObject<HTMLButtonElement>;

	private fixedDeviation = 5;

	private positionSchema: CSAutopositionSchema = [
		{
			position: 'top-left',
			deviation: {
				bottom: this.fixedDeviation,
			},
		},
		{
			position: 'top-right',
			deviation: {
				bottom: this.fixedDeviation,
			},
		},
		{
			position: 'bottom-left',
			deviation: {
				top: this.fixedDeviation,
			},
		},
		{
			position: 'bottom-right',
			deviation: {
				top: this.fixedDeviation,
			},
		},
	];

	constructor(props: CSDropdownProps) {
		super(props);
		this.state = {
			computedPosition: `${props.position}-${props.align}`,
			isOpen: false,
		};

		this.btnDropdownRef = React.createRef();
	}

	handleOutsideClick = (e: any) => {
		// ignore clicks on the component itself
		e.stopPropagation();
		if (
			this.btnDropdownRef.current
			&& !this.btnDropdownRef.current?.contains(e.target)
			&& !document.getElementById('cs-autoposition')?.contains(e.target)) {
			this.closeDropdown();
		}
	}

	openDropdown = () => {
		const { onDropdownOpen } = this.props;
		const elementRect = this.btnDropdownRef.current?.getBoundingClientRect();

		this.setState({
			dropdownBtnWidth: elementRect?.width,
			isOpen: true,
		});

		if (onDropdownOpen) {
			onDropdownOpen();
		}
		document.addEventListener('click', this.handleOutsideClick);
	}

	closeDropdown = () => {
		const { position, align, onDropdownClose } = this.props;

		this.setState({
			computedPosition: `${position}-${align}`,
			isOpen: false,
		}, () => onDropdownClose?.());

		document.removeEventListener('click', this.handleOutsideClick);
	}

	onKeyDown = (event: { key: string; }) => {
		const { isOpen } = this.state;

		if ((event.key === KeyCode.Escape || event.key === KeyCode.Tab) && isOpen) {
			this.closeDropdown();
		}
	}

	toggleDropdown = (event?: React.MouseEvent<any>) => {
		const { mode } = this.props;
		const { isOpen } = this.state;

		event?.stopPropagation();

		// prevent closing the dropdown if click is invoked on mode that isn't button
		if (
			event && event.type === 'click'
			&& mode !== 'button'
			&& event.target !== event.currentTarget
		) {
			return;
		}

		if (!isOpen) {
			this.openDropdown();
		} else {
			this.closeDropdown();
			this.btnDropdownRef.current?.focus();
		}
	}

	flipPosition = (position: string) => {
		if (position === 'left') return 'right';
		return 'left';
	}

	render() {
		const {
			align,
			btnStyle,
			btnType,
			children,
			className,
			disabled,
			dropdownClassName,
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
			onDropdownClose,
			onDropdownOpen,
			onDropdownTabClose,
			padding,
			position,
			routerLink,
			size,
			title,
			width,
			...rest
		} = this.props;

		const {
			computedPosition,
			dropdownBtnWidth,
			isOpen,
		} = this.state;

		const dropdownWrapperClasses = classNames(
			'cs-dropdown-wrapper',
			{
				[`${className}`]: className,
			},
		);

		const btnDropdownClasses = classNames({
			'cs-dropdown-active': isOpen,
		});

		const dropdownStyle: CSSProperties = {
			'--cs-dropdown-btn-width': dropdownBtnWidth ? `${dropdownBtnWidth}px` : '',
		};

		const initialPosition = `${position}-${this.flipPosition(align)}` as CSAutopositions;
		const [yPosition, xPosition] = computedPosition.split('-');

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
					onKeyDown={this.onKeyDown}
					size={size}
					label={label || 'Toggle dropdown'}
					ariaExpanded={!!isOpen}
					ariaHaspopup={!!Object(children).length}
					ref={this.btnDropdownRef}
					title={title}
					routerLink={routerLink}
				>
					{isOpen && (
						<CSAutoposition
							initialPosition={initialPosition}
							referencePoint={this.btnDropdownRef.current}
							positionSchema={this.positionSchema}
							onPositionChange={(newComputedPosition) => this.setState({ computedPosition: newComputedPosition })}
							zIndex="var(--z-index-dropdown-items-wrapper)"
						>
							<CSDropdownItemWrapper
								dropdownClassName={dropdownClassName}
								maxHeight={maxHeight}
								maxWidth={maxWidth}
								mode={mode}
								hover={hover}
								padding={padding}
								visible={!!isOpen}
								style={dropdownStyle}
								toggleDropdown={this.toggleDropdown}
								align={this.flipPosition(xPosition)}
								position={yPosition}
								onDropdownTabClose={onDropdownTabClose}
								width={width}
							>
								{children}
							</CSDropdownItemWrapper>
						</CSAutoposition>
					)}
				</CSButton>
			</div>
		);
	}
}

export default CSDropdown;
