import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSIcon from './CSIcon';
import CSTooltip from './CSTooltip';

export interface CSInputFileProps {
	[key: string]: any;
	accept?: Array<string> | string;
	className?: string;
	disabled?: boolean;
	dropAreaBackground?: boolean;
	dropAreaHeight?: string;
	dropAreaWidth?: string;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	fileSize?: boolean;
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

		this.fileSizeDisplay = this.fileSizeDisplay.bind(this);
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
		const file = this.fileInput.current.files[0];

		this.setState({
			label: this.props.fileSize ? file.name + this.fileSizeDisplay(file) : file.name
		});

		if (this.props.onChange) {
			this.props.onChange(file);
		}
	}

	handleFileDrop(e: React.DragEvent<HTMLDivElement>) {
		const file = e.dataTransfer.files[0];

		if (typeof (file) !== 'object') {
			this.setState({ isDraggedOver: false });
			return;
		}

		this.handleFileDragEvents(e);
		if (this.props.onDrop) {
			this.props.onDrop(file);
		}
		this.setState({
			label: this.props.fileSize ? file.name + this.fileSizeDisplay(file) : file.name,
			isDraggedOver: false
		});
		this.dragEventCounter = 0;
	}

	fileSizeDisplay(file: File) {
		if (this.props.fileSize) {
			let fileSizeDisplay;
			if (file.size < 1000) {
				// bytes
				fileSizeDisplay = ` (${  Math.round(file.size)  }B)`;
			} else if (file.size < 1000000) {
				// kb
				fileSizeDisplay = ` (${  Math.round(file.size / 1000)  }KB)`;
			} else {
				// mb
				fileSizeDisplay = ` (${  Math.round(file.size / 1000000)  }MB)`;
			}
			return fileSizeDisplay;
		}
	}

	handleAcceptFiles(acceptFiles: Array<string> | string) {
		const newFiles = Array.isArray(acceptFiles) ? acceptFiles.join() : acceptFiles;
		return newFiles;
	}

	handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
		this.handleFileDragEvents(e);
		this.dragEventCounter++;
		this.setState({ isDraggedOver: true });
	}

	handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
		this.handleFileDragEvents(e);
		this.dragEventCounter--;

		if (this.dragEventCounter === 0) {
			this.setState({ isDraggedOver: false });
		}
	}

	render() {
		const {
			accept,
			className,
			disabled,
			dropAreaBackground,
			dropAreaHeight,
			dropAreaWidth,
			error,
			errorMessage,
			fileSize,
			id,
			label,
			onChange,
			onDrop,
			...rest
		} = this.props;

		const wrapperClasses = classNames(
			'cs-input-file-wrapper',
			{
				'cs-input-file-drop-area-highlighted': dropAreaBackground,
				'cs-input-file-error': error,
				'cs-input-file-dragged-over': this.state.isDraggedOver,
				[`${className}`]: className
			}
		);

		const dropAreaClasses = classNames(
			'cs-input-file-drop-area',
			{
				'cs-input-file-disabled': disabled
			}
		);

		const style: CSSProperties = {
			'--drop-area-width': dropAreaWidth,
			'--drop-area-height': dropAreaHeight
		};

		const input =
			<>
				<input
					accept={this.handleAcceptFiles(accept)}
					id={id}
					type="file"
					ref={this.fileInput}
					onChange={this.handleFileSubmit}
					disabled={disabled}
					title={label}
					aria-invalid={error}
					{...rest}
				/>
				<span className="cs-input-file-btn">
					<CSIcon className="cs-input-file-icon" name="upload" size="0.875rem" />
					<span className="cs-input-file-label">{this.state.label ? this.state.label : label}</span>
				</span>
			</>;

		return (
			<>
				<div
					className={wrapperClasses} style={style}
					onDragOver={!disabled ? this.handleFileDragEvents : null}
					onDragEnter={!disabled ? this.handleDragEnter : null}
					onDragLeave={!disabled ? this.handleDragLeave : null}
					onDrop={!disabled ? this.handleFileDrop : null}
				>
					<label className={dropAreaClasses}>
						{this.state.label ? (
							<CSTooltip content={this.state.label} position="top-center" focusable={false}>
								{input}
							</CSTooltip>
						) : (
								<>
									{input}
								</>
							)}
					</label>
				</div>
				{(error && errorMessage) &&
					<CSFieldErrorMsg message={errorMessage} />
				}
			</>
		);
	}
}

export default CSInputFile;
