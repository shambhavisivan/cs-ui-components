import React, { useEffect, useRef, useState } from 'react';
import {
	CSButton,
	CSDataTable,
	CSDataTableRowWithMetaInterface, CSIcon,
	CSTab,
	CSTabGroup,
	CSTooltip
} from '@cloudsense/cs-ui-components';
import classNames from 'classnames';
import { Theme, useTheme } from '../context/ThemeContext';
import {
	darcula as styleDark,
	duotoneLight as styleLight
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as CSDH from '../demo-helpers';
import { getTypes, getCustomTypes } from '../previews/helpers';

export type CSDPreviewVisibleSectionType = null | 'code' | 'table';
export type CSDPreviewOrientation = 'horizontal' | 'vertical';

export interface CSDPreviewTableInterface {
	source: any;
	attributes: Array<React.ReactText>;
}

export interface CSDPreviewProps {
	children: React.ReactNode;
	code?: string;
	orientation?: CSDPreviewOrientation;
	related?: string | Array<string>;
	table?: any;
}

const CSDPreview = ({
	children,
	code,
	orientation,
	related,
	table
}: CSDPreviewProps) => {
	const { theme } = useTheme();
	const [visibleSection, setVisibleSection] = useState<CSDPreviewVisibleSectionType>(null);
	const copyButtonIconTimer = useRef<ReturnType<typeof setTimeout> | number>(0);
	const [copyButtonSuccess, setCopyButtonSuccess] = useState(false);

	const handleCopyButton = () => {
		navigator.clipboard.writeText(code || '');
		setCopyButtonSuccess(true);
		copyButtonIconTimer.current = setTimeout(() => {
			setCopyButtonSuccess(false);
		}, 3000);
	};

	useEffect(() => () => clearTimeout(copyButtonIconTimer.current as ReturnType<typeof setTimeout>), []);

	const renderToolbar = () => {
		if (!code && !table) {
			return null;
		}

		const renderCodeButton = () => {
			if (!code) {
				return null;
			}

			return <CSTab
				active={visibleSection === 'code'}
				name="Code"
				tabIcon="insert_tag_field"
				onClick={() => setVisibleSection((prevVisibleSection: CSDPreviewVisibleSectionType) => prevVisibleSection !== 'code' ? 'code' : null)}
			/>;
		};

		const renderTableButton = () => {
			if (!table) {
				return null;
			}

			return (
				<CSTab
					active={visibleSection === 'table'}
					name="Related Props"
					tabIcon="richtextbulletedlist"
					onClick={() => setVisibleSection((prevVisibleSection: CSDPreviewVisibleSectionType) => prevVisibleSection !== 'table' ? 'table' : null)}
				/>
			);
		};

		const renderCopyButton = () => {
			if (visibleSection !== 'code') {
				return null;
			}

			return (
				<CSButton
					label={copyButtonSuccess ? 'Copied' : 'Copy code'}
					labelHidden={!copyButtonSuccess}
					size="small"
					className="csd-toolbar-right"
					color="#666"
					iconName={copyButtonSuccess ? 'check' : 'copy'}
					onClick={handleCopyButton}
				/>
			);
		};

		return (
			<div className="csd-preview-toolbar-wrapper">
				<CSTabGroup className="csd-preview-toolbar">
					{renderCodeButton()}
					{renderTableButton()}
				</CSTabGroup>
				{renderCopyButton()}
			</div>
		);
	};

	const renderCode = () => {
		if (visibleSection !== 'code') {
			return null;
		}

		return (
			<SyntaxHighlighter
				style={theme === Theme.Light ? styleLight : styleDark}
				customStyle={{
					border: 'none',
					margin: 'var(--preview-code-margin)',
					padding: '1rem',
					background: 'var(--csd-preview-bg)',
					fontSize: '0.875rem',
					fontFamily: '"Lucida Console", monospace !important;',
					borderTop: '1px solid var(--csd-preview-br)'
				}}
				className="csd-preview-code"
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
				{CSDH.formatCode(code)}
			</SyntaxHighlighter>
		);
	};

	const renderTable = () => {
		if (visibleSection !== 'table') {
			return null;
		}

		return (
			<CSDataTable
				className="csd-preview-table"
				density="comfortable"
				columns={[
					{
						key: 'name',
						header: 'Prop',
						cellClassName: 'csd-preview-table-name'
					}, {
						key: 'required',
						header: 'Required',
						width: '5.25rem',
						align: 'center',
						render: (row: CSDataTableRowWithMetaInterface) => {
							const required = row!.data!.required;
							if (required === true) {
								return <CSTooltip content="Required" iconName="check" />;
							} else if (required === undefined) {
								return <CSTooltip content="Not Required" iconName="dash" />;
							}
							return <CSTooltip content={`Inherited from ${required}`} iconName="arrowdown" />;
						}
					}, {
						key: 'type',
						header: 'Type',
						grow: 2,
						render: (row: CSDataTableRowWithMetaInterface) => {
							return (
								<>
									{getCustomTypes(row.data?.customTypes)}
									{getTypes(row.data?.types)}
								</>
							);
						}
					}, {
						key: 'default',
						header: 'Default',
						render: (row: CSDataTableRowWithMetaInterface) => {
							const defaultValue = row!.data!.default;
							if (!defaultValue) {
								return <CSTooltip content="Undefined" iconName="dash" />;
							}
							return <code className="csd-inline-code">{defaultValue}</code>;
						}
					}, {
						key: 'description',
						header: 'Description',
						wrap: true,
						grow: 4
					}
				]}
				rows={table.filter((row: any) => related?.indexOf(row.name) !== -1).map((row: any) => ({
					key: row.name,
					data: row
				}))}
				disableHover
			/>
		);
	};

	const previewShowcaseClasses = classNames(
		'csd-preview-showcase', {
			[`csd-preview-showcase-${orientation}`]: orientation
		}
	);

	return (
		<div className="csd-preview">
			<div className={previewShowcaseClasses}>
				{children}
			</div>
			{renderToolbar()}
			{renderCode()}
			{renderTable()}
		</div>
	);
};

export default CSDPreview;
