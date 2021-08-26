import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';

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
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
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

		this.state = {
			textareaOptionsWrapperWidth: null,
		};

		this.textareaOptionsWrapperRef = React.createRef();
		this.textareaInnerRef = React.createRef();
	}

	componentDidMount() {
		/* parent element which holds icons/actions/status/menu icon */
		if (this.textareaOptionsWrapperRef) {
			/* Get width of parent element and set state to width + 12 for extra spacing */
			const el = this.textareaOptionsWrapperRef.current.getBoundingClientRect();
			this.setState({
				textareaOptionsWrapperWidth: el.width + 12,
			});
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const { onChange } = this.props;
		if (onChange) {
			onChange(e);
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
			placeholder,
			readOnly,
			required,
			rows,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const { textareaOptionsWrapperWidth } = this.state;

		const textareaClasses = classNames(
			'cs-textarea',
			{
				'cs-textarea-error': error,
				'cs-textarea-error-tooltip': errorTooltip,
			},
		);
		const style: CSSProperties = {
			'--max-height': maxHeight,
			'--cs-textarea-border-radius': borderRadius,
			'--cs-textarea-options-spacing': `${textareaOptionsWrapperWidth}px`,
		};
		const textareaWrapperClasses = classNames(
			'cs-textarea-wrapper',
			{
				'cs-element-hidden': hidden,
				'cs-textarea-wrapper-options': actions || icons,
				[`${className}`]: className,
			},
		);

		/* Set actions array once data is available */
		let actionsList;
		if (actions?.length > 0) {
			actionsList = actions;
		}

		return (
			<>
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
						<textarea
							className={textareaClasses}
							id={this.uniqueAutoId}
							placeholder={placeholder}
							disabled={disabled}
							readOnly={readOnly}
							required={required}
							rows={readOnly ? 1 : rows}
							aria-label={label}
							aria-required={required}
							aria-invalid={error}
							value={value}
							onChange={this.handleOnChange}
							title={title}
							ref={this.textareaInnerRef}
							{...rest}
						/>
						<div className="cs-textarea-options" ref={this.textareaOptionsWrapperRef}>
							{error
								&& errorTooltip
								&& <CSFieldErrorMsg message={errorMessage} toolTipMessage={errorTooltip} />}
							{/* Icons */}
							{icons?.length > 0 ? (<CSCustomDataIcons icons={icons} />) : null}
							{/* Actions */}
							{actionsList?.length > 0 ? (<CSCustomDataActions actions={actions} />) : null}
						</div>
					</div>
					{!errorTooltip
						&& error
						&& <CSFieldErrorMsg message={errorMessage} />}
				</div>
			</>
		);
	}
}

export default CSTextarea;
