import CSToast, { CSToastProps } from '../components/CSToast';
import React, { CSSProperties } from 'react';
import Notification from 'rc-notification';
import { NotificationInstance } from '../../node_modules/rc-notification/lib/Notification';

type CSToastPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

let notification: NotificationInstance = null;
let counter = 0;
let prevPosition: CSToastPosition;
const defaultTop = 24;
const defaultBottom = 24;
const defaultDuration = 5;
const defaultPosition: CSToastPosition = 'top-right';

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

export function renderCSToast(props: CSToastProps, position?: CSToastPosition, duration?: number | null): void {
	const key: string = 'toast' + counter;
	const newDuration = duration || duration === null ? duration : defaultDuration;
	const newPosition = position ? position : defaultPosition;
	if (counter === 0 || prevPosition !== position) {
		Notification.newInstance(
			{
				prefixCls: 'cs-toast-notification',
				style: getPosition(newPosition)
			},
			(instance: NotificationInstance) => (notification = instance)
		);
	}
	notification.notice ({
		content: <CSToast
					{...props}
					onClose={() => notification.removeNotice(key)}
					className={`cs-toast-notice-${newPosition}`}
				/>,
		duration: newDuration,
		key
	});
	counter++;
	prevPosition = newPosition;
}

const CSToastApi = {
	renderCSToast
};

export default CSToastApi;
