import React from 'react';

export interface PreviewAccessibilityProps {
	components?: any;
}

class PreviewAccessibility extends React.Component<PreviewAccessibilityProps> {
	render() {
		return (
			<React.Fragment>
				{this.props.components.map((component: any, c: any) => (
					<div className="accessibility-conformance-section" key={c}>
						{component.accessibility.map((prop: any, j: any) => (
							<React.Fragment key={j}>
								<h2 className="property-name" id={`accessibility-table-${this.props.components[0].name}`}>Accessibility conformance requirements</h2>
								<div className="accessibility-criterions-list">
									<h3>Related criterions:</h3>
									{prop.criterionList && prop.criterionList.map((criterion: any) => (
										<span className="criterion" key={criterion}>{criterion}</span>
									))}
								</div>
								{prop.requirements.map((item: any, i: any) => (
									<div className="requirements-table-wrapper" key={i}>
										<h3>Performed and supported:</h3>
										<div className="table-body">
											<div className="table-row">
												<div className="table-cell">HTML structure</div>
												<div className="table-cell">
													{item.structure && item.structure.map((option: any) => (
														<span className="conformance-item" key={option}>{option}</span>
													))}
												</div>
											</div>
											<div className="table-row">
												<div className="table-cell">Supported properties</div>
												<div className="table-cell">
													{item.properties && item.properties.map((option: any) => (
														<span className="conformance-item" key={option}>{option}</span>
													))}
												</div>
											</div>
											<div className="table-row">
												<div className="table-cell">Keyboard Operability</div>
												<div className="table-cell">
													{item.keyboardOperability && item.keyboardOperability.map((option: any) => (
														<span className="conformance-item" key={option}>{option}</span>
													))}
												</div>
											</div>
											<div className="table-row">
												<div className="table-cell">Styling</div>
												<div className="table-cell">
													{item.styling && item.styling.map((option: any) => (
														<span className="conformance-item" key={option}>{option}</span>
													))}
												</div>
											</div>
										</div>
									</div>
								))}
							</React.Fragment>
						))}
					</div>
				))}
			</React.Fragment>
		);
	}
}

export default PreviewAccessibility;
