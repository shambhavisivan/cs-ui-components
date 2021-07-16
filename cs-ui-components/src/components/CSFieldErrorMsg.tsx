import React from 'react';
import classNames from 'classnames';

export type CSFieldErrorMsgType = string | Array<string>;

export interface CSFieldErrorMsgProps {
	[key: string]: any;
	className?: string;
	id?: string;
	message: CSFieldErrorMsgType;
}

class CSFieldErrorMsg extends React.Component<CSFieldErrorMsgProps> {
	getErrorMessage = () => {
		if (Array.isArray(this.props.message)) {
			return this.props.message.join(' ');
		} 
			return this.props.message;
		
	}

	render() {
		const { message, className, id, ...rest } = this.props;

		const fieldErrorMsgClasses = classNames(
			'cs-field-error-msg',
			{
				[`${className}`]: className
			}
		);

		return (
			<span className={fieldErrorMsgClasses} id={id} {...rest}>
				{this.getErrorMessage()}
			</span>
		);
	}
}

export default CSFieldErrorMsg;
