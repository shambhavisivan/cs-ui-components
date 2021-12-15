import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../../setupTests';
import CSAutoposition from '../../helpers/autoposition/CSAutoposition';
import { CSAutopositions, CSAutopositionSchema } from '../../helpers/autoposition/cs-autoposition-types';

const positions: Array<CSAutopositions> = [
	'top-left',
	'top-right',
	'top-center',
	'bottom-left',
	'bottom-right',
	'bottom-center',
	'left-top',
	'left-bottom',
	'left-center',
	'right-top',
	'right-bottom',
	'right-center',
];

const initialElement = {
	getBoundingClientRect: () => ({
		bottom: 320,
		height: 32,
		left: 640,
		right: 714,
		top: 288,
		width: 74,
		x: undefined,
		y: undefined,
	}),
} as HTMLElement;
const initialElementRect = initialElement.getBoundingClientRect();

global.innerWidth = 1280;
global.innerHeight = 577;

const schemaDeviation: CSAutopositionSchema = [
	{
		position: 'top-left',
		deviation: {
			bottom: 10,
			right: 15,
		},
	},
];

const schemaNonMatchingDeviation: CSAutopositionSchema = [
	{
		position: 'top-left',
		deviation: {
			top: 10,
		},
	},
];

const child = <span className="cs-test-child">Child content</span>;

describe('<CSAutoposition />', () => {
	it('should render autoposition portal with wrapper', () => {
		const uut = shallow(
			<CSAutoposition
				initialPosition={positions[0]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapper = uut.find('Portal > .cs-autoposition');
		expect(autopositionWrapper).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(
			<CSAutoposition
				initialPosition={positions[0]}
				positionSchema={positions}
				referencePoint={initialElement}
			>
				{child}
			</CSAutoposition>,
		);
		const autopositionWrapperChildren = uut.find('Portal > .cs-autoposition > .cs-test-child');
		expect(autopositionWrapperChildren).toHaveLength(1);
	});

	/**
	 * Following tests check .cs-autoposition style property value according to opposite keys of openOn and expandTo values of some position
	 * e.g. for top-right position openOn value is 'top', expandTo value is 'right'
	 */

	it('should set correct autoposition wrapper style if openOn value is top', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[0]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('bottom', global.innerHeight - initialElementRect.top);
	});

	it('should set correct autoposition wrapper style if openOn value is bottom', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[3]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('top', initialElementRect.top + initialElementRect.height);
	});

	it('should set correct autoposition wrapper style if openOn value is left', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[7]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('right', global.innerWidth - initialElementRect.left);
	});

	it('should set correct autoposition wrapper style if openOn value is right', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[10]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('left', initialElementRect.right);
	});

	it('should set correct autoposition wrapper style if expandTo value is top', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[6]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('bottom', global.innerHeight - initialElementRect.top);
	});

	it('should set correct autoposition wrapper style if expandTo value is bottom', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[7]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('top', initialElementRect.top + initialElementRect.height);
	});

	it('should set correct autoposition wrapper style if expandTo value is left', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[3]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('right', global.innerWidth - initialElementRect.right);
	});

	it('should set correct autoposition wrapper style if expandTo value is right', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition="bottom-right"
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('left', initialElementRect.left);
	});

	it('should set correct autoposition wrapper style if openOn is top and expandTo is center', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[2]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('left', initialElementRect.left + initialElementRect.width / 2);
		expect(autopositionWrapperStyle).toHaveProperty('transform', 'translateX(-50%) translate3d(0, 0, 0)');
	});

	it('should set correct autoposition wrapper style if openOn is bottom and expandTo is center', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[5]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('left', initialElementRect.left + initialElementRect.width / 2);
		expect(autopositionWrapperStyle).toHaveProperty('transform', 'translateX(-50%) translate3d(0, 0, 0)');
	});

	it('should set correct autoposition wrapper style if openOn is right and expandTo is center', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[8]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('top', initialElementRect.top + initialElementRect.height / 2);
		expect(autopositionWrapperStyle).toHaveProperty('transform', 'translateY(-50%) translate3d(0, 0, 0)');
	});

	it('should set correct autoposition wrapper style if openOn is left and expandTo is center', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[11]}
				positionSchema={positions}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('top', initialElementRect.top + initialElementRect.height / 2);
		expect(autopositionWrapperStyle).toHaveProperty('transform', 'translateY(-50%) translate3d(0, 0, 0)');
	});

	/**
	 * Following tests check how defined deviation is appended in style attribute.
	 * If deviation key matches one of the opposite values of defined position it will be appended to the existing css rule.
	 * If deviation key doesn't match with any values it will be appended as a separate css rule to the style attribute.
	 */

	it('should append deviation value to the existing css property if deviation key matches defined position', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[0]}
				positionSchema={schemaDeviation}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('bottom', global.innerHeight - initialElementRect.top + 10);
		expect(autopositionWrapperStyle).toHaveProperty('right', global.innerWidth - initialElementRect.right + 15);
	});

	it('should append new css rule if deviation key does not match defined position', () => {
		const uut = mount(
			<CSAutoposition
				initialPosition={positions[0]}
				positionSchema={schemaNonMatchingDeviation}
				referencePoint={initialElement}
			/>,
		);
		const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
		expect(autopositionWrapperStyle).toHaveProperty('bottom', global.innerHeight - initialElementRect.top);
		expect(autopositionWrapperStyle).toHaveProperty('right', global.innerWidth - initialElementRect.right);
		expect(autopositionWrapperStyle).toHaveProperty('top', 10);
	});

	/** TO DO
	 * tests for computation of new position when overflow occurs
	 * tests for updating .cs-autoposition style when scroll occurs
	 * tests for updating .cs-autoposition style on screen resize
	 */
	/**
	 * Following tests check computation of new position if one or more parts of .cs-autoposition div overflows the screen.
	 */
	// leaving this for reference
	// it('should set correct autoposition wrapper style if top and left part of the div overflows the screen', () => {
	// 	jest.mock('react', () => {
	// 		const realReact = jest.requireActual('react');
	// 		return {
	// 			...realReact,
	// 			useRef: jest.fn(),
	// 		};
	// 	});

	// 	jest.spyOn(React, 'useRef').mockReturnValueOnce({
	// 		current: {
	// 			getBoundingClientRect: () => ({
	// 				bottom: 320,
	// 				height: 32,
	// 				left: -1,
	// 				right: 714,
	// 				top: -1,
	// 				width: 74,
	// 				x: 21212,
	// 				y: 21212,
	// 			}),
	// 		},
	// 	});
	// 	// const mockedReact = React as jest.Mocked<typeof React>;
	// 	// (useRef as any).mockImplementationOnce(() => ref);
	// 	const uut = mount(
	// 		<CSAutoposition
	// 			initialPosition="top-left"
	// 			positionSchema={positions}
	// 			referencePoint={initialElement}
	// 		/>,
	// 	);

	// 	const autopositionWrapperStyle = uut.find('.cs-autoposition').props().style;
	// 	console.log(autopositionWrapperStyle);
	// 	expect(autopositionWrapperStyle).toHaveProperty('top', initialElementRect.top + initialElementRect.height);
	// expect(autopositionWrapperStyle).toHaveProperty('left', initialElementRect.left);
	// });
});
