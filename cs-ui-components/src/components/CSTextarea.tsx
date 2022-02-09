import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import { CSTooltipPosition } from './CSTooltip';
import { CSCustomDataIconProps, CSCustomDataActionProps } from './custom-data/CSCustomData';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';
import CSLabel from './CSLabel';
import CSButton from './CSButton';

export interface CSTextareaProps {
	[key: string]: any;
	actions?: Array<CSCustomDataActionProps>;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIconProps>;
	id?: string;
	label: string;
	labelHidden?: boolean;
	labelTitle?: boolean;
	maxHeight?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onClick?: (e: React.MouseEvent<HTMLTextAreaElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	rows?: number;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: string;
}

export interface CSTextareaState {
	textareaOptionsWrapperWidth: number | null;
	expandButton: boolean;
	expanded: boolean;
	actualHeight: number;
	minHeight: number;
}

class CSTextarea extends React.Component<CSTextareaProps, CSTextareaState> {
	public static defaultProps = {
		rows: 3,
	};

	public textareaInnerRef: React.RefObject<HTMLTextAreaElement>;

	private readonly uniqueAutoId: string;

	private textareaOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSTextareaProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.textareaOptionsWrapperRef = React.createRef();
		this.textareaInnerRef = React.createRef();

		this.state = {
			textareaOptionsWrapperWidth: null,
			expandButton: false,
			expanded: false,
			actualHeight: 0,
			minHeight: 0,
		};

		this.handleReadOnly = this.handleReadOnly.bind(this);
	}

	componentDidMount() {
		/* Get width of parent element and set state to width + 12 for extra spacing */
		const { readOnly } = this.props;
		const textareaOptionsRect = this.textareaOptionsWrapperRef.current?.getBoundingClientRect();
		this.setState({
			textareaOptionsWrapperWidth: (textareaOptionsRect?.width ?? 0) + 12,
		});

		if (readOnly && this.textareaInnerRef.current !== null) {
			const { scrollHeight } = this.textareaInnerRef.current;
			this.setState({
				expandButton: scrollHeight > 84,
				minHeight: scrollHeight < 84 ? scrollHeight : 84,
				actualHeight: scrollHeight < 84 ? scrollHeight : 84,
			});
		}
	}

	handleReadOnly() {
		const { minHeight, expanded } = this.state;
		if (!expanded) {
			const { scrollHeight } = this.textareaInnerRef.current;
			this.setState({
				expanded: true,
				actualHeight: scrollHeight > 84 ? scrollHeight : minHeight,
			});
		} else {
			this.setState({
				expanded: false,
				actualHeight: minHeight,
			});
		}
	}

	render() {
		const {
			actions,
			borderRadius,
			className,
			disabled,
			error,
			errorMessage,
			errorTooltip,
			helpText,
			hidden,
			icons,
			id,
			label,
			labelHidden,
			labelTitle,
			maxHeight,
			onChange,
			onClick,
			onKeyDown,
			placeholder,
			readOnly,
			required,
			rows,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const {
			textareaOptionsWrapperWidth,
			expandButton,
			expanded,
			actualHeight,
			minHeight,
		} = this.state;

		const textareaClasses = classNames(
			'cs-textarea',
			{
				'cs-textarea-error': error,
				'cs-textarea-error-tooltip': errorTooltip,
			},
		);
		const style: CSSProperties = {
			'--cs-textarea-max-height': maxHeight,
			'--cs-textarea-read-only-min-height': readOnly && expandButton ? `${minHeight}px` : '',
			'--cs-textarea-read-only-height': readOnly && expandButton ? `${actualHeight}px` : '',
			'--cs-textarea-border-radius': borderRadius,
			'--cs-textarea-options-spacing': icons || actions ? `${textareaOptionsWrapperWidth}px` : '',
		};
		const textareaWrapperClasses = classNames(
			'cs-textarea-wrapper',
			{
				'cs-element-hidden': hidden,
				'cs-textarea-wrapper-options': actions || icons,
				[`${className}`]: className,
			},
		);

		const options = (actions || icons) && (
			<div className="cs-textarea-options" ref={this.textareaOptionsWrapperRef}>
				{icons?.length && <CSCustomDataIcons icons={icons} />}
				{actions?.length && <CSCustomDataActions actions={actions} />}
			</div>
		);

		const tooltipMessage = (error && errorTooltip) && (
			<div className="cs-textarea-error-message">
				<CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />
			</div>
		);

		return (
			<div className={textareaWrapperClasses} style={style}>
				{(label && !labelHidden)
					&& (
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
						/>
					)}
				<div className="cs-textarea-wrapper-inner">
					{expandButton && (
						<CSButton
							label={expanded ? 'Show less...' : 'Show more...'}
							className={expanded ? 'cs-textarea-expand-button cs-textarea-expanded' : 'cs-textarea-expand-button'}
							btnStyle="brand"
							btnType="transparent"
							size="xsmall"
							onClick={this.handleReadOnly}
						/>
					)}
					<textarea
						className={textareaClasses}
						id={this.uniqueAutoId}
						placeholder={placeholder}
						disabled={disabled}
						readOnly={readOnly}
						required={required}
						rows={readOnly ? undefined : rows}
						aria-label={label}
						aria-required={required}
						aria-invalid={error}
						value={value}
						style={style}
						onChange={onChange}
						onClick={onClick}
						onKeyDown={onKeyDown}
						title={title}
						ref={this.textareaInnerRef}
						{...rest}
					/>
					{(actions || icons || errorTooltip) && (
						<div className="cs-textarea-wrapper-inner-content">
							{options}
							{tooltipMessage}
						</div>
					)}
				</div>
				{!errorTooltip
					&& error
					&& errorMessage
					&& <CSFieldErrorMsg message={errorMessage} />}
			</div>
		);
	}
}

export default CSTextarea;
