import classNames from 'classnames';
import React, { CSSProperties } from 'react';
import CSIcon from './CSIcon';

export type CSTooltipPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

export interface CSTooltipProps {
	className?: string;
	content: string | Array<string> | JSX.Element;
	delayTooltip?: number;
	height?: string;
	iconName?: string;
	iconSize?: string;
	id?: string;
	position?: CSTooltipPosition;
	tooltipHeader?: string;
	variant?: string;
	width?: string;
	stylePosition?: string;
}

interface CSTooltipState {
	hidden: boolean;
	computedTooltipStyle?: CSSProperties;
}

class CSTooltip extends React.Component<CSTooltipProps, CSTooltipState> {
	static defaultProps = {
		iconSize: 'small',
		position: 'top-right',
		variant: 'info',
		stylePosition: 'fixed'
	};

	private timeoutRef: NodeJS.Timeout;
	private popupTriggered = false;
	private tooltipRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSTooltipProps) {
		super(props);

		this.tooltipRef = React.createRef();

		this.state = {
			hidden: props.delayTooltip && props.delayTooltip > 0
		};
	}

	render() {
		const tooltipClasses = classNames('cs-tooltip', {
			[`cs-tooltip-${this.props.position}`]: this.props.position,
			'cs-tooltip-error': this.props.variant === 'error',
			'cs-tooltip-info': this.props.variant === 'info',
			'cs-tooltip-warning': this.props.variant === 'warning',
			'cs-tooltip-with-header': this.props.tooltipHeader
		});

		const tooltipWrapperClasses = classNames('cs-tooltip-wrapper', {
			'cs-tw-error': this.props.variant === 'error',
			'cs-tw-info': this.props.variant === 'info',
			'cs-tw-warning': this.props.variant === 'warning',
			[`cs-tooltip-style-position-${this.props.stylePosition}`]: this.props.stylePosition,
			[`${this.props.className}`]: this.props.className
		});

		const content = Array.isArray(this.props.content)
			? this.props.content
			: [this.props.content];

		const tooltipStyle = {
			...this.state.computedTooltipStyle,
			'--cs-tooltip-height': this.props.height,
			'--cs-tooltip-width': this.props.width
		};

		return (
			<div
				className={tooltipWrapperClasses}
				onMouseEnter={this.props.stylePosition !== 'absolute' ? this.handleMouseEnter : null}
				onMouseLeave={this.props.stylePosition !== 'absolute' ? this.handleMouseLeave : null}
				tabIndex={0}
				role="tooltip"
				ref={this.tooltipRef}
			>
				{this.props.children ? (
					this.props.children
				) : (
					<>
						{this.props.iconName ? (
							<CSIcon
								name={this.props.iconName}
								className={'cs-icon-' + this.props.iconSize}
							/>
						) : (
							<CSIcon
								name={this.props.variant}
								className={'cs-icon-' + this.props.iconSize}
							/>
						)}
					</>
				)}
				{(this.props.stylePosition === 'absolute' || (!this.state.hidden && this.state.computedTooltipStyle)) && (
					<div className={tooltipClasses} style={tooltipStyle}>
						{this.props.tooltipHeader && (
							<div className="cs-tooltip-header">{this.props.tooltipHeader}</div>
						)}
						{content.map((text, index) => (
							<div className="cs-tooltip-body" key={index}>
								{text}
							</div>
						))}
					</div>
				)}
			</div>
		);
	}

	private handleMouseEnter = () => {
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

	private handleMouseLeave = () => {
		this.setState({ computedTooltipStyle: undefined });

		if (this.props.delayTooltip && this.props.delayTooltip > 0) {
			if (this.popupTriggered) {
				this.setState({ hidden: true });
			} else {
				clearTimeout(this.timeoutRef);
			}

			this.popupTriggered = false;
		}
	}

	private setTooltipPosition = () => {
		const wrapperInfo = this.tooltipRef.current.getBoundingClientRect();

		const top = wrapperInfo.top + this.convertRemToPixels(1.5);
		const right = window.innerWidth - wrapperInfo.right - this.convertRemToPixels(1.5) + (wrapperInfo.width / 2);
		const bottom = window.innerHeight - wrapperInfo.top + this.convertRemToPixels(0.5) + 2;
		const left = wrapperInfo.left - this.convertRemToPixels(1.5) + (wrapperInfo.width / 2);

		switch (this.props.position) {
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
			case 'top-left':
				this.setState({
					computedTooltipStyle: {
						bottom,
						right
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
