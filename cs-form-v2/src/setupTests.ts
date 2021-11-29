import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import crypto from 'crypto';

Object.defineProperty(global, 'crypto', {
	value: {
		getRandomValues: (arr: any) => crypto.randomBytes(arr.length),
	},
});

Enzyme.configure({ adapter: new Adapter() });
