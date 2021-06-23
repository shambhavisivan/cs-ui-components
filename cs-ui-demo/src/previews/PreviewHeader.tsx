import React from 'react';
import { CSAlert, CSAlertVariant, CSIcon } from '@cloudsense/cs-ui-components';
import { PreviewInterface, AlertInterface } from './types';

const PreviewHeader: React.FC<PreviewInterface> = ({
	name,
	alerts,
	usage,
	accessible
}) => {
	const accessibilityStatus = {
		icon: 'sentiment_negative',
		color: '#d9675d',
		description: 'Not accessible'
	};

	if (accessible === 'yes') {
		accessibilityStatus.icon = 'smiley_and_people';
		accessibilityStatus.color = '#009540';
		accessibilityStatus.description = 'Accessible';
	} else if (accessible === 'partially') {
		accessibilityStatus.icon = 'sentiment_neutral';
		accessibilityStatus.color = '#ffa429';
		accessibilityStatus.description = 'Partially accessible';
	}

	const getAlerts = () => {
		if (!alerts) {
			return null;
		}
		if (!Array.isArray(alerts)) {
			return (
				<CSAlert
					variant={alerts.variant as typeof CSAlertVariant}
					text={alerts.text}
					styleFormat="scoped"
				/>
			);
		}
		return alerts.map((alert: AlertInterface, alertIndex: number) => (
			<CSAlert
				key={alertIndex}
				variant={alert.variant as typeof CSAlertVariant}
				text={alert.text}
				styleFormat="scoped"
			/>
		));
	};

	return (
		<div className="preview-main-heading-wrapper">
			<div className="preview-main-heading-row">
				<h1>{name}</h1>
				{accessible && (
					<div className="preview-accessibility-status-wrapper">
						<CSIcon
							name={accessibilityStatus.icon}
							color={accessibilityStatus.color}
							size="1.25rem"
						/>
						<span style={{ color: accessibilityStatus.color }}>
							{accessibilityStatus.description}
						</span>
					</div>
				)}
			</div>
			{usage && <h2 className="preview-main-heading-subtitle">{usage}</h2>}
			{getAlerts()}
		</div>
	);
};

export default PreviewHeader;
