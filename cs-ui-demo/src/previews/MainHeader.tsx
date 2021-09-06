import React from 'react';
import { Theme, useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { CSImage, CSChip, CSButton, CSDropdown, CSDivider } from '@cloudsense/cs-ui-components';
import { version } from '@cloudsense/cs-ui-components/package.json';

const MainHeader: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className="app-main-header">
			<ul>
				<li className="main-header-tab">
					<NavLink to="/cs-ui" activeClassName="active-main-header-tab">
						CS UI Components
						<CSChip
							color="#4bcabb"
							text={`v${version}`}
							className="black-text"
						/>
					</NavLink>
				</li>
				{/* <li className="main-header-tab">
					<a href="">
						CS Grid
						<CSChip color="#7f8de1" text={`v${version}`} />
					</a>
				</li> */}
				{/* <li className="main-header-tab">
					<NavLink to="/cs-form" activeClassName="active-main-header-tab">
						CS Form
						<CSChip
							color="#d8d8d8"
							text={`v${version}`}
							className="black-text"
						/>
					</NavLink>
				</li> */}
				<li className="main-header-tab">
					<NavLink
						to="/icons"
						className="main-header-link-dropdown"
						activeClassName="active-main-header-tab"
					>
						<CSDropdown
							label="Icons"
							hover
							iconPosition="right"
							dropdownClassName="cs-demo-header-dropdown-wrapper"
						>
							<NavLink to="/icons/LightningIcons" className="main-header-dropdown-btn">
								Lightning Icons
							</NavLink>
							<NavLink to="/icons/CloudSenseIcons" className="main-header-dropdown-btn">
								CloudSense Icons
							</NavLink>
						</CSDropdown>
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
					<NavLink
						to="/release-notes"
						className="main-header-link-dropdown"
						activeClassName="active-main-header-tab"
					>
						<CSDropdown
							label="Release Notes"
							hover
							iconPosition="right"
							className="main-header-dropdown"
							dropdownClassName="cs-demo-header-dropdown-wrapper"
						>
							<NavLink to="/release-notes/CSUIComponents" className="main-header-dropdown-btn">
								CS UI Components
							</NavLink>
							{/* <NavLink to="/release-notes" className="main-header-dropdown-btn" />
								CS Grid
							</NavLink>
							<NavLink to="/release-notes" className="main-header-dropdown-btn" />
								CS Form
							</NavLink> */}
							<CSDivider variant="horizontal" />
							<NavLink to="/release-notes/FutureScope" className="main-header-dropdown-btn">
								Future Scope
							</NavLink>
						</CSDropdown>
					</NavLink>
				</li>
			</ul>
			<div className="app-main-header-right">
				<CSButton
					className="app-toggle-theme"
					color={theme === Theme.Dark ? 'black' : 'orange'}
					label={theme === Theme.Dark ? 'Switch to light mode' : 'Switch to dark mode'}
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
