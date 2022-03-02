import { FormSettings } from '..';
import { ComponentStatus, ComponentStatusConfiguration } from '../types/ComponentStatus';
import { evaluateCustomExpression } from './ExpressionEvaluator';

/**
 * Calculate component status from the status config and the current values of form object/settings.
 *
 * The calculation falls through: if `config.mandatory` evaluates to false, `config.enabled` will be
 * evaluated to see if the field is enabled, and if it isn't, `config.visible` will be checked to see
 * if we need to display the field at all. If this falls through, the status will be `'hidden'`.
 * @param config
 * @param formSettings
 * @param data
 */
export function calculateComponentStatus(
	config: ComponentStatusConfiguration,
	formSettings: FormSettings,
	data: Record<string, any>
): ComponentStatus {
	if (checkComponentStatus(formSettings, data, config.mandatory)) {
		return 'mandatory';
	}
	if (checkComponentStatus(formSettings, data, config.enabled)) {
		return 'enabled';
	}
	if (checkComponentStatus(formSettings, data, config.visible)) {
		return 'visible';
	}
	return 'hidden';
}

export function isMandatoryFieldPresent(status: ComponentStatus, value: any) {
	return status !== 'mandatory' || !!(value === 0 || (value && value !== ''));
}

export function checkComponentStatus(
	formSettings: FormSettings,
	data: Record<string, any>,
	expression: any) {
	if (!expression || String(expression).toLowerCase() === 'false') {
		return false;
	} else if (String(expression).toLowerCase() === 'true') {
		return true;
	} else {
		return evaluateCustomExpression(formSettings, data, expression);
	}
}
