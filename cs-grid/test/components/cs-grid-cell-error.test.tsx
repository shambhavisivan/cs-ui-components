import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCellError } from '../../src/components/cs-grid-cell-error';
import { CSGridTooltip } from '../../src/components/cs-grid-tooltip';

describe('CS Grid Cell Error', () => {
	const errorMessage = 'Some error message';

	test('renders a basic tooltip with an error message.', () => {
		const tooltip = shallow(<CSGridCellError errorMessage={errorMessage} />);

		expect(
			tooltip.equals(
				<CSGridTooltip helpText={errorMessage}>
					<span className='icon-info' aria-hidden='true' />
				</CSGridTooltip>
			)
		).toBeTruthy();
	});

	test('renders nothing if no error message is provided', () => {
		const tooltip = shallow(<CSGridCellError errorMessage={''} />);
		expect(tooltip.equals(null)).toBeTruthy();
	});
});
