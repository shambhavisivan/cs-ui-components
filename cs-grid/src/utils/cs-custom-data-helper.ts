import { GridApi } from 'ag-grid-community';
import { CSTooltipVariant } from '../../../cs-ui-components/dist/cs-ui-components/src';
import { CSGridAction, Icon, isStandardIcon } from '../interfaces/cs-grid-cell-props';

// Map over Icons
export function getNewIcons(icons: Array<Icon> = [], id: string) {
	// Filter out non-standard icons
	return icons.filter(isStandardIcon).map(icon => {
		// If standard icon return array of icons
		if (isStandardIcon(icon)) {
			const tooltip = icon.getTooltip?.(id);

			return {
				iconColor: icon.color,
				iconName: icon.iconName,
				iconOrigin: icon.iconOrigin,
				iconSize: icon.iconSize,
				getTooltip: tooltip
			};
		}
	});
}

// Map over Actions
export function getNewActions<T>(
	actions: Array<CSGridAction<T>> = [],
	id: string,
	api: GridApi,
	cellValue: T
) {
	return actions
		?.filter(action => action.icon && isStandardIcon(action.icon))
		.map(action => {
			if (action.icon) {
				// If standard icon return action
				if (isStandardIcon(action.icon)) {
					const tooltip = action.getTooltip?.(id);

					return {
						action: () => {
							// Prevent lookup opening onclick
							api.stopEditing();

							return action.action(id, cellValue);
						},
						btnType: action.btnType,
						size: action.size,
						btnStyle: action.btnStyle,
						icon: {
							iconColor: action.icon.color,
							iconName: action.icon.iconName,
							iconOrigin: action.icon.iconOrigin,
							iconSize: action.icon.iconSize ? action.icon.iconSize : '0.875rem'
						},
						labelHidden: action.labelHidden,
						name: action.name,
						getTooltip: tooltip
					};
				}
			}
		});
}

// Status
export function getStatus(status: string) {
	if (status) {
		return {
			iconName: 'warning',
			getTooltip: {
				content: status,
				variant: 'error' as CSTooltipVariant
			}
		};
	}
}
