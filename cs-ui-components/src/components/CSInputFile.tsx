import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSInputFileProps {
	error?: boolean;
	errorMessage?: string;
	disabled?: boolean;
	label?: string;
	className?: string;
}

class CSInputFile extends React.Component<CSInputFileProps> {

	render() {
		const fileClasses = classNames(
			'cs-input-file',
			{
				[`${this.props.className}`]: this.props.className,
				'cs-input-file-error': this.props.error
			}
		);
		return (
			<div className={fileClasses}>
				<label className="cs-input-file-label">
					<input
						type="file"
						disabled={this.props.disabled}
					/>
					<span className="cs-input-file-label-body">
						<CSIcon className="cs-input-file-icon" name="upload"/>
						<span>{this.props.label ? this.props.label : 'Upload File'}</span>
					</span>
				</label>
				{(this.props.error && this.props.errorMessage) &&
					<div className="cs-input-file-error-message">{this.props.errorMessage}</div>
				}
			</div>
		);
	}
}

export default CSInputFile;
