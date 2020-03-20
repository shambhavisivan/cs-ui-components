import React from 'react';
import jsxToString from 'jsx-to-string';
import classNames from 'classnames';
import CSIcon from './CSIcon';

export interface CSInputFileProps {
	error?: boolean;
	errorMessage?: string;
	disabled?: boolean;
	label?: string;
	className?: string;
}

class CSInputFile extends React.Component<CSInputFileProps> {
	static getDoc() {

		const json = {
			name: 'Input File',
			usage: 'Input File component',
			examples: [
				{
					propName: 'label',
					variations: [
						{
							variationName: ['label'],
							string: '',
							component:
								<CSInputFile
									label="Upload directory"
								/>
						}
					]
				},
				{
					propName: 'disabled',
					variations: [
						{
							variationName: ['disabled'],
							string: '',
							component:
								<CSInputFile
									disabled
								/>
						}
					]
				},
				{
					propName: 'error',
					variations: [
						{
							variationName: ['error'],
							string: '',
							component:
								<CSInputFile
									error
								/>
						}
					]
				},
				{
					propName: 'errorMessage',
					variations: [
						{
							variationName: ['errorMessage'],
							string: '',
							component:
								<CSInputFile
									error errorMessage="File type not supported"
								/>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['className'],
							string: '',
							component:
								<CSInputFile
									className="custom-class"
								/>
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'disabled',
					description: 'Logic for disabled state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error',
					description: 'Error state',
					options: [
						'false',
						'true'
					]
				},
				{
					propertyName: 'error message',
					description: 'Error text message',
					options: [
					]
				},
				{
					propertyName: 'label',
					description: 'Manually change the label name of the file text',
					options: [
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}
	render() {
		const fileClasses = classNames(
			'cs-input-file',
			{
				[`${this.props.className}`]: this.props.className,
				'cs-input-file-error': this.props.error
			}
		);
		return (
			<div className={fileClasses}>
				<label className="cs-input-file-label">
					<input
						type="file"
						disabled={this.props.disabled}
					/>
					<span className="cs-input-file-label-body">
						<CSIcon className="cs-input-file-icon" name="upload"/>
						<span>{this.props.label ? this.props.label : 'Upload File'}</span>
					</span>
				</label>
				{(this.props.error && this.props.errorMessage) &&
					<div className="cs-input-file-error-message">{this.props.errorMessage}</div>
				}
			</div>
		);
	}
}

export default CSInputFile;
