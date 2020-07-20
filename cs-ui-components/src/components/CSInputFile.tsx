import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSInputFileProps {
	accept?: Array<string> | string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: string;
	id?: string;
	label: string;
	onDrop?: (values: any) => any;
	onChange?: (values: any) => any;
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
		this.handleFileDragEvents = this.handleFileDragEvents.bind(this);
		this.handleFileDrop = this.handleFileDrop.bind(this);
		this.handleAcceptFiles = this.handleAcceptFiles.bind(this);
		this.fileInput = React.createRef();
	}
	handleFileDragEvents(e: React.DragEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation();
	}
	handleFileSubmit() {
		this.setState({
			label: this.fileInput.current.files[0].name
		});
		if (this.props.onChange) {
			this.props.onChange(this.fileInput.current.files);
		}
	}
	handleFileDrop(e: React.DragEvent<HTMLDivElement>) {
		this.handleFileDragEvents(e);
		if (this.props.onDrop) {
			this.props.onDrop(e.dataTransfer.files);
		}
		this.setState({
			label: e.dataTransfer.files[0].name
		});
	}
	handleAcceptFiles(acceptFiles: Array<string>| string) {
		const newFiles = Array.isArray(acceptFiles) ? acceptFiles.join() : acceptFiles;
		return newFiles;
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
			<>
				<div
					className={fileClasses}
					onDragOver={!this.props.disabled ? this.handleFileDragEvents : null}
					onDrop={!this.props.disabled ? this.handleFileDrop : null}
				>
					<label className="cs-input-file-label">
						<input
							accept={this.handleAcceptFiles(this.props.accept)}
							id={this.props.id}
							type="file"
							ref={this.fileInput}
							onChange={this.handleFileSubmit}
							disabled={this.props.disabled}
						/>
						<span className="cs-input-file-label-body">
							<CSIcon className="cs-input-file-icon" name="upload"/>
							<span className="cs-input-file-label">{this.state.label ? this.state.label : this.props.label}</span>
						</span>
					</label>
				</div>
				{(this.props.error && this.props.errorMessage) &&
					<span className="cs-input-file-error-message">{this.props.errorMessage}</span>
				}
			</>
		);
	}
}

export default CSInputFile;
