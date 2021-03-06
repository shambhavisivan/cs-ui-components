import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSInputFile from '../../components/CSInputFile';

const inputLabel = 'Upload directory';
const fileSelectedLabel = 'File Selected';
const fileType = '.png';
const fileTypeArray = [
	'.png',
	'.jpg',
	'.mp3',
];
const dropAreaHeight = '100px';
const dropAreaWidth = '20rem';
const errorMessage = 'File type not supported';
const file = new File([''], 'hello.png', { type: 'image/png' });
const customClass = 'custom-class';
const customId = 'custom-id';

describe('<CSInputFile />', () => {
	it('should render the default CSInputFile', () => {
		const uut = shallow(<CSInputFile />);
		// Should render input file
		const inputFile = uut.find('.cs-input-file input');
		expect(inputFile).toHaveLength(1);
		// disabled
		expect(uut.find('label.cs-input-file-disabled')).toHaveLength(0);
		// dropAreaHighlighted
		expect(uut.find('.cs-input-file-drop-area-highlighted')).toHaveLength(0);
		// error
		expect(uut.find('.cs-input-file.cs-input-file-error')).toHaveLength(0);
		// label
		expect(uut.find('.cs-input-file-label').text()).toBe('Upload a file');
		inputFile.simulate('change', { target: { files: [file] } });
		// fileSelectedLabel
		expect(uut.find('.cs-input-file-label').text()).toBe('File selected');
		const inputFileTooltip = uut.find('CSTooltip');
		expect(inputFileTooltip.prop('content')).toBe('hello.png');
	});

	it('should render input file that accepts a file type', () => {
		const uut = shallow(<CSInputFile accept={fileType} />);
		expect(uut.find('input').props().accept).toBe(fileType);
	});

	it('should render input file that accepts an array of file types', () => {
		const uut = shallow(<CSInputFile accept={fileTypeArray} />);
		const joinedFileTypes = fileTypeArray.join();
		expect(uut.find('input').props().accept).toBe(joinedFileTypes);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSInputFile disabled />);
		expect(uut.find('label.cs-input-file-disabled')).toHaveLength(1);
		expect(uut.find('input').prop('disabled')).toBeTruthy();
	});

	it('should render input file with drop area background', () => {
		const uut = shallow(<CSInputFile dropAreaBackground />);
		expect(uut.find('.cs-input-file-drop-area-highlighted')).toHaveLength(1);
	});

	it('should set drop area custom height', () => {
		const uut = shallow(<CSInputFile dropAreaHeight={dropAreaHeight} />);
		expect(uut.find('.cs-input-file').props().style).toHaveProperty('--drop-area-height', dropAreaHeight);
	});

	it('should set drop area custom width', () => {
		const uut = shallow(<CSInputFile dropAreaWidth={dropAreaWidth} />);
		expect(uut.find('.cs-input-file').props().style).toEqual({ '--drop-area-height': undefined, '--drop-area-width': dropAreaWidth });
	});

	it('should render error input file', () => {
		const uut = shallow(<CSInputFile error />);
		expect(uut.find('.cs-input-file.cs-input-file-error')).toHaveLength(1);
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const uut = shallow(<CSInputFile error errorMessage={errorMessage} />);
		expect(uut.find('.cs-input-file + CSFieldErrorMsg').prop('message')).toBe(errorMessage);
	});

	it('should pass errorTooltip to CSFieldErrorMsg', () => {
		const uut = shallow(<CSInputFile error errorMessage={errorMessage} errorTooltip />);
		expect(uut.find('.cs-input-file-btn > CSFieldErrorMsg').prop('tooltipMessage')).toBe(true);
	});

	it('should render input file with file size displayed in bytes', () => {
		const fileLabel = 'hello.png (999B)';
		const newFile = new File([''], 'hello.png', { type: 'image/png' });
		Object.defineProperty(newFile, 'size', { value: 999 });
		const uut = shallow(<CSInputFile fileSize />);
		const inputFile = uut.find('input');
		inputFile.simulate('change', { target: { files: [newFile] } });
		const inputFileTooltip = uut.find('CSTooltip');
		expect(inputFileTooltip.prop('content')).toBe(fileLabel);
	});

	it('should render input file with file size displayed in kilobytes', () => {
		const fileLabel = 'hello.png (1KB)';
		const newFile = new File([''], 'hello.png', { type: 'image/png' });
		Object.defineProperty(newFile, 'size', { value: 1001 });
		const uut = shallow(<CSInputFile fileSize />);
		const inputFile = uut.find('input');
		inputFile.simulate('change', { target: { files: [newFile] } });
		const inputFileTooltip = uut.find('CSTooltip');
		expect(inputFileTooltip.prop('content')).toBe(fileLabel);
	});

	it('should render input file with file size displayed in megabytes', () => {
		const fileLabel = 'hello.png (1MB)';
		const newFile = new File([''], 'hello.png', { type: 'image/png' });
		Object.defineProperty(newFile, 'size', { value: 1000001 });
		const uut = shallow(<CSInputFile fileSize />);
		const inputFile = uut.find('input');
		inputFile.simulate('change', { target: { files: [newFile] } });
		const inputFileTooltip = uut.find('CSTooltip');
		expect(inputFileTooltip.prop('content')).toBe(fileLabel);
	});

	it('should render input file with fileSelectedLabel', () => {
		const handleFileSelectedMock = jest.fn();
		const uut = shallow(<CSInputFile onChange={handleFileSelectedMock} fileSelectedLabel={fileSelectedLabel} />);
		const inputFile = uut.find('.cs-input-file input');
		inputFile.simulate('change', { target: { files: [file] } });
		expect(uut.find('.cs-input-file-label').text()).toBe(fileSelectedLabel);
	});

	it('should render input file with label', () => {
		const uut = shallow(<CSInputFile label={inputLabel} />);
		expect(uut.find('.cs-input-file-label').text()).toBe(inputLabel);
		expect(uut.find('.cs-input-file input').props().title).toBe(inputLabel);
	});

	it('should use a working onChange callback', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(<CSInputFile onChange={handleChangeMock} />);
		const inputFile = uut.find('.cs-input-file input');
		inputFile.simulate('change', { target: { files: [file] } });
		expect(handleChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onDrop callback', () => {
		const handleDropMock = jest.fn();
		const dropEventMock = {
			dataTransfer: {
				files: [file],
			},
			preventDefault: () => jest.fn(),
			stopPropagation: () => jest.fn(),
		};
		const uut = shallow(<CSInputFile onDrop={handleDropMock} />);
		const inputFile = uut.find('.cs-input-file');
		inputFile.simulate('drop', dropEventMock);
		expect(handleDropMock).toHaveBeenCalledTimes(1);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSInputFile className={customClass} />);
		expect(uut.find(`.cs-input-file.${customClass}`)).toHaveLength(1);
	});
	it('should have a custom ID', () => {
		const uut = shallow(<CSInputFile id={customId} />);
		expect(uut.find(`.cs-input-file input#${customId}`)).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSInputFile data-testid="rest" />);
		const inputFile = uut.find({ 'data-testid': 'rest' });
		expect(inputFile).toHaveLength(1);
	});
});
