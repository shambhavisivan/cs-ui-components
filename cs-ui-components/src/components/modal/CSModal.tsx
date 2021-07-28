import React from 'react';
import classNames from 'classnames';
import { Portal } from 'react-portal';
import { v4 as uuidv4 } from 'uuid';
import CSSpinner from '../CSSpinner';
import CSIcon from '../CSIcon';
import { CSModalHeader } from '../../index';
import withCSUnmountDelay from '../../helpers/CSUnmountDelay';
import KeyCode from '../../util/KeyCode';

export type CSModalSize = 'auto' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

export interface CSModalProps {
	[key: string]: any;
	animated: boolean;
	className?: string;
	closeButton?: boolean;
	id?: string;
	loading?: boolean;
	loadingText?: string;
	mounted: boolean;
	onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	outerClickClose?: boolean;
	setMounted: () => void;
	size?: CSModalSize;
	style?: object;
	visible: boolean;
}

class CSModal extends React.Component<CSModalProps> {
	public static defaultProps = {
		size: 'auto',
	};

	private modalId = 'cs-modal-root';

	private modalRef: HTMLDivElement;

	private modalCloseBtnRef: HTMLButtonElement;

	private modalOverlay: HTMLDivElement;

	private firstElement: HTMLElement;

	private lastElement: HTMLElement;

	private modalContentNode: HTMLDivElement;

	private previouslyFocusedElement: HTMLElement;

	private uniqueAutoId = uuidv4();

	constructor(props: CSModalProps) {
		super(props);

		this.handleOuterClick = this.handleOuterClick.bind(this);
		this.handleEsc = this.handleEsc.bind(this);

		let modalRoot = document.getElementById(this.modalId);
		if (!modalRoot) {
			modalRoot = document.createElement('div');
			modalRoot.className = this.modalId;
			modalRoot.id = this.modalId;
			document.body.appendChild(modalRoot);
		}
	}

	componentDidMount() {
		this.previouslyFocusedElement = document.activeElement as HTMLElement;
		const focusable = this.getFocusableElements();
		this.getFirstLastModalElement();
		if (this.props.loading && !this.props.closeButton && focusable.length > 0) {
			this.firstElement = this.modalRef;
		}
		this.firstElement.focus();

		document.addEventListener('keydown', this.handleFocusChange);
		const modalRoot = document.getElementById(this.modalId);

		document.addEventListener('keydown', this.handleEsc, false);

		if (this.props.outerClickClose) {
			if (this.modalOverlay === modalRoot.lastElementChild
				&& modalRoot.childElementCount === 2) {
				modalRoot.firstElementChild.removeEventListener('click', this.handleOuterClick);
			}
			this.modalOverlay.addEventListener('click', this.handleOuterClick);
		}

		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
		this.props.setMounted();
	}

	componentWillUnmount() {
		const modalRoot = document.getElementById(this.modalId);
		document.removeEventListener('keydown', this.handleFocusChange);
		document.removeEventListener('keydown', this.handleEsc, false);

		if (modalRoot.childElementCount === 1) {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		}

		this.previouslyFocusedElement.focus();
	}

	handleEsc(e: any) {
		const parent = e.target.closest('.cs-modal-overlay');
		if (this.props.onClose && (parent === this.modalOverlay)) {
			if (e.key === KeyCode.Escape) {
				this.props.onClose(e);
			}
		}
	}

	handleFocusChange = (event: any) => {
		if (event.key === KeyCode.Tab) {
			this.getFirstLastModalElement();
			const { activeElement } = document;
			if (this.props.loading) {
				event.preventDefault();
			} else if (event.shiftKey) {
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

	handleOuterClick(event: any) {
		// ignore clicks on the component itself
		if (this.modalContentNode && this.modalContentNode.contains(event.target)) {
			return;
		}
		if (this.props.onClose) {
			this.props.onClose(event);
		}
	}

	getFocusableElements() {
		return this.modalRef.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
	}

	getFirstLastModalElement() {
		const focusable = this.getFocusableElements();
		if (focusable.length > 0) {
			const lastFocusable = (focusable[focusable.length - 1] as HTMLElement).hasAttribute('disabled')
				? focusable[focusable.length - 2]
				: focusable[focusable.length - 1];
			this.firstElement = this.props.closeButton ? this.modalCloseBtnRef : focusable[0] as HTMLElement;
			this.lastElement = lastFocusable as HTMLElement;
		} else {
			this.firstElement = this.modalRef;
			this.lastElement = this.modalRef;
		}
	}

	render() {
		const {
			animated,
			children,
			className,
			closeButton,
			id,
			loading,
			loadingText,
			mounted,
			onClose,
			outerClickClose,
			setMounted,
			size,
			style,
			visible,
			...rest
		} = this.props;

		const modalWrapperClasses = classNames(
			'cs-modal-wrapper',
		);

		const modalOverlayClasses = classNames(
			'cs-modal-overlay',
			{
				'cs-modal-overlay-hidden': !(visible && mounted) && animated,
				[`${className}`]: className,
			},
		);

		const modalClasses = classNames(
			'cs-modal',
			`cs-modal-${size}`,
			{
				'cs-modal-no-close-btn': closeButton,
				'cs-modal-hidden': !(visible && mounted) && animated,
			},
		);

		const renderChildren = React.Children.map(children, (child: any, index) => {
			if (child) {
				if (child.type === CSModalHeader) {
					return React.cloneElement(child as React.ReactElement<any>, {
						titleId: this.uniqueAutoId,
					});
				}
				return child;
			}
		});

		return (
			<Portal node={document && document.getElementById(this.modalId)}>
				<div
					className={modalOverlayClasses}
					ref={(modalOverlayNode) => { this.modalOverlay = modalOverlayNode; }}
					id={id}
					{...rest}
				>
					<div className={modalWrapperClasses}>
						<div
							ref={(modal) => { this.modalRef = modal; }}
							// This div needs tabIndex={0} to trap the focus inside the basic modal with no interactive elements,
							// rather than the focus staying on elements behind the modal. Example is progress bar modal in PPR.
							// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
							tabIndex={0}
							className={modalClasses}
							style={style}
							role="dialog"
							aria-modal="true"
							aria-describedby={this.uniqueAutoId}
						>
							{closeButton && (
								<button
									className="cs-modal-close"
									onClick={onClose}
									aria-label="close"
									ref={(closeBtn) => { this.modalCloseBtnRef = closeBtn; }}
								>
									<CSIcon name="close" size="1.5rem" />
								</button>
							)}
							<div
								ref={(node) => { this.modalContentNode = node; }}
								className={
									loading
										? 'cs-modal-content cs-modal-loading'
										: 'cs-modal-content'
								}
							>
								{renderChildren}
								{loading && <CSSpinner label={loadingText} />}
							</div>
						</div>
					</div>
				</div>
			</Portal>
		);
	}
}

export default withCSUnmountDelay(CSModal);
