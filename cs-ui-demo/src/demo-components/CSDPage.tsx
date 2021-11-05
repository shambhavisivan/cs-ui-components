import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import CSDAccessibility from './CSDAccessibility';
import CSDHeader from './CSDHeader';
import CSDTable from './CSDTable';

export interface CSDPageProps {
	children: React.ReactNode;
	title: string;
	tables?: any;
	accessibility?: any;
	accessible?: 'yes' | 'partly' | 'no';
	playground?: React.ReactNode;
	sidebar?: boolean;
}

const CSDPage = ({
	children,
	title,
	accessible = 'no',
	tables,
	accessibility,
	playground,
	sidebar
}: CSDPageProps) => {
	const path = useLocation().pathname.split('/');
	const lastPath = path[path.length - 1];

	const activeTab = useMemo(() => {
		if (lastPath === 'playground' && playground) {
			return 'playground';
		}

		if (lastPath === 'accessibility' && accessibility) {
			return 'accessibility';
		}

		if (lastPath === 'props' && tables) {
			return 'props';
		}

		return 'examples';
	}, [lastPath, playground, accessibility, tables]);

	const renderContent = () => {
		if (activeTab === 'playground') {
			return 'Playground';
		}

		if (activeTab === 'accessibility') {
			return (
				<CSDAccessibility {...accessibility} />
			);
		}

		if (activeTab === 'props') {
			if (!Array.isArray(tables)) {
				return <CSDTable {...tables} section />;
			}

			return (
				<>
					{tables.map((table: any) => (
						<CSDTable key={table.name} {...table} section />
					))}
				</>
			);
		}

		return children;
	};

	return (
		<div className="csd-page">
			<CSDHeader
				title={title}
				accessible={accessible}
				activeTab={activeTab}
				props={!!tables}
				accessibility={!!accessibility}
				playground={!!playground}
			/>
			{renderContent()}
		</div>
	);
};

export default CSDPage;
