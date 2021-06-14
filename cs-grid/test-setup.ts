/**
 * Defines the React 16 Adapter for Enzyme.
 */
import enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { JSDOM } from "jsdom"
import crypto from 'crypto';

enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM()
const globalAny: any = global;

globalAny.document = dom.window.document;
globalAny.window = dom.window;

Object.defineProperty(global.self, 'crypto', {
	value: {
		getRandomValues: (arr: any) => crypto.randomBytes(arr.length)
	}
});
