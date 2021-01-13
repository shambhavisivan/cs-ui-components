import React from 'react';
import classNames from 'classnames';
import CSIcon from '../CSIcon';

export type CSPathItemStatus = 'success' | 'error';

export interface CSPathItemProps {
	[key: string]: any;
	active?: boolean;
	disabled?: boolean;
	id?: string;
	onClick?: (e: React.MouseEvent<HTMLLIElement>) => any;
	status?: CSPathItemStatus;
	title: string;
}

class CSPathItem extends React.Component<CSPathItemProps> {
	render() {
		const { active, disabled, status, onClick, id, title, ...rest } = this.props;
		const CSPathItemClasses = classNames(
			'cs-path-item',
			{
				[`cs-path-item-${this.props.status}`]: status,
				'cs-path-item-active': active
			}
		);
		return (
			<li
				onClick={onClick}
				className={CSPathItemClasses}
				title={title}
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
								color={'var(--cs-path-item-icon)'}
							/>
						</span>
					}
					<span className="cs-path-item-title">{this.props.title}</span>
				</button>
			</li>
		);
	}
}

export default CSPathItem;
