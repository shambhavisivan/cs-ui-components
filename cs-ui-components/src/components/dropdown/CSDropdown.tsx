import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { Portal } from 'react-portal';
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
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onDropdownClose?: () => void;
	onDropdownOpen?: () => void;
	onDropdownTabClose?: () => void;
	padding?: string;
	position?: CSDropdownPosition;
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
		btnType: 'default',
		btnStyle: 'initial',
		align: 'left',
		iconName: 'down',
		hover: false,
		mode: 'button',
		position: 'bottom',
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
			computedPosition: `${this.props.position}-${this.props.align}`,
			isOpen: false,
		};

		this.btnDropdownRef = React.createRef();
	}

	handleOutsideClick = (e: any) => {
		// ignore clicks on the component itself
		e.stopPropagation();
		if (
			this.btnDropdownRef.current
			&& !this.btnDropdownRef.current.contains(e.target)
			&& !document.getElementById('cs-autoposition').contains(e.target)) {
			this.closeDropdown();
		}
	}

	openDropdown = () => {
		const elementRect = this.btnDropdownRef.current.getBoundingClientRect();

		this.setState({
			dropdownBtnWidth: elementRect.width,
			isOpen: true,
		});

		if (this.props.onDropdownOpen) {
			this.props.onDropdownOpen();
		}
		document.addEventListener('click', this.handleOutsideClick);
	}

	closeDropdown = () => {
		this.setState({
			computedPosition: `${this.props.position}-${this.props.align}`,
			isOpen: false,
		}, () => this.props.onDropdownClose?.());

		document.removeEventListener('click', this.handleOutsideClick);
	}

	onKeyDown = (event: { key: string; }) => {
		if (event.key === KeyCode.Escape && this.state.isOpen) {
			this.closeDropdown();
		}
	}

	toggleDropdown = (event?: React.MouseEvent<any>) => {
		// prevent closing the dropdown if click is invoked on mode that isn't button
		if (
			event && event.type === 'click'
			&& this.props.mode !== 'button'
			&& event.target !== event.currentTarget
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

	flipPosition = (position: string) => {
		switch (position) {
		case 'left':
			return 'right';
		case 'right':
			return 'left';
		default:
			break;
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
			onClick,
			onDropdownClose,
			onDropdownOpen,
			onDropdownTabClose,
			padding,
			position,
			size,
			title,
			width,
			...rest
		} = this.props;

		const dropdownWrapperClasses = classNames(
			'cs-dropdown-wrapper',
			{
				[`${className}`]: className,
			},
		);

		const btnDropdownClasses = classNames({
			'cs-dropdown-active': this.state.isOpen,
		});

		const dropdownStyle: CSSProperties = {
			'--cs-dropdown-btn-width': this.state.dropdownBtnWidth ? `${this.state.dropdownBtnWidth}px` : '',
		};

		const initialPosition = `${position}-${this.flipPosition(align)}` as CSAutopositions;
		const [yPosition, xPosition] = this.state.computedPosition.split('-');

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
					ariaExpanded={!!this.state.isOpen}
					ariaHaspopup={!!Object(children).length}
					ref={this.btnDropdownRef}
					title={title}
				>
					{this.state.isOpen && (
						<CSAutoposition
							initialPosition={initialPosition}
							referencePoint={this.btnDropdownRef.current}
							positionSchema={this.positionSchema}
							onPositionChange={(computedPosition) => this.setState({ computedPosition })}
							zIndex="var(--z-index-dropdown-items-wrapper)"
						>
							<CSDropdownItemWrapper
								maxHeight={maxHeight}
								maxWidth={maxWidth}
								mode={mode}
								hover={hover}
								padding={padding}
								animated={!hover}
								visible={!!this.state.isOpen}
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
