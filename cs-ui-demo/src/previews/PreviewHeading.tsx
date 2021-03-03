import React from 'react';
import {CSIcon} from '@cloudsense/cs-ui-components';

export interface PreviewHeadingProps {
	name: string;
	usage: string;
	accessible?: string;
	className?: string;
}

class PreviewHeading extends React.Component<PreviewHeadingProps> {
	render() {

		const accessibilityStatus = {
			icon: 'sentiment_negative',
			color: '#d9675d',
			description: 'Not accessible'
		};

		switch (this.props.accessible) {
			case 'yes':
				accessibilityStatus.icon = 'smiley_and_people';
				accessibilityStatus.color = '#009540';
				accessibilityStatus.description = 'Accessible';
				break;
			case 'partially':
				accessibilityStatus.icon = 'sentiment_neutral';
				accessibilityStatus.color = '#ffa429';
				accessibilityStatus.description = 'Partially accessible';
				break;
		}

		return (
			<div className={`preview-main-heading-wrapper ${this.props.className}`}>
				<div className="preview-main-heading-row">
					<h1>{this.props.name}</h1>
					{this.props.accessible !== 'hide' &&
						<div className="preview-accessibility-status-wrapper" >
							<CSIcon name={accessibilityStatus.icon} color={accessibilityStatus.color} size="1.25rem" />
							<span style={{color: accessibilityStatus.color}}>{accessibilityStatus.description}</span>
						</div>
					}
				</div>
				{this.props.usage ? <h2 className="preview-main-heading-subtitle">{this.props.usage}</h2> : null}
			</div>
		);
	}
}

export default PreviewHeading;
