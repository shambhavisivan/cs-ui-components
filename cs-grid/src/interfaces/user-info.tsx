export interface UserInfo {
	currencyCode: string;
	userLocale: string;
	dateLocale?: DateLocale;
}

export interface DateLocale {
	daysOfWeek: Array<string>;
	monthsOfYear: Array<string>;
	firstDayOfWeek: number;
	daysInFirstWeek: number;
}
