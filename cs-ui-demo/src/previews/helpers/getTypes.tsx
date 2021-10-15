import React from 'react';

const getTypes = (types?: string | Array<string>) => {
	if (!types) {
		return null;
	}
	if (!Array.isArray(types)) {
		return <code className="csd-inline-code">{types}</code>;
	}
	return types.map((type: string) => (
		<code key={type} className="csd-inline-code">{type}</code>
	));
};

export default getTypes;
