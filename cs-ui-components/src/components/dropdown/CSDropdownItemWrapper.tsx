import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import withCSUnmountDelay from '../../helpers/CSUnmountDelay';

import {
	CSDropdownAlign,
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
	mounted: boolean;
	onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => any;
	onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => any;
	padding?: string;
	position: CSDropdownPosition;
	setMounted: () => void;
	style?: CSSProperties;
	visible: boolean;
}

class CSDropdownItemWrapper extends React.Component<CSDropdownItemWrapperProps> {
	public static defaultProps = {
		btnType: 'default',
		btnStyle: 'initial',
		align: 'left',
		iconName: 'down',
		hover: false,
		position: 'bottom'
	};

	componentDidMount() {
		this.props.setMounted();
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
			onMouseEnter,
			onMouseLeave,
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
				className={btnDropdownOuterItemWrapperClasses}
				style={style}
				ref={forwardRef}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<ul className={btnDropdownItemWrapperClasses} role="menu" style={dropdownItemWrapperStyle}>
					{childrenWithWrapper}
				</ul>
			</div>
		);
	}
}

export default withCSUnmountDelay(CSDropdownItemWrapper, 100);
