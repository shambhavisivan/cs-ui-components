import * as Form from './CSForm';
import * as fd from './types/FormDescriptor';
import * as so from './types/SelectOption';
import * as status from './types/ComponentStatus';
import * as refOps from './types/ReferenceOption';
import * as icon from './types/FormFieldsIcons';

export const CSForm = Form.CSForm;
export type FormSettings = Form.FormSettings;
export type LocaleSettings = Form.LocaleSettings;
export type ElementWrapper = Form.ElementWrapper;
export type FormLabels = Form.FormLabels;
export type FormProps = Form.FormProps;
export type ComponentStatus = status.ComponentStatus;
export type ComponentStatusConfiguration = status.ComponentStatusConfiguration;
export type FormDescriptor = fd.FormDescriptor;
export type FieldDescriptor = fd.FieldDescriptor;
export type ValidationRule = fd.ValidationRule;
export type FieldType = fd.FieldType;
export type FormPanelDescriptor = fd.FormPanelDescriptor;
export type SelectOption = so.SelectOption;
export type ValidationError = Form.ValidationErrors;
export type ReferenceOption = refOps.ReferenceOption;
export type ReferenceOptionColumn = refOps.ReferenceOptionColumn;
export type FormFieldsIcons = icon.FormFieldsIcons;
