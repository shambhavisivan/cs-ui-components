import React from 'react';
import classNames from 'classnames';

export interface CSProgressIndicatorProps {
	className?: string;
	id?: string;
}

class CSProgressIndicator extends React.Component<CSProgressIndicatorProps> {

	render() {
		const {
			className,
			id,
			...rest
		} = this.props;

		const progressIndicatorClasses = classNames(
			'cs-progress-indicator', {
				[`${className}`]: className
			}
		);

		return (
			<ol
				className={progressIndicatorClasses}
				id={id}
				{...rest}
			>
				{this.props.children}
			</ol>
		);
	}
}

export default CSProgressIndicator;
