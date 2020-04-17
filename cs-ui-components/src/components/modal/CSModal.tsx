import React from 'react';
import CSIcon from '../CSIcon';
import classNames from 'classnames';
import CSSpinner from '../CSSpinner';

export interface CSModalProps {
	closeButton?: boolean;
	size?: string;
	className?: string;
	onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	style?: object;
	loading?: boolean;
	loadingText?: string;
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
							? 'cs-modal cs-modal-' + this.props.size
							: 'no-close-btn cs-modal cs-modal-' + this.props.size
					}
					style={this.props.style}
					role="dialog"
					aria-modal="true"
					aria-labelledby="">
					{this.props.closeButton &&
						<button
							className="cs-modal-close"
							onClick={this.props.onClose}
							aria-label="close"
						>
							<CSIcon name="close"/>
						</button>
					}
					<div className={this.props.loading ? 'cs-modal-content cs-modal-loading' : 'cs-modal-content'}>
						{this.props.children}
						{this.props.loading && <CSSpinner label={this.props.loadingText}/>}
					</div>
				</div>
			</div>
		);
	}
}

export default CSModal;
