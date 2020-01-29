import React from 'react';

import { applyLabelValuesToColumnDescriptors } from '../CSTableUtils';
import { CSTableColumn } from '../CSTable';

describe('CSTableUtils', () => {
	describe('applyLabelValuesToColumnDescriptors', () => {
		const COLS: Array<CSTableColumn> = [
			{
				name: 'field1',
				label: 'label1'
			},
			{
				name: 'field2',
				label: 'label2'
			}
		];
		it('does nothing if labels are missing', () => {
			const uut = applyLabelValuesToColumnDescriptors(COLS, {});
			expect(uut).toEqual(COLS);
		});
		it('fails if labels are missing and fail flag is set', () => {
			expect(() => applyLabelValuesToColumnDescriptors(COLS, { label1: 'new label 1' }, true)).toThrowError(`Couldn't find localised value for label label2`);
		});
		it('replaces existing labels', () => {
			const uut = applyLabelValuesToColumnDescriptors(COLS, { label1: 'new label 1' });
			expect(uut[0].label).toEqual('new label 1');
			expect(uut[1].label).toEqual('label2');
		});
		it('skips non-string labels', () => {
			const NON_STRING_LABEL_COLS: Array<CSTableColumn> = [{ name: 'nonstring', label: <div /> }];
			const uut = applyLabelValuesToColumnDescriptors(NON_STRING_LABEL_COLS, {});
			expect(uut).toEqual(NON_STRING_LABEL_COLS);
		});

	});

});
