import React from 'react';
import classNames from 'classnames';
import * as CSDH from '../demo-helpers';

export interface CSDHeadingProps {
	children: string;
	disableLinking?: boolean;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const CSDHeading = ({
	children,
	disableLinking = false,
	level = 1
}: CSDHeadingProps) => {
	const props = {
		id: disableLinking ? undefined : CSDH.toKebabCase(children),
		className: classNames('csd-heading', { 'csd-scrollspy': !disableLinking })
	};

	return React.createElement(`h${level}`, props, children);
};

export default CSDHeading;
