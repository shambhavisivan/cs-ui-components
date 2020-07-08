import CSToast, { CSToastProps } from '../components/CSToast';
import React, { CSSProperties } from 'react';
import Notification from 'rc-notification';
import { NotificationInstance } from '../../node_modules/rc-notification/lib/Notification';

type CSToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

let counter = 0;
const defaultTop = 24;
const defaultBottom = 24;
const defaultDuration = 5;
const defaultPosition: CSToastPosition = 'top-right';
const notificationInstancesMap = new Map<CSToastPosition, NotificationInstance>();

const getPosition = (position: CSToastPosition, top: number = defaultTop, bottom: number = defaultBottom) => {
	let style: CSSProperties;
	switch (position) {
		case 'bottom-left':
			style = {
				left: 0,
				top: 'auto',
				bottom
			};
			break;
		case 'bottom-right':
			style = {
				right: 0,
				top: 'auto',
				bottom
			};
			break;
		case 'top-left':
			style = {
				left: 0,
				top,
				bottom: 'auto'

			};
			break;
		default:
			style = {
				right: 0,
				top,
				bottom: 'auto'
			};
			break;
	}
	return style;
};

const getNotifInstance = (position: CSToastPosition) => {
	return notificationInstancesMap.get(position);
};

const setNotifInstance = (position: CSToastPosition, notifInstace: NotificationInstance) => {
	notificationInstancesMap.set(position, notifInstace);
};

const hasNotifInstance = (position: CSToastPosition) => {
	return notificationInstancesMap.has(position);
};

export function renderCSToast(props: CSToastProps, position?: CSToastPosition, duration?: number | null): void {
	const key: string = 'toast' + counter;
	const newDuration = duration || duration === null ? duration : defaultDuration;
	const newPosition = position ? position : defaultPosition;

	const instanceExists = hasNotifInstance(newPosition);
	let notifInstance: NotificationInstance;

	if (instanceExists) {
		notifInstance = getNotifInstance(newPosition);
	} else {
		Notification.newInstance(
			{
				prefixCls: 'cs-toast-notification',
				style: getPosition(newPosition)
			},
			(instance: NotificationInstance) => (notifInstance = instance)
		);
		setNotifInstance(newPosition, notifInstance);
	}
	notifInstance.notice ({
		content: <CSToast
					{...props}
					onClose={() => notifInstance.removeNotice(key)}
					className={`cs-toast-notice-${newPosition}`}
				/>,
		duration: newDuration,
		key
	});
	counter++;
}

const CSToastApi = {
	renderCSToast
};

export default CSToastApi;
