import { GridApi } from 'ag-grid-community';
import { CSGridAction, Icon, isStandardIcon, StandardIcon } from '../interfaces/cs-grid-cell-props';

export const getNewIcons = (icons: Array<Icon> = [], id: string) => {
	return icons.filter(isStandardIcon).map((icon: StandardIcon) => ({
		color: icon.color,
		name: icon.iconName,
		origin: icon.iconOrigin,
		size: icon.iconSize || '0.875rem',
		tooltip: icon.getTooltip?.(id)
	}));
};

export const getNewActions = <T>(
	actions: Array<CSGridAction<T>> = [],
	id: string,
	api: GridApi,
	cellValue: T
) => {
	return actions
		.filter((action: CSGridAction<T>) => isStandardIcon(action.icon))
		.map((action: CSGridAction<T>) => {
			const icon = action.icon as StandardIcon;
			const handleClick = () => {
				api.stopEditing();

				return action.action(id, cellValue);
			};

			return {
				iconColor: icon.color,
				iconName: icon.iconName,
				iconOrigin: icon.iconOrigin,
				iconSize: icon.iconSize || '0.875rem',
				label: action.name,
				labelHidden: action.labelHidden,
				onClick: handleClick,
				size: action.size,
				style: action.btnStyle,
				tooltip: action.getTooltip?.(id),
				type: action.btnType
			};
		});
};

export const getStatus = (content: string) =>
	content && {
		color: 'var(--cs-tooltip-error-bg)',
		name: 'warning',
		size: '0.875rem',
		tooltip: {
			content,
			variant: 'error'
		}
	};
