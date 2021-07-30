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
		const { message } = this.props;
		if (Array.isArray(message)) {
			return message.join(' ');
		}
		return message;
	}

	render() {
		const {
			message, className, id, ...rest
		} = this.props;

		const fieldErrorMsgClasses = classNames(
			'cs-field-error-msg',
			{
				[`${className}`]: className,
			},
		);

		return (
			<span className={fieldErrorMsgClasses} id={id} {...rest}>
				{this.getErrorMessage()}
			</span>
		);
	}
}

export default CSFieldErrorMsg;
