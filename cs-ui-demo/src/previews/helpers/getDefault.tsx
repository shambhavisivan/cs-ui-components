import React from 'react';
import { CSTooltip } from '@cloudsense/cs-ui-components';

const getDefault = (propDefault?: string) => {
	if (!propDefault) {
		return <CSTooltip content="Undefined" iconName="dash" />;
	}
	return <code className="inline-code">{propDefault}</code>;
};

export default getDefault;
