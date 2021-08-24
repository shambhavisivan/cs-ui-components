import React from 'react';
import classNames from 'classnames';
import CSTooltip from './CSTooltip';

export type CSFieldErrorMsgType = string | Array<string>;

export interface CSFieldErrorMsgProps {
	[key: string]: any;
	className?: string;
	id?: string;
	message: CSFieldErrorMsgType;
	tooltipMessage?: boolean;
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
		const { message, className, id, tooltipMessage, ...rest } = this.props;

		const fieldErrorMsgClasses = classNames(
			'cs-field-error-msg',
			{
				[`${className}`]: className,
			},
		);

		return tooltipMessage ? (
			<CSTooltip content={message} variant="error" position="top-left" />
		) : (
			<span className={fieldErrorMsgClasses} id={id} {...rest}>
				{this.getErrorMessage()}
			</span>
		);
	}
}

export default CSFieldErrorMsg;
