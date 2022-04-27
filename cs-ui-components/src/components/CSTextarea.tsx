import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSTooltip, { CSTooltipPosition } from './CSTooltip';
import CSCustomData, { CSCustomDataAction, CSCustomDataIcon } from './CSCustomData';
import CSLabel from './CSLabel';
import CSButton from './CSButton';

export interface CSTextareaProps {
	[key: string]: any;
	actions?: Array<CSCustomDataAction>;
	borderRadius?: string;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	errorMessage?: CSFieldErrorMsgType;
	errorTooltip?: boolean;
	helpText?: string;
	hidden?: boolean;
	icons?: Array<CSCustomDataIcon>;
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
	innerContentWidth: number;
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

	private textareaInnerContentRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSTextareaProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.textareaInnerContentRef = React.createRef();
		this.textareaInnerRef = React.createRef();

		this.state = {
			innerContentWidth: 0,
			expandButton: false,
			expanded: false,
			actualHeight: 0,
			minHeight: 32,
		};

		this.handleExpand = this.handleExpand.bind(this);
	}

	componentDidMount() {
		const { readOnly } = this.props;
		this.setState({
			innerContentWidth: this.textareaInnerContentRef.current?.getBoundingClientRect().width,
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

	handleExpand() {
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
			innerContentWidth,
			expandButton,
			expanded,
			actualHeight,
			minHeight,
		} = this.state;

		const textareaWrapperClasses = classNames(
			'cs-textarea-wrapper',
			{
				'cs-textarea-expanded': expanded,
				'cs-element-hidden': hidden,
				[`${className}`]: className,
			},
		);

		const textareaClasses = classNames(
			'cs-textarea',
			{
				'cs-textarea-error': error,
			},
		);

		const style: CSSProperties = {
			'--cs-textarea-max-height': maxHeight,
			'--cs-textarea-read-only-min-height': readOnly && expandButton ? `${minHeight}px` : '',
			'--cs-textarea-read-only-height': readOnly && expandButton ? `${actualHeight}px` : '',
			'--cs-textarea-border-radius': borderRadius,
			'--cs-textarea-inner-content-width': innerContentWidth ? `${innerContentWidth}px` : undefined,
		};

		const renderErrorMessage = () => {
			if (!error || !errorMessage || errorTooltip) return null;

			return <CSFieldErrorMsg message={errorMessage} />;
		};

		const renderErrorTooltip = () => {
			if (!error || !errorMessage || !errorTooltip) return null;

			return <CSTooltip variant="error" content={errorMessage} />;
		};

		const renderLabel = () => {
			if (!label || labelHidden) return null;

			return (
				<CSLabel
					htmlFor={this.uniqueAutoId}
					label={label}
					helpText={helpText}
					tooltipPosition={tooltipPosition}
					required={required}
					title={labelTitle ? label : null}
				/>
			);
		};

		const renderExpandButton = () => {
			if (!expandButton) return null;

			return (
				<CSButton
					label={expanded ? 'Show less...' : 'Show more...'}
					className="cs-textarea-expand-btn"
					btnStyle="brand"
					btnType="transparent"
					size="xsmall"
					onClick={this.handleExpand}
				/>
			);
		};

		const renderInnerContent = () => {
			if (!actions && !icons && !errorTooltip) return null;

			return (
				<div className="cs-textarea-wrapper-inner-content" ref={this.textareaInnerContentRef}>
					<CSCustomData icons={icons} actions={actions} />
					{renderErrorTooltip()}
				</div>
			);
		};

		return (
			<div className={textareaWrapperClasses} style={style}>
				{renderLabel()}
				<div className="cs-textarea-wrapper-inner">
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
					{renderInnerContent()}
					{renderExpandButton()}
				</div>
				{renderErrorMessage()}
			</div>
		);
	}
}

export default CSTextarea;
