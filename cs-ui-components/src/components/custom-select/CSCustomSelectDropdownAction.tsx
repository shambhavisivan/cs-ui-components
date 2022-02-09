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
			const firstOption = customSelectActionRef.current?.parentElement?.previousElementSibling?.firstElementChild;
			if (nextSibling) nextSibling.focus();
			else firstOption.focus();
		} else if (event.key === KeyCode.ArrowUp) {
			const prevSibling = customSelectActionRef.current?.previousElementSibling;
			const lastOption = customSelectActionRef.current?.parentElement?.previousElementSibling?.lastElementChild;
			if (prevSibling) prevSibling.focus();
			else lastOption.focus();
		} else if (event.key === KeyCode.Escape || event.key === KeyCode.Tab) {
			focusInput?.();
			closeDropdown?.();
		} else if (event.key === KeyCode.Backspace) {
			focusInput?.();
			removeLastOption?.();
		} else if (event.key !== KeyCode.Enter && event.key !== KeyCode.Space) {
			focusInput?.();
		}
		onKeyDown?.(event);
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
