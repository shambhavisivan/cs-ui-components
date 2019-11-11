import React from 'react';
import { FormFieldProps } from './FormField';
import { SelectOption } from '../types/SelectOption';
import { SelectField } from './SelectField';

interface State {
	selectOptions: Array<SelectOption>;
}

export class SelectFieldContainer extends React.Component<FormFieldProps, State> {
	async componentDidMount() {
		const records = await this.props.fetchPossibleValues();
		this.setState({ selectOptions: records });
	}

	render() {
		const selectFieldProps = { ...this.props, ...this.state };

		return <SelectField {...selectFieldProps} />;
	}
}
