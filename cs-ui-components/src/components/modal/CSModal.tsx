import React from 'react';
import jsxToString from 'jsx-to-string';
import CSModalHeader from './CSModalHeader';
import CSModalBody from './CSModalBody';
import CSModalFooter from './CSModalFooter';
import CSButton from '../CSButton';
import CSIcon from '../CSIcon';
import classNames from 'classnames';

export interface CSModalProps {
	closeButton?: boolean;
	onCloseModal?: undefined;
	size?: string;
	className?: string;
}

class CSModal extends React.Component<CSModalProps> {

	static getDoc() {
		const json = {
			name: 'Modal',
			usage:
				'Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.',
			examples: [
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['size="small"', 'closeButton={true}', 'align="left"'],
							string: '',
							component: (
								<CSModal size="small" closeButton>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="left">
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						},
						{
							variationName: ['size="medium"', 'closeButton={false}', 'align="right"'],
							string: '',
							component: (
								<CSModal size="medium" closeButton={false}>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="right">
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						},
						{
							variationName: ['size="large"', 'closeButton={true}', 'align="center"'],
							string: '',
							component: (
								<CSModal size="large" closeButton>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="center">
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						},
						{
							variationName: ['size="xlarge"', 'closeButton={false}', 'align="right"'],
							string: '',
							component: (
								<CSModal size="xlarge" closeButton={false}>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="right">
										<CSButton label="Default Button"/>
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component: (
								<CSModal size="small" closeButton className="custom-class">
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						}
					]
				}
			],

			/* CSModal Properties Table */
			properties: [
				{
					propertyName: 'size',
					description: 'Modal size',
					options: ['small', 'medium', 'large', 'xlarge']
				},
				{
					propertyName: 'closeButton',
					description: 'Logic for close button visibility',
					options: ['false', 'true']
				},
				{
					propertyName: 'onCloseModal',
					description: 'Close Modal',
					options: []
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

		const modalClasses = classNames(
			'cs-modal-wrapper',
			'cs-modal-wrapper-open',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div className={modalClasses}>
				<div
					className={
						this.props.closeButton
							? 'modal modal-' + this.props.size
							: 'no-close-btn modal modal-' + this.props.size
					}
					role="dialog"
					aria-modal="true"
					aria-labelledby="">
					{this.props.closeButton &&
						<button
							className="modal-close"
							onClick={this.props.onCloseModal}
							aria-label="close"
						>
							<CSIcon name="close"/>
						</button>
					}
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default CSModal;
