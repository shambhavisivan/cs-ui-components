import React from 'react';
import { CSButton, CSTooltip } from '@cloudsense/cs-ui-components';
import { useTheme, Theme } from '../context/ThemeContext';

const ToggleTheme: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<CSTooltip
			width="10rem"
			content="WIP: This will be used for dark theme implementation"
			stylePosition="absolute"
			position="bottom-center"
		>
			<CSButton
				className="app-toggle-theme"
				color={theme === Theme.Dark ? 'black' : 'orange'}
				label="activity icon button"
				iconName="light_bulb"
				iconDisplay="icon-only"
				onClick={toggleTheme}
			/>
		</CSTooltip>
	);
};

export default ToggleTheme;
