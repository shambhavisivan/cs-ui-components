import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { shallow } from "enzyme";
import React from "react";
import { CSGridProps, CSGrid } from "../../main";

describe('singleClickEdit', () => {
	const baseProps: CSGridProps = {
		csGridPagination: {
			location: 'Footer',
		},
		csGridQuickFilter: {
			location: 'Header',
		},
		multiSelect: false,
		uniqueIdentifierColumnName: 'Id',
		columnDefs: []
	}

	test('singleClickEdit should be true when not defined in props', () => {
		const csGridShallow = shallow(<CSGrid {...baseProps} />);

		expect(csGridShallow.find(AgGridReact).props().singleClickEdit).toBeTruthy();
	});

	test('singleClickEdit from props should be used when defined', () => {
		const gridProps = {
			...baseProps,
			singleClickEdit: false,
		};
		const csGridShallow = shallow(<CSGrid {...gridProps} />);

		expect(csGridShallow.find(AgGridReact).props().singleClickEdit).toBeFalsy();
	});
});