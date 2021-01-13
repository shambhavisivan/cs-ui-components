import React from 'react';
import {CSButton} from '@cloudsense/cs-ui-components';
import { useTheme, Theme } from '../context/ThemeContext';

const ToggleTheme: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return <CSButton
		className="app-toggle-theme"
		color={theme === Theme.Dark ? 'black' : 'orange'}
		label="activity icon button"
		iconName="light_bulb"
		iconDisplay="icon-only"
		onClick={toggleTheme}
	/>;
};

export default ToggleTheme;
