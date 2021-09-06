import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';
import CSTooltip from './CSTooltip';

export type CSSectionErrorMsgType = string | Array<string>;

export interface CSSectionProps {
	[key: string]: any;
	bgColor?: string;
	borderRadius?: string;
	className?: string;
	collapsible?: boolean;
	defaultClosed?: boolean;
	error?: boolean;
	errorMessage?: CSSectionErrorMsgType;
	id?: string;
	title?: string;
}

export interface CSSectionState {
	defaultClosed?: boolean;
	collapsible?: boolean;
}

class CSSection extends React.Component<CSSectionProps, CSSectionState> {
	constructor(props: CSSectionProps) {
		super(props);

		this.state = {
			defaultClosed: false,
		};

		this.toggle = this.toggle.bind(this);
	}

	// When component mounts if defaultClosed equals true hide content initially
	componentDidMount() {
		const { defaultClosed } = this.props;

		if (defaultClosed) {
			this.setState({
				defaultClosed: true,
			});
		}
	}

	componentDidUpdate(prevProps: CSSectionProps) {
		const { defaultClosed } = this.props;

		if (prevProps.defaultClosed !== defaultClosed) {
			this.updateDefaultClosed();
		}
	}

	toggle = () => {
		this.setState((prevState) => ({
			defaultClosed: !prevState.defaultClosed,
		}));
	}

	updateDefaultClosed = () => {
		const { defaultClosed } = this.props;

		this.setState({ defaultClosed });
	}

	render() {
		const {
			bgColor,
			borderRadius,
			children,
			className,
			collapsible,
			defaultClosed,
			error,
			errorMessage,
			id,
			title,
			...rest
		} = this.props;

		const { defaultClosed: defaultClosedState } = this.state;

		const style: CSSProperties = {
			'--cs-section-border-radius': borderRadius,
			'--cs-section-header-bg': bgColor,
		};
		const sectionClasses = classNames(
			'cs-section',
			{
				[`${className}`]: className,
			},
		);
		const sectionTitleClasses = classNames(
			'cs-section-header',
			{
				'cs-section-header-padding': defaultClosed === true && collapsible !== true,
				'cs-section-header-error': error,
			},
		);

		const sectionTitle = title ? <span className="cs-section-title">{title}</span> : null;

		const sectionErrorMsg = (errorMessage?.length && error)
			? (
				<CSTooltip
					content={errorMessage}
					variant="error"
					iconName="warning"
				/>
			) : null;

		return (
			<section
				className={sectionClasses}
				style={style}
				id={id}
				{...rest}
			>
				<h3 className={sectionTitleClasses}>
					{collapsible
						? (
							<button
								type="button"
								className="cs-section-button"
								onClick={this.toggle}
								aria-expanded={!defaultClosedState}
								aria-roledescription="section"
							>
								<CSIcon name="chevronright" size="0.875rem" rotate={defaultClosedState ? 0 : 90} />
								{sectionTitle}
								{sectionErrorMsg}
							</button>
						)
						: (
							<>
								{sectionTitle}
								{sectionErrorMsg}
							</>
						)}
				</h3>
				{defaultClosedState ? null : (
					<div className="cs-section-body">
						{children}
					</div>
				)}
			</section>
		);
	}
}

export default CSSection;
