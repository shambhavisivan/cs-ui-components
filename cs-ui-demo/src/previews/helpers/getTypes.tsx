import React from 'react';

const getTypes = (types?: string | Array<string>) => {
	if (!types) {
		return null;
	}
	if (!Array.isArray(types)) {
		return <code className="inline-code">{types}</code>;
	}
	return types.map((type: string) => (
		<code key={type} className="inline-code">{type}</code>
	));
};

export default getTypes;
