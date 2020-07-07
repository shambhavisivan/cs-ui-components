import React from 'react';

export interface PreviewTableProps {
	alt?: boolean;
	components?: any;
}

class PreviewTable extends React.Component<PreviewTableProps> {
	render() {
		return (
			<div className={this.props.alt ? 'table-wrapper table-wrapper-alt' : 'table-wrapper'}>
				<h2 className="api-name" id={`api-table-${this.props.components[0].name}`}>API list</h2>
				{this.props.components.map((component: any, i: any) => (
					<React.Fragment key={i}>
						<div className="api-table">
							<div className="table-header">
								<div className="table-row">
									<div className="table-cell">Method name</div>
									<div className="table-cell">Method description</div>
									<div className="table-cell">Method args</div>
									<div className="table-cell">Default</div>
								</div>
							</div>
							<div className="table-body">
								{component.methods.map((method: any, j: any) => (
									<div className="table-row" key={j}>
										<div className="table-cell">{method.name}</div>
										<div className="table-cell">{method.description}</div>
										<div className="table-cell">
											{method.args && method.args.map((arg: any) => (
												<span className="api-arg" key={arg}>{arg}</span>
											))}
										</div>
										<div className="table-cell">
											{method.defaultArgsValues && method.defaultArgsValues.map((value: any) => (
												<span className="api-arg" key={value}>{value}</span>
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
