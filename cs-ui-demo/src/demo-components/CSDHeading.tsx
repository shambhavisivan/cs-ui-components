import React from 'react';
import classNames from 'classnames';
import * as CSDH from '../demo-helpers';

export interface CSDHeadingProps {
	children: string;
	action?: React.ReactElement;
	disableLinking?: boolean;
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const CSDHeading = ({
	children,
	action,
	disableLinking = false,
	level = 1
}: CSDHeadingProps) => {
	const props = {
		id: disableLinking ? undefined : CSDH.toKebabCase(children),
		className: classNames('csd-heading', { 'csd-scrollspy': !disableLinking })
	};

	const getChildren = () => {
		if (!action) {
			return children;
		}

		return (
			<>
				{children}
				<div className="csd-heading-action">
					{action}
				</div>
			</>
		);
	};

	return React.createElement(`h${level}`, props, getChildren());
};

export default CSDHeading;
