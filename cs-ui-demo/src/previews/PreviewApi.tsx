import React from 'react';
import PreviewCode from './PreviewCode';
import { PreviewApiProps } from './types';

const PreviewApi: React.FC<PreviewApiProps> = ({ name, api }) => (
	<div className="api-preview-wrapper">
		<h2
			className="demo-heading"
			id={`api-preview-${name.split(' ').join('-').toLowerCase()}`}
		>
			{name} API
		</h2>
		<div className="api-preview">
			{api.map((method: any) => (
				<div className={`${method.name}`} key={method.name}>
					<h3 className="demo-heading">{method.name} Preview</h3>
					{method.description && <p className="api-info-text">{method.description}</p>}
					<div className="api-example">
						<div className={`${method.name.split(' ').join('-').toLowerCase()}-demo api-demo`}>
							{method.component}
						</div>
						<PreviewCode code={method.code} />
					</div>
				</div>
			))}
		</div>
	</div>
);

export default PreviewApi;
