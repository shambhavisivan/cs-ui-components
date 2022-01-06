import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import withCSUnmountDelay from '../../helpers/CSUnmountDelay';
import KeyCode from '../../util/KeyCode';
import CSDivider from '../CSDivider';

import {
	CSDropdownAlign,
	CSDropdownMode,
	CSDropdownPosition,
} from './CSDropdown';

export interface CSDropdownItemWrapperProps {
	align: CSDropdownAlign;
	children?: any;
	dropdownClassName?: string;
	forwardRef?: any;
	hover?: boolean;
	maxHeight?: string;
	maxWidth?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
	onDropdownTabClose?: () => void;
	onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => any;
	onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => any;
	mode?: CSDropdownMode;
	padding?: string;
	position: CSDropdownPosition;
	setMounted: () => void;
	style?: CSSProperties;
	toggleDropdown?: (e?: React.MouseEvent<any>) => void;
	mounted: boolean;
	visible: boolean;
	width?: string;
}

class CSDropdownItemWrapper extends React.Component<CSDropdownItemWrapperProps> {
	private dropdownUListRef: any;

	private focusableElements: any;

	constructor(props: CSDropdownItemWrapperProps) {
		super(props);
		this.dropdownUListRef = React.createRef();

		this.getFocusableElements = this.getFocusableElements.bind(this);
	}

	componentDidMount() {
		const { setMounted } = this.props;
		setMounted();
	}

	componentDidUpdate(prevProps: CSDropdownItemWrapperProps) {
		const { mounted } = this.props;

		if (prevProps.mounted !== mounted) {
			this.getFocusableElements(this.dropdownUListRef.current);
			if (this.focusableElements.length) {
				this.focusableElements[0].focus();
			}
		}
	}

	getFocusableElements(element: any) {
		this.focusableElements = element.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]:not([disabled])');
	}

	handleKeyDown = (event: React.KeyboardEvent<any>) => {
		const focusableElements = Array.from(this.focusableElements);
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];
		const { mode, onDropdownTabClose, toggleDropdown } = this.props;
		const index = focusableElements.indexOf(document.activeElement);

		// if mode is button enable arrow keys navigation
		if (mode === 'button') {
			if (event.key === KeyCode.ArrowUp) {
				if (document.activeElement === firstElement) (lastElement as HTMLElement).focus();
				else (focusableElements[index - 1] as HTMLElement).focus();
			}
			if (event.key === KeyCode.ArrowDown) {
				if (document.activeElement === lastElement) (firstElement as HTMLElement).focus();
				else (focusableElements[index + 1] as HTMLElement).focus();
			}
			if (event.key === KeyCode.Tab) {
				toggleDropdown();
				onDropdownTabClose?.();
				event.stopPropagation();
			}
		} else if (event.key === KeyCode.Tab) {
			event.stopPropagation();
			if (lastElement === document.activeElement) { // if mode isn't button and last element is focused
				toggleDropdown();
			}
		}

		// if escape is pressed close the dropdown (this applies to all modes)
		if (event.key === KeyCode.Escape) {
			event.preventDefault();
			toggleDropdown();
		}
	}

	handleBtnClick = (event: React.MouseEvent<any>) => {
		const { toggleDropdown } = this.props;
		toggleDropdown(event);
	}

	render() {
		const {
			align,
			children,
			dropdownClassName,
			forwardRef,
			hover,
			maxHeight,
			maxWidth,
			mode,
			mounted,
			padding,
			position,
			style,
			visible,
			width,
		} = this.props;

		const btnDropdownOuterItemWrapperClasses = classNames(
			'cs-dropdown-outer-item-wrapper',
			{
				[`${dropdownClassName}`]: dropdownClassName,
				'cs-dropdown-hidden': !(visible && mounted),
				'cs-dropdown-hover': hover,
				[`cs-dropdown-${position}-${align}`]: position && align && hover,
			},
		);

		const btnDropdownItemWrapperClasses = classNames(
			'cs-dropdown-item-wrapper',
			{
				'cs-dropdown-item-wrapper-no-padding': padding === '0',
			},
		);

		const dropdownItemWrapperStyle: CSSProperties = {
			'--cs-dropdown-max-height': maxHeight,
			'--cs-dropdown-max-width': maxWidth,
			'--cs-dropdown-width': width,
			'--cs-dropdown-padding': padding,
		};

		const childrenWithWrapper = React.Children.map(children, (child: any) => {
			if (!child) return null;

			if (child.type === CSDivider) {
				return (
					<>
						{child}
					</>
				);
			}

			if (mode === 'button') {
				return (
					<li role="none">
						{React.cloneElement(child, {
							role: 'menuitem',
							onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
								child.props.onClick?.(e);
								this.handleBtnClick(e);
							},
						})}
					</li>

				);
			}

			if (mode === 'list') {
				return (
					<li role="none">
						{React.cloneElement(child, { role: 'menuitem' })}
					</li>
				);
			}

			// mode === custom
			return (
				<div role="none">
					{child}
				</div>
			);
		});

		const dropdownItemWrapperProps = {
			className: btnDropdownItemWrapperClasses,
			style: dropdownItemWrapperStyle,
			ref: this.dropdownUListRef,
			onKeyDown: this.handleKeyDown,
		};

		return (
			<div
				className={btnDropdownOuterItemWrapperClasses}
				style={style}
				ref={forwardRef}
			>
				{mode !== 'custom'
					? (
						<ul
							{...dropdownItemWrapperProps}
							role="menu"
						>
							{childrenWithWrapper}
						</ul>
					)
					: (
						<div
							{...dropdownItemWrapperProps}
							role="menu"
							tabIndex={0}
						>
							{childrenWithWrapper}
						</div>
					)}
			</div>
		);
	}
}

export default withCSUnmountDelay(CSDropdownItemWrapper, 100);
