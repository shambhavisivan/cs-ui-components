import React, { useRef } from 'react';
import classNames from 'classnames';
import CSButton, { CSButtonProps } from '../CSButton';
import KeyCode from '../../util/KeyCode';

export interface CSPicklistDropdownActionProps {
	action: CSButtonProps;
	closeDropdown?: () => void;
	focusInput?: () => void;
}

const CSPicklistDropdownAction = ({
	action,
	closeDropdown,
	focusInput,
}: CSPicklistDropdownActionProps) => {
	const picklistActionRef = useRef(null);

	const {
		className,
		onKeyDown,
		forwardRef,
		...rest
	} = action;

	const picklistActionClasses = classNames(
		'cs-picklist-dropdown-action',
		{
			[className]: className,
		},
	);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (event.key === KeyCode.ArrowDown) {
			const nextSibling = picklistActionRef.current?.nextElementSibling;
			const firstOption = picklistActionRef.current?.parentElement?.previousElementSibling?.firstElementChild;
			if (nextSibling) nextSibling.focus();
			else firstOption.focus();
		} else if (event.key === KeyCode.ArrowUp) {
			const prevSibling = picklistActionRef.current?.previousElementSibling;
			const lastOption = picklistActionRef.current?.parentElement?.previousElementSibling?.lastElementChild;
			if (prevSibling) prevSibling.focus();
			else lastOption.focus();
		} else if (event.key === KeyCode.Escape || event.key === KeyCode.Tab) {
			focusInput?.();
			closeDropdown?.();
		} else if (event.key !== KeyCode.Enter && event.key !== KeyCode.Space) {
			focusInput?.();
		}
		onKeyDown?.(event);
	};

	return (
		<CSButton
			className={picklistActionClasses}
			{...rest}
			ref={picklistActionRef}
			onKeyDown={handleKeyDown}
		/>
	);
};

export default CSPicklistDropdownAction;
