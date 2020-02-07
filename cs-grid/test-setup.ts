/**
 * Defines the React 16 Adapter for Enzyme. 
 */
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom"

enzyme.configure({ adapter: new Adapter() });

const dom = new JSDOM()
const globalAny: any = global;

globalAny.document = dom.window.document;
globalAny.window = dom.window;