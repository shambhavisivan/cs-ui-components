import React from 'react';
import { Link } from 'react-router-dom';
import * as CSDH from '../demo-helpers';
import {
	CSButton,
	CSDataTable,
	CSDataTableRowWithMetaInterface
} from '@cloudsense/cs-ui-components';

import CSDContent from './CSDContent';
import CSDHeading from './CSDHeading';
import CSDSection from './CSDSection';

export interface CSDAccessibilityProps {
	criteria: Array<string>;
	requirements: any;
}

const CSDAccessibility = ({ criteria, requirements }: CSDAccessibilityProps) => {
	const renderCriteria = () => {
		if (!criteria) {
			return null;
		}

		return (
			<CSDSection>
				<CSDHeading level={2}>Related Criteria</CSDHeading>
				{criteria.map((criterion: string, criterionIndex: number) => (
					<React.Fragment key={criterion}>
						<CSButton
							key={criterion}
							label={criterion}
							size="xsmall"
							btnType="transparent"
							btnStyle="brand"
							routerLink={<Link to={`/accessibility#${criterion}`}/>}
						/>
						{criterionIndex !== criteria.length - 1 && ','}
					</React.Fragment>
				))}
			</CSDSection>
		);
	};

	const renderRequirements = () => {
		if (!requirements) {
			return null;
		}

		const rows = [];

		if (requirements.structure) {
			rows.push({ key: 'structure', data: { name: 'Structure', content: requirements.structure } });
		}

		if (requirements.attributes) {
			rows.push({ key: 'attributes', data: { name: 'Props & Attributes', content: requirements.attributes } });
		}

		if (requirements.styling) {
			rows.push({ key: 'styling', data: { name: 'Styling', content: requirements.styling } });
		}

		if (requirements.keyboardOperability) {
			rows.push({ key: 'keyboardOperability', data: { name: 'Keyboard Operability', content: requirements.keyboardOperability } });
		}

		return (
			<CSDSection>
				<CSDHeading level={2}>Implemented &amp; Supported</CSDHeading>
				<CSDataTable
					columnDividers
					disableHover
					headless
					density="comfortable"
					className="csd-accessibility-table"
					rows={rows}
					columns={[
						{
							key: 'name',
							width: '11rem'
						}, {
							key: 'content',
							render: (row: CSDataTableRowWithMetaInterface) => (
								row.data!.content!.map((option: string) => (
									<li key={option}>{CSDH.parseCode(option)}</li>
								))
							)
						}
					]}
				/>
			</CSDSection>
		);
	};

	return (
		<CSDContent>
			{renderCriteria()}
			{renderRequirements()}
		</CSDContent>
	);
};

export default CSDAccessibility;
