const formatCode = (code: string = ''): string => {
	const codeLines = code.split('\n');

	// If the code is in a single line, it doesn't need to be modified
	if (codeLines.length === 1) {
		return code;
	}

	// Replace padded tab offsets
	const extraTabs = codeLines[codeLines.length - 1].split(`\t`).length;
	const formattedCode = codeLines.map((line: string) => line.replace(`\t`.repeat(extraTabs), ''));

	// Remove first line if empty
	if (formattedCode[0] === '' || formattedCode[0].match(/^\s+$/) !== null) {
		formattedCode.splice(0, 1);
	}

	// Remove last line if empty
	if (formattedCode[formattedCode.length - 1] === '' || formattedCode[formattedCode.length - 1].match(/^\s+$/) !== null) {
		formattedCode.pop();
	}

	return formattedCode.join('\n');
};

export default formatCode;
