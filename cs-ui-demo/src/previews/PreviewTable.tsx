import React from 'react';

export interface PreviewTableProps {
	name: string;
	properties: any;
	alt?: boolean;
}

class PreviewTable extends React.Component<PreviewTableProps> {
	render() {
		return (
			<div className={this.props.alt ? 'table-wrapper table-wrapper-alt' : 'table-wrapper'}>
				<h2 className="property-name" id={`properties-table-${this.props.name}`}>Properties list</h2>
				<h3 className="component-name">{this.props.name}</h3>
				<div className="properties-table">
					<div className="table-header">
						<div className="table-row">
							<div className="table-cell">Property name</div>
							<div className="table-cell">Description</div>
							<div className="table-cell">Options</div>
						</div>
					</div>
					<div className="table-body">
						{this.props.properties.map((prop: any, i: any) => (
							<div className="table-row" key={i}>
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
			</div>
		);
	}
}

export default PreviewTable;
