import React from 'react';
import { CSCustomData } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSCustomDataProps from './cs-custom-data-props';

const actions = [{
	onClick: () => alert('Delete option called'),
	iconName: 'delete',
	labelHidden: true,
	size: 'small',
	label: 'Delete'
}, {
	onClick: () => alert('Add option called'),
	iconName: 'add',
	labelHidden: true,
	size: 'small',
	label: 'Add'
}];

const actionTooltip = {
	content: 'Add item',
	delay: 300,
	padding: '0.5rem',
	position: 'bottom-left',
	stickyOnClick: true
};

const icons = [
	{ name: 'cart' },
	{ name: 'tag', origin: 'cs' }
];

const iconTooltip = {
	content: 'Tag description',
	delay: 300,
	maxWidth: '20rem',
	padding: '0.5rem',
	position: 'bottom-left',
	stickyOnClick: true
};

const status = {
	name: 'error',
	color: 'maroon',
	tooltip: {
		content: 'An error has occurred',
		delay: 300,
		padding: '0.5rem',
		position: 'bottom-left',
		stickyOnClick: true,
		variant: 'error'
	}
};

const CSCustomDataPreview = () => (
	<CSD.Page
		title="Custom Data"
		accessible="yes"
		routePrefix="cs-ui"
		tables={CSCustomDataProps}
	>
		<CSD.Section>
			<CSD.Text>
				Custom Data is a helper component used to provide universal support for
				custom actions/buttons, icons and statuses within form elements or
				as a display-only placeholder for form elements.
			</CSD.Text>
			<CSD.Heading level={2}>Actions</CSD.Heading>
			<CSD.Text>
				The `actions` prop displays buttons for form elements and placeholders.
				It accepts an array of objects which extend `CSButtonProps`.
			</CSD.Text>
			<CSD.Text>
				Besides the standard button attributes, the `CSCustomDataAction` interface
				accepts a `tooltip` attribute, which extends `CSTooltipProps` where icon-specific
				tooltip props are omitted due to them being provided by the button.
				Setting a valid `tooltip` attribute wraps a tooltip around the button.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value', 'actions']}
				code={`
					<CSCustomData
						value="Value"
						actions={[{
							onClick: () => alert('Delete option called'),
							iconName: 'delete',
							labelHidden: true,
							size: 'small',
							label: 'Delete',
						}, {
							onClick: () => alert('Add option called'),
							iconName: 'add',
							labelHidden: true,
							size: 'small',
							label: 'Add',
						}]}
					/>

					<CSCustomData
						value="Value"
						actions={[{
							onClick: () => alert('Add option called'),
							iconName: 'add',
							labelHidden: true,
							size: 'small',
							label: 'Add',
							tooltip: {
								content: 'Add item',
								delay: 300,
								padding: '0.5rem',
								position: 'bottom-left',
								stickyOnClick: true,
							}
						}]}
					/>
				`}
			>
				<CSCustomData value="Value" actions={actions} />
				<CSCustomData value="Value" actions={[{ ...actions[1], tooltip: actionTooltip }]} />
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Icons</CSD.Heading>
			<CSD.Text>
				The `icons` prop displays icons for form elements and placeholders.
				It accepts an array of objects which extend `CSIconProps`.
			</CSD.Text>
			<CSD.Text>
				Besides the standard icon attributes, the `CSCustomDataIcon` interface
				accepts a `tooltip` attribute, which extends `CSTooltipProps` where icon-specific
				tooltip props are omitted due to them being provided by the icons itself.
				Setting a valid `tooltip` attribute wraps a tooltip around the icon.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value', 'icons']}
				code={`
					<CSCustomData
						value="Value"
						icons={[
							{ name: 'cart' },
							{ name: 'tag', origin: 'cs' },
						]}
					/>

					<CSCustomData
						value="Value"
						icons={[{
							name: 'tag',
							origin: 'cs',
							tooltip: {
								content: 'Tag description',
								delay: 300,
								maxWidth: '20rem',
								padding: '0.5rem',
								position: 'bottom-left',
								stickyOnClick: true,
							}
						}]}
					/>
				`}
			>
				<CSCustomData value="Value" icons={icons} />
				<CSCustomData value="Value" icons={[{ ...icons[1], tooltip: iconTooltip }]} />
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Menu Icons</CSD.Heading>
			<CSD.Text>
				The `menuIcon` props, when defined, attempts
				to mimic field indicator icons. For example,
				setting it to `'dropdown'` will display a caret icon
				in the far right corner, while setting it to `'datepicker'`
				will display a calendar icon, mimicking a lookup or select field
				and a date or datetime picker respectively.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value', 'menuIcon']}
				code={`
					<CSCustomData value="Value" menuIcon="dropdown" />
					<CSCustomData value="Value" menuIcon="datepicker" />
				`}
			>
				<CSCustomData value="Value" menuIcon="dropdown" />
				<CSCustomData value="Value" menuIcon="datepicker" />
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Status</CSD.Heading>
			<CSD.Text>
				The `status` prop accepts a single `CSCustomDataIcon` object.
				Because of that, it supports everything a single icon accepts.
				However, unlike icons, which are display to the left of actions,
				the status is displayed on the right and cannot be an array.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value', 'status']}
				code={`
					<CSCustomData
						value="Value"
						status={{
							name: 'error',
							color: 'maroon',
							tooltip: {
								content: 'An error has occurred',
								delay: 300,
								padding: '0.5rem',
								position: 'bottom-left',
								stickyOnClick: true,
								variant: 'error',
							}
						}}
					/>
				`}
			>
				<CSCustomData
					value="Value"
					status={status}
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Title</CSD.Heading>
			<CSD.Text>
				Adding a `title` prop sets the HTML title attribute on the entire element.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value', 'title']}
				code={`<CSCustomData value="Value" title="Title" />`}
			>
				<CSCustomData value="Value" title="Title" />
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Value</CSD.Heading>
			<CSD.Text>
				The `value` prop mimics a read-only form field value.
				It stretches to take up the maximum available space,
				but when undefined, the rest of the props will render inline.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value']}
				code={`<CSCustomData value="Value" />`}
			>
				<CSCustomData value="Value" />
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Combining Props</CSD.Heading>
			<CSD.Text>
				Even though none of the props are required due to
				the modular nature of this component, it should never
				be rendered empty.
			</CSD.Text>
			<CSD.Text>
				All the props work well together and can be combined
				based on specific use cases. The different props will
				render the component elements in a specific order from left to right:
			</CSD.Text>
			<CSD.List type="ol">
				<CSD.ListItem>Value (extending to maximum available space)</CSD.ListItem>
				<CSD.ListItem>Icons</CSD.ListItem>
				<CSD.ListItem>Actions</CSD.ListItem>
				<CSD.ListItem>Status</CSD.ListItem>
				<CSD.ListItem>Menu Icon</CSD.ListItem>
			</CSD.List>
			<CSD.Text>These are all the supported prop combinations:</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value', 'actions', 'icons', 'status', 'menuIcon']}
				code={`
					<CSCustomData value="Value" actions={actions} icons={icons} />
					<CSCustomData value="Value" actions={actions} status={status} />
					<CSCustomData value="Value" icons={icons} status={status} />
					<CSCustomData value="Value" actions={actions} icons={icons} status={status} />
					<CSCustomData value="Value" actions={actions} menuIcon="dropdown" />
					<CSCustomData value="Value" icons={icons} menuIcon="dropdown" />
					<CSCustomData value="Value" actions={actions} icons={icons} menuIcon="dropdown" />
					<CSCustomData value="Value" actions={actions} status={status} menuIcon="datepicker" />
					<CSCustomData value="Value" icons={icons} status={status} menuIcon="datepicker" />
					<CSCustomData value="Value" actions={actions} icons={icons} status={status} menuIcon="datepicker" />
				`}
			>
				<CSCustomData value="Value" actions={actions} icons={icons} />
				<CSCustomData value="Value" actions={actions} status={status} />
				<CSCustomData value="Value" icons={icons} status={status} />
				<CSCustomData value="Value" actions={actions} icons={icons} status={status} />
				<CSCustomData value="Value" actions={actions} menuIcon="dropdown" />
				<CSCustomData value="Value" icons={icons} menuIcon="dropdown" />
				<CSCustomData value="Value" actions={actions} icons={icons} menuIcon="dropdown" />
				<CSCustomData value="Value" actions={actions} status={status} menuIcon="datepicker" />
				<CSCustomData value="Value" icons={icons} status={status} menuIcon="datepicker" />
				<CSCustomData value="Value" actions={actions} icons={icons} status={status} menuIcon="datepicker" />
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
			<CSD.Text>
				It is possible to apply custom CSS classes and IDs using the `className` and `id` props respectively.
				These get attached to the wrapper element.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSCustomDataProps}
				related={['value', 'id', 'className']}
				code={`
					<CSCustomData value="Value" id="custom-id" />
					<CSCustomData value="Value" className="custom-br-purple" />
				`}
			>
				<CSCustomData value="Value" id="custom-id" />
				<CSCustomData value="Value" className="custom-br-purple" />
			</CSD.Preview>
		</CSD.Section>
	</CSD.Page>
);

export default CSCustomDataPreview;
