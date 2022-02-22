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
	errorTooltip?: boolean;
	fileSelectedLabel?: string;
	fileSize?: boolean;
	id?: string;
	label?: string;
	onDrop?: (values: any) => void;
	onChange?: (values: any) => void;
}

export interface CSInputFileState {
	fileName: string;
	fileLabel: string;
	isDraggedOver: boolean;
}

class CSInputFile extends React.Component<CSInputFileProps, CSInputFileState> {
	public static defaultProps = {
		fileSelectedLabel: 'File selected',
		label: 'Upload a file',
	};

	public inputFileInnerRef: React.RefObject<HTMLInputElement>;

	private dragEventCounter = 0;

	constructor(props: any) {
		super(props);
		this.state = {
			fileLabel: '',
			fileName: '',
			isDraggedOver: false,
		};

		this.inputFileInnerRef = React.createRef();
	}

	handleFileDragEvents = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	}

	handleFileSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { onChange } = this.props;
		const file = e.target.files[0];

		this.setUploadedFileData(file);

		if (onChange) {
			onChange(file);
		}
	}

	handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
		const { onDrop } = this.props;
		const file = e.dataTransfer.files[0];

		if (typeof (file) !== 'object') {
			this.setState({ isDraggedOver: false });
			return;
		}

		this.handleFileDragEvents(e);
		if (onDrop) {
			onDrop(file);
		}
		this.setUploadedFileData(file);
		this.setState({
			isDraggedOver: false,
		});
		this.dragEventCounter = 0;
	}

	handleAcceptFiles = (acceptFiles: Array<string> | string) => (
		Array.isArray(acceptFiles) ? acceptFiles.join() : acceptFiles
	)

	handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
		this.handleFileDragEvents(e);
		this.dragEventCounter += 1;
		this.setState({ isDraggedOver: true });
	}

	handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		this.handleFileDragEvents(e);
		this.dragEventCounter -= 1;

		if (this.dragEventCounter === 0) {
			this.setState({ isDraggedOver: false });
		}
	}

	setUploadedFileData = (file: File) => {
		const { fileSelectedLabel, fileSize } = this.props;
		if (file) {
			const fileName = fileSize ? file.name + this.fileSizeDisplay(file) : file.name;
			this.setState({
				fileName,
				fileLabel: fileSelectedLabel,
			});
		}
	}

	fileSizeDisplay = (file: File) => {
		const { fileSize } = this.props;

		if (!fileSize) return null;
		if (file.size < 1000) return ` (${Math.round(file.size)}B)`; // bytes
		if (file.size < 1000000) return ` (${Math.round(file.size / 1000)}KB)`; // kb
		return ` (${Math.round(file.size / 1000000)}MB)`; // mb
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
			errorTooltip,
			fileSelectedLabel,
			fileSize,
			id,
			label,
			onChange,
			onDrop,
			...rest
		} = this.props;

		const {
			isDraggedOver,
			fileName,
			fileLabel,
		} = this.state;

		const inputFileClasses = classNames(
			'cs-input-file',
			{
				'cs-input-file-drop-area-highlighted': dropAreaBackground,
				'cs-input-file-error': error,
				'cs-input-file-dragged-over': isDraggedOver,
				[`${className}`]: className,
			},
		);

		const dropAreaClasses = classNames(
			'cs-input-file-drop-area',
			{
				'cs-input-file-disabled': disabled,
			},
		);

		const style: CSSProperties = {
			'--drop-area-width': dropAreaWidth,
			'--drop-area-height': dropAreaHeight,
		};

		const input = (
			<>
				<input
					accept={this.handleAcceptFiles(accept)}
					id={id}
					type="file"
					ref={this.inputFileInnerRef}
					onChange={this.handleFileSubmit}
					disabled={disabled}
					title={label}
					aria-invalid={error}
					{...rest}
				/>
				<span className="cs-input-file-btn">
					{error && errorMessage && errorTooltip
						? <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />
						: <CSIcon className="cs-input-file-icon" name="upload" size="0.875rem" />}
					<span className="cs-input-file-label">{fileLabel || label}</span>
				</span>
			</>
		);

		return (
			<div className="cs-input-file-wrapper">
				<div
					className={inputFileClasses}
					style={style}
					onDragOver={!disabled ? this.handleFileDragEvents : null}
					onDragEnter={!disabled ? this.handleDragEnter : null}
					onDragLeave={!disabled ? this.handleDragLeave : null}
					onDrop={!disabled ? this.handleFileDrop : null}
				>
					<label className={dropAreaClasses}>
						{fileName ? (
							<CSTooltip content={fileName} position="top-center" focusable={false}>
								{input}
							</CSTooltip>
						) : (
							<>
								{input}
							</>
						)}
					</label>
				</div>
				{!errorTooltip && error && errorMessage && (
					<CSFieldErrorMsg message={errorMessage} />
				)}
			</div>
		);
	}
}

export default CSInputFile;
