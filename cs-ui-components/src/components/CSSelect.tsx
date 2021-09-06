import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import KeyCode from '../util/KeyCode';
import { CSTooltipPosition } from './CSTooltip';
import { CSCustomDataIconProps, CSCustomDataActionProps } from '../util/CustomData';
import CSIcon from './CSIcon';
import CSCustomDataIcons from './custom-data/CSCustomDataIcons';
import CSCustomDataActions from './custom-data/CSCustomDataActions';

export interface CSSelectProps {
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
	name?: string;
	onBlur?: (value: any) => void;
	onChange?: (value: any) => void;
	readOnly?: boolean;
	required?: boolean;
	title?: string;
	tooltipPosition?: CSTooltipPosition;
	value?: any;
}

export interface CSSelectState {
	selectOptionsWrapperWidth: number | null;
}

class CSSelect extends React.Component<CSSelectProps, CSSelectState> {
	public static defaultProps = {
		labelHidden: false,
	};

	public selectInnerRef: React.RefObject<HTMLSelectElement>;

	private readonly uniqueAutoId: string;

	private selectOptionsWrapperRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSSelectProps) {
		super(props);

		this.uniqueAutoId = props.id ? props.id : uuidv4();

		this.state = {
			selectOptionsWrapperWidth: null,
		};

		this.selectOptionsWrapperRef = React.createRef();
		this.selectInnerRef = React.createRef();
	}

	componentDidMount() {
		/* parent element which holds icons/actions/status/menu icon */
		if (this.selectOptionsWrapperRef) {
			/* Get width of parent element and set state to width + 12 for extra spacing */
			const el = this.selectOptionsWrapperRef.current.getBoundingClientRect();
			this.setState({
				selectOptionsWrapperWidth: el.width + 40,
			});
		}
	}

	handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { onChange } = this.props;
		onChange?.(e.target.value);
	}

	handleOnBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
		const { onBlur } = this.props;
		onBlur?.(e.target.value);
	}

	handleOnKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
		if (e.key !== KeyCode.Tab) {
			e.preventDefault();
		}
	}

	render() {
		const {
			actions,
			borderRadius,
			children,
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
			name,
			onBlur,
			onChange,
			readOnly,
			required,
			title,
			tooltipPosition,
			value,
			...rest
		} = this.props;

		const { selectOptionsWrapperWidth } = this.state;

		const selectClasses = classNames(
			'cs-select',
			{
				'cs-select-error': error,
				'cs-select-error-tooltip': errorTooltip,
				'cs-select-read-only': readOnly,
			},
		);
		const selectWrapperClasses = classNames(
			'cs-select-wrapper',
			{
				'cs-element-hidden': hidden,
				'cs-select-wrapper-options': actions || icons,
				[`${className}`]: className,
			},
		);
		const style: CSSProperties = {
			'--cs-select-border-radius': borderRadius,
			'--cs-select-options-spacing': `${selectOptionsWrapperWidth}px`,
		};

		/* Set actions array once data is available */
		let actionsList;
		if (actions?.length > 0) {
			actionsList = actions;
		}

		return (
			<div className={selectWrapperClasses} style={style}>
				{(label && !labelHidden)
					&& (
						<CSLabel
							htmlFor={this.uniqueAutoId}
							label={label}
							helpText={helpText}
							tooltipPosition={tooltipPosition}
							required={required}
							title={labelTitle ? label : null}
							className={disabled ? 'cs-label-disabled' : ''}
						/>
					)}
				<div className="cs-select-wrapper-inner">
					<div className="cs-select-group">
						<select
							className={selectClasses}
							id={this.uniqueAutoId}
							required={required}
							disabled={disabled}
							aria-label={label}
							aria-required={required}
							aria-invalid={error}
							aria-readonly={readOnly}
							onBlur={this.handleOnBlur}
							onChange={this.handleOnChange}
							onKeyDown={readOnly ? this.handleOnKeyDown : undefined}
							name={name}
							value={value}
							title={title}
							ref={this.selectInnerRef}
							{...rest}
						>
							{children}
						</select>
						{!readOnly
							&& <CSIcon name="down" />}
					</div>
					<div className="cs-select-options" ref={this.selectOptionsWrapperRef}>
						{/* Icons */}
						{icons?.length > 0 ? (<CSCustomDataIcons icons={icons} />) : null}
						{/* Actions */}
						{actionsList?.length > 0 ? (<CSCustomDataActions actions={actions} />) : null}
					</div>
				</div>
				{error
					&& errorMessage
					&& <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
			</div>
		);
	}
}

export default CSSelect;
