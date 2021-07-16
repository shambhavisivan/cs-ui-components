import * as React from 'react';
import '../../setupTests.ts';
import { shallow } from 'enzyme';
import CSAlert, { CSAlertVariant } from '../CSAlert';

it('should render alert with variant info', () => {
	const variant: CSAlertVariant = 'info';
	const uut = shallow(<CSAlert variant={variant} text="Info alert" />);
	const text = uut.find('span.cs-alert-text').text();
	expect(text).toBe('Info alert');
	const infoalert = uut.find('div.cs-alert-info');
	expect(infoalert).toBeTruthy();
});
