import React from 'react';
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
	if (type === 'internal') {
		return (
			<HashLink to={path} className="csd-link">
				{children}
			</HashLink>
		);
	}

	return (
		<a href={path} className="csd-link">
			{children}
		</a>
	);
};

export default CSDLink;
