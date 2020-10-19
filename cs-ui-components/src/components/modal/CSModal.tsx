import React from 'react';
import CSIcon from '../CSIcon';
import classNames from 'classnames';
import CSSpinner from '../CSSpinner';
import { Portal } from 'react-portal';
import { v4 as uuidv4 } from 'uuid';

export type CSModalSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface CSModalProps {
	className?: string;
	closeButton?: boolean;
	id?: string;
	loading?: boolean;
	loadingText?: string;
	onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	outerClickClose?: boolean;
	size?: CSModalSize;
	style?: object;
}

class CSModal extends React.Component<CSModalProps> {
	private modalId = 'cs-modal-root';
	private modalFooterClass = 'cs-modal-footer';
	private modalCloseClass = 'cs-modal-close';
	private modalRef: HTMLDivElement;
	private modalCloseBtnRef: HTMLButtonElement;
	private firstElement: HTMLElement;
	private lastElement: HTMLElement;
	private modalContentNode: HTMLDivElement;
	private tabKey = 'Tab';
	private uniqueAutoId = uuidv4();

	constructor(props: CSModalProps) {
		super(props);

		this.handleOuterClick = this.handleOuterClick.bind(this);

		let modalRoot = document.getElementById(this.modalId);
		if (!modalRoot) {
			modalRoot = document.createElement('div');
			modalRoot.className = this.modalId;
			modalRoot.id = this.modalId;
			document.body.appendChild(modalRoot);
		}
	}

	handleFocusChange = (event: any) => {
		if (event.key === this.tabKey) {
			const { activeElement } = document;
			if (event.shiftKey) {
				if (activeElement === this.firstElement) {
					this.lastElement.focus();
					event.preventDefault();
				}
			} else if (activeElement === this.lastElement) {
				this.firstElement.focus();
				event.preventDefault();
			}
		}
	}

	handleOuterClick(e: any) {
		// ignore clicks on the component itself
		if (this.modalContentNode && this.modalContentNode.contains(e.target)) {
			return;
		}
		this.props.onClose(e);
	}

	getFirstLastModalElement() {
		this.firstElement = this.props.closeButton ? this.modalCloseBtnRef : this.modalRef;
		const allFooters = document.querySelectorAll('.' + this.modalFooterClass);
		this.lastElement = allFooters[allFooters.length - 1].lastElementChild as HTMLElement;
	}

	switchFocusOnClose = () => {
		const modalRoot = document.getElementById(this.modalId);
		const modalCloseBtn: HTMLElement = document.querySelector(`.${this.modalCloseClass}`);
		if (modalRoot.contains(modalCloseBtn)) {
			modalCloseBtn.focus();
		}
	}

	componentDidMount() {
		this.getFirstLastModalElement();
		this.firstElement.focus();
		document.addEventListener('keydown', this.handleFocusChange);

		if (this.props.outerClickClose) {
			document.addEventListener('click', this.handleOuterClick);
		}

		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleOuterClick);
		document.removeEventListener('keydown', this.handleFocusChange);
		this.switchFocusOnClose();

		const modalRoot = document.getElementById(this.modalId);
		if (modalRoot.childElementCount === 1) {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		}
	}

	render() {
		const modalClasses = classNames('cs-modal-wrapper', {
			[`${this.props.className}`]: this.props.className
		});

		const renderChildren = () => {
			return React.Children.map(this.props.children, (child, index) => {
				return React.cloneElement(child as React.ReactElement<any>, {
					titleId: this.uniqueAutoId
				});
			});
		};

		return (
			<Portal node={document && document.getElementById(this.modalId)}>
				<div className="cs-modal-overlay">
					<div className={modalClasses} id={this.props.id}>
						<div
							ref={modal => this.modalRef = modal}
							tabIndex={0}
							className={
								this.props.closeButton
									? 'cs-modal cs-modal-' + this.props.size
									: 'cs-modal-no-close-btn cs-modal cs-modal-' + this.props.size
							}
							style={this.props.style}
							role="dialog"
							aria-modal="true"
							aria-describedby={this.uniqueAutoId}
						>
							{this.props.closeButton && (
								<button
									className="cs-modal-close"
									onClick={this.props.onClose}
									aria-label="close"
									ref={closeBtn => this.modalCloseBtnRef = closeBtn}
								>
									<CSIcon name="close" />
								</button>
							)}
							<div
								ref={node => this.modalContentNode = node}
								className={
									this.props.loading
										? 'cs-modal-content cs-modal-loading'
										: 'cs-modal-content'
								}
							>
								{renderChildren()}
								{this.props.loading && <CSSpinner label={this.props.loadingText} />}
							</div>
						</div>
					</div>
				</div>
			</Portal>
		);
	}
}

export default CSModal;
