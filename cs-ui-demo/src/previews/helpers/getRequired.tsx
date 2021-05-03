import React from 'react';
import { CSTooltip } from '@cloudsense/cs-ui-components';

const getRequired = (propRequired?: boolean | string) => {
	if (propRequired === true) {
		return <CSTooltip content="Required" iconName="check" />;
	} else if (propRequired === undefined) {
		return <CSTooltip content="Not Required" iconName="dash" />;
	}
	return <CSTooltip content={`Inherited from ${propRequired}`} iconName="arrowdown" />;
};

export default getRequired;
