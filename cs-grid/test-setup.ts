/**
 * Defines the React 16 Adapter for Enzyme. 
 */
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });