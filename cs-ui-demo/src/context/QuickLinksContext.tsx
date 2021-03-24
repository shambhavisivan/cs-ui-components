import React, {
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';

export interface QuickLinksContextType {
	quickLinks: boolean;
	toggleQuickLinks: () => void;
}

const QuickLinksContext = createContext<QuickLinksContextType>({
	quickLinks: true,
	toggleQuickLinks: () => console.warn('No quick links provider.')
});

export interface QuickLinksContextProviderProps {
	children: any;
}

export const QuickLinksProvider: React.FC<QuickLinksContextProviderProps> = ({ children }) => {
	const [quickLinks, setQuickLinks] = useState<boolean>(true);

	useEffect(() => {
		const storageQuickLinks = window.localStorage.getItem('cs-quick-links-visible');
		if (storageQuickLinks === 'true') {
			setQuickLinks(false);
		}
	}, []);

	const toggleQuickLinks = () => {
		setQuickLinks(!quickLinks);
		window.localStorage.setItem('cs-quick-links-visible', String(quickLinks));
	};

	return <QuickLinksContext.Provider value={{ quickLinks, toggleQuickLinks }}>{children}</QuickLinksContext.Provider>;
};

export const useQuickLinks = () => useContext(QuickLinksContext);
