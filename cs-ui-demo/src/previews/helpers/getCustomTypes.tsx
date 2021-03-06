import React from 'react';
import classNames from 'classnames';
import { CSTooltip, CSIcon } from '@cloudsense/cs-ui-components';
import { CustomTypeInterface } from '../types';
import getTypes from './getTypes';

const getCustomTypes = (customTypes?: CustomTypeInterface | Array<CustomTypeInterface>) => {
	const getSingleCustomType = (customType: CustomTypeInterface) => {
		const tooltipClasses = classNames(
			'csd-inline-code-tooltip',
			{
				'csd-inline-code-tooltip-col-3': customType.types.length === 3 || customType.name === 'CSTooltipPosition',
				'csd-inline-code-tooltip-col-2': customType.types.length === 2 || customType.types.length === 4,
				'csd-inline-code-tooltip-col-1': customType.types.length === 1
			}
		);
		return (
			<CSTooltip
				position="top-center"
				stickyOnClick
				tooltipHeader={customType.name}
				key={customType.name}
				width="auto"
				maxWidth="30rem"
				className={tooltipClasses}
				content={<>{getTypes(customType.types)}</>}>
				<code className="csd-inline-code csd-inline-code-custom">
					{customType.name}<CSIcon name="info_alt" />
				</code>
			</CSTooltip>
		);
	};

	if (!customTypes) {
		return null;
	}
	if (!Array.isArray(customTypes)) {
		return getSingleCustomType(customTypes);
	}
	return customTypes.map((customType: CustomTypeInterface) => (
		getSingleCustomType(customType)
	));
};

export default getCustomTypes;
