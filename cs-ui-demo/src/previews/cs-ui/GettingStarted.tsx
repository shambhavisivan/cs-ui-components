import { CSChip } from '@cloudsense/cs-ui-components';
import React from 'react';
import * as CSD from '../../demo-components';

const GettingStarted = () => (
	<CSD.Page
		title="Getting Started"
		routePrefix="cs-ui"
	>
		<CSD.Section>
			<CSD.Heading level={2}>HTML App Wrapper</CSD.Heading>
			<CSD.Text>
				All apps that use the cs-ui-components library need to make use of the HTML wrapper
				with the `.cs-app-wrapper` class as shown here.
				The wrapper provides default styles and allows us to only target our own components.
			</CSD.Text>
			<CSD.Code>
				{`
					<div id="root">
						<div className="cs-app-wrapper">
							Hello world
						</div>
					</div>
				`}
			</CSD.Code>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>CSS Class Prefix</CSD.Heading>
			<CSD.Text>
				All class names from the cs-ui-components library have a `cs-` prefix (`cs-modal`, `cs-tooltip`, etc.).
				The prefix should not be used in other projects in order to avoid bugs and conflicts.
			</CSD.Text>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>z-index</CSD.Heading>
			<CSD.Text>
				All z-index values across all projects should be declared as global CSS variables in the root
				element of the document (the `:root` pseudo-class) which represents the `html` element.
				Variable names should be self-explanatory and sorted by index in ascending order.
			</CSD.Text>
			<CSD.Text>
				These are the z-index variables used in the cs-ui-components package:
			</CSD.Text>
			<CSD.List>
				<CSD.ListItem>--z-index-path-pseudo: -1;</CSD.ListItem>
				<CSD.ListItem>--z-index-sidebar-hidden-wrapper: -1;</CSD.ListItem>
				<CSD.ListItem>--z-index-divider-label: 1;</CSD.ListItem>
				<CSD.ListItem>--z-index-progress-indicator: 1;</CSD.ListItem>
				<CSD.ListItem>--z-index-transfer-list-item-focus: 1;</CSD.ListItem>
				<CSD.ListItem>--z-index-sidebar-visible-wrapper: 1;</CSD.ListItem>
				<CSD.ListItem>--z-index-list-active: 1;</CSD.ListItem>
				<CSD.ListItem>--z-index-slider-thumb: 1;</CSD.ListItem>
				<CSD.ListItem>--z-index-custom-select-values: 2;</CSD.ListItem>
				<CSD.ListItem>--z-index-button-icon: 2;</CSD.ListItem>
				<CSD.ListItem>--z-index-button-label: 2;</CSD.ListItem>
				<CSD.ListItem>--z-index-dropdown-button: 2;</CSD.ListItem>
				<CSD.ListItem>--z-index-button-focus: 3;</CSD.ListItem>
				<CSD.ListItem>--z-index-main-header: 3;</CSD.ListItem>
				<CSD.ListItem>--z-index-table-header: 3;</CSD.ListItem>
				<CSD.ListItem>--z-index-button-custom-content: 4;</CSD.ListItem>
				<CSD.ListItem>--z-index-sidebar-toggle: 10;</CSD.ListItem>
				<CSD.ListItem>--z-index-path: 10;</CSD.ListItem>
				<CSD.ListItem>--z-index-reset-zen-more-tabs-ul: 99;</CSD.ListItem>
				<CSD.ListItem>--z-index-modal: 9000;</CSD.ListItem>
				<CSD.ListItem>--z-index-dropdown-items-wrapper: 9001;</CSD.ListItem>
				<CSD.ListItem>--z-index-custom-select-dropdown: 9001;</CSD.ListItem>
				<CSD.ListItem>--z-index-lookup-dropdown: 9001;</CSD.ListItem>
				<CSD.ListItem>--z-index-toast: 9005;</CSD.ListItem>
				<CSD.ListItem>--z-index-tooltip: 9025;</CSD.ListItem>
				<CSD.ListItem>--z-index-spinner-wrapper: 9050;</CSD.ListItem>
				<CSD.ListItem>--z-index-spinner: 9051;</CSD.ListItem>
			</CSD.List>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Unit Tests & UUID</CSD.Heading>
			<CSD.Text>
				The library's form components use a UUID package for semantic connections of components
				and their respective labels. The UUID package relies on the JavaScript Crypto API and it
				can cause Jenkins test errors across products.
			</CSD.Text>
			<CSD.Text>
				To bypass such errors, place the following code chunk in the test setup file of the product:
			</CSD.Text>
			<CSD.Code>
				{`
					Object.defineProperty(global, 'crypto', {
						value: {
							getRandomValues: (arr: string | Array<string>): Buffer => crypto.randomBytes(arr.length)
						}
					});
				`}
			</CSD.Code>
			<CSD.Text>
				<CSChip className="getting-started-chip" text="important" color="#3cdbc0" /> When writing unit tests and comparing snapshots, make sure to use
				shallow rendering. This is required because the unique id created by the UUID package
				will be recreated after each rerender, which increases the likelihood of failing a test.
			</CSD.Text>
		</CSD.Section>
	</CSD.Page>
);

export default GettingStarted;
