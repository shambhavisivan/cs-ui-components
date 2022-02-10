import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './CSFieldErrorMsg';
import CSLabel from './CSLabel';
import { CSTooltipPosition } from './CSTooltip';
import { CSCustomDataIconProps, CSCustomDataActionProps } from './custom-data/CSCustomData';
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
	onClick?: (event: React.MouseEvent<HTMLSelectElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLSelectElement>) => void;
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
		/* Get width of parent element and set state to width + 40 for extra spacing */
		const selectOptionsRect = this.selectOptionsWrapperRef.current?.getBoundingClientRect();
		this.setState({
			selectOptionsWrapperWidth: (selectOptionsRect?.width ?? 0) + 40,
		});
	}

	handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { onChange } = this.props;
		onChange?.(e.target.value);
	}

	handleOnBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
		const { onBlur } = this.props;
		onBlur?.(e.target.value);
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
			onClick,
			onKeyDown,
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
				'cs-select-wrapper-read-only': readOnly,
				'cs-select-wrapper-options': actions || icons,
				[`${className}`]: className,
			},
		);
		const style: CSSProperties = {
			'--cs-select-border-radius': borderRadius,
			'--cs-select-options-spacing': `${selectOptionsWrapperWidth}px`,
		};

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
							onClick={onClick}
							onKeyDown={onKeyDown}
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
					{(actions?.length || icons?.length)
						&& (
							<div className="cs-select-options" ref={this.selectOptionsWrapperRef}>
								{icons?.length && <CSCustomDataIcons icons={icons} />}
								{actions?.length && <CSCustomDataActions actions={actions} />}
							</div>
						)}
				</div>
				{error
					&& errorMessage
					&& <CSFieldErrorMsg message={errorMessage} tooltipMessage={errorTooltip} />}
			</div>
		);
	}
}

export default CSSelect;
