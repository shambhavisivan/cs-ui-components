import React, {
	createContext,
	useContext,
	useEffect,
	useState
} from 'react';

export interface CSDSidebarContextInterface {
	primarySidebar: boolean;
	togglePrimarySidebar: () => void;
	secondarySidebar: boolean;
	toggleSecondarySidebar: () => void;
}

const CSDSidebarContext = createContext<CSDSidebarContextInterface>({
	primarySidebar: true,
	togglePrimarySidebar: () => console.warn('No sidebar provider.'),
	secondarySidebar: true,
	toggleSecondarySidebar: () => console.warn('No sidebar provider.')
});

export interface CSDSidebarContextProviderProps {
	children: any;
}

export const SidebarProvider = ({ children }: CSDSidebarContextProviderProps) => {
	const [primarySidebar, setPrimarySidebar] = useState<boolean>(true);
	const [secondarySidebar, setSecondarySidebar] = useState<boolean>(true);

	useEffect(() => {
		const primarySidebarStorage = window.localStorage.getItem('cs-primary-sidebar-visible');
		if (primarySidebarStorage === 'false') {
			setPrimarySidebar(false);
		}

		const secondarySidebarStorage = window.localStorage.getItem('cs-secondary-sidebar-visible');
		if (secondarySidebarStorage === 'false') {
			setSecondarySidebar(false);
		}
	}, []);

	const togglePrimarySidebar = () => {
		setPrimarySidebar((prevPrimarySidebar: boolean) => {
			window.localStorage.setItem('cs-primary-sidebar-visible', String(!prevPrimarySidebar));

			return !prevPrimarySidebar;
		});
	};

	const toggleSecondarySidebar = () => {
		setSecondarySidebar((prevSecondarySidebar: boolean) => {
			window.localStorage.setItem('cs-secondary-sidebar-visible', String(!prevSecondarySidebar));

			return !prevSecondarySidebar;
		});
	};

	return (
		<CSDSidebarContext.Provider
			value={{
				primarySidebar,
				togglePrimarySidebar,
				secondarySidebar,
				toggleSecondarySidebar
			}}
		>
			{children}
		</CSDSidebarContext.Provider>
	);
};

export const useSidebar = () => useContext(CSDSidebarContext);
