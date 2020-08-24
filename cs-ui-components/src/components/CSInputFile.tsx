import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSTooltip from './CSTooltip';

export interface CSInputFileProps {
	accept?: Array<string> | string;
	className?: string;
	disabled?: boolean;
	dropAreaBackground?: boolean;
	dropAreaHeight?: string;
	dropAreaWidth?: string;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	id?: string;
	label: string;
	onDrop?: (values: any) => any;
	onChange?: (values: any) => any;
}

export interface CSInputFileState {
	label?: string;
	isDraggedOver: boolean;
}

class CSInputFile extends React.Component<CSInputFileProps, CSInputFileState> {
	private fileInput: React.RefObject<HTMLInputElement>;
	private dragEventCounter = 0;
	constructor(props: any) {
		super(props);
		this.state = {
			label: '',
			isDraggedOver: false
		};

		this.handleFileSubmit = this.handleFileSubmit.bind(this);
		this.handleFileDragEvents = this.handleFileDragEvents.bind(this);
		this.handleFileDrop = this.handleFileDrop.bind(this);
		this.handleAcceptFiles = this.handleAcceptFiles.bind(this);
		this.fileInput = React.createRef();
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
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
			label: e.dataTransfer.files[0].name,
			isDraggedOver: false
		});
		this.dragEventCounter = 0;
	}
	handleAcceptFiles(acceptFiles: Array<string> | string) {
		const newFiles = Array.isArray(acceptFiles) ? acceptFiles.join() : acceptFiles;
		return newFiles;
	}
	handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
		this.handleFileDragEvents(e);
		this.dragEventCounter++;
		this.setState({isDraggedOver: true});
	}
	handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
		this.handleFileDragEvents(e);
		this.dragEventCounter--;

		if (this.dragEventCounter === 0) {
			this.setState({isDraggedOver: false});
		}
	}
	render() {
		const wrapperClasses = classNames(
			'cs-input-file-wrapper',
			{
				'cs-input-file-drop-area': this.props.dropAreaBackground
			}
		);

		const fileClasses = classNames(
			'cs-input-file',
			{
				[`${this.props.className}`]: this.props.className,
				'cs-input-file-error': this.props.error,
				'cs-input-file-dragged-over': this.props.dropAreaBackground && this.state.isDraggedOver
			}
		);

		const style: CSSProperties = {
			'--drop-area-width': this.props.dropAreaWidth,
			'--drop-area-height': this.props.dropAreaHeight
		};

		const input =
			<>
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
				{(this.props.error && this.props.errorMessage) &&
					<CSFieldErrorMsg message={this.props.errorMessage} />
				}
			</>;

		return (
			<div className={wrapperClasses} style={style}>
				<div
					className={fileClasses}
					onDragOver={!this.props.disabled ? this.handleFileDragEvents : null}
					onDragEnter={!this.props.disabled ? this.handleDragEnter : null}
					onDragLeave={!this.props.disabled ? this.handleDragLeave : null}
					onDrop={!this.props.disabled ? this.handleFileDrop : null}
				>
					{this.state.label ? (
						<CSTooltip content={this.state.label}>
							{input}
						</CSTooltip>
					) : (
						<>
							{input}
						</>
					)}
				</div>

			</div>
		);
	}
}

export default CSInputFile;
