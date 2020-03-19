import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

import {CSDatepicker} from '@cloudsense/cs-ui-components';

class CSDatepickerPreview extends React.Component {

	render() {
		// const component = CSDatepicker.getDoc();

		return (
			<>
				To do...
				{/*<div className="preview-heading">*/}
					{/*<h1>{component.name}</h1>*/}
					{/*{component.usage ? <h2>{component.usage}</h2> : null}*/}
				{/*</div>*/}

				{/*{component.examples.map((example: any) => (*/}
					{/*<div className={`property-section ${example.propName}`} key={example.propName}>*/}
						{/*<h2 className="property-name">{example.propName}</h2>*/}
						{/*<div key={example.customText}>*/}
							{/*<p className="info-text">{example.customText}</p>*/}
							{/*{example.variations.map((variation: any) => (*/}
								{/*<React.Fragment key={variation.variationName}>*/}
									{/*{variation.variationName.map((chip: any) => (*/}
										{/*<div key={chip} className="chip-label">{chip}</div>*/}
									{/*))}*/}
									{/*<div className="component-version">*/}
										{/*<div className="version-preview">*/}
											{/*{variation.component}*/}
										{/*</div>*/}
										{/*<div className="version-description">*/}
											{/*<SyntaxHighlighter className="code-snippet"*/}
												{/*language="jsx">{variation.string}</SyntaxHighlighter>*/}
										{/*</div>*/}
									{/*</div>*/}
								{/*</React.Fragment>*/}
							{/*))}*/}
						{/*</div>*/}
					{/*</div>*/}
				{/*))}*/}

				{/*<div className="table-wrapper">*/}
					{/*<h2 className="property-name">Properties list</h2>*/}
					{/*<h3 className="component-name">Datepicker</h3>*/}
					{/*<div className="properties-table">*/}
						{/*<div className="table-header">*/}
							{/*<div className="table-row">*/}
								{/*<div className="table-cell">Property name</div>*/}
								{/*<div className="table-cell">Description</div>*/}
								{/*<div className="table-cell">Options</div>*/}
							{/*</div>*/}
						{/*</div>*/}
						{/*<div className="table-body">*/}
							{/*{Object.keys(component.properties).map((prop, i) => (*/}
								{/*<div className="table-row" key={i}>*/}
									{/*<div className="table-cell">{prop}</div>*/}
									{/*<div className="table-cell">{component.properties[prop].description}</div>*/}
									{/*<div className="table-cell">*/}
										{/*{component.properties[prop].options && component.properties[prop].options.map((option: any) => (*/}
											{/*<span className="prop-option" key={option}>{option}</span>*/}
										{/*))}*/}
									{/*</div>*/}
								{/*</div>*/}
							{/*))}*/}
						{/*</div>*/}
					{/*</div>*/}
				{/*</div>*/}
			</>
		);
	}
}

export default CSDatepickerPreview;
