import React, { useRef } from 'react';
import classNames from 'classnames';
import { CSCustomSelectOptionInterface } from './CSCustomSelect';
import CSIcon from '../CSIcon';
import KeyCode from '../../util/KeyCode';

export interface CSCustomSelectOptionProps {
	closeDropdown?: () => void;
	focusInput?: () => void;
	multiselect?: boolean;
	onSelectChange: (option: CSCustomSelectOptionInterface) => void;
	option: CSCustomSelectOptionInterface,
	removeLastOption?: () => void,
	selected: boolean;
}

const CSCustomSelectOption = ({
	closeDropdown,
	focusInput,
	multiselect,
	onSelectChange,
	option,
	removeLastOption,
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
			focusInput?.();
			closeDropdown?.();
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
		if (event.key === KeyCode.ArrowDown) {
			const nextSibling = customSelectOptionRef.current?.nextElementSibling;
			const firstAction = customSelectOptionRef.current?.parentElement?.nextElementSibling?.firstElementChild;
			const firstSibling = customSelectOptionRef.current?.parentElement?.firstElementChild;
			if (nextSibling) nextSibling.focus();
			else if (firstAction) firstAction.focus();
			else firstSibling?.focus();
		} else if (event.key === KeyCode.ArrowUp) {
			const prevSibling = customSelectOptionRef.current?.previousElementSibling;
			const lastAction = customSelectOptionRef.current?.parentElement?.nextElementSibling?.lastElementChild;
			const lastSibling = customSelectOptionRef.current?.parentElement?.lastElementChild;
			if (prevSibling) prevSibling.focus();
			else if (lastAction) lastAction.focus();
			else lastSibling?.focus();
		} else if (event.key === KeyCode.Escape) {
			focusInput?.();
			closeDropdown?.();
		} else if (event.key === KeyCode.Enter || event.key === KeyCode.Space) {
			handleSelectionChange();
		} else if (event.key === KeyCode.Tab) {
			focusInput?.();
			closeDropdown?.();
		} else if (event.key === KeyCode.Backspace) {
			focusInput?.();
			removeLastOption?.();
		} else {
			focusInput?.();
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
			onKeyDown={handleKeyDown}
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
