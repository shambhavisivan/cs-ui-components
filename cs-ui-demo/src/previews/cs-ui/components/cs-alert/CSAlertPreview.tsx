import React from 'react';
import { CSAlert, CSButton } from '@cloudsense/cs-ui-components';
import * as CSD from '../../../../demo-components';
import CSAlertProps from './cs-alert-props';
import CSAlertAccessibility from './cs-alert-accessibility';

const CSAlertPreview = () => (
	<CSD.Page
		title="Alert"
		accessible="yes"
		accessibility={CSAlertAccessibility}
		tables={CSAlertProps}
		routePrefix="cs-ui"
	>
		<CSD.Section>
			<CSD.Heading level={2}>Variants</CSD.Heading>
			<CSD.Text>To achieve proper styling and convey the context of an alert message, use one of the required variants.</CSD.Text>
			<CSD.Text>Each variant will apply appropriate styling and a default contextual icon.</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'text']}
				code={`
					<CSAlert variant="info" text="This is an info alert." />
					<CSAlert variant="warning" text="This is a warning alert." />
					<CSAlert variant="error" text="This is an error alert." />
					<CSAlert variant="base" text="This is a base alert." />
				`}
			>
				<CSAlert variant="info" text="This is an info alert." />
				<CSAlert variant="warning" text="This is a warning alert." />
				<CSAlert variant="error" text="This is an error alert." />
				<CSAlert variant="base" text="This is a base alert." />
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Closing</CSD.Heading>
			<CSD.Text>Alerts can be dismissed with the `closeButton` and `onClose` props.</CSD.Text>
			<CSD.Text>
				`closeButton` renders a close button and applies styles that accommodate the alert content width to prevent overflows,
				while `onClose` accepts a callback which gets triggered when the close button is clicked.
				Because of that, these two props should always be used in conjunction.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'closeButton', 'onClose', 'text']}
				code={`
					<CSAlert
						variant="info"
						closeButton
						onClose={() => alert('The alert close button has been clicked.')}
						text="This is an alert with a close button."
					/>
				`}
			>
				<CSAlert
					variant="info"
					closeButton
					onClose={() => alert('The alert close button has been clicked.')}
					text="This is an alert with a close button."
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Icons</CSD.Heading>
			<CSD.Text>
				By default, different alert variant display corresponding contextual icons.
				Sometimes it might be useful not to display an icon,
				which can be done by setting the `iconHidden` prop to true.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'iconHidden', 'text']}
				code={`
					<CSAlert
						variant="info"
						iconHidden
						text="This is an info alert with no icon."
					/>
					<CSAlert
						variant="info"
						iconHidden
						closeButton
						onClose={() => alert('The alert close button has been clicked.')}
						text="This is an alert with no icon and a close button."
					/>
					<CSAlert
						variant="warning"
						iconHidden
						text="This is a warning alert with no icon."
					/>
					<CSAlert
						variant="error"
						iconHidden
						text="This is an error alert with no icon."
					/>
					<CSAlert
						variant="base"
						iconHidden
						text="This is a base alert with no icon."
					/>
				`}
			>
				<CSAlert
					variant="info"
					iconHidden
					text="This is an info alert with no icon."
				/>
				<CSAlert
					variant="info"
					iconHidden
					closeButton
					onClose={() => alert('The alert close button has been clicked.')}
					text="This is an alert with no icon and a close button."
				/>
				<CSAlert
					variant="warning"
					iconHidden
					text="This is a warning alert with no icon."
				/>
				<CSAlert
					variant="error"
					iconHidden
					text="This is an error alert with no icon."
				/>
				<CSAlert
					variant="base"
					iconHidden
					text="This is a base alert with no icon."
				/>
			</CSD.Preview>
			<CSD.Text>
				If a non-default icon is more appropriate for the context of an alert message,
				the icon can be overridden by combining the `iconOrigin` and `iconName` props.
				The `iconOrigin` prop scopes to either the `'slds'` icon set,
				which is provided by Salesforce, or the `'cs'` icon set,
				which contains custom CloudSense icons.
				Within those icon sets, icons can be chosen by setting the `iconName` prop
				to the corresponding icon's name.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'iconOrigin', 'iconName', 'styleFormat', 'text']}
				code={`
					<CSAlert
						variant="info"
						iconName="settings"
						text="This is an alert with a custom Salesforce icon."
					/>
					<CSAlert
						variant="info"
						iconOrigin="cs"
						iconName="config_type"
						text="This is an alert with a custom CloudSense icon."
					/>
					<CSAlert
						variant="info"
						iconName="settings"
						styleFormat="scoped"
						text="This is a scoped alert with a custom Salesforce icon."
					/>
					<CSAlert
						variant="info"
						iconOrigin="cs" iconName="config_type"
						styleFormat="scoped"
						text="This is a scoped alert with a custom CloudSense icon."
					/>
				`}
			>
				<CSAlert
					variant="info"
					iconName="settings"
					text="This is an alert with a custom Salesforce icon."
				/>
				<CSAlert
					variant="info"
					iconOrigin="cs"
					iconName="config_type"
					text="This is an alert with a custom CloudSense icon."
				/>
				<CSAlert
					variant="info"
					iconName="settings"
					styleFormat="scoped"
					text="This is a scoped alert with a custom Salesforce icon."
				/>
				<CSAlert
					variant="info"
					iconOrigin="cs" iconName="config_type"
					styleFormat="scoped"
					text="This is a scoped alert with a custom CloudSense icon."
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Emphasis</CSD.Heading>
			<CSD.Text>When extra highlight is needed, some of the alert's elements can be emphasised by adjusting the `styleFormat` prop.</CSD.Text>
			<CSD.Text>When set to `'scoped'`, it will increase spacing and icon size.</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'styleFormat', 'text']}
				code={`
					<CSAlert
						variant="info"
						styleFormat="scoped"
						text="This is a scoped alert."
					/>
					<CSAlert
						variant="info"
						styleFormat="scoped"
						text="This is a scoped alert with a close button."
						closeButton
						onClose={() => alert('The alert close button has been clicked.')}
					/>
					<CSAlert
						variant="info"
						styleFormat="scoped"
						iconHidden
						closeButton
						onClose={() => alert('The alert close button has been clicked.')}
						text="This is a scoped alert with no icon and a close button."
					/>
					<CSAlert
						variant="info"
						styleFormat="scoped"
						iconHidden
						text="This is a scoped alert with no icon."
					/>
				`}
			>
				<CSAlert
					variant="info"
					styleFormat="scoped"
					text="This is a scoped alert."
				/>
				<CSAlert
					variant="info"
					styleFormat="scoped"
					text="This is a scoped alert with a close button."
					closeButton
					onClose={() => alert('The alert close button has been clicked.')}
				/>
				<CSAlert
					variant="info"
					styleFormat="scoped"
					iconHidden
					closeButton
					onClose={() => alert('The alert close button has been clicked.')}
					text="This is a scoped alert with no icon and a close button."
				/>
				<CSAlert
					variant="info"
					styleFormat="scoped"
					iconHidden
					text="This is a scoped alert with no icon."
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Styling</CSD.Heading>
			<CSD.Text>All alert variant also support a light version by setting the `styleType` prop to `'light'`.</CSD.Text>
			<CSD.Text>Appropriate inverse colours are set automatically and comply with accessibility standards.</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'styleType', 'text']}
				code={`
					<CSAlert
						variant="info"
						styleType="light"
						text="This is a light info alert."
					/>
					<CSAlert
						variant="info"
						styleType="light"
						closeButton
						onClose={() => alert('The alert close button has been clicked.')}
						text="This is a light info alert with a close button."
					/>
					<CSAlert
						variant="warning"
						styleType="light"
						text="This is a light warning alert."
					/>
					<CSAlert
						variant="error"
						styleType="light"
						text="This is a light error alert."
					/>
					<CSAlert
						variant="base"
						styleType="light"
						text="This is a light base alert."
					/>
				`}
			>
				<CSAlert
					variant="info"
					styleType="light"
					text="This is a light info alert."
				/>
				<CSAlert
					variant="info"
					styleType="light"
					closeButton
					onClose={() => alert('The alert close button has been clicked.')}
					text="This is a light info alert with a close button."
				/>
				<CSAlert
					variant="warning"
					styleType="light"
					text="This is a light warning alert."
				/>
				<CSAlert
					variant="error"
					styleType="light"
					text="This is a light error alert."
				/>
				<CSAlert
					variant="base"
					styleType="light"
					text="This is a light base alert."
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Text</CSD.Heading>
			<CSD.Text>Besides showing single messages, alerts can show multiple messages grouped within the same layout.</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'text']}
				code={`
					<CSAlert variant="info" text="This is an alert with a single text message." />
					<CSAlert
						variant="info"
						text={[
							'This is message #1 inside an alert.',
							'This is message #2 inside an alert.'
						]}
					/>
					<CSAlert
						variant="info"
						closeButton
						onClose={() => alert('The alert close button has been clicked.')}
						text={[
							'This is message #1 inside an alert with a close button.',
							'This is message #2 inside an alert with a close button.'
						]}
					/>
					<CSAlert
						variant="info"
						iconHidden
						closeButton
						onClose={() => alert('The alert close button has been clicked.')}
						text={[
							'This is message #1 inside an alert with no icon and a close button.',
							'This is message #2 inside an alert with no icon and a close button.'
						]}
					/>
					<CSAlert
						variant="info"
						iconHidden
						text={[
							'This is message #1 inside an alert with no icon.',
							'This is message #2 inside an alert with no icon.'
						]}
					/>
				`}
			>
				<CSAlert variant="info" text="This is an alert with a single text message." />
				<CSAlert
					variant="info"
					text={[
						'This is message #1 inside an alert.',
						'This is message #2 inside an alert.'
					]}
				/>
				<CSAlert
					variant="info"
					closeButton
					onClose={() => alert('The alert close button has been clicked.')}
					text={[
						'This is message #1 inside an alert with a close button.',
						'This is message #2 inside an alert with a close button.'
					]}
				/>
				<CSAlert
					variant="info"
					iconHidden
					closeButton
					onClose={() => alert('The alert close button has been clicked.')}
					text={[
						'This is message #1 inside an alert with no icon and a close button.',
						'This is message #2 inside an alert with no icon and a close button.'
					]}
				/>
				<CSAlert
					variant="info"
					iconHidden
					text={[
						'This is message #1 inside an alert with no icon.',
						'This is message #2 inside an alert with no icon.'
					]}
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Alignment</CSD.Heading>
			<CSD.Text>
				By default, all messages are left-aligned, which is considered a better accessibility practice.
				However, the native Salesforce alerts are usually centre-aligned.
				To accommodate for that, the `textAlign` prop can set to `'center'`.
			</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'textAlign', 'text']}
				code={`
					<CSAlert
						variant="info"
						textAlign="center"
						text="This is a centred alert with a single text message."
					/>
					<CSAlert
						variant="info"
						textAlign="center"
						text={[
							'This is message #1 inside a centred alert.',
							'This is message #2 inside a centred alert.'
						]}
					/>
					<CSAlert
						variant="info"
						textAlign="center"
						styleFormat="scoped"
						text="This is a scoped centred alert with a single text message."
					/>
					<CSAlert
						variant="info"
						textAlign="center"
						styleFormat="scoped"
						text={[
							'This is message #1 inside a scoped centred alert.',
							'This is message #2 inside a scoped centred alert.'
						]}
					/>
				`}
			>
				<CSAlert
					variant="info"
					textAlign="center"
					text="This is a centred alert with a single text message."
				/>
				<CSAlert
					variant="info"
					textAlign="center"
					text={[
						'This is message #1 inside a centred alert.',
						'This is message #2 inside a centred alert.'
					]}
				/>
				<CSAlert
					variant="info"
					textAlign="center"
					styleFormat="scoped"
					text="This is a scoped centred alert with a single text message."
				/>
				<CSAlert
					variant="info"
					textAlign="center"
					styleFormat="scoped"
					text={[
						'This is message #1 inside a scoped centred alert.',
						'This is message #2 inside a scoped centred alert.'
					]}
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>IDs & Classes</CSD.Heading>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'id', 'className', 'text']}
				code={`
					<CSAlert
						variant="info"
						className="csd-custom-bg-purple"
						text="This is an alert with a custom CSS class."
					/>
					<CSAlert
						variant="info"
						id="csd-custom-id"
						text="This is an alert with a custom ID."
					/>
				`}
			>
				<CSAlert
					variant="info"
					className="csd-custom-bg-purple"
					text="This is an alert with a custom CSS class."
				/>
				<CSAlert
					variant="info"
					id="csd-custom-id"
					text="This is an alert with a custom ID."
				/>
			</CSD.Preview>
		</CSD.Section>
		<CSD.Section>
			<CSD.Heading level={2}>Children</CSD.Heading>
			<CSD.Text>Alert supports children, which can be custom components or elements. It also offers support for custom links, as well as bold and italicised text.</CSD.Text>
			<CSD.Preview
				orientation="vertical"
				table={CSAlertProps}
				related={['variant', 'children']}
				code={`
					<CSAlert variant="info">
						<span>This is an alert with a <a href="./CSAlert" className="cs-alert-link">link</a>.</span>
					</CSAlert>
					<CSAlert variant="info">
						<span>This is an alert with <b>bold</b> and <i>italic</i> text.</span>
					</CSAlert>
					<CSAlert variant="info">
						<CSButton label="Custom Button" />
					</CSAlert>
				`}
			>
				<CSAlert variant="info">
					<span>This is an alert with a <a href="./CSAlert" className="cs-alert-link">link</a>.</span>
				</CSAlert>
				<CSAlert variant="info">
					<span>This is an alert with <b>bold</b> and <i>italic</i> text.</span>
				</CSAlert>
				<CSAlert variant="info">
					<CSButton label="Custom Button" />
				</CSAlert>
			</CSD.Preview>
		</CSD.Section>
	</CSD.Page>
);

export default CSAlertPreview;
