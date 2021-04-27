import React, {
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';

export enum Theme {
	Dark = 'csd-theme-dark',
	Light = 'csd-theme-light'
}

export interface ThemeContextType {
	theme: Theme;
	toggleTheme: (Theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: Theme.Light,
	toggleTheme: theme => console.warn('No theme provider.')
});

export interface ThemeContextProviderProps {
	children: any;
}

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(Theme.Light);

	useEffect(() => {
		const storageTheme = window.localStorage.getItem('csd-theme');
		if (storageTheme === Theme.Dark) {
			toggleTheme();
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
		setTheme(newTheme);
		window.localStorage.setItem('csd-theme', newTheme);
		if (newTheme === Theme.Dark) {
			document.body.classList.add('csd-theme-dark');
			document.body.classList.remove('csd-theme-light');

		} else {
			document.body.classList.add('csd-theme-light');
			document.body.classList.remove('csd-theme-dark');
		}
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
