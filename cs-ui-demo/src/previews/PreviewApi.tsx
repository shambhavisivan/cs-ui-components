import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

export interface PreviewApisProps {
	api: any;
	componentName?: any;
}

class PreviewApi extends React.Component<PreviewApisProps> {
	render() {
		return (
			<div className="api-wrapper">
				<h2 className="api-name" id={`api-table-${this.props.componentName}`}>{this.props.api.name}</h2>
					{this.props.api.methods.map((method: any) => (
						<div className={` ${method.methodName}`} key={method.methodName}>
							<h3 className="method-name" id={`${this.props.api.name}-${method.methodName}`}>{method.methodName}</h3>
							<div key={method.definition}>
								{method.definition ? <p className="method-definition">{method.definition}</p> : null}
								<div className="api-version">
									<div className={method.methodName ? `${method.methodName.replace(/\s+/g, '-').toLowerCase()}-preview version-preview` : 'version-preview'}>
										{method.preview}
									</div>
									<div className="method-description">
										<SyntaxHighlighter
											className="code-snippet"
											language="jsx"
										>
											{method.string}
										</SyntaxHighlighter>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		);
	}
}

export default PreviewApi;
