import React, {
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';

export enum Theme {
	Dark = 'cs-theme-dark',
	Light = 'cs-theme-light'
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
		const storageTheme = window.localStorage.getItem('cs-theme');
		if (storageTheme === Theme.Dark) {
			setTheme(Theme.Dark);
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
		setTheme(newTheme);
		window.localStorage.setItem('cs-theme', newTheme);
		if (newTheme === Theme.Dark) {
			document.body.classList.add('cs-theme-dark');
		} else {
			document.body.classList.remove('cs-theme-dark');
		}
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
