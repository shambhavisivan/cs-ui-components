import React, { useRef } from 'react';
import classNames from 'classnames';
import { CSCustomSelectOptionInterface } from './CSCustomSelect';
import CSIcon from '../CSIcon';
import KeyCode from '../../util/KeyCode';

export interface CSCustomSelectOptionProps {
	multiselect?: boolean;
	selected: boolean;
	option: CSCustomSelectOptionInterface,
	onSelectChange: (option: CSCustomSelectOptionInterface) => void;
	focusInput: () => void;
	setDropdownVisible: (visible: boolean) => void,
}

const CSCustomSelectOption = ({
	multiselect,
	selected,
	option,
	onSelectChange,
	focusInput,
	setDropdownVisible,
}: CSCustomSelectOptionProps) => {
	const customSelectOptionRef = useRef(null);

	const optionClasses = classNames(
		'cs-custom-select-option',
		{
			'cs-custom-select-option-selected': !multiselect && selected,
		},
	);

	const handleSelectionChange = () => {
		onSelectChange?.(option);

		if (!multiselect) {
			focusInput();
			setDropdownVisible(false);
		}
	};

	return (
		<li
			tabIndex={0}
			ref={customSelectOptionRef}
			role="option"
			aria-selected={selected}
			className={optionClasses}
			onClick={handleSelectionChange}
			onKeyDown={(event: React.KeyboardEvent<HTMLLIElement>) => {
				if (event.key === KeyCode.ArrowDown) {
					const nextSibling = customSelectOptionRef.current?.nextElementSibling;
					if (nextSibling) nextSibling.focus();
					else customSelectOptionRef.current?.parentElement?.firstElementChild?.focus();
				} else if (event.key === KeyCode.ArrowUp) {
					const prevSibling = customSelectOptionRef.current?.previousElementSibling;
					if (prevSibling) prevSibling.focus();
					else customSelectOptionRef.current?.parentElement?.lastElementChild?.focus();
				} else if (event.key === KeyCode.Escape) {
					focusInput();
					setDropdownVisible(false);
				} else if (event.key === KeyCode.Enter || event.key === KeyCode.Space) {
					handleSelectionChange();
				} else {
					focusInput?.();
				}
			}}
		>
			{multiselect && (
				<span className="cs-custom-select-option-check-icon">
					{selected && (
						<CSIcon name="check" color="var(--cs-option-list-item-fill)" />
					)}
				</span>
			)}
			<span className="cs-custom-select-option-value">
				{option.label}
			</span>
		</li>
	);
};

export default CSCustomSelectOption;
