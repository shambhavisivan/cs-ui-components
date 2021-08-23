import { CSCustomData } from '@cloudsense/cs-ui-components';
import { CSCustomDataMenuVariant } from '@cloudsense/cs-ui-components';
import { GridApi } from 'ag-grid-community';
import React from 'react';
import { CSGridAction, Icon } from '../interfaces/cs-grid-cell-props';
import { getNewActions, getNewIcons, getStatus } from '../utils/cs-custom-data-helper';

export const CSCustomDataHelper: React.FC<{
	menuIcon?: CSCustomDataMenuVariant;
	statusMessage?: string;
	nodeId?: string;
	api?: GridApi;
	title?: string;
	value?: string;
	getIcons?(guid: string): Array<Icon>;
	getActions?(guid: string): Array<CSGridAction<unknown>>;
}> = ({ api, getIcons, getActions, menuIcon, nodeId, statusMessage, title, value }) => {
	// Icons
	const icons = getIcons?.(nodeId);
	const iconsTransformed = getNewIcons(icons, nodeId);

	// Actions
	const actions = getActions?.(nodeId);
	const actionsTransformed = getNewActions(actions, nodeId, api, value);

	// Status
	const status = getStatus(statusMessage);

	return (
		<CSCustomData
			menuIcon={menuIcon}
			status={status}
			actions={actionsTransformed}
			icons={iconsTransformed}
			title={title}
			value={value}
		/>
	);
};
