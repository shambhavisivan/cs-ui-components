import React from 'react';
import { FormFieldProps } from './FormField';
import { SelectOption } from '../types/SelectOption';
import { FieldType } from '../types/FormDescriptor';

interface State {
	options: Array<SelectOption>;
}

export class SelectField extends React.Component<FormFieldProps, State> {

	async componentDidMount() {
		const records = await this.props.fetchPossibleValues();
		this.setState({ options: [{ label: '--- None ---', value: '' }, ...records] });
	}

	render() {
		return <select
			{...this.props.wrapper.injectInputProps(this.props.descriptor.name, this.props.descriptor.fieldType as FieldType, this.props.status)}
			value={this.props.value || ''}
			name={this.props.descriptor.name}
			onChange={e => this.props.handleFieldChange(e.target.value)}
			required={this.props.status === 'mandatory'}
			disabled={this.props.status === 'visible'}>
			{this.state && this.state.options.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
		</select>;
	}
}
