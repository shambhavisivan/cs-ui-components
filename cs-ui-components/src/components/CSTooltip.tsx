import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CSIcon, { CSIconOrigin } from './CSIcon';
import KeyCode from '../util/KeyCode';
import CSSpinner from './CSSpinner';
import CSAutoposition from '../helpers/autoposition/CSAutoposition';
import { CSAutopositions, CSAutopositionSchema } from '../helpers/autoposition/cs-autoposition-types';

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
		iconOrigin: 'slds',
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

	private mounted: boolean;

	constructor(props: CSTooltipProps) {
		super(props);

		this.tooltipRef = React.createRef();

		this.state = {
			hidden: props.delayTooltip && props.delayTooltip > 0,
			computedPosition: props.position,
			stickyActive: false,
			content: props.content,
			isOpen: false,
		};
	}

	componentDidMount() {
		this.mounted = true;
	}

	componentWillUnmount() {
		const { stickyActive } = this.state;

		if (stickyActive) {
			document.removeEventListener('click', this.handleOutsideClick);
		}

		this.mounted = false;
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

	onKeyDown(event: any) {
		const { stickyOnClick } = this.props;

		if (event.key === KeyCode.Escape) {
			if (stickyOnClick) {
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
		const { content, stickyOnClick, delayTooltip } = this.props;
		if (typeof content === 'function') {
			this.setState({ loading: true }, () => this.resolvePromise());
		} else {
			this.setState({ content });
		}

		this.setState({ isOpen: true });
		this.setTooltipWrapperDimension();

		if (stickyOnClick) {
			document.addEventListener('click', this.handleOutsideClick);
		}

		if (delayTooltip && delayTooltip > 0) {
			this.timeoutRef = setTimeout(() => {
				this.popupTriggered = true;
				this.setState({ hidden: false });
			}, delayTooltip);
		}

		document.addEventListener('keydown', this.onKeyDown.bind(this));
	}

	private closeTooltip = () => {
		const { position, stickyOnClick, delayTooltip } = this.props;
		const { stickyActive } = this.state;
		if (this.mounted) {
			this.setState({
				computedPosition: position,
				tooltipWrapperDimension: undefined,
			});
		}
		this.setState({
			isOpen: false,
			tooltipWrapperDimension: undefined,
		});

		if (stickyOnClick && !stickyActive) {
			document.removeEventListener('click', this.handleOutsideClick);
		}

		if (delayTooltip && delayTooltip > 0) {
			if (this.popupTriggered) {
				this.setState({ hidden: true });
			} else {
				clearTimeout(this.timeoutRef);
			}

			this.popupTriggered = false;
		}
	}

	private setTooltipWrapperDimension = () => {
		const { computedPosition } = this.state;

		const positions = computedPosition.split('-');
		const openOnPosition = positions[0];
		const tooltipWrapperRect = this.tooltipRef.current?.getBoundingClientRect();
		if (openOnPosition === 'top' || openOnPosition === 'bottom') {
			this.setState({
				tooltipWrapperDimension: tooltipWrapperRect?.width ?? 0,
			});
		} else if (openOnPosition === 'left' || openOnPosition === 'right') {
			this.setState({
				tooltipWrapperDimension: tooltipWrapperRect?.height ?? 0,
			});
		}
	}

	private convertRemToPixels = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

	private getTooltipPositionSchema = () => {
		const wrapperInfo = this.tooltipRef.current?.getBoundingClientRect();
		const wrapperInfoWidth = wrapperInfo?.width ?? 0;
		const wrapperInfoHeight = wrapperInfo?.height ?? 0;

		const fixedDeviation = 10;
		const computedWidthDeviation = wrapperInfoWidth / 2 - this.convertRemToPixels(1.5);
		const computedHeightDeviation = -wrapperInfoHeight / 2 - this.convertRemToPixels(1) + 2;

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
		const { content } = this.props;
		const { isOpen } = this.state;
		if (typeof content === 'function') {
			Promise.resolve(content()).then(
				(result) => this.setState({
					content: result,
					loading: false,
				},
				() => (
					// To handle Esc key press before promise is resolved
					!(isOpen && !document.getElementById(this.uniqueAutoId))
				)),
			);
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

		const {
			computedPosition,
			content: contentState,
			hidden,
			isOpen,
			loading,
			stickyActive,
			tooltipWrapperDimension,
		} = this.state;

		const tooltipClasses = classNames(
			'cs-tooltip',
			{
				[`cs-tooltip-${computedPosition}`]: computedPosition,
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
			if (loading) {
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
			'--cs-tw-dimension': tooltipWrapperDimension ? `${tooltipWrapperDimension}px` : '',
		};

		const tooltipContent = () => {
			if (!contentState) return null;
			if (Array.isArray(contentState)) {
				return (contentState.map((contentItem, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<div className="cs-tooltip-body" key={index}>
						{contentItem}
					</div>
				)));
			}
			return <div className="cs-tooltip-body">{contentState}</div>;
		};

		const tooltip = (
			<div
				className={tooltipClasses}
				style={tooltipStyle}
				id={this.uniqueAutoId}
				{...rest}
			>
				{loading
					? <CSSpinner overlay="transparent" />
					: (
						<>
							{tooltipHeader && <div className="cs-tooltip-header">{tooltipHeader}</div>}
							{tooltipContent()}
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
			if (stylePosition === 'fixed' && !stickyActive) {
				this.openTooltip();
			} else if (stylePosition === 'absolute') {
				this.setState({
					content,
				});
			}
		};

		return (
			// eslint-disable-next-line jsx-a11y/click-events-have-key-events
			<div
				className={tooltipWrapperClasses}
				onClick={stylePosition === 'fixed' && stickyOnClick ? () => this.setSticky(true) : null}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={stylePosition === 'fixed' && !stickyActive ? this.closeTooltip : null}
				onFocus={stylePosition === 'fixed' ? this.openTooltip : null}
				onBlur={stylePosition === 'fixed' && !stickyActive ? this.closeTooltip : null}
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
				{!hidden && (
					<>
						{stylePosition === 'absolute' ? (
							tooltip
						) : (
							<>
								{isOpen && (
									<CSAutoposition
										initialPosition={position}
										positionSchema={this.getTooltipPositionSchema()}
										referencePoint={this.tooltipRef.current}
										onPositionChange={(newComputedPosition) => this.setState({ computedPosition: newComputedPosition })}
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
