import { CSGridFlagDefinition } from '../utils/cs-grid-feature-flag-helper';

// example feature flags

export type CSGridFeatureFlag =
	| 'forceLegacyRowData'
	| 'useExtendedActionFormat'
	| 'usePaginatedLookupSearch'
	| 'useColumnLevelFocus';

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
	},
	usePaginatedLookupSearch: {
		name: 'Use lookup search functions that can handle paged requests',
		description: `Legacy lookup search only supported searching but the new CSLookup component can handle both searching and dynamic (paginated) loading.`,
		default: false
	},
	useColumnLevelFocus: {
		name: 'Passes control to each editor for when the grid stops editing',
		description: `Stops using the grid property "stopEditingWhenGridLosesFocus" and requires each editor to decide when to stop editing.`,
		default: false
	}
};
