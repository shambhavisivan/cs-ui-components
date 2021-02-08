import { CSGridFlagDefinition } from '../utils/cs-grid-feature-flag-helper';

// example feature flags

export type CSGridFeatureFlag = 'forceLegacyRowData' | 'useExtendedActionFormat';

// this is the list of all flags currently supported
export const CS_GRID_FEATURE_FLAGS: Record<CSGridFeatureFlag, CSGridFlagDefinition> = {
	forceLegacyRowData: {
		name: 'Force legacy row data',
		description:
			'Expect row data to have values encapsulated in the cellValue property regardless of what the autodetection algorithm says.',
		default: false
	},
	useExtendedActionFormat: {
		name: 'Pass action properties to underlying CSButton/CSIcon tags',
		description:
			'Expect the getActions() function to return a structure that contains CSButton/CSIcon properties',
		default: true
	}
};
