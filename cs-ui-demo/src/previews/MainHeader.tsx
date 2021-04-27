import React from 'react';
import { Theme, useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { CSImage, CSChip, CSButton } from '@cloudsense/cs-ui-components';
import { version } from '@cloudsense/cs-ui-components/package.json';

const MainHeader: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className="app-main-header">
			<ul>
				<li className="main-header-tab">
					<NavLink to="/components" activeClassName="active-main-header-tab">
						CS UI Components
					</NavLink>
				</li>
				<li className="main-header-tab">
					<NavLink to="/icons" activeClassName="active-main-header-tab">
						Icons
					</NavLink>
				</li>
				<li className="main-header-tab">
					<NavLink to="/colors" activeClassName="active-main-header-tab">
						Colors
					</NavLink>
				</li>
				<li className="main-header-tab">
					<NavLink to="/accessibility" activeClassName="active-main-header-tab">
						Accessibility
					</NavLink>
				</li>
				<li className="main-header-tab">
					<NavLink to="/release-notes" activeClassName="active-main-header-tab">
						Release Notes
					</NavLink>
				</li>
			</ul>
			<div className="app-main-header-right">
				<CSChip text={`v${version}`} />
				<CSButton
					className="app-toggle-theme"
					color={theme === Theme.Dark ? 'black' : 'orange'}
					label="activity icon button"
					labelHidden
					iconName="light_bulb"
					onClick={toggleTheme}
				/>
				<CSImage
					type="logo"
					height="2.25rem"
					color={theme === Theme.Dark ? 'white' : undefined}
				/>
			</div>
		</div>
	);
};

export default MainHeader;
