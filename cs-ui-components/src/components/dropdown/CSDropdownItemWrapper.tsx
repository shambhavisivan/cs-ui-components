import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import withCSUnmountDelay from '../../helpers/CSUnmountDelay';
import KeyCode from '../../util/KeyCode';
import CSButton from '../CSButton';

import {
	CSDropdownAlign,
	CSDropdownMode,
	CSDropdownPosition
} from './CSDropdown';

export interface CSDropdownItemWrapperProps {
	align: CSDropdownAlign;
	animated: boolean;
	children?: any;
	forwardRef?: any;
	hover?: boolean;
	maxHeight?: string;
	maxWidth?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
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
			if (this.props.mode === 'button') {
				this.getFocusableElements(this.dropdownUListRef.current);
				if (this.focusableElements.length) {
					this.focusableElements[0].focus();
				}
			}
			// TODO: handle focus for mode='list' and mode='custom'
		}
	}

	getFocusableElements(element: any) {
		this.focusableElements = element.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]:not([disabled])');
	}

	handleBtnOnClick(onClick: any) {
		// If onClick prop passes invoke the function
		onClick?.();
		// Close dropdown on click
		this.props.toggleDropdown?.(true);
	}

	handleArrowKeys(event: any) {
		const focusableElements = Array.from(this.focusableElements);
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];
		let index = focusableElements.indexOf(document.activeElement);

		switch (event.key) {
			case KeyCode.ArrowUp:
				if (document.activeElement === firstElement) {
					(lastElement as HTMLElement).focus();
				} else {
					index = --index;
					(focusableElements[index] as HTMLElement).focus();
				}
				break;
			case KeyCode.ArrowDown:
				if (document.activeElement === lastElement) {
					(firstElement as HTMLElement).focus();
				} else {
					index = ++index;
					(focusableElements[index] as HTMLElement).focus();
				}
				break;
		}
	}

	render() {
		const {
			align,
			animated,
			children,
			forwardRef,
			hover,
			maxHeight,
			maxWidth,
			mounted,
			mode,
			padding,
			position,
			style,
			visible
		} = this.props;

		const btnDropdownOuterItemWrapperClasses = classNames(
			'cs-dropdown-outer-item-wrapper', {
			'cs-dropdown-hidden': !(visible && mounted) && animated,
			'cs-dropdown-hover': hover,
			[`cs-dropdown-${position}-${align}`]: position && align && hover
		});

		const btnDropdownItemWrapperClasses = classNames(
			'cs-dropdown-item-wrapper', {
			'cs-dropdown-item-wrapper-no-padding': padding === '0'
		});

		const dropdownItemWrapperStyle: CSSProperties = {
			'--cs-dropdown-max-height': maxHeight,
			'--cs-dropdown-max-width': maxWidth,
			'--cs-dropdown-padding': padding
		};

		const childrenWithWrapper = React.Children.map(children, (child: any) => {
			if (child) {
				if (child.type === CSButton && mode === 'button') {
					return (
						<li role="none">
							{React.cloneElement(
								child,
								{
									onClick: () => { this.handleBtnOnClick(child.props.onClick ? child.props.onClick : null); },
									onKeyDown: (event: any) => this.handleArrowKeys(event),
									role: 'menuitem'
								}
							)}
						</li>
					);
				} else {
					return (
						<li role="none">
							{React.cloneElement(
								child,
								{
									role: 'menuitem'
								}
							)}
						</li>
					);
				}
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
				>
					{childrenWithWrapper}
				</ul>
			</div>
		);
	}
}

export default withCSUnmountDelay(CSDropdownItemWrapper, 100);
