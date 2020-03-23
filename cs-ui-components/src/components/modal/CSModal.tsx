import React from 'react';
import CSIcon from '../CSIcon';
import classNames from 'classnames';

export interface CSModalProps {
	closeButton?: boolean;
	size?: string;
	className?: string;
	onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

class CSModal extends React.Component<CSModalProps> {

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
							onClick={this.props.onClose}
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
