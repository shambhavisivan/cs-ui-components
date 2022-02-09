import React, { useRef } from 'react';
import classNames from 'classnames';
import CSButton, { CSButtonProps } from '../CSButton';
import KeyCode from '../../util/KeyCode';

export interface CSCustomSelectOptionProps {
	action: CSButtonProps;
	closeDropdown?: () => void;
	focusInput?: () => void;
	removeLastOption?: () => void,
}

const CSCustomSelectDropdownAction = ({
	action,
	closeDropdown,
	focusInput,
	removeLastOption,
}: CSCustomSelectOptionProps) => {
	const customSelectActionRef = useRef(null);

	const {
		className,
		onKeyDown,
		forwardRef,
		...rest
	} = action;

	const actionClasses = classNames(
		'cs-custom-select-dropdown-action',
		{
			[className]: className,
		},
	);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		if (event.key === KeyCode.ArrowDown) {
			const nextSibling = customSelectActionRef.current?.nextElementSibling;
			if (nextSibling) nextSibling.focus();
		} else if (event.key === KeyCode.ArrowUp) {
			const prevSibling = customSelectActionRef.current?.previousElementSibling;
			if (prevSibling) prevSibling.focus();
			else customSelectActionRef.current?.parentElement?.previousElementSibling?.lastElementChild?.focus();
		} else if (event.key === KeyCode.Escape || event.key === KeyCode.Tab) {
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
		<CSButton
			className={actionClasses}
			{...rest}
			ref={customSelectActionRef}
			onKeyDown={handleKeyDown}
		/>
	);
};

export default CSCustomSelectDropdownAction;
