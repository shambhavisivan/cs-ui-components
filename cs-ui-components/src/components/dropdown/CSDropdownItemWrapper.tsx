import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import withCSUnmountDelay from '../../helpers/CSUnmountDelay';

import {
	CSDropdownAlign,
	CSDropdownPosition,
	CSDropdownSize
} from './CSDropdown';

export interface CSDropdownItemWrapperProps {
	align?: CSDropdownAlign;
	animated: boolean;
	children?: any;
	hover?: boolean;
	maxHeight?: string;
	maxWidth?: string;
	padding?: string;
	position?: CSDropdownPosition;
	size?: CSDropdownSize;
	setMounted: () => void;
	mounted: boolean;
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
			children,
			maxHeight,
			maxWidth,
			padding,
			position,
			visible,
			mounted,
			animated
		} = this.props;

		const btnDropdownOuterItemWrapperClasses = classNames(
			'cs-dropdown-outer-item-wrapper',
			{
				'cs-dropdown-hidden': !(visible && mounted) && animated,
				[`cs-dropdown-${this.props.align}`]: align,
				[`cs-dropdown-${this.props.position}`]: position
			}
		);

		const btnDropdownItemWrapperClasses = classNames(
			'cs-dropdown-item-wrapper',
			{
				'cs-dropdown-item-wrapper-no-padding': this.props.padding === '0'
			}
		);

		const style: CSSProperties = {
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
			<div className={btnDropdownOuterItemWrapperClasses}>
				<ul className={btnDropdownItemWrapperClasses} role="menu" style={style}>
					{childrenWithWrapper}
				</ul>
			</div>
		);
	}
}

export default  withCSUnmountDelay(CSDropdownItemWrapper, 100);
