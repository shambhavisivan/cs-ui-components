import React from 'react';
import classNames from 'classnames';
import CSIcon from '../CSIcon';

export type CSPathItemStatus = 'success' | 'error' | 'warning';

export interface CSPathItemProps {
	[key: string]: any;
	active?: boolean;
	className?: string;
	disabled?: boolean;
	id?: string;
	onClick?: (e: React.MouseEvent<HTMLLIElement>) => any;
	status?: CSPathItemStatus;
	name: string;
}

class CSPathItem extends React.Component<CSPathItemProps> {

	render() {
		const {
			active,
			className,
			disabled,
			status,
			onClick,
			id,
			name,
			...rest
		} = this.props;

		const CSPathItemClasses = classNames(
			'cs-path-item',
			{
				[`cs-path-item-${this.props.status}`]: status,
				'cs-path-item-active': active,
				[`${className}`]: className
			}
		);

		return (
			<li
				onClick={onClick}
				className={CSPathItemClasses}
				title={name}
				id={id}
				{...rest}
			>
				<button
					aria-current={active}
					aria-invalid={status === 'error'}
					disabled={disabled}
					className="cs-path-item-wrapper"
				>
					{this.props.status &&
						<span className="cs-path-item-icon">
							<CSIcon
								name={status === 'success' ? 'check' : 'warning'}
								color={status === 'warning' ? 'var(--cs-path-item-warning-icon)' : 'var(--cs-path-item-icon)'}
							/>
						</span>
					}
					<span className="cs-path-item-name">{this.props.name}</span>
				</button>
			</li>
		);
	}
}

export default CSPathItem;
