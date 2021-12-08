import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSMainHeader from '../../components/main-header/CSMainHeader';
import CSMainHeaderLeft from '../../components/main-header/CSMainHeaderLeft';
import CSMainHeaderRight from '../../components/main-header/CSMainHeaderRight';
import CSMainHeaderIcon from '../../components/main-header/CSMainHeaderIcon';

const title = 'title';
const subtitle = 'subtitle';
const customClass = 'custom-class';
const customId = 'custom-id';

describe('<CSMainHeader />', () => {
	it('should render the default CSMainHeader', () => {
		const uut = shallow(<CSMainHeader />);
		const mainHeader = uut.find('.cs-main-header.cs-main-header-neutral.cs-main-header-sticky');
		const mainHeaderStyle = uut.find('.cs-main-header-inner').get(0).props.style;
		// Make sure default values are set for props color, sticky and maxWidth
		expect(mainHeader).toHaveLength(1);
		expect(mainHeaderStyle).toHaveProperty('--cs-main-header-max-width', '100%');
	});

	it('should set background color variant neutral', () => {
		const uut = shallow(<CSMainHeader color="neutral" />);
		const mainHeader = uut.find('.cs-main-header.cs-main-header-neutral');
		expect(mainHeader).toHaveLength(1);
	});

	it('should set background color variant brand', () => {
		const uut = shallow(<CSMainHeader color="brand" />);
		const mainHeader = uut.find('.cs-main-header.cs-main-header-brand');
		expect(mainHeader).toHaveLength(1);
	});

	it('should set background color variant success', () => {
		const uut = shallow(<CSMainHeader color="success" />);
		const mainHeader = uut.find('.cs-main-header.cs-main-header-success');
		expect(mainHeader).toHaveLength(1);
	});

	it('should set background color variant error', () => {
		const uut = shallow(<CSMainHeader color="error" />);
		const mainHeader = uut.find('.cs-main-header.cs-main-header-error');
		expect(mainHeader).toHaveLength(1);
	});

	it('should set background color variant info', () => {
		const uut = shallow(<CSMainHeader color="info" />);
		const mainHeader = uut.find('.cs-main-header.cs-main-header-info');
		expect(mainHeader).toHaveLength(1);
	});

	it('should set max width', () => {
		const uut = shallow(<CSMainHeader maxWidth="5rem" />);
		const mainHeaderStyle = uut.find('.cs-main-header-inner').get(0).props.style;
		expect(mainHeaderStyle).toHaveProperty('--cs-main-header-max-width', '5rem');
	});

	it('should enable sticky behaviour', () => {
		const uut = shallow(<CSMainHeader sticky />);
		const mainHeader = uut.find('.cs-main-header.cs-main-header-sticky');
		expect(mainHeader).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSMainHeader className={customClass} />);
		const mainHeader = uut.find(`.cs-main-header.${customClass}`);
		expect(mainHeader).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSMainHeader id={customId} />);
		const mainHeader = uut.find(`.cs-main-header#${customId}`);
		expect(mainHeader).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSMainHeader><div className="custom-content" /></CSMainHeader>);
		const mainHeaderContent = uut.find('.cs-main-header .custom-content');
		expect(mainHeaderContent).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSMainHeader data-testid="rest" />);
		const mainHeader = uut.find({ 'data-testid': 'rest' });
		expect(mainHeader).toHaveLength(1);
	});
});

describe('<CSMainHeaderLeft />', () => {
	it('should render the default CSMainHeaderLeft and display title', () => {
		const uut = shallow(<CSMainHeaderLeft title={title} />);
		const mainHeaderLeft = uut.find('.cs-main-header-left');
		const mainHeaderLeftTitle = uut.find('.cs-main-header-title');
		expect(mainHeaderLeft).toHaveLength(1);
		expect(mainHeaderLeftTitle.text()).toBe(title);
	});

	it('should display reverse order of items in main header left', () => {
		const uut = shallow(<CSMainHeaderLeft title={title} reverseOrder />);
		const mainHeaderLeft = uut.find('.cs-main-header-heading.cs-main-header-heading-reversed');
		expect(mainHeaderLeft).toHaveLength(1);
	});

	it('should display subtitle', () => {
		const uut = shallow(<CSMainHeaderLeft title={title} subtitle={subtitle} />);
		const mainHeaderLeftSubtitle = uut.find('.cs-main-header-subtitle');
		expect(mainHeaderLeftSubtitle.text()).toBe(subtitle);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSMainHeaderLeft title={title} className={customClass} />);
		const mainHeaderLeft = uut.find(`.cs-main-header-left.${customClass}`);
		expect(mainHeaderLeft).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSMainHeaderLeft title={title} id={customId} />);
		const mainHeaderLeft = uut.find(`.cs-main-header-left#${customId}`);
		expect(mainHeaderLeft).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSMainHeaderLeft title={title}><div className="custom-content" /></CSMainHeaderLeft>);
		const mainHeaderLeftContent = uut.find('.cs-main-header-left > .custom-content');
		expect(mainHeaderLeftContent).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSMainHeaderLeft title={title} data-testid="rest" />);
		const mainHeaderLeft = uut.find({ 'data-testid': 'rest' });
		expect(mainHeaderLeft).toHaveLength(1);
	});
});

describe('<CSMainHeaderRight />', () => {
	it('should render the default CSMainHeaderRight', () => {
		const uut = shallow(<CSMainHeaderRight />);
		const mainHeaderRight = uut.find('.cs-main-header-right');
		expect(mainHeaderRight).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSMainHeaderRight className={customClass} />);
		const mainHeaderRight = uut.find(`.cs-main-header-right.${customClass}`);
		expect(mainHeaderRight).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSMainHeaderRight id={customId} />);
		const mainHeaderRight = uut.find(`.cs-main-header-right#${customId}`);
		expect(mainHeaderRight).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSMainHeaderRight><div className="custom-content" /></CSMainHeaderRight>);
		const mainHeaderRightContent = uut.find('.cs-main-header-right > .custom-content');
		expect(mainHeaderRightContent).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSMainHeaderRight data-testid="rest" />);
		const mainHeaderRight = uut.find({ 'data-testid': 'rest' });
		expect(mainHeaderRight).toHaveLength(1);
	});
});

describe('<CSMainHeaderIcon />', () => {
	it('should render the default CSMainHeaderIcon', () => {
		const uut = shallow(<CSMainHeaderIcon />);
		const mainHeaderIcon = uut.find('.cs-main-header-icon');
		expect(mainHeaderIcon).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSMainHeaderIcon className={customClass} />);
		const mainHeaderIcon = uut.find(`.cs-main-header-icon.${customClass}`);
		expect(mainHeaderIcon).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSMainHeaderIcon id={customId} />);
		const mainHeaderIcon = uut.find(`.cs-main-header-icon#${customId}`);
		expect(mainHeaderIcon).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSMainHeaderIcon><div className="custom-content" /></CSMainHeaderIcon>);
		const mainHeaderIconContent = uut.find('.cs-main-header-icon > .custom-content');
		expect(mainHeaderIconContent).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSMainHeaderIcon data-testid="rest" />);
		const mainHeaderIcon = uut.find({ 'data-testid': 'rest' });
		expect(mainHeaderIcon).toHaveLength(1);
	});
});
