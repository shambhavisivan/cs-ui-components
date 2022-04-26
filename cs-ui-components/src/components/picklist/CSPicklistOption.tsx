import React, { useRef } from 'react';
import classNames from 'classnames';
import { CSPicklistOptionInterface } from './CSPicklist';
import CSIcon from '../CSIcon';
import KeyCode from '../../util/KeyCode';

export interface CSPicklistOptionProps {
	closeDropdown?: () => void;
	focusInput?: () => void;
	multiselect?: boolean;
	onSelectChange: (option: CSPicklistOptionInterface) => void;
	option: CSPicklistOptionInterface,
	selected: boolean;
}

const CSPicklistOption = ({
	closeDropdown,
	focusInput,
	multiselect,
	onSelectChange,
	option,
	selected,
}: CSPicklistOptionProps) => {
	const picklistOptionRef = useRef(null);

	const picklistOptionClasses = classNames(
		'cs-picklist-option',
		{
			'cs-picklist-option-selected': !multiselect && selected,
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
			const nextSibling = picklistOptionRef.current?.nextElementSibling;
			const firstAction = picklistOptionRef.current?.parentElement?.nextElementSibling?.firstElementChild;
			const firstSibling = picklistOptionRef.current?.parentElement?.firstElementChild;
			if (nextSibling) nextSibling.focus();
			else if (firstAction) firstAction.focus();
			else firstSibling?.focus();
		} else if (event.key === KeyCode.ArrowUp) {
			const prevSibling = picklistOptionRef.current?.previousElementSibling;
			const lastAction = picklistOptionRef.current?.parentElement?.nextElementSibling?.lastElementChild;
			const lastSibling = picklistOptionRef.current?.parentElement?.lastElementChild;
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
		} else {
			focusInput?.();
		}
	};

	return (
		<li
			tabIndex={0}
			ref={picklistOptionRef}
			role="option"
			aria-selected={selected}
			className={picklistOptionClasses}
			onClick={handleSelectionChange}
			onKeyDown={handleKeyDown}
		>
			{multiselect && (
				<span className="cs-picklist-option-check-icon">
					{selected && (
						<CSIcon name="check" color="var(--cs-option-list-item-fill)" />
					)}
				</span>
			)}
			<span className="cs-picklist-option-value">
				{option.label}
			</span>
		</li>
	);
};

export default CSPicklistOption;
