import React, { CSSProperties } from 'react';
import classNames from 'classnames';

export type CSDividerVariant = 'vertical' | 'horizontal';

export interface CSDividerProps {
	[key: string]: any;
	className?: string;
	id?: string;
	label?: string;
	size?: string;
	variant: CSDividerVariant;
}

const CSDivider = ({
	className,
	id,
	label,
	size,
	variant,
	...rest
}: CSDividerProps) => {
	const dividerClasses = classNames(
		'cs-divider',
		[`cs-divider-${variant}`],
		{
			'cs-divider-with-label': label,
			[`${className}`]: className,
		},
	);
	const style: CSSProperties = {
		'--cs-divider-size': size,
	};
	return (
		<div
			className={dividerClasses}
			style={style}
			role="separator"
			aria-orientation={variant}
			id={id}
			{...rest}
		>
			{(label && variant === 'horizontal')
					&& <span className="cs-divider-label">{label}</span>}
		</div>
	);
};

export default CSDivider;
