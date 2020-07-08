import React from 'react';
import CSIcon from '../CSIcon';
import classNames from 'classnames';
import CSSpinner from '../CSSpinner';
import CSModalApi from '../../api/CSModalAPI';

export interface CSModalProps {
	className?: string;
	closeButton?: boolean;
	id?: string;
	loading?: boolean;
	loadingText?: string;
	onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	size?: string;
	style?: object;
}

class CSModal extends React.Component<CSModalProps> {

	render() {
		const modalClasses = classNames(
			'cs-modal-wrapper',
			{
				[`${this.props.className}`]: this.props.className
			}
		);
		return (
			<div
				className={modalClasses}
				id={this.props.id}
			>
				<div
					className={
						this.props.closeButton
							? 'cs-modal cs-modal-' + this.props.size
							: 'cs-modal-no-close-btn cs-modal cs-modal-' + this.props.size
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
