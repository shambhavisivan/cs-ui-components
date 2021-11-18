import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	darcula as styleDark,
	duotoneLight as styleLight
} from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Theme, useTheme } from '../context/ThemeContext';
import * as CSDH from '../demo-helpers';

export interface CSDCodeProps {
	children: string;
	preventFormatting?: boolean;
}

const CSDCode = ({ children, preventFormatting }: CSDCodeProps) => {
	const { theme } = useTheme();

	return (
		<SyntaxHighlighter
			style={theme === Theme.Light ? styleLight : styleDark}
			customStyle={{
				border: 'none',
				margin: 'var(--preview-code-margin)',
				padding: '1rem',
				background: 'var(--csd-preview-bg)',
				fontSize: '0.875rem',
				fontFamily: '"Lucida Console", monospace !important',
				borderTop: '1px solid var(--csd-preview-br)'
			}}
			className="csd-code"
			language="jsx"
			showLineNumbers
			codeTagProps={{
				style: {
					fontSize: '0.875rem',
					lineHeight: '1.5rem',
					display: 'block'
				}
			}}
			lineNumberStyle={{
				lineHeight: '1.5rem',
				fontSize: '0.75rem',
				display: 'block',
				textAlign: 'right',
				paddingRight: '0.375rem'
			}}
		>
			{preventFormatting ? children : CSDH.formatCode(children)}
		</SyntaxHighlighter>
	);
};

export default CSDCode;
