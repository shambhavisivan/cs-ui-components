import CSGridNumberRenderer, { CSGridNumberRendererProps } from './cs-grid-number-renderer';

export interface CSGridIntegerRendererProps extends CSGridNumberRendererProps {}

export class CSGridIntegerRenderer extends CSGridNumberRenderer<CSGridIntegerRendererProps> {
	constructor(props: CSGridIntegerRendererProps) {
		super(props);
		this.numberFormat = new Intl.NumberFormat(this.props.userInfo.userLocale, {
			maximumFractionDigits: 0,
			minimumFractionDigits: 0
		});
	}
}
