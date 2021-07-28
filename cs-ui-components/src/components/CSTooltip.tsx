import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CSIcon, { CSIconOrigin } from './CSIcon';
import KeyCode from '../util/KeyCode';
import CSSpinner from './CSSpinner';
import CSAutoposition from '../helpers/autoposition/CSAutoposition';
import { CSAutopositionSchema, CSAutopositions } from '../helpers/autoposition/cs-autoposition-types';

export type CSTooltipContent = string | Array<string> | JSX.Element;
export type CSTooltipIconSize = 'small' | 'medium';
export type CSTooltipPosition = CSAutopositions;
export type CSTooltipStylePosition = 'fixed' | 'absolute';
export type CSTooltipVariant = 'info' | 'warning' | 'error' | 'success' | 'basic';

export interface CSTooltipProps {
	[key: string]: any;
	className?: string;
	content: CSTooltipContent | (() => Promise<CSTooltipContent>);
	delayTooltip?: number;
	focusable?: boolean;
	height?: string;
	iconColor?: string;
	iconName?: string;
	iconOrigin?: CSIconOrigin;
	iconSize?: CSTooltipIconSize;
	id?: string;
	maxHeight?: string;
	maxWidth?: string;
	padding?: string;
	position?: CSTooltipPosition;
	stickyOnClick?: boolean;
	stylePosition?: CSTooltipStylePosition;
	tooltipHeader?: string;
	variant?: CSTooltipVariant;
	width?: string;
}

interface CSTooltipState {
	content: CSTooltipContent | (() => Promise<CSTooltipContent>);
	loading?: boolean;
	hidden: boolean;
	isOpen: boolean;
	computedPosition?: string;
	tooltipWrapperDimension?: number;
	stickyActive?: boolean;
}

class CSTooltip extends React.Component<CSTooltipProps, CSTooltipState> {
	static defaultProps = {
		iconSize: 'small',
		position: 'top-right',
		variant: 'info',
		stylePosition: 'fixed',
		focusable: true,
	};

	static getDerivedStateFromProps(props: CSTooltipProps, state: CSTooltipState) {
		if (props.content !== state.content && typeof props.content !== 'function') {
			return {
				content: props.content,
			};
		}
		return null;
	}

	private timeoutRef: NodeJS.Timeout;

	private popupTriggered = false;

	private tooltipRef: React.RefObject<HTMLDivElement>;

	private uniqueAutoId = uuidv4();

	private _isMounted: boolean;

	constructor(props: CSTooltipProps) {
		super(props);

		this.tooltipRef = React.createRef();

		this.state = {
			hidden: props.delayTooltip && props.delayTooltip > 0,
			computedPosition: this.props.position,
			stickyActive: false,
			content: this.props.content,
			isOpen: false,
		};
	}

	componentDidMount() {
		this._isMounted = true;
	}

	componentWillUnmount() {
		if (this.state.stickyActive) {
			document.removeEventListener('click', this.handleOutsideClick);
		}
		this._isMounted = false;
	}

	private onKeyDown(event: any) {
		if (event.key === KeyCode.Escape) {
			if (this.props.stickyOnClick) {
				this.setSticky(false);
				this.closeTooltip();
				(document.activeElement as HTMLDivElement).blur();
			} else {
				this.closeTooltip();
			}

			document.removeEventListener('keydown', this.onKeyDown);
		}
	}

	private openTooltip = () => {
		if (typeof this.props.content === 'function') {
			this.setState({ loading: true }, () => this.resolvePromise());
		} else {
			this.setState({ content: this.props.content });
		}

		this.setState({ isOpen: true });
		this.setTooltipWrapperDimension();

		if (this.props.stickyOnClick) {
			document.addEventListener('click', this.handleOutsideClick);
		}

		if (this.props.delayTooltip && this.props.delayTooltip > 0) {
			const delay = this.props.delayTooltip;

			this.timeoutRef = setTimeout(() => {
				this.popupTriggered = true;
				this.setState({ hidden: false });
			}, delay);
		}

		document.addEventListener('keydown', this.onKeyDown.bind(this));
	}

	private closeTooltip = () => {
		if (this._isMounted) {
			this.setState({
				computedPosition: this.props.position,
				tooltipWrapperDimension: undefined,
			});
		}
		this.setState({
			isOpen: false,
			tooltipWrapperDimension: undefined,
		});

		if (this.props.stickyOnClick && !this.state.stickyActive) {
			document.removeEventListener('click', this.handleOutsideClick);
		}

		if (this.props.delayTooltip && this.props.delayTooltip > 0) {
			if (this.popupTriggered) {
				this.setState({ hidden: true });
			} else {
				clearTimeout(this.timeoutRef);
			}

			this.popupTriggered = false;
		}
	}

	private setTooltipWrapperDimension = () => {
		const positions = this.state.computedPosition.split('-');
		const openOnPosition = positions[0];
		const tooltipWrapperRect = this.tooltipRef.current.getBoundingClientRect();
		if (openOnPosition === 'top' || openOnPosition === 'bottom') {
			this.setState({
				tooltipWrapperDimension: tooltipWrapperRect.width,
			});
		} else if (openOnPosition === 'left' || openOnPosition === 'right') {
			this.setState({
				tooltipWrapperDimension: tooltipWrapperRect.height,
			});
		}
	}

	private convertRemToPixels = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

	private getTooltipPositionSchema = () => {
		const wrapperInfo = this.tooltipRef.current.getBoundingClientRect();

		const fixedDeviation = 10;
		const computedWidthDeviation = wrapperInfo.width / 2 - this.convertRemToPixels(1.5);
		const computedHeightDeviation = -wrapperInfo.height / 2 - this.convertRemToPixels(1) + 2;

		const schema: CSAutopositionSchema = [{
			position: 'top-left',
			deviation: {
				bottom: fixedDeviation,
				right: computedWidthDeviation,
			},
		}, {
			position: 'top-right',
			deviation: {
				bottom: fixedDeviation,
				left: computedWidthDeviation,
			},
		}, {
			position: 'top-center',
			deviation: {
				bottom: fixedDeviation,
			},
		}, {
			position: 'bottom-left',
			deviation: {
				top: fixedDeviation,
				right: computedWidthDeviation,
			},
		}, {
			position: 'bottom-right',
			deviation: {
				top: fixedDeviation,
				left: computedWidthDeviation,
			},
		}, {
			position: 'bottom-center',
			deviation: {
				top: fixedDeviation,
			},
		}, {
			position: 'left-top',
			deviation: {
				right: fixedDeviation,
				bottom: computedHeightDeviation,
			},
		}, {
			position: 'left-center',
			deviation: {
				right: fixedDeviation,
			},
		}, {
			position: 'left-bottom',
			deviation: {
				right: fixedDeviation,
				top: computedHeightDeviation,
			},
		}, {
			position: 'right-top',
			deviation: {
				left: fixedDeviation,
				bottom: computedHeightDeviation,
			},
		}, {
			position: 'right-center',
			deviation: {
				left: fixedDeviation,
			},
		}, {
			position: 'right-bottom',
			deviation: {
				left: fixedDeviation,
				top: computedHeightDeviation,
			},
		}];
		return schema;
	}

	setSticky = (value: boolean) => {
		this.setState({
			stickyActive: value,
		});
	}

	resolvePromise = () => {
		if (typeof this.props.content === 'function') {
			Promise.resolve(this.props.content()).then(
				(result) => this.setState({
					content: result,
					loading: false,
				}, () => {
					// To handle Esc key press before promise is resolved
					if (this.state.isOpen) {
						if (!document.getElementById(this.uniqueAutoId)) {
							return false;
						}
					}
				}),
			);
		}
	}

	handleOutsideClick = (event: any) => {
		event.stopPropagation();
		if (
			this.tooltipRef.current
			&& !this.tooltipRef.current.contains(event.target)
			&& !document.getElementById('cs-autoposition').contains(event.target)
		) {
			this.setSticky(false);
			this.closeTooltip();
		}
	}

	render() {
		const {
			children,
			className,
			content,
			delayTooltip,
			focusable,
			height,
			iconColor,
			iconName,
			iconOrigin,
			iconSize,
			id,
			maxHeight,
			maxWidth,
			padding,
			position,
			stickyOnClick,
			stylePosition,
			tooltipHeader,
			variant,
			width,
			...rest
		} = this.props;

		const tooltipClasses = classNames(
			'cs-tooltip',
			{
				[`cs-tooltip-${this.state.computedPosition}`]: this.state.computedPosition,
				[`cs-tooltip-${variant}`]: variant,
				'cs-tooltip-with-header': tooltipHeader,
				'cs-tooltip-overflow-auto': maxHeight || maxWidth || height || width,
			},
		);

		const tooltipWrapperClasses = classNames(
			'cs-tooltip-wrapper',
			{
				'cs-tw-icon-c': iconColor,
				[`cs-tw-${variant}`]: variant,
				[`cs-tooltip-style-position-${stylePosition}`]: stylePosition,
				[`${className}`]: className,
			},
		);

		const getTooltipStyle = () => {
			if (this.state.loading) {
				return {
					'--cs-tooltip-height': '3.5rem',
					'--cs-tooltip-width': '3.5rem',
					'--cs-tooltip-padding': '0',
				};
			}
			return {
				'--cs-tooltip-height': height,
				'--cs-tooltip-width': width,
				'--cs-tooltip-max-height': maxHeight,
				'--cs-tooltip-max-width': maxWidth,
				'--cs-tooltip-padding': padding,
			};
		};

		const tooltipStyle: CSSProperties = {
			...getTooltipStyle(),
			'--cs-tw-dimension': this.state.tooltipWrapperDimension ? `${this.state.tooltipWrapperDimension}px` : '',
		};

		const tooltip = (
			<div
				className={tooltipClasses}
				style={tooltipStyle}
				id={this.uniqueAutoId}
				{...rest}
			>
				{this.state.loading
					? <CSSpinner overlay="transparent" />
					: (
						<>
							{tooltipHeader && (
								<div className="cs-tooltip-header">{tooltipHeader}</div>
							)}

							{this.state.content
								? Array.isArray(this.state.content)
									? (this.state.content.map((contentItem, index) => (
										<div className="cs-tooltip-body" key={index}>
											{contentItem}
										</div>
									)))
									: <div className="cs-tooltip-body">{this.state.content}</div>
								: null}
						</>
					)}
			</div>
		);

		const tooltipIconName = () => {
			if (iconName) return iconName;
			if (variant === 'basic') return 'info';
			return variant;
		};

		const setIconSize = () => {
			if (iconSize === 'medium') return '1rem';
			return '0.875rem';
		};

		const handleOnMouseEnter = () => {
			if (stylePosition === 'fixed' && !this.state.stickyActive) {
				this.openTooltip();
			} else if (stylePosition === 'absolute') {
				this.setState({
					content,
				});
			}
		};

		return (
			<div
				className={tooltipWrapperClasses}
				onClick={stylePosition === 'fixed' && stickyOnClick ? () => this.setSticky(true) : null}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={stylePosition === 'fixed' && !this.state.stickyActive ? this.closeTooltip : null}
				onFocus={stylePosition === 'fixed' ? this.openTooltip : null}
				onBlur={stylePosition === 'fixed' && !this.state.stickyActive ? this.closeTooltip : null}
				// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
				tabIndex={focusable ? 0 : -1} // Tooltip is not interactive but should have tabindex={0} to display when focused
				role="tooltip"
				ref={this.tooltipRef}
				aria-labelledby={this.uniqueAutoId}
				id={id}
			>
				{children
				|| (
					<CSIcon
						color={iconColor}
						name={tooltipIconName()}
						className="cs-tooltip-icon"
						size={setIconSize()}
						origin={iconOrigin}
					/>
				)}
				{!this.state.hidden && (
					<>
						{stylePosition === 'absolute' ? (
							tooltip
						) : (
							<>
								{this.state.isOpen && (
									<CSAutoposition
										initialPosition={this.props.position}
										positionSchema={this.getTooltipPositionSchema()}
										referencePoint={this.tooltipRef.current}
										onPositionChange={(computedPosition) => this.setState({ computedPosition })}
										zIndex="var(--z-index-tooltip)"
									>
										<div className={tooltipWrapperClasses}>
											{tooltip}
										</div>
									</CSAutoposition>
								)}
							</>
						)}
					</>
				)}
			</div>
		);
	}
}

export default CSTooltip;
