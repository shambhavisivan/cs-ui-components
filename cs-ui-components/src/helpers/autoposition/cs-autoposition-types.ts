export type CSAutopositions =
	'bottom-center' |
	'bottom-left' |
	'bottom-right' |
	'left-bottom' |
	'left-center' |
	'left-top' |
	'right-bottom' |
	'right-center' |
	'right-top' |
	'top-center' |
	'top-left' |
	'top-right';

export type CSAutopositionDirection = 'top' | 'bottom' | 'left' | 'right';

export type CSAutopositionDirectionObj = {
	[direction in CSAutopositionDirection]: number
};

export interface CSAutopositionSchemaItem {
	position: CSAutopositions;
	deviation: Partial<CSAutopositionDirectionObj>;
}

export type CSAutopositionSchema = Array<CSAutopositions | CSAutopositionSchemaItem>;

export interface CSAutopositionProps {
	initialPosition: CSAutopositions;
	positionSchema: CSAutopositionSchema;
	referencePoint: HTMLElement;
	onPositionChange?: (position: string) => any;
	zIndex?: number | string;
}
