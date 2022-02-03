import React, { useRef } from 'react';
import classNames from 'classnames';
import CSButton, { CSButtonProps } from '../CSButton';
import KeyCode from '../../util/KeyCode';

export interface CSCustomSelectOptionProps {
	action: CSButtonProps;
	closeDropdown: () => void;
	focusInput: () => void;
}

const CSCustomSelectDropdownAction = ({
	action,
	closeDropdown,
	focusInput,
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

	return (
		<CSButton
			className={actionClasses}
			{...rest}
			ref={customSelectActionRef}
			onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
				if (event.key === KeyCode.ArrowDown) {
					const nextSibling = customSelectActionRef.current?.nextElementSibling;
					if (nextSibling) nextSibling.focus();
				} else if (event.key === KeyCode.ArrowUp) {
					const prevSibling = customSelectActionRef.current?.previousElementSibling;
					if (prevSibling) prevSibling.focus();
					else customSelectActionRef.current?.parentElement?.previousElementSibling?.lastElementChild?.focus();
				} else if (event.key === KeyCode.Escape || event.key === KeyCode.Tab) {
					focusInput();
					closeDropdown();
				}
			}}
		/>
	);
};

export default CSCustomSelectDropdownAction;
