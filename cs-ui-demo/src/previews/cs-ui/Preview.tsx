import React, { useRef, useLayoutEffect, useState } from 'react';
import PreviewPropList from './PreviewPropList';
import PreviewHeader from './PreviewHeader';
import PreviewExamples from './PreviewExamples';
import PreviewPropTable from './PreviewPropTable';
import PreviewApi from './PreviewApi';
import PreviewAccessibility from './PreviewAccessibility';
import { CSUIPreviewInterface } from '../types';
import SecondarySidebar from '../SecondarySidebar';

const Preview: React.FC<CSUIPreviewInterface> = (preview: CSUIPreviewInterface) => {
	const [activeElement, setActiveElement] = useState<Element>();
	const previewSectionRef = useRef<HTMLDivElement>(null);
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useLayoutEffect(() => {
		const scrollId = window.location.hash;
		if (scrollId) {
			const scrollToElement = document.getElementById(scrollId.substring(1));
			if (scrollToElement) {
				scrollToElement.scrollIntoView({ block: 'start' });
			}
		}
	}, []);

	useLayoutEffect(() => {
		const previewSelection = previewSectionRef.current;
		if (previewSelection) {
			previewSelection.addEventListener('scroll', (event: Event) => {
				if (timer.current) {
					clearTimeout(timer.current);
				}
				timer.current = setTimeout(() => {
					const observableElements = [...previewSelection.querySelectorAll('.scroll-spy')];
					const newActiveElement = observableElements.reverse().find((element: Element) => {
						const target = event.target as HTMLElement;
						if (element?.getBoundingClientRect && target?.getBoundingClientRect) {
							return element.getBoundingClientRect().top <= target.getBoundingClientRect().top + 1;
						}
						return false;
					});
					setActiveElement(newActiveElement);
					const sidebar = document.getElementById('secondary-sidebar-prop-list');
					const newActiveAnchor = sidebar?.getElementsByClassName('active')[0];
					if (newActiveAnchor?.getBoundingClientRect && sidebar?.getBoundingClientRect) {
						const anchorTop = newActiveAnchor.getBoundingClientRect().top;
						const sidebarTop = sidebar.getBoundingClientRect().top + 48;
						const anchorBottom = newActiveAnchor.getBoundingClientRect().bottom;
						const sidebarBottom = sidebar.getBoundingClientRect().bottom;
						if (anchorTop < sidebarTop) {
							sidebar.scrollBy({
								top: anchorTop - sidebarTop,
								behavior: 'smooth'
							});
						}
						if (anchorBottom > sidebarBottom) {
							sidebar.scrollBy({
								top: anchorBottom - sidebarBottom,
								behavior: 'smooth'
							});
						}
					}
				}, 25);
			});
		}
	}, [previewSectionRef]);

	return (
		<>
			<SecondarySidebar
				searchPlaceholder="Search Props..."
				preview
				collapsible
			>
				<PreviewPropList {...preview} activeElement={activeElement} />
			</SecondarySidebar>
			<div className="preview-section-wrapper" ref={previewSectionRef}>
				<PreviewHeader {...preview} />
				{preview?.children}
				<PreviewExamples {...preview} />
				<PreviewPropTable {...preview} />
				<PreviewApi {...preview} />
				<PreviewAccessibility {...preview} />
			</div>
		</>
	);
};

export default Preview;
