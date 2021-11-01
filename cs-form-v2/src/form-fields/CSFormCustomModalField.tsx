import React, { useEffect, useState } from 'react';
import { CSButton, CSModal, CSModalHeader, CSModalBody, CSModalFooter } from '@cloudsense/cs-ui-components';
import { CSFormCustomModalFieldProps } from '../types/cs-form-field-types';
import { useCSForm } from '../CSFormContext';

const CSFormCustomModalField = ({
	modalButton,
	modal,
}: CSFormCustomModalFieldProps) => {
	const { data } = useCSForm();
	const { header, body, footer, onClose, ...modalRest } = modal;
	const { onClick, ...modalButtonRest } = modalButton;
	const { headerContent, headerFactory, ...modalHeaderRest } = header;
	const { bodyContent, bodyFactory, ...modalBodyRest } = body;

	const isFooterDefined = footer && !!Object.keys(footer).length;

	const [modalVisible, setModalVisible] = useState(false);
	const [headerStateContent, setHeaderContent] = useState(headerContent);
	const [bodyStateContent, setBodyContent] = useState(bodyContent);
	const [footerStateContent, setFooterContent] = useState(isFooterDefined ? footer.footerContent : null);
	const [loading, setLoading] = useState(false);

	const closeModal = () => setModalVisible(false);

	const handleModalButtonClick = () => {
		onClick?.();
		setModalVisible(true);
	};

	const handleOnClose = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		onClose?.(event);
		closeModal();
	};

	useEffect(() => setHeaderContent(headerContent), [headerContent]);
	useEffect(() => setBodyContent(bodyContent), [bodyContent]);
	useEffect(() => {
		if (isFooterDefined) { setFooterContent(footer.footerContent); }
	}, [isFooterDefined && footer.footerContent]);

	useEffect(() => {
		if (headerFactory && modalVisible) {
			setLoading(true);
			Promise.resolve(headerFactory(data))
				.then((result) => { setHeaderContent(result); })
				.catch((err) => { console.log(err); })
				.finally(() => { setLoading(false); });
		}
	}, [headerFactory, modalVisible]);

	useEffect(() => {
		if (bodyFactory && modalVisible) {
			setLoading(true);
			Promise.resolve(bodyFactory(data, closeModal))
				.then((result) => { setBodyContent(result); })
				.catch((err) => { console.log(err); })
				.finally(() => { setLoading(false); });
		}
	}, [bodyFactory, modalVisible]);

	useEffect(() => {
		if (isFooterDefined && footer.footerFactory && modalVisible) {
			setLoading(true);
			Promise.resolve(footer.footerFactory(data, closeModal))
				.then((result) => { setFooterContent(result); })
				.catch((err) => { console.log(err); })
				.finally(() => { setLoading(false); });
		}
	}, [isFooterDefined && footer.footerFactory, modalVisible]);

	const renderFooter = () => {
		if (isFooterDefined) {
			const { footerContent, footerFactory, ...modalFooterRest } = footer;
			return (
				<CSModalFooter {...modalFooterRest}>
					{footerStateContent}
				</CSModalFooter>
			);
		}
		return null;
	};

	return (
		<>
			<CSButton onClick={handleModalButtonClick} {...modalButtonRest} />
			<CSModal visible={modalVisible} onClose={handleOnClose} loading={loading} {...modalRest}>
				<CSModalHeader {...modalHeaderRest}>
					{headerStateContent}
				</CSModalHeader>
				<CSModalBody {...modalBodyRest}>
					{bodyStateContent}
				</CSModalBody>
				{renderFooter()}
			</CSModal>
		</>
	);
};

export default CSFormCustomModalField;
