import React from 'react';
import CSIcon from './CSIcon';
import classNames from 'classnames';

export interface CSSectionProps {
	className?: string;
	collapsed?: boolean;
	collapsible?: boolean;
	id?: string;
	title: string;
}

export interface CSSectionState {
	collapsed?: boolean;
	collapsible?: boolean;
}

class CSSection extends React.Component<CSSectionProps, CSSectionState> {
	constructor(props: CSSectionProps) {
		super(props);

		this.state = {
			collapsed: false
		};

		this.toggle = this.toggle.bind(this);
	}
	toggle() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	// When component mounts if collapsed equals true hide content initially
	componentDidMount() {
		if (this.props.collapsed) {
			this.setState({
				collapsed: true
			});
		}
	}

	componentDidUpdate(prevProps: CSSectionProps) {
		if (prevProps.collapsed !== this.props.collapsed) {
			this.setState({ collapsed: this.props.collapsed});
		}
	}

	render() {

		const sectionClasses = classNames(
			'cs-section',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		const sectionTitleClasses = classNames(
			'cs-section-wrapper', {
				'cs-section-wrapper-padding': this.props.collapsed === true && this.props.collapsible !== true
			}
		);
		return (
			<section
				className={sectionClasses}
				id={this.props.id}
			>
				<h3 className={sectionTitleClasses}>
					{this.props.collapsible ?
						<button
							className="cs-section-button"
							onClick={this.toggle}
							aria-expanded={!this.state.collapsed}
						>
							<CSIcon name="chevronright" rotate={this.state.collapsed ? '90' : null} />
							<span className="cs-section-title">{this.props.title}</span>
						</button>
					:
						<span className="cs-section-title">{this.props.title}</span>

					}
				</h3>
				{this.state.collapsed ?
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
