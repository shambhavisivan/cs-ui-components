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
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any;
	status?: CSPathItemStatus;
	name: string;
}

const CSPathItem = ({
	active,
	className,
	disabled,
	status,
	onClick,
	id,
	name,
	...rest
}: CSPathItemProps) => {
	const CSPathItemClasses = classNames(
		'cs-path-item',
		{
			[`cs-path-item-${status}`]: status,
			'cs-path-item-active': active,
			[`${className}`]: className,
		},
	);

	return (
		<li
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
				onClick={onClick}
				type="button"
			>
				{status
					&& (
						<span className="cs-path-item-icon">
							<CSIcon
								name={status === 'success' ? 'check' : 'warning'}
								color={status === 'warning' ? 'var(--cs-path-item-warning-icon)' : 'var(--cs-path-item-icon)'}
							/>
						</span>
					)}
				<span className="cs-path-item-name">{name}</span>
			</button>
		</li>
	);
};

export default CSPathItem;
