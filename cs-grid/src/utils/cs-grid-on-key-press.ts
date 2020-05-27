import * as KeyCode from 'keycode-js';

export function onKeyPressInAList(
	event: KeyboardEvent,
	refs: Array<HTMLElement>,
	currentFocusedIndex: number,
	loop: boolean,
	horizontal: boolean,
	onEnter: () => void
) {
	let newFocusedIndex: number = currentFocusedIndex;
	const previousButton = horizontal ? KeyCode.KEY_LEFT : KeyCode.KEY_UP;
	const nextButton = horizontal ? KeyCode.KEY_RIGHT : KeyCode.KEY_DOWN;

	if ((event.keyCode === KeyCode.KEY_TAB && event.shiftKey) || event.keyCode === previousButton) {
		event.preventDefault();
		newFocusedIndex = loop
			? (currentFocusedIndex - 1 + refs.length) % refs.length
			: currentFocusedIndex - 1;

		if (refs[newFocusedIndex]) {
			refs[newFocusedIndex].focus();
		}
	} else if (
		(event.keyCode === KeyCode.KEY_TAB && !event.shiftKey) ||
		event.keyCode === nextButton
	) {
		event.preventDefault();
		newFocusedIndex = loop
			? (currentFocusedIndex + 1 + refs.length) % refs.length
			: currentFocusedIndex + 1;
		if (refs[newFocusedIndex]) {
			refs[newFocusedIndex].focus();
		}
	} else if (event.keyCode === KeyCode.KEY_ENTER || event.keyCode === KeyCode.KEY_RETURN) {
		event.preventDefault();
		onEnter();
	}

	return newFocusedIndex;
}
