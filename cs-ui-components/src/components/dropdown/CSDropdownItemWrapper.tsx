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
	animated: boolean;
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
	toggleDropdown?: (focusBtnAfterClose?: boolean) => void;
	mounted: boolean;
	visible: boolean;
	width?: string;
}

class CSDropdownItemWrapper extends React.Component<CSDropdownItemWrapperProps> {
	private dropdownUListRef: React.RefObject<HTMLUListElement>;

	private focusableElements: any;

	constructor(props: CSDropdownItemWrapperProps) {
		super(props);
		this.dropdownUListRef = React.createRef();

		this.getFocusableElements = this.getFocusableElements.bind(this);
	}

	componentDidMount() {
		this.props.setMounted();
	}

	componentDidUpdate(prevProps: CSDropdownItemWrapperProps) {
		if (prevProps.mounted !== this.props.mounted) {
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
		let index = focusableElements.indexOf(document.activeElement);

		// if mode is button enable arrow keys navigation
		if (mode === 'button') {
			switch (event.key) {
			case KeyCode.ArrowUp:
				if (document.activeElement === firstElement) {
					(lastElement as HTMLElement).focus();
				} else {
					index -= 1;
					(focusableElements[index] as HTMLElement).focus();
				}
				break;
			case KeyCode.ArrowDown:
				if (document.activeElement === lastElement) {
					(firstElement as HTMLElement).focus();
				} else {
					index += 1;
					(focusableElements[index] as HTMLElement).focus();
				}
				break;
			case KeyCode.Tab:
				toggleDropdown();
					// onDropdownTabClose prop - Needed for CSGrid to focus next cell when tab key pressed
				onDropdownTabClose?.();
				break;
			}
		} else if (// if mode isn't button and last element is focused
			event.key === KeyCode.Tab
			&& lastElement === document.activeElement
		) {
			toggleDropdown();
		}

		// if escape is pressed close the dropdown (this applies to all modes)
		if (event.key === KeyCode.Escape) {
			event.preventDefault();
			toggleDropdown();
		}
	}

	render() {
		const {
			align,
			animated,
			children,
			dropdownClassName,
			forwardRef,
			hover,
			maxHeight,
			maxWidth,
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
				'cs-dropdown-hidden': !(visible && mounted) && animated,
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
			if (child) {
				if (child.type === CSDivider) {
					return (
						<>
							{child}
						</>
					);
				}
				return (
					<li role="none">
						{React.cloneElement(
							child,
							{
								role: 'menuitem',
							},
						)}
					</li>
				);
			}
		});

		return (
			<div
				className={btnDropdownOuterItemWrapperClasses}
				style={style}
				ref={forwardRef}
			>
				<ul
					className={btnDropdownItemWrapperClasses}
					role="menu"
					style={dropdownItemWrapperStyle}
					ref={this.dropdownUListRef}
					onKeyDown={this.handleKeyDown}
				>
					{childrenWithWrapper}
				</ul>
			</div>
		);
	}
}

export default withCSUnmountDelay(CSDropdownItemWrapper, 100);
