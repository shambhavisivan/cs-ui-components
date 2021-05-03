import React from 'react';
import { Link } from 'react-router-dom';
import {
	CSButton,
	CSTable,
	CSTableRow,
	CSTableCell,
	CSTableBody
} from '@cloudsense/cs-ui-components';
import { parseCode } from './helpers';
import {
	PreviewInterface
} from './types';

const PreviewAccessibility: React.FC<PreviewInterface | any> = ({ accessibility, name }) => {
	const { criterionList, requirements } = accessibility;

	return (
		<div className="accessibility-conformance-section" id="component-accessibility">
			<h2 className="demo-heading">
				{name} Accessibility Conformance Requirements
			</h2>
			<div className="accessibility-criteria-list">
				<h3 className="demo-heading">Related Criteria:</h3>
				{criterionList?.map((criterion: string, criterionIndex: number) => (
					<React.Fragment key={criterion}>
						<CSButton
							key={criterion}
							label={criterion}
							className="criterion"
							size="xsmall"
							btnType="transparent"
							btnStyle="brand"
							routerLink={<Link to={`../accessibility#${criterion}`}/>}
						/>
						{criterionIndex !== criterionList.length - 1 && ','}
					</React.Fragment>
				))}
			</div>
			{requirements && <div className="accessibility-table-wrapper">
				<h3 className="demo-heading">Implemented &amp; Supported:</h3>
				<CSTable className="accessibility-table">
					<CSTableBody className="accessibility-table-body">
						{requirements?.structure && (
							<CSTableRow className="accessibility-table-row">
								<CSTableCell className="accessibility-table-cell"
											 text="HTML Structure"/>
								<CSTableCell className="accessibility-table-cell">
									<ul>
										{requirements.structure.map((option: string) => (
											<li key={option}>{parseCode(option)}</li>
										))}
									</ul>
								</CSTableCell>
							</CSTableRow>
						)}
						{requirements?.attributes && (
							<CSTableRow className="accessibility-table-row">
								<CSTableCell
									className="accessibility-table-cell"
									text="Properties & Attributes"
								/>
								<CSTableCell className="accessibility-table-cell">
									<ul>
										{requirements.attributes.map((option: string) => (
											<li key={option}>{parseCode(option)}</li>
										))}
									</ul>
								</CSTableCell>
							</CSTableRow>
						)}
						{requirements?.keyboardOperability && (
							<CSTableRow className="accessibility-table-row">
								<CSTableCell
									className="accessibility-table-cell"
									text="Keyboard Operability"
								/>
								<CSTableCell className="accessibility-table-cell">
									<ul>
										{requirements.keyboardOperability.map((option: string) => (
											<li key={option}>{parseCode(option)}</li>
										))}
									</ul>
								</CSTableCell>
							</CSTableRow>
						)}
						{requirements?.styling && (
							<CSTableRow className="accessibility-table-row">
								<CSTableCell text="Styling" className="accessibility-table-cell" />
								<CSTableCell className="accessibility-table-cell">
									<ul>
										{requirements.styling.map((option: string) => (
											<li key={option}>{parseCode(option)}</li>
										))}
									</ul>
								</CSTableCell>
							</CSTableRow>
						)}
					</CSTableBody>
				</CSTable>
			</div>}
		</div>
	);
};

export default PreviewAccessibility;
