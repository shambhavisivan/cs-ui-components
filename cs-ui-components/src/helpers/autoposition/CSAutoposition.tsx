import React, {
	CSSProperties,
	PropsWithChildren,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { Portal } from 'react-portal';
import ResizeObserver from 'resize-observer-polyfill';
import {
	CSAutopositionDirection,
	CSAutopositionProps,
	CSAutopositionSchemaItem,
	CSAutopositions,
} from './cs-autoposition-types';

const CSAutoposition = ({
	children,
	initialPosition,
	positionSchema,
	referencePoint,
	onPositionChange,
	zIndex,
}: PropsWithChildren<CSAutopositionProps>) => {
	const [refPointRect, setRefPointRect] = useState<DOMRect>(referencePoint.getBoundingClientRect());
	const [computedPosition, setComputedPosition] = useState<CSAutopositions>(initialPosition);
	const [computedStyle, setComputedStyle] = useState<CSSProperties>({});
	const [prevComputedPosition, setPrevComputedPosition] = useState<CSAutopositions>();
	const autopositionRootId = 'cs-autoposition-root';
	const autopositionId = 'cs-autoposition';
	const autopositionWrapperRef = useRef<HTMLDivElement>(null);

	const availablePositions = positionSchema.map(
		(positionItem: CSAutopositions | CSAutopositionSchemaItem) => {
			if (typeof positionItem === 'object') {
				return positionItem.position;
			} return positionItem;
		},
	);

	let autoPositionRoot = document.getElementById(autopositionRootId);
	if (!autoPositionRoot) {
		autoPositionRoot = document.createElement('div');
		autoPositionRoot.className = autopositionRootId;
		autoPositionRoot.id = autopositionRootId;
		document.body.appendChild(autoPositionRoot);
	}

	useEffect(() => {
		registerResizeObserver(autopositionWrapperRef.current);

		window.addEventListener('scroll', recalcOnScroll, true);
		window.addEventListener('resize', recalcRefPointRect);

		if (!availablePositions.includes(initialPosition)) {
			console.error('Wanted position is not defined in position schema.');
		}

		return () => {
			window.removeEventListener('scroll', recalcOnScroll, true);
			window.removeEventListener('resize', recalcRefPointRect);
		};
	}, []);

	useLayoutEffect(() => {
		/*
			useLayoutEffect callback fires immediately after render, but before browser has a chance
			to layout the elements, therefore wrong DOMRect values are calculated within recalcComputedPosition method.
			Wrapping it in setTimeout allows correct calculation of DOMRect values.
		*/
		setTimeout(() => {
			if (autopositionWrapperRef.current) {
				recalcComputedPosition(autopositionWrapperRef.current);
			}
		}, 0);
		onPositionChange?.(computedPosition);
	}, [computedStyle]);

	useLayoutEffect(() => {
		setPositionStyle();
	}, [refPointRect, computedPosition]);

	const topPosition = useMemo(() => window.innerHeight - refPointRect.top, [refPointRect]);
	const bottomPosition = useMemo(() => refPointRect.top + refPointRect.height, [refPointRect]);

	const openOn = useMemo(() => ({
		top: topPosition,
		bottom: bottomPosition,
		left: window.innerWidth - refPointRect.left,
		right: refPointRect.right,
	}), [refPointRect, topPosition, bottomPosition]);

	const expandTo = useMemo(() => ({
		top: topPosition,
		bottom: bottomPosition,
		left: window.innerWidth - refPointRect.right,
		right: refPointRect.left,
	}), [refPointRect, topPosition, bottomPosition]);

	const recalcRefPointRect = () => setRefPointRect(referencePoint.getBoundingClientRect());

	/*
		Sets computedStyle state which is passed as a inline style to the autoposition wrapper.
		computedStyle is based on computedPosition state and deviation defined in the positionSchema prop.
	*/
	const setPositionStyle = () => {
		const [openOnPosition, expandToPosition] = computedPosition.split('-');
		let deviationStyles = {};

		const openOnOpposite = getOppositePosition(openOnPosition);
		const expandToOpposite = getOppositePosition(expandToPosition);

		let openOnValue = openOn[openOnPosition as CSAutopositionDirection];
		let expandToValue = expandTo[expandToPosition as CSAutopositionDirection];

		const deviation = getDeviationFromSchema(computedPosition);
		/*
			Loops through deviation object and appends those deviations which have the same
			key as one defined in opposite position properties on lines 101 and 102.
			If there aren't keys that match defined opposite positions, deviation will be appended
			as a separate css position declaration.
		*/
		if (deviation) {
			Object.keys(deviation).forEach((key) => {
				const value: number = deviation[key];
				if (key === openOnOpposite) {
					openOnValue += value;
				} else if (key === expandToOpposite) {
					expandToValue += value;
				} else {
					deviationStyles = { ...deviationStyles, [key]: value };
				}
			});
		}

		/*
			If 'expand-to' position is defined as 'center' append css declarations to computedStyle state and stop the following execution of the function.
			Otherwise value from 'expandToValue' variable will be appended to the computedStyle state.
		*/
		if (expandToPosition === 'center') {
			const centeredPosition = getCenteredPositionValue(openOnPosition);
			setComputedStyle({
				[openOnOpposite]: openOnValue,
				...centeredPosition,
				...deviationStyles,
			});
			return;
		}

		setComputedStyle({
			[openOnOpposite]: openOnValue,
			[expandToOpposite]: expandToValue,
			...deviationStyles,
		});
	};

	/*
		Searches for deviation in positionSchema items which are defined as objects and returns it.
		Otherwise returns false.
	*/
	const getDeviationFromSchema = (position: CSAutopositions) => {
		let deviation: any;
		positionSchema.forEach(
			(positionItem: CSAutopositions | CSAutopositionSchemaItem) => {
				if (typeof positionItem === 'object'
					&& positionItem.position === position
				) {
					if (Object.keys(positionItem.deviation).length) {
						deviation = positionItem.deviation;
					} else {
						console.warn(
							`'deviation' object cannot be empty. If deviation for position '${positionItem.position}' isn't needed, define position as string type.`,
						);
					}
				}
			},
		);
		return deviation ?? false;
	};

	// Returns css declaration based on the provided position
	const getCenteredPositionValue = (openOnPosition: string) => {
		if (openOnPosition === 'top' || openOnPosition === 'bottom') {
			return {
				left: refPointRect?.left + refPointRect.width / 2,
				transform: 'translateX(-50%) translate3d(0, 0, 0)',
			};
		} if (openOnPosition === 'left' || openOnPosition === 'right') {
			return {
				top: refPointRect?.top + refPointRect?.height / 2,
				transform: 'translateY(-50%) translate3d(0, 0, 0)',
			};
		}
	};

	/*
		Checks if autoposition wrapper node overflows on the top or
		bottom of the document object and returns the opposite position of the one
		where overflow is present.
	*/
	const checkYAxis = (_autopositionWrapperRect: DOMRect) => {
		if (_autopositionWrapperRect.top < 0) {
			return 'bottom';
		} if (_autopositionWrapperRect.bottom
			>= (window.innerHeight || document.documentElement.clientHeight)) {
			return 'top';
		}
	};

	/*
		Checks if autoposition wrapper node overflows on the left or
		right of the document object and returns the opposite position of the one
		where overflow is present.
	*/
	const checkXAxis = (_autopositionWrapperRect: DOMRect) => {
		if (_autopositionWrapperRect.right
			>= (window.innerWidth || document.documentElement.clientWidth)) {
			return 'left';
		} if (_autopositionWrapperRect.left < 0) {
			return 'right';
		}
	};

	/*
		Sets computedPosition to the new recalculated position if autoposition
		wrapper overflows on one part of the document object (top, bottom, left or right).
		Every time it's called computedPosition will be returned through onPositionChange prop.
	*/
	const recalcComputedPosition = (autopositionWrapper: HTMLDivElement) => {
		const autopositionWrapperRect = autopositionWrapper.getBoundingClientRect();
		const xAxis = ['left', 'right', 'center'];
		const yAxis = ['top', 'bottom', 'center'];

		const [_openOn, _expandTo] = computedPosition.split('-');

		let newOpenOn = '';
		let newExpandTo = '';

		/*
			Check overflow of the autoposition wrapper based on position that is defined
			in openOn and expandTo variables and set values for new variables to the position opposite
			of the overflow if overflow is present.
		*/
		if (xAxis.includes(_openOn)) {
			newOpenOn = checkXAxis(autopositionWrapperRect) ?? _openOn;
		} else if (xAxis.includes(_expandTo)) {
			newExpandTo = checkXAxis(autopositionWrapperRect) ?? _expandTo;
		}

		if (yAxis.includes(_openOn)) {
			newOpenOn = checkYAxis(autopositionWrapperRect) ?? _openOn;
		} else if (yAxis.includes(_expandTo)) {
			newExpandTo = checkYAxis(autopositionWrapperRect) ?? _expandTo;
		}

		const newPosition = `${newOpenOn}-${newExpandTo}` as CSAutopositions;

		/*
			If new computed position is defined in positionSchema, set it as computedPosition state
			and recalculate position style.
			If new calculated position isn't defined in position schema
			appropriate error messages will be visile in browser console.
			prevComputedPosition covers the scenario where there's no space on the opposite side
			of the overflow position and prevents the component to go in infinite loop.
		*/
		if (availablePositions.includes(newPosition)) {
			if (computedPosition !== newPosition && newPosition !== prevComputedPosition) {
				setPrevComputedPosition(computedPosition);
				setComputedPosition(newPosition);
			}
		} else {
			console.error('No opposite positions are available in position schema for position recalculation.');
		}
	};

	/*
		Returns opposite position based on the provided position.
		If provided position is 'center' return void.
	*/
	const getOppositePosition = (position: string) => {
		switch (position) {
		case 'top':
			return 'bottom';
		case 'bottom':
			return 'top';
		case 'left':
			return 'right';
		case 'right':
			return 'left';
		case 'center':
			break;
		default:
			break;
		}
	};

	/*
		Registers Resize Observer on autoposition wrapper when component mounts.
		Recalculation of computedPosition will be invoked every time size (width or height)
		changes.
	*/
	const registerResizeObserver = (autopositionWrapper: HTMLDivElement) => {
		const resizer = new ResizeObserver(() => {
			if (autopositionWrapper.clientHeight) {
				recalcComputedPosition(autopositionWrapper);
			}
		});
		resizer.observe(autopositionWrapper);
	};

	const recalcOnScroll = (event: any) => {
		if ((event.target as HTMLElement).contains(referencePoint)) {
			recalcRefPointRect();
		}
	};

	const autopositionStyle = {
		...computedStyle,
		'--z-index-autoposition-wrapper': zIndex,
	};

	return (
		<Portal node={document && document.getElementById(autopositionRootId)}>
			<div
				className={autopositionId}
				id={autopositionId}
				ref={autopositionWrapperRef}
				style={autopositionStyle}
			>
				{children}
			</div>
		</Portal>
	);
};

export default CSAutoposition;