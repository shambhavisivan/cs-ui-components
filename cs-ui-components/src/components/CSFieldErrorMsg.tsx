import React from 'react';

export type CSFieldErrorMsgType = string | Array<string>;

export interface CSFieldErrorMsgProps {
	message: CSFieldErrorMsgType;
}

class CSFieldErrorMsg extends React.Component<CSFieldErrorMsgProps> {

	getErrorMessage = () => {
		if (Array.isArray(this.props.message)) {
			return this.props.message.join(' ');
		} else {
			return this.props.message;
		}
	}

	render() {
		return (
			<span className="cs-field-error-msg">{this.getErrorMessage()}</span>
		);
	}
}

export default CSFieldErrorMsg;
