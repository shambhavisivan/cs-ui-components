import { CSTooltip } from '@cloudsense/cs-ui-components';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridCellError } from '../../src/components/cs-grid-cell-error';

describe('CS Grid Cell Error', () => {
	const errorMessage = 'Some error message';

	test('renders a basic tooltip with an error message.', () => {
		const tooltip = shallow(<CSGridCellError errorMessage={errorMessage} />);

		expect(tooltip.equals(<CSTooltip content={errorMessage} variant='error' />)).toBeTruthy();
	});

	test('renders nothing if no error message is provided', () => {
		const tooltip = shallow(<CSGridCellError errorMessage={''} />);
		expect(tooltip.equals(null)).toBeTruthy();
	});
});
