import React from 'react';
import Notification from 'rc-notification';
import CSToast, { CSToastProps } from '../components/CSToast';

type CSToastPosition = 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right';

let counter = 0;
const defaultTop = 24;
const defaultBottom = 24;
const defaultDuration = 5;
const defaultPosition: CSToastPosition = 'top-right';
const notificationInstancesMap = new Map<CSToastPosition, typeof Notification>();

const getPosition = (position: CSToastPosition, top: number = defaultTop, bottom: number = defaultBottom) => {
	switch (position) {
	case 'bottom-left':
		return {
			left: 0,
			top: 'auto',
			bottom,
		};
	case 'bottom-right':
		return {
			right: 0,
			top: 'auto',
			bottom,
		};
	case 'top-left':
		return {
			left: 0,
			top,
			bottom: 'auto',
		};
	case 'top-center':
		return {
			left: '50%',
			top,
			bottom: 'auto',
			transform: 'translateX(-50%)',
		};
	default:
		return {
			right: 0,
			top,
			bottom: 'auto',
		};
	}
};

const getNotificationInstance = (position: CSToastPosition) => notificationInstancesMap.get(position);

const setNotificationInstance = (position: CSToastPosition, notificationInstance: typeof Notification) => {
	notificationInstancesMap.set(position, notificationInstance);
};

const hasNotificationInstance = (position: CSToastPosition) => notificationInstancesMap.has(position);

export function renderCSToast(props: CSToastProps, position?: CSToastPosition, duration?: number | null): void {
	const key: string = `toast${counter}`;
	const newDuration = duration || duration === null ? duration : defaultDuration;
	const newPosition = position || defaultPosition;

	const instanceExists = hasNotificationInstance(newPosition);
	let notificationInstance: typeof Notification;

	if (instanceExists) {
		notificationInstance = getNotificationInstance(newPosition);
	} else {
		Notification.newInstance(
			{
				prefixCls: 'cs-toast-root',
				style: getPosition(newPosition),
			},
			(instance: typeof Notification) => { notificationInstance = instance; },
		);
		setNotificationInstance(newPosition, notificationInstance);
	}
	notificationInstance.notice({
		content: (
			<CSToast
				{...props}
				onClose={() => notificationInstance.removeNotice(key)}
				className={`cs-toast-notice-${newPosition}`}
			/>
		),
		duration: newDuration,
		key,
	});

	counter += 1;
}

const CSToastApi = {
	renderCSToast,
};

export default CSToastApi;
