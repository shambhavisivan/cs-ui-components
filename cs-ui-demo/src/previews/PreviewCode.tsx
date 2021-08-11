import React, { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { base16AteliersulphurpoolLight as styleLight, darcula as styleDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CSButton } from '@cloudsense/cs-ui-components';
import classNames from 'classnames';
import { useTheme, Theme } from '../context/ThemeContext';

interface PreviewCodeProps {
	code?: string;
}

const PreviewCode: React.FC<PreviewCodeProps> = ({ code }) => {
	const { theme } = useTheme();
	const visibilityTimer = useRef<ReturnType<typeof setTimeout> | number>(0);
	const iconTimer = useRef<ReturnType<typeof setTimeout> | number>(0);
	const [copyButtonVisible, setCopyButtonVisible] = useState(false);
	const [copyButtonSuccess, setCopyButtonSuccess] = useState(false);

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

	const handleCopyButton = (codeToCopy?: string) => {
		navigator.clipboard.writeText(codeToCopy || '');
		setCopyButtonVisible(true);
		setCopyButtonSuccess(true);
		clearTimeout(visibilityTimer.current as ReturnType<typeof setTimeout>);
		visibilityTimer.current = setTimeout(() => {
			setCopyButtonVisible(false);
		}, 1500);
		iconTimer.current = setTimeout(() => {
			setCopyButtonSuccess(false);
		}, 1600);
	};

	useEffect(() => {
		return () => {
			clearTimeout(visibilityTimer.current as ReturnType<typeof setTimeout>);
			clearTimeout(iconTimer.current as ReturnType<typeof setTimeout>);
		};
	}, []);

	if (!code) {
		return null;
	}

	const copyButtonClasses = classNames(
		'copy-code-btn',
		{
			'copy-code-btn-recently-copied': copyButtonVisible
		}
	);

	return (
		<>
			<CSButton
				size="small"
				label={copyButtonSuccess ? 'Copied' : 'Copy code to clipboard'}
				labelHidden={!copyButtonSuccess}
				color="var(--csd-code-copy-btn-c)"
				iconName={copyButtonSuccess ? 'check' : 'copy'}
				className={copyButtonClasses}
				onClick={() => handleCopyButton(code)}
			/>
			<SyntaxHighlighter
				style={theme === Theme.Light ? styleLight : styleDark}
				customStyle={{
					border: 'none',
					margin: '0',
					padding: '0',
					background: 'var(--csd-code-preview-bg)',
					borderTop: '1px solid var(--csd-divider-br)',
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
			</SyntaxHighlighter>
		</>
	);
};

export default PreviewCode;
