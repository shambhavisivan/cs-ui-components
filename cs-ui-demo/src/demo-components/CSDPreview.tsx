import React, { useState } from 'react';
import classNames from 'classnames';
import { CSTab, CSTabGroup } from '@cloudsense/cs-ui-components';

import CSDCode from './CSDCode';
import CSDCopyButton from './CSDCopyButton';
import CSDTable from './CSDTable';

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
	const [visibleSection, setVisibleSection] = useState<CSDPreviewVisibleSectionType>(null);

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

			return <CSDCopyButton code={code} />;
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
		if (visibleSection !== 'code' || !code) {
			return null;
		}

		return <CSDCode>{code}</CSDCode>;
	};

	const renderTable = () => {
		if (visibleSection !== 'table') {
			return null;
		}

		return <CSDTable {...table} filter={related} />;
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
