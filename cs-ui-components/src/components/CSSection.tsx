import React from 'react';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSSectionProps {
	[key: string]: any;
	className?: string;
	collapsible?: boolean;
	defaultClosed?: boolean;
	id?: string;
	title: string;
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
		if (this.props.defaultClosed) {
			this.setState({
				defaultClosed: true,
			});
		}
	}

	componentDidUpdate(prevProps: CSSectionProps) {
		if (prevProps.defaultClosed !== this.props.defaultClosed) {
			this.updateDefaultClosed();
		}
	}

	toggle = () => {
		this.setState((prevState) => ({
			defaultClosed: !prevState.defaultClosed,
		}));
	}

	updateDefaultClosed = () => {
		this.setState({ defaultClosed: this.props.defaultClosed });
	}

	render() {
		const {
			className,
			children,
			defaultClosed,
			collapsible,
			id,
			title,
			...rest
		} = this.props;

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
			},
		);
		return (
			<section
				className={sectionClasses}
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
								aria-expanded={!this.state.defaultClosed}
								aria-roledescription="section"
							>
								<CSIcon name="chevronright" size="0.875rem" rotate={this.state.defaultClosed ? 0 : 90} />
								<span className="cs-section-title">{title}</span>
							</button>
						)
						: <span className="cs-section-title">{title}</span>}
				</h3>
				{this.state.defaultClosed
					? null
					: (
						<div className="cs-section-body">
							{children}
						</div>
					)}
			</section>
		);
	}
}

export default CSSection;
