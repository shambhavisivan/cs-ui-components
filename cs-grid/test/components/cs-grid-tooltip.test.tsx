import { shallow } from 'enzyme';
import React from 'react';
import { CSGridTooltip } from '../../src/components/cs-grid-tooltip';

describe('CS Grid Tooltip', () => {
	const helpText = 'Some help text';

	test('renders a basic tooltip with a help text and no optional props.', () => {
		const tooltip = shallow(<CSGridTooltip helpText={helpText} />);
		expect(
			tooltip.equals(
				<div className='csgrid-tooltip-group'>
					<div className='csgrid-tooltip'>{helpText}</div>
				</div>
			)
		).toBeTruthy();
	});

	test('renders a tooltip with a child element and all optional props.', () => {
		const tooltip = shallow(
			<CSGridTooltip
				helpText={helpText}
				additionalClassnames='additionalClassnames1'
				position='position1'
			>
				<span className='className1' />
			</CSGridTooltip>
		);
		expect(
			tooltip.equals(
				<div className='csgrid-tooltip-group additionalClassnames1'>
					<span className='csgrid-tooltip-text'>
						<span className='className1' />
					</span>
					<div className='csgrid-tooltip position1'>{helpText}</div>
				</div>
			)
		).toBeTruthy();
	});
});
