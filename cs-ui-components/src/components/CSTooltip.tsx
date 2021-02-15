import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import CSIcon, { CSIconOrigin } from './CSIcon';
import { Portal } from 'react-portal';
import { v4 as uuidv4 } from 'uuid';

export type CSTooltipIconSize = 'small' | 'medium';
export type CSTooltipPosition =
	'bottom-right' |
	'bottom-left' |
	'top-right' |
	'top-left' |
	'top-center' |
	'bottom-center' |
	'right-top' |
	'right-center' |
	'right-bottom' |
	'left-top' |
	'left-center' |
	'left-bottom';

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
	hidden: boolean;
	computedTooltipStyle?: CSSProperties;
	computedPosition?: CSTooltipPosition;
	tooltipWrapperDimension?: number;
	stickyActive?: boolean;
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
			computedPosition: this.props.position,
			stickyActive: false
		};

		let tooltipRoot = document.getElementById(this.tooltipId);
		if (!tooltipRoot) {
			tooltipRoot = document.createElement('div');
			tooltipRoot.className = this.tooltipId;
			tooltipRoot.id = this.tooltipId;
			document.body.appendChild(tooltipRoot);
		}
	}

	setSticky = (value: boolean) => {
		this.setState({
			stickyActive: value
		});
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

		const tooltipClasses = classNames('cs-tooltip', {
			[`cs-tooltip-${this.state.computedPosition}`]: this.state.computedPosition,
			[`cs-tooltip-${variant}`]: variant,
			'cs-tooltip-with-header': tooltipHeader,
			'cs-tooltip-overflow-auto': maxHeight || maxWidth || height || width
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
			'--cs-tooltip-max-height': maxHeight,
			'--cs-tooltip-max-width': maxWidth,
			'--cs-tooltip-padding': padding,
			'--cs-tw-dimension': this.state.tooltipWrapperDimension ? this.state.tooltipWrapperDimension + 'px' : ''
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
				onClick={stylePosition === 'fixed' && stickyOnClick ? () => this.setSticky(true) : null}
				onMouseEnter={stylePosition === 'fixed' && !this.state.stickyActive ? this.openTooltip : null}
				onMouseLeave={stylePosition === 'fixed' && !this.state.stickyActive ? this.closeTooltip : null}
				onFocus={stylePosition === 'fixed' ? this.openTooltip : null}
				onBlur={stylePosition === 'fixed' && !stickyOnClick && !this.state.stickyActive ? this.closeTooltip : null}
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
							className={'cs-tooltip-icon ' + 'cs-icon-' + iconSize}
							origin={iconOrigin}
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
											<div className={tooltipWrapperClasses}>
												{tooltip}
											</div>
										</Portal>
									)}
								</>
							)}
					</>
				)}
			</div>
		);
	}

	componentDidMount() {
		if (this.props.stickyOnClick) {
			document.addEventListener('click', e => this.handleOutsideClick(e, this.tooltipRef.current));
		}
	}
	componentWillUnmount() {
		document.removeEventListener('click', e => this.handleOutsideClick(e, this.tooltipRef.current));
	}

	handleOutsideClick = (e: any, element: any) => {
		e.stopPropagation();
		if (element &&
			element.contains(e.target)) {
			return;
		}
		this.setSticky(false);
		this.closeTooltip();
	}

	private openTooltip = () => {
		this.setTooltipPosition();

		if (this.props.delayTooltip && this.props.delayTooltip > 0) {
			const delay = this.props.delayTooltip;

			this.timeoutRef = setTimeout(() => {
				this.popupTriggered = true;
				this.setState({ hidden: false });
			}, delay);
		}
	}

	private closeTooltip = () => {
		this.setState({
			computedTooltipStyle: undefined,
			computedPosition: this.props.position,
			tooltipWrapperDimension: undefined
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
		let [openOn, expandTo] = computedPosition.split('-');

		// check top position of tooltip
		if (tooltipRect.top <= 0) {
			if (openOn === 'top') {
				openOn = 'bottom';
			} else if (expandTo === 'top' || expandTo === 'center') {
				expandTo = 'bottom';
			}
		}
		// check bottom position of tooltip
		if (tooltipRect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight)) {
			if (openOn === 'bottom') {
				openOn = 'top';
			} else if (expandTo === 'bottom' || expandTo === 'center') {
				expandTo = 'top';
			}
		}
		// check right and center position of tooltip
		if (tooltipRect.right >=
			(window.innerWidth || document.documentElement.clientWidth)) {
			if (openOn === 'right') {
				openOn = 'left';
			} else if (expandTo === 'right' || expandTo === 'center') {
				expandTo = 'left';
			}
		}
		// check left and center position of tooltip
		if (tooltipRect.left <= 0) {
			if (openOn === 'left') {
				openOn = 'right';
			} else if (expandTo === 'left' || expandTo === 'center') {
				expandTo = 'right';
			}
		}

		const position = (openOn + '-' + expandTo) as CSTooltipPosition;
		if (position !== computedPosition) {
			this.setState({
				computedPosition: position
			}, this.setTooltipPosition);
		}
	}

	private tooltipRefCallback = (element: HTMLDivElement) => {
		if (element) {
			const tooltipRect = element.getBoundingClientRect();
			this.autoTooltipPosition(tooltipRect);

			if (this.props.stickyOnClick) {
				element.addEventListener('click', e => this.handleOutsideClick(e, element));
			}
		}
	}

	private getTop = (wrapperInfo: DOMRect, openOn?: string) => {
		if (openOn === 'bottom') {
			return wrapperInfo.bottom + this.convertRemToPixels(0.5) + 1;
		}
		return wrapperInfo.top + wrapperInfo.height / 2 - this.convertRemToPixels(1) + 2;
	}
	private getBottom = (wrapperInfo: DOMRect, openOn?: string) => {
		if (openOn === 'top') {
			return window.innerHeight - wrapperInfo.top + this.convertRemToPixels(0.5) + 1;
		}
		return window.innerHeight - wrapperInfo.top - wrapperInfo.height / 2 - this.convertRemToPixels(1) + 2;
	}
	private getLeft = (wrapperInfo: DOMRect, openOn?: string) => {
		if (openOn === 'right') {
			return wrapperInfo.right + this.convertRemToPixels(0.5) + 1;
		}
		return wrapperInfo.left + wrapperInfo.width / 2 - this.convertRemToPixels(1.5);
	}
	private getRight = (wrapperInfo: DOMRect, openOn?: string) => {
		if (openOn === 'left') {
			return window.innerWidth - wrapperInfo.left + this.convertRemToPixels(0.5) + 1;
		}
		return window.innerWidth - wrapperInfo.right + wrapperInfo.width / 2 - this.convertRemToPixels(1.5);
	}

	private setTooltipPosition = () => {
		const wrapperInfo = this.tooltipRef.current.getBoundingClientRect();

		const centerX = {
			left: wrapperInfo.left + wrapperInfo.width / 2,
			transform: 'translateX(-50%) translate3d(0, 0, 0)'
		};
		const centerY = {
			top: wrapperInfo.top + wrapperInfo.height / 2,
			transform: 'translateY(-50%) translate3d(0, 0, 0)'
		};

		switch (this.state.computedPosition) {
			case 'bottom-right':
				this.setState({
					computedTooltipStyle: {
						top: this.getTop(wrapperInfo, 'bottom'),
						left: this.getLeft(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.width
				});
				break;
			case 'bottom-left':
				this.setState({
					computedTooltipStyle: {
						top: this.getTop(wrapperInfo, 'bottom'),
						right: this.getRight(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.width
				});
				break;
			case 'bottom-center':
				this.setState({
					computedTooltipStyle: {
						top: this.getTop(wrapperInfo, 'bottom'),
						...centerX
					},
					tooltipWrapperDimension: wrapperInfo.width
				});
				break;
			case 'top-left':
				this.setState({
					computedTooltipStyle: {
						bottom: this.getBottom(wrapperInfo, 'top'),
						right: this.getRight(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.width
				});
				break;
			case 'top-center':
				this.setState({
					computedTooltipStyle: {
						bottom: this.getBottom(wrapperInfo, 'top'),
						...centerX
					},
					tooltipWrapperDimension: wrapperInfo.width
				});
				break;
			case 'right-top':
				this.setState({
					computedTooltipStyle: {
						left: this.getLeft(wrapperInfo, 'right'),
						bottom: this.getBottom(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.height
				});
				break;
			case 'right-bottom':
				this.setState({
					computedTooltipStyle: {
						left: this.getLeft(wrapperInfo, 'right'),
						top: this.getTop(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.height
				});
				break;
			case 'right-center':
				this.setState({
					computedTooltipStyle: {
						left: this.getLeft(wrapperInfo, 'right'),
						...centerY
					},
					tooltipWrapperDimension: wrapperInfo.height
				});
				break;
			case 'left-top':
				this.setState({
					computedTooltipStyle: {
						right: this.getRight(wrapperInfo, 'left'),
						bottom: this.getBottom(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.height
				});
				break;
			case 'left-bottom':
				this.setState({
					computedTooltipStyle: {
						right: this.getRight(wrapperInfo, 'left'),
						top: this.getTop(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.height
				});
				break;
			case 'left-center':
				this.setState({
					computedTooltipStyle: {
						right: this.getRight(wrapperInfo, 'left'),
						...centerY
					},
					tooltipWrapperDimension: wrapperInfo.height
				});
				break;
			case 'top-right':
			default:
				this.setState({
					computedTooltipStyle: {
						bottom: this.getBottom(wrapperInfo, 'top'),
						left: this.getLeft(wrapperInfo)
					},
					tooltipWrapperDimension: wrapperInfo.width
				});
				break;
		}
	}

	private convertRemToPixels = (rem: number) => {
		return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
	}
}

export default CSTooltip;
