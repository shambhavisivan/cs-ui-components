// tslint:disable:no-console
import React, { useState } from 'react';
import * as CSD from '../../../../demo-components';
import CSFormValidationPreviewData from './cs-form-validation-preview-data';
import { CSForm, CSFormChangedFieldData, defineFormData } from '@cloudsense/cs-form-v2';

const CSFormValidationPreview = () => {
	const [data, setData] = useState(CSFormValidationPreviewData);
	const [errors, setErrors] = useState([]);

	const handleFieldChange = (field: CSFormChangedFieldData) => {
		let newErrors: Array<any> = [...errors];

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
		setErrors(newErrors as any);
		const newData = defineFormData(data, newField, newErrors);
		setData(newData);
		console.log(JSON.stringify(field));
	};
	return (
		<CSD.Page title="Validation" routePrefix="cs-form">
			<CSD.Heading>About</CSD.Heading>
			<CSD.Section>
				<CSD.Text>CSForm supports out-of-the-box validation of form fields.</CSD.Text>
				<CSD.Text>Each form field is validated after a `change` or `blur` event is triggered.</CSD.Text>
				<CSD.Text>
					Currently, CSForm supports validation for the requiredness of all form fields regardless of the type
					and the validation form's `min` and `max` number field attributes.
				</CSD.Text>
				<CSD.Text>
					If one of the mentioned validations fail, the object that contains the field information with the out-of-the-box error message will be
					returned through the `onFieldChange` or `onFieldBlur` handlers.
				</CSD.Text>
				<CSD.Text>
					The below preview displays the validation of the field when a `change` event occurs.
					Check the console to see the object which is a result of the field validation.
				</CSD.Text>
				<CSD.Preview
					code={`
						<CSForm
							data={[{
								sectionKey: 'section-1',
								label: 'Section',
								collapsible: true,
								fields: [{
									fieldType: 'TEXTAREA',
									name: 'textarea-1',
									label: 'Textarea field',
									required: true,
									value: 'Example text.',
								}, {
									fieldType: 'NUMBER',
									name: 'number-1',
									label: 'Number field',
									min: 1,
									max: 5,
									value: 1,
								}]
							}]}
							onFieldChange={handleFieldChange}
						/>
					`}
				>
					<CSForm
						data={data}
						onFieldChange={handleFieldChange}
					/>
				</CSD.Preview>
				<CSD.Text>Out-of-the-box validation messages can be overriden by defining CSForm's `errorLabels` prop.</CSD.Text>
				<CSD.Text>The out-of-the-box message for each validation type is listed below: </CSD.Text>
				<CSD.List>
					<CSD.ListItem>field requiredness - '--field-name-- is required'</CSD.ListItem>
					<CSD.ListItem>number field max attribute - '--field-name-- value is higher than defined max value.'</CSD.ListItem>
					<CSD.ListItem>number field max attribute - '--field-name-- value is lower than defined min value.'</CSD.ListItem>
				</CSD.List>
				<CSD.Text>
					Additionally, CSForm provides a `validateForm()` util method which can be used for validation of the entire form.
					More about the method can be found <CSD.Link path="./utils#form-validation">here</CSD.Link>.</CSD.Text>
			</CSD.Section>
		</CSD.Page>
	);
};

export default CSFormValidationPreview;
