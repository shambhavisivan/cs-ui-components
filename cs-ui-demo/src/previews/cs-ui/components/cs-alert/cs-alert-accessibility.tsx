import React from 'react';
import * as CSD from '../../../../demo-components';

export default {
	customContent: (
		<CSD.Section>
			<CSD.Text>
				CSAlert is accessible, where accessibility conformance is settled with a semantic heading,
				focusable close button and a semantic role depending on the variant.
			</CSD.Text>
			<CSD.Text>
				All alert variant also support a light version by setting the styleType prop to 'light'.
				Appropriate inverse colours are set automatically and comply with accessibility standards.
			</CSD.Text>
		</CSD.Section>
	),
	criteria: [
		'1.4.4',
		'2.1.1',
		'2.1.2',
		'4.1.2'
	],
	requirements: {
		structure: [
			'`<h4>` - allows screen reader heading search'
		],
		attributes: [
			'`role="alert/status"` - depending on alert variant'
		],
		keyboardOperability: [
			'Close button is a `<CSButton>` which is focusable and supports `Space` and `Enter` clicks'
		]
	}
};
