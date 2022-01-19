import React from 'react';
import classNames from 'classnames';
import { HashLink } from 'react-router-hash-link';

export type CSDLinkType = 'internal' | 'external';

export interface CSDLinkProps {
	children?: React.ReactElement | string;
	path: string;
	type?: CSDLinkType;
}

const CSDLink = ({
	children,
	path,
	type = 'internal'
}: CSDLinkProps) => {

	return (
		type === 'internal' ?
			<HashLink to={`${path}`} className="csd-link">
				{children}
			</HashLink>
		:
			<a href={`${path}`} className="csd-link">
				{children}
			</a>
	);
};

export default CSDLink;
