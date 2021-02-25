import React from 'react';
import CSIcon from './CSIcon';
import classNames from 'classnames';

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
			defaultClosed: false
		};

		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			defaultClosed: !this.state.defaultClosed
		});
	}
	// When component mounts if defaultClosed equals true hide content initially
	componentDidMount() {
		if (this.props.defaultClosed) {
			this.setState({
				defaultClosed: true
			});
		}
	}

	componentDidUpdate(prevProps: CSSectionProps) {
		if (prevProps.defaultClosed !== this.props.defaultClosed) {
			this.setState({ defaultClosed: this.props.defaultClosed});
		}
	}

	render() {

		const {
			className,
			defaultClosed,
			collapsible,
			id,
			title,
			...rest
		} = this.props;

		const sectionClasses = classNames(
			'cs-section',
			{
				[`${className}`]: className
			}
		);
		const sectionTitleClasses = classNames(
			'cs-section-wrapper', {
				'cs-section-wrapper-padding': defaultClosed === true && collapsible !== true
			}
		);
		return (
			<section
				className={sectionClasses}
				id={id}
				{...rest}
			>
				<h3 className={sectionTitleClasses}>
					{this.props.collapsible ?
						<button
							className="cs-section-button"
							onClick={this.toggle}
							aria-expanded={!this.state.defaultClosed}
							aria-roledescription="section"
						>
							<CSIcon name="chevronright" rotate={this.state.defaultClosed ? null : '90'} />
							<span className="cs-section-title">{title}</span>
						</button>
					:
						<span className="cs-section-title">{title}</span>

					}
				</h3>
				{this.state.defaultClosed ?
					null
				:
					<div className="cs-section-title" role="region">
						{this.props.children}
					</div>
				}
			</section>
		);
	}
}

export default CSSection;
