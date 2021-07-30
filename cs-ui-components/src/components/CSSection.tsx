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
			className,
			children,
			defaultClosed,
			collapsible,
			id,
			title,
			...rest
		} = this.props;

		const { defaultClosed: defaultClosedState } = this.state;

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
								aria-expanded={!defaultClosedState}
								aria-roledescription="section"
							>
								<CSIcon name="chevronright" size="0.875rem" rotate={defaultClosedState ? 0 : 90} />
								<span className="cs-section-title">{title}</span>
							</button>
						)
						: <span className="cs-section-title">{title}</span>}
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
