import React from 'react';

const parseCode = (text: string) => (
	text.split('`').map((substring: string, substringIndex: number) => (
		substringIndex % 2
			? <code key={substringIndex} className="inline-code">{substring}</code>
			: substring
	))
);

export default parseCode;
