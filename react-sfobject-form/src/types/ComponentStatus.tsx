export type ComponentStatus = 'mandatory' | 'enabled' | 'visible' | 'hidden';

export interface ComponentStatusConfiguration {
	mandatory?: string;
	enabled?: string;
	visible?: string;
}
