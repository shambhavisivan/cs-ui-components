import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import CSIcon from './CSIcon';
import { Portal } from 'react-portal';
import { v4 as uuidv4 } from 'uuid';

export type CSTooltipIconSize = 'small' | 'medium';
export type CSTooltipPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'top-center' | 'bottom-center';
export type CSTooltipStylePosition = 'fixed' | 'absolute';
export type CSTooltipVariant = 'info' | 'warning' | 'error' | 'success' | 'basic';

export interface CSTooltipProps {
	[key: string]: any;
	className?: string;
	content: string | Array<string> | JSX.Element;
	delayTooltip?: number;
	focusable?: boolean;
	height?: string;
	iconColor?: string;
	iconName?: string;
	iconSize?: CSTooltipIconSize;
	id?: string;
	padding?: string;
	position?: CSTooltipPosition;
	stylePosition?: CSTooltipStylePosition;
	tooltipHeader?: string;
	variant?: CSTooltipVariant;
	width?: string;
}

interface CSTooltipState {
	hidden: boolean;
	computedTooltipStyle?: CSSProperties;
	computedPosition?: CSTooltipPosition;
}

class CSTooltip extends React.Component<CSTooltipProps, CSTooltipState> {
	static defaultProps = {
		iconSize: 'small',
		position: 'top-right',
		variant: 'info',
		stylePosition: 'fixed',
		focusable: true
	};

	private timeoutRef: NodeJS.Timeout;
	private popupTriggered = false;
	private tooltipRef: React.RefObject<HTMLDivElement>;

	private uniqueAutoId = uuidv4();
	private tooltipId = 'cs-tooltip-root';

	constructor(props: CSTooltipProps) {
		super(props);

		this.tooltipRef = React.createRef();

		this.state = {
			hidden: props.delayTooltip && props.delayTooltip > 0,
			computedPosition: this.props.position
		};

		let tooltipRoot = document.getElementById(this.tooltipId);
		if (!tooltipRoot) {
			tooltipRoot = document.createElement('div');
			tooltipRoot.className = this.tooltipId;
			tooltipRoot.id = this.tooltipId;
			document.body.appendChild(tooltipRoot);
		}
	}

	render() {
		const {
			children,
			className,
			content,
			focusable,
			height,
			iconColor,
			iconName,
			iconSize,
			id,
			padding,
			position,
			stylePosition,
			tooltipHeader,
			variant,
			width,
			...rest
		} = this.props;

		const tooltipClasses = classNames('cs-tooltip', {
			[`cs-tooltip-${this.state.computedPosition}`]: this.state.computedPosition,
			[`cs-tooltip-${variant}`]: variant,
			'cs-tooltip-with-header': tooltipHeader
		});

		const tooltipWrapperClasses = classNames('cs-tooltip-wrapper', {
			'cs-tw-icon-c': iconColor,
			[`cs-tw-${variant}`]: variant,
			[`cs-tooltip-style-position-${stylePosition}`]: stylePosition,
			[`${className}`]: className
		});

		const tooltipContent = Array.isArray(content)
			? content
			: [content];

		const tooltipStyle = {
			...this.state.computedTooltipStyle,
			'--cs-tooltip-height': height,
			'--cs-tooltip-width': width,
			'--cs-tooltip-padding': padding
		};

		const tooltip = (
			<div
				className={tooltipClasses}
				style={tooltipStyle}
				id={this.uniqueAutoId}
				ref={this.props.stylePosition === 'fixed' ? this.tooltipRefCallback : null}
				{...rest}
			>
				{tooltipHeader && (
					<div className="cs-tooltip-header">{tooltipHeader}</div>
				)}
				{tooltipContent.map((text, index) => (
					<div className="cs-tooltip-body" key={index}>
						{text}
					</div>
				))}
			</div>
		);

		const tooltipIconName = () => {
			switch (true) {
				case !!iconName:
					return iconName;
				case variant === 'basic':
					return 'info';
				default:
					return variant;
			}
		};
		return (
			<div
				className={tooltipWrapperClasses}
				onMouseEnter={stylePosition !== 'absolute' ? this.openTooltip : null}
				onMouseLeave={stylePosition !== 'absolute' ? this.closeTooltip : null}
				onFocus={stylePosition !== 'absolute' ? this.openTooltip : null}
				onBlur={stylePosition !== 'absolute' ? this.closeTooltip : null}
				tabIndex={focusable ? 0 : -1}
				role="tooltip"
				ref={this.tooltipRef}
				aria-labelledby={this.uniqueAutoId}
				id={id}
			>
				{children ? (
					children
				) : (
						<CSIcon
							color={iconColor}
							name={tooltipIconName()}
							className={'cs-icon-' + iconSize}
						/>
					)}
				{!this.state.hidden && (
					<>
						{stylePosition === 'absolute' ? (
							tooltip
						) : (
								<>
									{this.state.computedTooltipStyle && (
										<Portal node={document && document.getElementById(this.tooltipId)}>
											<div className={tooltipWrapperClasses}>{tooltip}</div>
										</Portal>
									)}
								</>
							)}
					</>
				)}
			</div>
		);
	}

	private openTooltip = () => {
		this.setTooltipPosition();

		if (this.props.delayTooltip && this.props.delayTooltip > 0) {
			const delay = this.props.delayTooltip;

			const ref = setTimeout(() => {
				this.popupTriggered = true;
				this.setState({ hidden: false });
			}, delay);
			this.timeoutRef = ref;
		}
	}

	private closeTooltip = () => {
		this.setState({
			computedTooltipStyle: undefined,
			computedPosition: this.props.position
		});

		if (this.props.delayTooltip && this.props.delayTooltip > 0) {
			if (this.popupTriggered) {
				this.setState({ hidden: true });
			} else {
				clearTimeout(this.timeoutRef);
			}

			this.popupTriggered = false;
		}
	}

	private autoTooltipPosition = (tooltipRect: DOMRect) => {
		const { computedPosition } = this.state;
		let [vertical, horizontal] = computedPosition.split('-');

		// check top position of tooltip
		if (vertical === 'top' && tooltipRect.top <= 0) {
			vertical = 'bottom';
		}
		// check bottom position of tooltip
		if (vertical === 'bottom' &&
			tooltipRect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
			vertical = 'top';
		}
		// check right and center position of tooltip
		if ((horizontal === 'right' || horizontal === 'center') &&
			tooltipRect.right >= (window.innerWidth || document.documentElement.clientWidth)) {
			horizontal = 'left';
		}
		// check left and center position of tooltip
		if ((horizontal === 'left' || horizontal === 'center') &&
			tooltipRect.left <= 0) {
			horizontal = 'right';
		}

		const position = (vertical + '-' + horizontal) as CSTooltipPosition;
		if (position !== computedPosition) {
			this.setState({
				computedPosition: position
			}, this.setTooltipPosition);
		}
	}

	private tooltipRefCallback = (element: HTMLElement) => {
		if (element) {
			const tooltipRect = element.getBoundingClientRect();
			this.autoTooltipPosition(tooltipRect);
		}
	}

	private setTooltipPosition = () => {
		const wrapperInfo = this.tooltipRef.current.getBoundingClientRect();
		const top = wrapperInfo.top + this.convertRemToPixels(1.5);
		const right =
			window.innerWidth -
			wrapperInfo.right -
			this.convertRemToPixels(1.5) +
			wrapperInfo.width / 2;
		const bottom = window.innerHeight - wrapperInfo.top + this.convertRemToPixels(0.5) + 2;
		const left = wrapperInfo.left - this.convertRemToPixels(1.5) + wrapperInfo.width / 2;
		const center = {
			left: wrapperInfo.left + wrapperInfo.width / 2,
			transform: 'translateX(-50%) translate3d(0, 0, 0)'
		};

		switch (this.state.computedPosition) {
			case 'bottom-right':
				this.setState({
					computedTooltipStyle: {
						top,
						left
					}
				});
				break;
			case 'bottom-left':
				this.setState({
					computedTooltipStyle: {
						top,
						right
					}
				});
				break;
			case 'bottom-center':
				this.setState({
					computedTooltipStyle: {
						top,
						...center
					}
				});
				break;
			case 'top-left':
				this.setState({
					computedTooltipStyle: {
						bottom,
						right
					}
				});
				break;
			case 'top-center':
				this.setState({
					computedTooltipStyle: {
						bottom,
						...center
					}
				});
				break;
			case 'top-right':
			default:
				this.setState({
					computedTooltipStyle: {
						bottom,
						left
					}
				});
				break;
		}
	}

	private convertRemToPixels = (rem: number) => {
		return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
	}
}

export default CSTooltip;
