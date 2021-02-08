export interface CSGridFlagDefinition {
	readonly name: string;
	readonly description: string;
	readonly default: boolean;
}

export class CSGridFeatureFlagHelper<T extends string> {
	readonly flags: Record<T, boolean>;
	constructor(
		private readonly flagDefinitions: Record<T, CSGridFlagDefinition>,
		flags: Partial<Record<T, boolean>> = {}
	) {
		const invalidFlags = Object.keys(flags).filter(
			(flag: T) => flagDefinitions[flag] === undefined
		);
		console.warn(`Feature flags ${invalidFlags} haven't been defined.`);

		this.flags = Object.keys(flagDefinitions)
			.map((f: T) => [f, flags[f] ?? flagDefinitions[f].default])
			.reduce((acc: Record<T, boolean>, curr: [T, boolean]) => {
				acc[curr[0]] = curr[1];

				return acc;
			}, {} as Record<T, boolean>);
	}

	active: () => Record<T, CSGridFlagDefinition> = () => {
		return this.mapFlagDefinitions(flag => this.flags[flag]);
	};

	all: () => Record<T, CSGridFlagDefinition> = () => {
		return this.mapFlagDefinitions(() => true);
	};

	private mapFlagDefinitions: (
		flagFilter: (flag: T) => boolean
	) => Record<string, CSGridFlagDefinition> = flagFilter => {
		return Object.keys(this.flags)
			.filter(flagFilter)
			.reduce((acc: Record<T, CSGridFlagDefinition>, curr: T) => {
				acc[curr] = this.flagDefinitions[curr];

				return acc;
			}, {} as Record<T, CSGridFlagDefinition>);
	};
}
