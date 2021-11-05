import React from 'react';
import { CSChip, CSIcon, CSTab, CSTabGroup } from '@cloudsense/cs-ui-components';
import { Link } from 'react-router-dom';

import * as CSDH from '../demo-helpers';
import CSDHeading from './CSDHeading';

export interface CSDHeaderProps {
	title: string;
	activeTab: 'playground' | 'props' | 'accessibility' | 'examples';
	props: boolean;
	accessibility: boolean;
	playground: boolean;
	accessible?: 'yes' | 'partly' | 'no';
	routePrefix?: string;
}

const CSDHeader = ({
	title,
	accessible,
	activeTab,
	props,
	accessibility,
	playground,
	routePrefix = ''
}: CSDHeaderProps) => {
	const renderTabs = () => {
		if (!props && !accessibility && !playground) {
			return null;
		}

		return (
			<CSTabGroup>
				<CSTab
					name="Examples"
					active={activeTab === 'examples'}
					routerLink={<Link to={`/${routePrefix}`} />}
				/>
				{props && (
					<CSTab
						name="Props"
						active={activeTab === 'props'}
						routerLink={<Link to={`/${routePrefix}/props`}/>}
					/>
				)}
				{accessibility && (
					<CSTab
						name="Accessibility"
						active={activeTab === 'accessibility'}
						routerLink={<Link to={`/${routePrefix}/accessibility`}/>}
					/>
				)}
				{playground && (
					<CSTab
						name="Playground"
						active={activeTab === 'playground'}
						routerLink={<Link to={`/${routePrefix}/playground`}/>}
					/>
				)}
			</CSTabGroup>
		);
	};

	const renderAccessible = () => {
		if (!accessible) {
			return null;
		}

		if (accessible === 'yes') {
			return (
				<div className="csd-header-accessible">
					<CSIcon name="smiley_and_people" size="22px" color="#4bca81" />
					<CSChip text="ACCESSIBLE" color="#4bca81" />
				</div>
			);
		}

		if (accessible === 'partly') {
			return (
				<div className="csd-header-accessible">
					<CSIcon name="sentiment_neutral" size="22px" color="#ffa429" />
					<CSChip text="PARTLY&nbsp;ACCESSIBLE" color="#ffa429" />
				</div>
			);
		}

		return (
			<div className="csd-header-accessible">
				<CSIcon name="sentiment_negative" size="22px" color="#f91e0b" />
				<CSChip text="NOT&nbsp;ACCESSIBLE" color="#f91e0b" />
			</div>
		);
	};

	return (
		<div className="csd-header-wrapper">
			<div className="csd-header">
				<CSDHeading disableLinking>{title}</CSDHeading>
				{renderTabs()}
				{renderAccessible()}
			</div>
			<div className="csd-header-fade" />
		</div>
	);
};

export default CSDHeader;
