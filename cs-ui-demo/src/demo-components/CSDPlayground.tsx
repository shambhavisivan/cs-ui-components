import React from 'react';
import CSDCode from './CSDCode';
import CSDCopyButton from './CSDCopyButton';
import CSDHeading from './CSDHeading';
import CSDSection from './CSDSection';

export interface CSDPlaygroundProps {
	componentName: string;
	component: React.ReactNode;
	children: React.ReactNode;
	defaultProps: Record<string, any>;
	requiredProps: Record<string, any>;
	currentProps: Record<string, any>;
}

const CSDPlayground = ({
	componentName,
	component,
	children,
	defaultProps,
	requiredProps,
	currentProps
}: CSDPlaygroundProps) => {
	const getFormattedCode = () => {
		const code = [];
		const requiredPropsArray = Object.keys(requiredProps);
		const defaultPropsArray = Object.keys(defaultProps);
		const currentPropsArray = Object.keys(currentProps);
		const visiblePropsCount = currentPropsArray.reduce((visiblePropsAccumulator: number, currentProp: string) => {
			if (currentProp === 'children') {
				return visiblePropsAccumulator;
			}

			if (requiredProps[currentProp] || defaultProps[currentProp] !== currentProps[currentProp]) {
				return visiblePropsAccumulator + 1;
			}

			return visiblePropsAccumulator;
		}, 0);

		const divider = visiblePropsCount > 2 ? '\n' : ' ';
		const indent = visiblePropsCount > 2 ? '\t' : '';
		const inlineDivider = visiblePropsCount > 2 ? '\n' : '';

		code.push(`<CS${componentName}`);

		const renderCodeLine = (propName: string, hideIfSame: boolean = false) => {
			if (propName === 'children' || (hideIfSame && currentProps[propName] === defaultProps[propName])) {
				return;
			}

			code.push(divider);
			code.push(indent);

			if (currentProps[propName] === true) {
				code.push(propName);
			} else if (typeof currentProps[propName] === 'string') {
				code.push(`${propName}="${currentProps[propName]}"`);
			} else {
				code.push(`${currentProps}={${currentProps[propName]}}`);
			}
		};

		requiredPropsArray.forEach((propName: string) => renderCodeLine(propName));
		defaultPropsArray.forEach((propName: string) => renderCodeLine(propName, true));

		if (currentProps?.children !== defaultProps?.children || requiredProps?.children) {
			code.push(inlineDivider);
			code.push('>');
			code.push(inlineDivider);
			code.push(indent);
			code.push(currentProps.children);
			code.push(inlineDivider);
			code.push(`</CS${componentName}>`);
		} else {
			code.push(divider);
			code.push('/>');
		}

		return code.join('');
	};

	const formattedCode = getFormattedCode();

	return (
		<div className="csd-playground">
			<div className="csd-playground-examples-wrapper">
				<CSDSection>
					<CSDHeading level={2} disableLinking>Preview</CSDHeading>
					{component}
				</CSDSection>
				<CSDSection>
					<CSDHeading level={2} disableLinking action={<CSDCopyButton code={formattedCode} />}>Code</CSDHeading>
					<CSDCode preventFormatting>{formattedCode}</CSDCode>
				</CSDSection>
			</div>
			<div className="csd-playground-props-wrapper">
				<CSDSection>
					<CSDHeading level={2} disableLinking>Props</CSDHeading>
					<div className="csd-playground-props">
						{children}
					</div>
				</CSDSection>
			</div>
		</div>
	);
};

export default CSDPlayground;
