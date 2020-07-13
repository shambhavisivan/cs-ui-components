import React from 'react';

export interface PreviewLinksProps {
	component?: any;
}

class PreviewLinks extends React.Component<PreviewLinksProps> {
	render() {
		return (
			<>
				{this.props.component.examples.map((example: any, i: number) => (
					<div className="prop-group" key={i}>
						<h4>
							<a href={`#${this.props.component.name}-${example.propName}`} key={example.propName}>
								{example.propName}
							</a>
						</h4>
						{example.variations.map((variation: any, j: any) => (
							variation.quickLink ? (
								<span key={j}>
									<a href={`#${this.props.component.name}-${example.propName}-${variation.quickLink}`}>
										{variation.quickLink}
									</a>
								</span>
							) : null
						))}
					</div>
				))}
				<div className="prop-group">
					<h4>
						<a href={`#properties-table-${this.props.component.name}`}>
							Properties List
						</a>
					</h4>
				</div>
				{this.props.component.api && (
					<div className="prop-group">
						<h4>
							<a href={`#api-table-${this.props.component.name}`}>
								API
							</a>
						</h4>
					</div>
				)}
			</>
		);
	}
}

export default PreviewLinks;
