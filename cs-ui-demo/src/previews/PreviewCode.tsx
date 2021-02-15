import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight as styleLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface PreviewCodeProps {
	code: string;
}

const PreviewCode: React.FC<PreviewCodeProps> = ({ code }) => {
	const formatCode = (plainCode: string) => {
		const codeLines = plainCode.split('\n');
		if (codeLines.length === 1) {
			return plainCode;
		}
		const extraTabs = codeLines[codeLines.length - 1].split(`\t`).length - 1;
		return codeLines
			.map((line: string) => line.replace(`\t`.repeat(extraTabs), ''))
			.join('\n');
	};

	return <SyntaxHighlighter
		style={styleLight}
		customStyle={{
			border: 'none',
			margin: '0',
			padding: '0',
			backgroundColor: 'var(--code-preview-bg)',
			borderTop: '1px solid var(--divider-br)',
			fontSize: '0.875rem',
			fontFamily: 'monospace'
		}}
		className="component-code"
		language="jsx"
		showLineNumbers
		codeTagProps={{
			style: {
				fontSize: '0.875rem',
				lineHeight: '1.25rem',
				display: 'block'
			}
		}}
		lineNumberStyle={{
			lineHeight: '1.25rem',
			fontSize: '0.75rem',
			display: 'block',
			textAlign: 'right',
			paddingRight: '0.375rem'
		}}
	>
		{formatCode(code)}
	</SyntaxHighlighter>;
};

export default PreviewCode;