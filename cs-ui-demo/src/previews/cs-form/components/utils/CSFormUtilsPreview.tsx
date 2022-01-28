// tslint:disable:no-console
import React, { useState } from 'react';
import * as CSD from '../../../../demo-components';
import { CSForm, defineFormData, CSFormChangedFieldData, validateForm } from '@cloudsense/cs-form-v2';
import CSFormUtilsPreviewData from './cs-form-utils-preview-data';
import { CSButton } from '@cloudsense/cs-ui-components';

interface CSFormUtilsPreviewState {
	[key: string]: any;
}
const defineDataInit = [{ 'text-1': 'Example text' }, { 'number-1': 1 }];
const CSFormUtilsPreview = () => {
	const [data, setData] = useState<CSFormUtilsPreviewState>({
		defineData: defineFormData(CSFormUtilsPreviewData, defineDataInit),
		validateForm: CSFormUtilsPreviewData
	});
	const [errors, setErrors] = useState<CSFormUtilsPreviewState>({
		defineData: [],
		validateForm: []
	});

	const handleFieldChange = (field: CSFormChangedFieldData, stateName: string) => {
		let newErrors: Array<any> = [...errors[stateName]];

		if (stateName === 'defineData') {
			if (field.errorMessage) {
				if (newErrors?.find(err => Object.keys(err)[0] === field.name)) {
					newErrors = newErrors.map(err => Object.keys(err)[0] === field.name ?
						{ [field.name]: field.errorMessage } :
						err
					);
				}
				else { newErrors = [...newErrors, { [field.name]: field.errorMessage }]; }
			} else {
				newErrors = newErrors.filter(err => Object.keys(err)[0] !== field.name);
			}
		}

		const newField = [{ [field.name]: field.value }];
		const newData = defineFormData(data[stateName], newField, newErrors);
		console.log(newData);
		setErrors(prevState => ({ ...prevState, [stateName]: newErrors }));
		setData(prevState => ({ ...prevState, [stateName]: newData }));
	};

	const handleValidation = (stateName: string) => {
		const validationResults = validateForm(data.validateForm);
		console.log(validationResults);
		const newErrors = validationResults.map((result: any) => result.errorMessage && { [result.name]: result.errorMessage });
		setErrors(prevState => ({ ...prevState, [stateName]: newErrors }));
		const newData = defineFormData(data[stateName], [], newErrors);
		setData(prevState => ({ ...prevState, [stateName]: newData }));
	};

	return (
		<CSD.Page title="Utils" routePrefix="cs-form">
			<CSD.Section>
				<CSD.Heading level={2}>Info</CSD.Heading>
				<CSD.Text>CSForm provides utility methods to facilitate the usage of the new form and migration from the old form.</CSD.Text>
				<CSD.Text>Currently, there are 2 utility methods: `defineFormData()` and `validateForm()` available.</CSD.Text>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Defining form data</CSD.Heading>
				<CSD.Text>`defineFormData()` generates the data which is used to render CSForm.</CSD.Text>
				<CSD.Text>In most projects, definition of form structure, field values and errors are kept as a separate entities.</CSD.Text>
				<CSD.Text>`defineFormData()` accepts these entities as arguments and returns JSON structure which can be then passed to CSForm's `data` prop.</CSD.Text>
				<CSD.Text>The first argument is form definition where all form fields with their properties are defined.</CSD.Text>
				<CSD.Text>The second argument represents array of field values in a form of key-value pair where key is the uniqe name of the field and value is acutal field value.</CSD.Text>
				<CSD.Text>The third argument is similar to the second, only the value represents validation error message(s).</CSD.Text>
				<CSD.Text>Check below preview to see one use case of `defineFormData()` and check the console for its return value.</CSD.Text>
				<CSD.Preview
					code={`
						const [data, setData] = useState(data);
						const [errors, setErrors] = useState([]);

						const handleFieldChange = (field: CSFormChangedFieldData) => {
							let newErrors: Array<<Record<string, any>> = [...errors];

							if (field.errorMessage) {
								if (newErrors?.find(err => Object.keys(err)[0] === field.name)) {
									newErrors = newErrors.map(err => Object.keys(err)[0] === field.name ?
										{ [field.name]: field.errorMessage } :
										err
									);
								}
								else { newErrors = [...newErrors, { [field.name]: field.errorMessage }]; }
							} else {
								newErrors = newErrors.filter(err => Object.keys(err)[0] !== field.name);
							}

							const newField = [{ [field.name]: field.value }];
							setErrors(newErrors);
							const newData = defineFormData(data, newField, newErrors);
							console.log(newData);
							setData(newData);
						};

						<CSForm
							data={data}
							onFieldChange={handleFieldChange}
						/>
					`}
				>
					<CSForm
						data={data.defineData}
						onFieldChange={fieldInfo => handleFieldChange(fieldInfo, 'defineData')}
					/>
				</CSD.Preview>
			</CSD.Section>
			<CSD.Section>
				<CSD.Heading level={2}>Form validation</CSD.Heading>
				<CSD.Text>
					`validateForm()` can be used for validation of all fields in a form.
					It triggers out-of-the-box validation as it is described <CSD.Link path="./validation">here</CSD.Link>.
				</CSD.Text>
				<CSD.Text>
					It can be used as part of a `Save` button which would validate the form before executing any additional logic, or it can
					be triggered when the form loads.
				</CSD.Text>
				<CSD.Text>`validateForm()` accepts 2 arguments: form data and custom error labels for each supported field validation.</CSD.Text>
				<CSD.Text>Validation result consists of objects which represent each validated field. Check the console to see validation result after clicking `Validate` button.</CSD.Text>
				<CSD.Preview
					code={`
						<>
							<CSForm
								data={data.validateForm}
								onFieldChange={handleFieldChange}
							/>
							<CSButton
								label="Validate"
								onClick={handleValidation}
							/>
						</>
					`}
				>
					<div className="csd-form-validation-wrapper">
						<CSForm
							data={data.validateForm}
							onFieldChange={fieldInfo => handleFieldChange(fieldInfo, 'validateForm')}
						/>
						<CSButton
							label="Validate"
							onClick={() => handleValidation('validateForm')}
						/>
					</div>
				</CSD.Preview>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSFormUtilsPreview;
