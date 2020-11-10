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
	private modalCloseClass = 'cs-modal-close';
	private modalRef: HTMLDivElement;
	private modalCloseBtnRef: HTMLButtonElement;
	private modalOverlay: HTMLDivElement;
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
			if (this.props.loading) {
				event.preventDefault();
			} else {
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
	}

	handleOuterClick(e: any) {
		// ignore clicks on the component itself
		if (this.modalContentNode && this.modalContentNode.contains(e.target)) {
			return;
		}
		this.props.onClose(e);
	}

	getFirstLastModalElement(focusable: any) {
		if (focusable.length > 0) {
			const lastFocusable = focusable[focusable.length - 1];
			this.firstElement = this.props.closeButton ? this.modalCloseBtnRef : focusable[0] as HTMLElement;
			this.lastElement = lastFocusable as HTMLElement;
		} else {
			this.firstElement = this.modalRef;
			this.lastElement = this.modalRef;
		}
	}

	switchFocusOnClose = () => {
		const modalRoot = document.getElementById(this.modalId);
		const modalCloseBtn: HTMLElement = document.querySelector(`.${this.modalCloseClass}`);
		if (modalRoot.contains(modalCloseBtn)) {
			modalCloseBtn.focus();
		}
	}

	componentDidMount() {
		const focusable = this.modalRef.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
		this.getFirstLastModalElement(focusable);
		if (this.props.loading && !this.props.closeButton && focusable.length > 0) {
			this.firstElement = this.modalRef;
		}
		this.firstElement.focus();

		document.addEventListener('keydown', this.handleFocusChange);
		const modalRoot = document.getElementById(this.modalId);

		if (this.props.outerClickClose) {
			if (this.modalOverlay === modalRoot.lastElementChild &&
				modalRoot.childElementCount === 2) {
				modalRoot.firstElementChild.removeEventListener('click', this.handleOuterClick);
			}
			this.modalOverlay.addEventListener('click', this.handleOuterClick);
		}

		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
	}

	componentWillUnmount() {
		const modalRoot = document.getElementById(this.modalId);
		document.removeEventListener('keydown', this.handleFocusChange);
		this.switchFocusOnClose();

		if (modalRoot.childElementCount === 1) {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		} else {
			const focusableModalsLength = modalRoot.getElementsByClassName('cs-modal-overlay').length;
			const focusableModal = modalRoot.getElementsByClassName('cs-modal-overlay')[focusableModalsLength - 2];
			const focusable = focusableModal.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');

			this.firstElement = focusable[1] as HTMLElement;
			this.firstElement.focus();
		}
	}

	render() {
		const modalClasses = classNames('cs-modal-wrapper', {
			[`${this.props.className}`]: this.props.className
		});

		const renderChildren = React.Children.map(this.props.children, (child, index) => {
			if (child) {
				return React.cloneElement(child as React.ReactElement<any>, {
					titleId: this.uniqueAutoId
				});
			}
		});

		return (
			<Portal node={document && document.getElementById(this.modalId)}>
				<div
					className="cs-modal-overlay"
					ref={modalOverlayNode => this.modalOverlay = modalOverlayNode}
				>
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
								{renderChildren}
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
