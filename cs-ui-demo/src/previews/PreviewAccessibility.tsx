import React from 'react';
import { Link } from 'react-router-dom';
import {
	CSButton,
	CSTable,
	CSTableRow,
	CSTableCell,
	CSTableBody
} from '@cloudsense/cs-ui-components';

export interface PreviewAccessibilityProps {
	components?: any;
}

const PreviewAccessibility: React.FC<PreviewAccessibilityProps> = ({ components }) => {
	const parseCode = (option: string) => (
		option.split('`').map((substring: string, substringIndex: number) => (
			substringIndex % 2
				? <code key={substringIndex} className="inline-code">{substring}</code>
				: substring
		))
	);

	return (
		<>
			{components.map((component: any, componentIndex: number) => (
				<div className="accessibility-conformance-section" key={componentIndex}>
					{component.accessibility.map((prop: any, propIndex: any) => (
						<React.Fragment key={propIndex}>
							<h2
								className="demo-heading"
								id={`accessibility-table-${components[0].name.split(' ').join('-').toLowerCase()}`}>
								{components[0].name} Accessibility Conformance Requirements
							</h2>
							<div className="accessibility-criteria-list">
								<h3 className="demo-heading">Related Criteria:</h3>
								{prop.criterionList && prop.criterionList.map((criterion: string, criterionIndex: number) => (
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
										{criterionIndex !== prop.criterionList.length - 1 && ','}
									</React.Fragment>
								))}
							</div>
							{prop.requirements.map((item: any, itemIndex: number) => (
								<div className="accessibility-table-wrapper" key={itemIndex}>
									<h3 className="demo-heading">Implemented &amp; Supported:</h3>
									<CSTable className="accessibility-table">
										<CSTableBody className="accessibility-table-body">
											{item.structure && (
												<CSTableRow className="accessibility-table-row">
													<CSTableCell className="accessibility-table-cell"
																 text="HTML Structure"/>
													<CSTableCell className="accessibility-table-cell">
														<ul>
															{item.structure.map((option: string) => (
																<li key={option}>{parseCode(option)}</li>
															))}
														</ul>
													</CSTableCell>
												</CSTableRow>
											)}
											{item.properties && (
												<CSTableRow className="accessibility-table-row">
													<CSTableCell
														className="accessibility-table-cell"
														text="Properties & Attributes"
													/>
													<CSTableCell className="accessibility-table-cell">
														<ul>
															{item.properties.map((option: string) => (
																<li key={option}>{parseCode(option)}</li>
															))}
														</ul>
													</CSTableCell>
												</CSTableRow>
											)}
											{item.keyboardOperability && (
												<CSTableRow className="accessibility-table-row">
													<CSTableCell
														className="accessibility-table-cell"
														text="Keyboard Operability"
													/>
													<CSTableCell className="accessibility-table-cell">
														<ul>
															{item.keyboardOperability.map((option: string) => (
																<li key={option}>{parseCode(option)}</li>
															))}
														</ul>
													</CSTableCell>
												</CSTableRow>
											)}
											{item.styling && (
												<CSTableRow className="accessibility-table-row">
													<CSTableCell
														className="accessibility-table-cell"
														text="Styling"
													/>
													<CSTableCell className="accessibility-table-cell">
														<ul>
															{item.styling.map((option: string) => (
																<li key={option}>{parseCode(option)}</li>
															))}
														</ul>
													</CSTableCell>
												</CSTableRow>
											)}
										</CSTableBody>
									</CSTable>
								</div>
							))}
						</React.Fragment>
					))}
				</div>
			))}
		</>
	);
};

export default PreviewAccessibility;
