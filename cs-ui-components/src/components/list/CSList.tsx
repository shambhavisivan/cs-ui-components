import React from 'react';
import classNames from 'classnames';

export type CSListSize = 'large' | 'medium' | 'small';
export type CSListVariant = 'simple-list' | 'check-list';

export interface CSListProps {
	[key: string]: any;
	className?: string;
	id?: string;
	size?: CSListSize;
	variant?: CSListVariant;
}

class CSList extends React.Component<CSListProps> {
	public static defaultProps = {
		variant: 'simple-list',
		size: 'medium',
	};

	render() {
		const {
			children,
			className,
			id,
			size,
			variant,
			...rest
		} = this.props;

		const listClasses = classNames(
			'cs-list-wrapper',
			{
				[`${className}`]: className,
			},
		);

		const listItems = React.Children.map(children, (child) => {
			if (child) {
				return React.cloneElement(child as React.ReactElement<any>, {
					listSize: size,
					listVariant: variant,
				});
			}

			return null;
		});

		return (
			<ul className={listClasses} id={id} {...rest}>
				{listItems}
			</ul>
		);
	}
}

export default CSList;
