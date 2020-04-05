import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSInputFileProps {
	error?: boolean;
	errorMessage?: string;
	disabled?: boolean;
	label: string;
	className?: string;
}

export interface CSInputFileState {
	label?: string;
}

class CSInputFile extends React.Component<CSInputFileProps, CSInputFileState> {
	private fileInput: React.RefObject<HTMLInputElement>;
	constructor(props: any) {
		super(props);
		this.state = {
			label: ''
		};

		this.handleFileSubmit = this.handleFileSubmit.bind(this);
		this.fileInput = React.createRef();
	}
	handleFileSubmit() {
		this.setState({
			label: this.fileInput.current.files[0].name
		});
	}
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
						ref={this.fileInput}
						onChange={this.handleFileSubmit}
						disabled={this.props.disabled}
					/>
					<span className="cs-input-file-label-body">
						<CSIcon className="cs-input-file-icon" name="upload"/>
						<span>{this.state.label ? this.state.label : this.props.label}</span>
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