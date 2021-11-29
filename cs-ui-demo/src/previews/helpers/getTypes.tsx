import React from 'react';

const getTypes = (types?: string | Array<string>) => {
	if (!types) {
		return null;
	}
	if (!Array.isArray(types)) {
		return <code className="csd-inline-code" title={types}>{types}</code>;
	}
	return types.map((type: string, i) => (
		<>
			<code key={type} className="csd-inline-code" title={type}>{type}</code>
			{i === types.length - 1 || <br />}
		</>
	));
};

export default getTypes;
