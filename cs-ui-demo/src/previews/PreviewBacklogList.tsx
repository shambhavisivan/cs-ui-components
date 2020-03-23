import React from 'react';

export interface PreviewBacklogListProps {
	backlog: any;
}

class PreviewBacklogList extends React.Component<PreviewBacklogListProps> {
	render() {
		return (
			<div className="table-wrapper table-wrapper-alt backlog-table-wrapper">
				<h2 className="property-name">Backlog list</h2>
				<div className="properties-table">
					<div className="table-header">
						<div className="table-row">
							<div className="table-cell">Item title</div>
							<div className="table-cell">Description</div>
							<div className="table-cell">Issues</div>
						</div>
					</div>
					<div className="table-body">
						{this.props.backlog.map((item: any, i: any) => (
							<div className="table-row" key={i}>
								<div className="table-cell">{item.backlogName}</div>
								<div className="table-cell">{item.description}</div>
								<div className="table-cell">{item.obstacles}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default PreviewBacklogList;
