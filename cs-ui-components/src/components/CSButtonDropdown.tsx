import React, { Component } from 'react';
import CSIcon from './CSIcon';
import CSButton from './CSButton';
import classNames from 'classnames';

export interface CSButtonDropdownProps {
	btnType?: string;
	btnStyle?: string;
	size?: string;
	iconName?: string;
	iconOrigin?: string;
	disabled?: boolean;
	className?: string;
	align?: string;
	iconRotate?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface CSButtonDropdownStates {
	active?: boolean;
	toggleActive?: any;
}

class CSButtonDropdown extends React.Component<CSButtonDropdownProps, CSButtonDropdownStates> {

	public static defaultProps = {
		btnType: 'default',
		btnStyle: 'initial',
		align: 'left',
		iconName: 'down'
	};

	constructor(props: any) {
		super(props);
		this.toggleActive = this.toggleActive.bind(this);
		this.state = {
			active: false
		};
	}

	toggleActive() {
		const currentState = this.state.active;
		this.setState({ active: !currentState });
	}

	render() {

		return (
			<div className="cs-btn-dropdown-wrapper">
				<CSButton
					className="cs-btn-dropdown cs-btn-icon-only"
					btnType={this.props.btnType}
					btnStyle={this.props.btnStyle}
					size={this.props.size}
					iconName={this.props.iconName}
					iconOrigin={this.props.iconOrigin}
					iconRotate={this.props.iconRotate}
					disabled={this.props.disabled}
					onClick={this.toggleActive}
				/>
				{this.state.active ? (
					<div className={`cs-btn-dropdown-item-wrapper cs-btn-dropdown-${this.props.align}`}>
						{this.props.children}
					</div>
				) : null}
			</div>
		);
	}

}

export default CSButtonDropdown;
