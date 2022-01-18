import React, { useRef } from 'react';
import classNames from 'classnames';
import { CSCustomSelectOptionInterface } from './CSCustomSelect';
import CSIcon from '../CSIcon';
import KeyCode from '../../util/KeyCode';

export interface CSCustomSelectOptionProps {
	closeDropdown: () => void;
	focusInput: () => void;
	multiselect?: boolean;
	onSelectChange: (option: CSCustomSelectOptionInterface) => void;
	option: CSCustomSelectOptionInterface,
	selected: boolean;
}

const CSCustomSelectOption = ({
	closeDropdown,
	focusInput,
	multiselect,
	onSelectChange,
	option,
	selected,
}: CSCustomSelectOptionProps) => {
	const customSelectOptionRef = useRef(null);

	const optionClasses = classNames(
		'cs-custom-select-option',
		{
			'cs-custom-select-option-selected': !multiselect && selected,
		},
	);

	const handleSelectionChange = async () => {
		// await onSelectChange before any other code to allow ag-grid to calculate updated state before closing dropdown
		await onSelectChange?.(option);

		if (!multiselect) {
			focusInput();
			closeDropdown();
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
					else customSelectOptionRef.current?.parentElement?.nextElementSibling?.firstElementChild?.focus();
				} else if (event.key === KeyCode.ArrowUp) {
					const prevSibling = customSelectOptionRef.current?.previousElementSibling;
					if (prevSibling) prevSibling.focus();
				} else if (event.key === KeyCode.Escape) {
					focusInput();
					closeDropdown();
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
