import React from 'react';
import { Theme, useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import { CSImage, CSChip, CSButton, CSDropdown, CSDivider } from '@cloudsense/cs-ui-components';
import { version as componentsVersion } from '@cloudsense/cs-ui-components/package.json';
import { version as formVersion } from '@cloudsense/cs-form-v2/package.json';

const MainHeader: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	const [dimensions, setDimensions] = React.useState({
		width: window.innerWidth
	});

	React.useEffect(() => {
		function handleResize() {
			setDimensions({
				width: window.innerWidth
			});
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<div className="app-main-header">
			<ul>
				<li className="main-header-tab">
					<NavLink to="/cs-ui" activeClassName="active-main-header-tab">
						CS UI Components
						<CSChip
							color="#4bcabb"
							text={`v${componentsVersion}`}
							className="black-text"
						/>
					</NavLink>
				</li>
				{/* <li className="main-header-tab">
					<NavLink to="/cs-grid" activeClassName="active-main-header-tab">
						CS Grid
						<CSChip
							color="#7f8de1"
							// Needs to be updated to a live version when CSGrid is added to demo
							text={`v${version}`}
						/>
					</NavLink>
				</li>
				*/}
				<li className="main-header-tab">
					<NavLink to="/cs-form" activeClassName="active-main-header-tab">
						CS Form
						<CSChip
							color="#d8d8d8"
							// Needs to be updated to a live version when CSForm is added to demo
							text={`v${formVersion}`}
							className="black-text"
						/>
					</NavLink>
				</li>
				<li className="main-header-tab">
					<CSDropdown
						label="Utilities"
						hover
						iconPosition="right"
						routerLink={<NavLink to="/utilities" activeClassName="active-main-header-tab" />}
						dropdownClassName="cs-demo-header-dropdown-wrapper"
					>
						<CSButton
							label="Lightning Icons"
							className="main-header-dropdown-btn"
							routerLink={<NavLink to="/utilities/lightning-icons" />}
						/>
						<CSButton
							label="CloudSense Icons"
							className="main-header-dropdown-btn"
							routerLink={<NavLink to="/utilities/cloud-sense-icons" />}
						/>
						<CSDivider variant="horizontal" />
						<CSButton
							label="Colors"
							className="main-header-dropdown-btn"
							routerLink={<NavLink to="/utilities/colors" />}
						/>
					</CSDropdown>
				</li>
				<li className="main-header-tab">
					<NavLink to="/accessibility" activeClassName="active-main-header-tab">
						Accessibility
					</NavLink>
				</li>
				<li className="main-header-tab">
					<CSDropdown
						label="Release Notes"
						hover
						iconPosition="right"
						routerLink={<NavLink to="/release-notes" activeClassName="active-main-header-tab" />}
						dropdownClassName="cs-demo-header-dropdown-wrapper"
					>
						<CSButton
							label="CS UI Components"
							className="main-header-dropdown-btn"
							routerLink={<NavLink to="/release-notes/cs-ui-components" />}
						/>
						<CSButton
							label="CS Grid"
							className="main-header-dropdown-btn"
							routerLink={<NavLink to="/release-notes/cs-grid" />}
						/>
						<CSButton
							label="CS Form"
							className="main-header-dropdown-btn"
							routerLink={<NavLink to="/release-notes/cs-form" />}
						/>
						<CSDivider variant="horizontal" />
						<CSButton
							label="Future Scope"
							className="main-header-dropdown-btn"
							routerLink={<NavLink to="/release-notes/future-scope" />}
						/>
					</CSDropdown>
				</li>
			</ul>
			<div className="app-main-header-right">
				<CSButton
					className="app-toggle-theme"
					color={theme === Theme.Dark ? 'black' : 'orange'}
					label={theme === Theme.Dark ? 'Switch to light mode(WIP)' : 'Switch to dark mode(WIP)'}
					labelHidden
					iconName="light_bulb"
					onClick={toggleTheme}
				/>
				<CSImage
					type={dimensions.width <= 1330 ? 'logomark' : 'logo'}
					height={dimensions.width <= 1330 ? '2rem' : '2.25rem'}
					color={theme === Theme.Dark ? 'white' : 'purple'}
					variant={theme === Theme.Dark ? 'initial' : dimensions.width <= 1330 ? 'reversed' : 'initial'}
				/>
			</div>
		</div>
	);
};

export default MainHeader;
