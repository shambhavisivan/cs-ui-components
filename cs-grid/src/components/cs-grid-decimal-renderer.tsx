import CSGridNumberRenderer, { CSGridNumberRendererProps } from './cs-grid-number-renderer';

export interface CSGridDecimalRendererProps extends CSGridNumberRendererProps {
	noOfDecimalDigits: number;
}

export class CSGridDecimalRenderer extends CSGridNumberRenderer<CSGridDecimalRendererProps> {
	constructor(props: CSGridDecimalRendererProps) {
		super(props);

		const noOfDecimalDigits =
			props.noOfDecimalDigits !== undefined ? props.noOfDecimalDigits : 5;

		this.numberFormat = new Intl.NumberFormat(props.userInfo.userLocale, {
			maximumFractionDigits: noOfDecimalDigits,
			minimumFractionDigits: noOfDecimalDigits
		});
	}
}
