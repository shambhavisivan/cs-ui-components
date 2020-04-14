import React from 'react';

export interface PreviewTableProps {
	alt?: boolean;
	components?: any;
}

class PreviewTable extends React.Component<PreviewTableProps> {
	render() {
		return (
			<div className={this.props.alt ? 'table-wrapper table-wrapper-alt' : 'table-wrapper'}>
				<h2 className="property-name" id={`properties-table-${this.props.components[0].name}`}>Properties list</h2>
				{this.props.components.map((component: any, i: any) => (
					<React.Fragment key={i}>
						<h3 className="component-name">{(component.name)}</h3>
						<div className="properties-table">
							<div className="table-header">
								<div className="table-row">
									<div className="table-cell">Property name</div>
									<div className="table-cell">Description</div>
									<div className="table-cell">Options</div>
								</div>
							</div>
							<div className="table-body">
								{component.properties.map((prop: any, j: any) => (
									<div className="table-row" key={j}>
										<div className="table-cell">{prop.propertyName}</div>
										<div className="table-cell">{prop.description}</div>
										<div className="table-cell">
											{prop.options.map((option: any) => (
												<span className="prop-option" key={option}>{option}</span>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		);
	}
}

export default PreviewTable;
