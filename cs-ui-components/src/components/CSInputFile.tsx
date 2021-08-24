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
	public inputFileInnerRef: React.RefObject<HTMLInputElement>;

	private dragEventCounter = 0;

	constructor(props: any) {
		super(props);
		this.state = {
			label: '',
			isDraggedOver: false,
		};

		this.fileSizeDisplay = this.fileSizeDisplay.bind(this);
		this.handleFileSubmit = this.handleFileSubmit.bind(this);
		this.handleFileDragEvents = this.handleFileDragEvents.bind(this);
		this.handleFileDrop = this.handleFileDrop.bind(this);
		this.handleAcceptFiles = this.handleAcceptFiles.bind(this);
		this.inputFileInnerRef = React.createRef();
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
	}

	handleFileDragEvents = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	}

	handleFileSubmit() {
		const { fileSize, onChange } = this.props;
		const file = this.inputFileInnerRef.current.files[0];

		this.setState({
			label: fileSize ? file.name + this.fileSizeDisplay(file) : file.name,
		});

		if (onChange) {
			onChange(file);
		}
	}

	handleFileDrop(e: React.DragEvent<HTMLDivElement>) {
		const { onDrop, fileSize } = this.props;
		const file = e.dataTransfer.files[0];

		if (typeof (file) !== 'object') {
			this.setState({ isDraggedOver: false });
			return;
		}

		this.handleFileDragEvents(e);
		if (onDrop) {
			onDrop(file);
		}
		this.setState({
			label: fileSize ? file.name + this.fileSizeDisplay(file) : file.name,
			isDraggedOver: false,
		});
		this.dragEventCounter = 0;
	}

	handleAcceptFiles = (acceptFiles: Array<string> | string) => (
		Array.isArray(acceptFiles) ? acceptFiles.join() : acceptFiles
	)

	handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
		this.handleFileDragEvents(e);
		this.dragEventCounter += 1;
		this.setState({ isDraggedOver: true });
	}

	handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
		this.handleFileDragEvents(e);
		this.dragEventCounter -= 1;

		if (this.dragEventCounter === 0) {
			this.setState({ isDraggedOver: false });
		}
	}

	fileSizeDisplay(file: File) {
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
			fileSize,
			id,
			label,
			onChange,
			onDrop,
			...rest
		} = this.props;

		const {
			isDraggedOver,
			label: labelState,
		} = this.state;

		const wrapperClasses = classNames(
			'cs-input-file-wrapper',
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
					{error
						&& errorMessage
						&& errorTooltip
						? <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />
						: <CSIcon className="cs-input-file-icon" name="upload" size="0.875rem" />}
					<span className="cs-input-file-label">{labelState || label}</span>
				</span>
			</>
		);

		return (
			<>
				<div
					className={wrapperClasses}
					style={style}
					onDragOver={!disabled ? this.handleFileDragEvents : null}
					onDragEnter={!disabled ? this.handleDragEnter : null}
					onDragLeave={!disabled ? this.handleDragLeave : null}
					onDrop={!disabled ? this.handleFileDrop : null}
				>
					<label className={dropAreaClasses}>
						{labelState ? (
							<CSTooltip content={labelState} position="top-center" focusable={false}>
								{input}
							</CSTooltip>
						) : (
							<>
								{input}
							</>
						)}
					</label>
				</div>
			</>
		);
	}
}

export default CSInputFile;
