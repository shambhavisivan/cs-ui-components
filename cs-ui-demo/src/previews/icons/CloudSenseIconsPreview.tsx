import React from 'react';
import IconsViewer from './IconsViewer';

class CloudSenseIconsPreview extends React.Component {

	render() {

		const cloudSenseIcons = [
			{
				name: 'action',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M32.24 16.12l-9.11-5.89v3.41h-9.8v4.96h9.86v3.41l9.05-5.89z"></path><path d="M5.58 10.54c-3.1 0-5.58 2.48-5.58 5.58s2.48 5.58 5.58 5.58 5.58-2.48 5.58-5.58-2.48-5.58-5.58-5.58z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'big_shot',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M16.12 22.32c-2.6 0-4.71 2.11-4.71 4.71 0 0.74 0.19 1.49 0.56 2.11l4.21-2.48 4.22 2.48c0.31-0.68 0.56-1.36 0.56-2.11-0.06-2.54-2.17-4.71-4.84-4.71z"></path><path d="M16.12 14.82c-1.05 0-1.92 0.87-1.92 1.92 0 1.05 0.87 1.92 1.92 1.92 1.05 0 1.92-0.87 1.92-1.92 0-1.12-0.87-1.92-1.92-1.92z"></path><path d="M32.24 12.52c-0.12-0.31-0.37-0.62-0.81-0.68l-9.92-1.49-4.46-9.92c-0.31-0.68-1.36-0.68-1.74 0l-4.46 9.92-9.98 1.55c-0.31 0.06-0.68 0.31-0.81 0.69-0.12 0.31 0 0.74 0.25 0.99l7.19 7-1.86 10.67c-0.06 0.31 0.06 0.74 0.37 0.93 0.31 0.19 0.74 0.19 1 0.06l3.22-1.98c-0.43-0.93-0.81-1.98-0.81-3.1 0.06-3.66 3.04-6.7 6.7-6.7-2.11 0-3.78-1.74-3.78-3.78s1.74-3.78 3.78-3.78c2.11 0 3.78 1.74 3.78 3.78s-1.74 3.78-3.78 3.78c3.66 0 6.63 2.98 6.63 6.63 0 1.12-0.25 2.11-0.8 3.1l3.16 1.99c0.31 0.19 0.74 0.19 0.99-0.06 0.31-0.19 0.43-0.62 0.37-0.93l-1.79-10.67 7.19-7.07c0.37-0.19 0.43-0.56 0.37-0.93z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'breadcrumbs_left',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M31.31 2.23c0.56 0 0.93 0.37 0.93 0.93v26.1c0 0.37-0.37 0.74-0.93 0.75h-6.94c-0.37 0-0.74-0.19-1.12-0.37l-9.98-12.53c-0.37-0.56-0.37-1.12 0-1.67l10.17-12.84c0.19-0.19 0.56-0.37 1.11-0.37h6.76z m-31 14.88l10.17 12.59c0.37 0.37 1.12 0.56 1.67 0l2.05-1.49c0.56-0.56 0.74-1.3 0.18-1.86l-8.24-10.17 8.24-10.17c0.37-0.56 0.37-1.49-0.18-1.86l-2.05-1.67c-0.56-0.37-1.3-0.37-1.67 0.19l-10.17 12.52c-0.43 0.81-0.43 1.36 0 1.92z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'circle',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M16.12 0c-8.87 0-16.12 7.25-16.12 16.12s7.25 16.12 16.12 16.12 16.12-7.25 16.12-16.12-7.25-16.12-16.12-16.12z m0 31.19c-8.31 0-15.07-6.76-15.07-15.07s6.76-15.07 15.07-15.07 15.07 6.76 15.07 15.07-6.76 15.07-15.07 15.07z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'circle_arrow_down',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M32.24 16.12c0-8.93-7.19-16.12-16.12-16.12s-16.12 7.19-16.12 16.12 7.19 16.12 16.12 16.12 16.12-7.19 16.12-16.12z m-22.88-3.91h13.52l-6.76 11.72-6.76-11.72z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'circle_arrow_right',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M16.12 0c-8.93 0-16.12 7.19-16.12 16.12s7.19 16.12 16.12 16.12 16.12-7.19 16.12-16.12-7.19-16.12-16.12-16.12z m-3.91 22.88v-13.52l11.72 6.76-11.72 6.76z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'cloned',
				content: '<svg id="cloned" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M9.6 0h16.62c2.52 0 4.5 1.98 4.5 4.5v16.62c0 2.52-1.98 4.5-4.5 4.5h-1.92v-3.84h1.92c0.42 0 0.66-0.3 0.66-0.66v-16.62c0-0.42-0.24-0.66-0.66-0.66h-16.62c-0.36 0-0.66 0.24-0.66 0.66v1.92h-3.84v-1.92c0-2.52 1.98-4.5 4.5-4.5z m12.18 28.14v-16.62c0-1.38-1.2-2.58-2.58-2.58h-16.62c-1.44 0-2.58 1.2-2.58 2.58v16.62c0 1.44 1.14 2.58 2.58 2.58h16.62c1.38 0 2.58-1.14 2.58-2.58z m-5.34-10.74l-6.36 6.3c-0.24 0.24-0.66 0.24-0.9 0l-3.42-3.48c-0.3-0.24-0.3-0.66 0-0.9l0.9-0.9c0.24-0.24 0.66-0.24 0.9 0l1.8 1.86c0.18 0.18 0.48 0.18 0.6 0l4.62-4.74c0.3-0.24 0.66-0.24 0.96 0l0.9 0.9c0.3 0.24 0.3 0.66 0 0.96z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'code_sample',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M20.09 4.34l-1.12-0.31c-0.12-0.06-0.31-0.06-0.43 0.06-0.12 0.06-0.25 0.19-0.25 0.37l-6.51 22.7c-0.06 0.12-0.06 0.31 0.06 0.43 0.06 0.12 0.19 0.25 0.37 0.25l1.12 0.31c0.12 0.06 0.25 0.06 0.43-0.06 0.12-0.06 0.25-0.19 0.25-0.38l6.45-22.63c0.06-0.12 0.06-0.31-0.06-0.43 0-0.19-0.12-0.25-0.31-0.31z"></path><path d="M10.23 8.8c0-0.12-0.06-0.31-0.19-0.43l-0.86-0.87c-0.12-0.12-0.25-0.19-0.44-0.18-0.12 0-0.31 0.06-0.43 0.18l-8.12 8.19c-0.12 0.12-0.19 0.31-0.19 0.43s0.06 0.31 0.19 0.43l8.18 8.19c0.12 0.12 0.25 0.19 0.43 0.18s0.31-0.06 0.44-0.18l0.87-0.87c0.12-0.12 0.19-0.25 0.18-0.43 0-0.12-0.06-0.31-0.18-0.44l-6.95-6.88 6.95-6.94c0.06-0.12 0.12-0.25 0.12-0.38z"></path><path d="M32.05 15.69l-8.18-8.19c-0.12-0.12-0.25-0.19-0.43-0.18-0.12 0-0.31 0.06-0.44 0.18l-0.87 0.87c-0.12 0.12-0.19 0.25-0.18 0.43 0 0.12 0.06 0.31 0.18 0.44l6.95 6.88-6.95 6.94c-0.12 0.12-0.19 0.25-0.18 0.44 0 0.12 0.06 0.31 0.18 0.43l0.87 0.87c0.12 0.12 0.25 0.19 0.44 0.19 0.12 0 0.31-0.06 0.43-0.19l8.18-8.18c0.12-0.12 0.19-0.25 0.19-0.44 0-0.19-0.06-0.37-0.19-0.49z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'collapse',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M12.83 18.1h-9.85c-0.74 0-1.3 0.56-1.31 1.31s0.56 1.3 1.31 1.3h8.55v8.55c0 0.74 0.56 1.3 1.3 1.31 0.74 0 1.3-0.56 1.31-1.31v-9.85c0-0.68-0.62-1.3-1.31-1.31z"></path><path d="M29.26 11.53h-8.55v-8.55c0-0.74-0.56-1.3-1.3-1.31-0.74 0-1.3 0.56-1.31 1.31v9.85c0 0.74 0.56 1.3 1.31 1.31h9.85c0.74 0 1.3-0.56 1.31-1.31 0-0.74-0.56-1.3-1.31-1.3z"></path><path d="M31.87 0.37c-0.5-0.5-1.36-0.5-1.86 0l-11.53 11.53c-0.5 0.5-0.5 1.36 0 1.86 0.25 0.25 0.56 0.37 0.93 0.38s0.68-0.12 0.93-0.38l11.53-11.53c0.5-0.5 0.5-1.36 0-1.86z"></path><path d="M13.76 18.48c-0.5-0.5-1.36-0.5-1.86 0l-11.53 11.53c-0.5 0.5-0.5 1.36 0 1.86 0.25 0.25 0.56 0.37 0.93 0.37s0.68-0.12 0.93-0.37l11.53-11.53c0.5-0.5 0.5-1.36 0-1.86z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'column',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M6.08 15.56h6.94v-0.25c0-0.06 0-0.19 0.06-0.24 0-0.19 0.06-0.37 0.06-0.5 0-0.12 0.06-0.19 0.07-0.31 0.06-0.12 0.06-0.31 0.12-0.43 0.06-0.12 0.06-0.19 0.12-0.31s0.12-0.25 0.13-0.44c0.06-0.12 0.12-0.19 0.12-0.31l0.19-0.37c0.06-0.12 0.12-0.19 0.18-0.31l0.19-0.37c0.06-0.12 0.12-0.19 0.19-0.31 0.06-0.12 0.19-0.25 0.24-0.31 0.06-0.06 0.12-0.19 0.25-0.25 0.06-0.12 0.19-0.19 0.25-0.31l0.25-0.25c0.12-0.06 0.19-0.19 0.31-0.25 0.06-0.06 0.19-0.12 0.25-0.24 0.12-0.06 0.19-0.19 0.31-0.25 0.12-0.06 0.19-0.12 0.31-0.19l0.37-0.18c0.12-0.06 0.19-0.12 0.31-0.19l0.37-0.19c0.12-0.06 0.25-0.12 0.31-0.12 0.12-0.06 0.25-0.12 0.37-0.12 0.12-0.06 0.25-0.06 0.37-0.13 0.12-0.06 0.25-0.06 0.44-0.12 0.12 0 0.25-0.06 0.37-0.06 0.12 0 0.31-0.06 0.43-0.07 0.12 0 0.25-0.06 0.38-0.06h0.12v-8.12h-16.12v32.24h16.12v-8.06h-0.12c-0.12 0-0.25 0-0.38-0.06-0.12 0-0.31-0.06-0.43-0.06-0.12 0-0.25-0.06-0.37-0.07-0.12-0.06-0.25-0.06-0.44-0.12-0.12-0.06-0.25-0.06-0.37-0.12-0.12-0.06-0.25-0.06-0.37-0.13-0.12-0.06-0.25-0.06-0.31-0.12l-0.37-0.19c-0.12-0.06-0.19-0.12-0.31-0.18l-0.37-0.19c-0.12-0.06-0.19-0.12-0.31-0.19-0.12-0.06-0.19-0.19-0.31-0.24-0.12-0.06-0.19-0.12-0.25-0.25-0.12-0.06-0.19-0.19-0.31-0.25l-0.25-0.25c-0.12-0.12-0.19-0.19-0.25-0.31l-0.25-0.25c-0.06-0.12-0.19-0.19-0.24-0.31-0.06-0.12-0.12-0.19-0.19-0.31l-0.19-0.37c-0.06-0.12-0.12-0.19-0.18-0.31l-0.19-0.37c-0.06-0.12-0.12-0.19-0.12-0.31-0.06-0.12-0.12-0.25-0.13-0.43-0.06-0.12-0.06-0.19-0.12-0.31s-0.06-0.31-0.12-0.44c0-0.12-0.06-0.19-0.07-0.31-0.06-0.19-0.06-0.37-0.06-0.49 0-0.06 0-0.19-0.06-0.25v-0.25h-6.94c-0.31 0-0.56-0.25-0.56-0.56-0.06-0.37 0.19-0.62 0.56-0.62z m0 9.18h12.64c0.31 0 0.56 0.25 0.56 0.56s-0.25 0.56-0.56 0.55h-12.64c-0.31 0-0.56-0.25-0.56-0.55-0.06-0.31 0.19-0.56 0.56-0.56z m0-18.42h12.64c0.31 0 0.56 0.25 0.56 0.56s-0.25 0.56-0.56 0.56h-12.64c-0.31 0-0.56-0.25-0.56-0.56s0.19-0.56 0.56-0.56z"></path><path d="M27.9 16.12c0-3.84-3.1-6.88-6.88-6.88s-6.88 3.1-6.88 6.88 3.1 6.88 6.88 6.88 6.88-3.04 6.88-6.88z m-7.44 5.21v-4.59h-4.59c-0.31 0-0.56-0.25-0.56-0.56s0.25-0.56 0.56-0.56h4.59v-4.58c0-0.31 0.25-0.56 0.56-0.56s0.56 0.25 0.56 0.56v4.58h4.58c0.31 0 0.56 0.25 0.56 0.56s-0.25 0.56-0.56 0.56h-4.58v4.59c0 0.31-0.25 0.56-0.56 0.56s-0.56-0.25-0.56-0.56z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'config_type',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M20.27 13.45l-0.62-1.42s1.36-3.1 1.24-3.23l-1.79-1.79c-0.12-0.12-3.22 1.3-3.23 1.3l-1.42-0.56s-1.3-3.16-1.43-3.16h-2.6c-0.19 0-1.36 3.16-1.37 3.16l-1.42 0.56s-3.16-1.36-3.29-1.24l-1.86 1.86c-0.12 0.12 1.3 3.16 1.3 3.16l-0.62 1.43s-3.22 1.24-3.22 1.42v2.54c0 0.19 3.22 1.3 3.22 1.31l0.62 1.42s-1.36 3.1-1.24 3.23l1.8 1.79c0.12 0.12 3.22-1.3 3.22-1.3l1.43 0.56s1.24 3.16 1.43 3.16h2.6c0.19 0 1.36-3.16 1.36-3.16l1.43-0.56s3.16 1.36 3.29 1.24l1.79-1.8c0.12-0.12-1.3-3.16-1.3-3.16l0.62-1.42s3.22-1.24 3.23-1.43v-2.54c0.06-0.19-3.16-1.36-3.17-1.37z m-8.55 6.33c-2.05 0-3.78-1.67-3.78-3.66 0-2.05 1.67-3.66 3.78-3.66 2.05 0 3.78 1.67 3.78 3.66 0 2.05-1.67 3.66-3.78 3.66z"></path><path d="M31.06 10.54v-0.74s1.24-1.12 1.18-1.18l-0.43-1.12c-0.06-0.06-1.67-0.06-1.68-0.06l-0.49-0.56s0.06-1.61 0-1.67l-1.12-0.5c-0.06-0.06-1.24 1.12-1.24 1.12h-0.74s-1.12-1.24-1.18-1.18l-1.18 0.43c-0.06 0-0.06 1.67-0.06 1.68l-0.56 0.43s-1.67-0.06-1.67 0l-0.5 1.12c-0.06 0.06 1.18 1.24 1.18 1.24v0.74s-1.24 1.12-1.18 1.18l0.43 1.12c0.06 0.06 1.67 0.06 1.68 0.06l0.49 0.56s-0.06 1.61 0 1.67l1.12 0.5c0.06 0.06 1.24-1.12 1.24-1.12h0.74s1.12 1.24 1.18 1.18l1.18-0.44c0.06 0 0.06-1.67 0.06-1.67l0.56-0.5s1.67 0.06 1.67 0l0.5-1.11c0-0.06-1.18-1.18-1.18-1.18z m-2.6 0.25c-0.37 0.87-1.49 1.3-2.36 0.87-0.93-0.43-1.3-1.49-0.93-2.36 0.37-0.87 1.49-1.3 2.36-0.87 0.87 0.37 1.3 1.43 0.93 2.36z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'contact_action',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M29.57 2.54h-26.9c-1.49 0-2.67 1.18-2.67 2.61v17.17c0 1.43 1.18 2.67 2.67 2.67h9.36l3.28 4.34c0.37 0.43 0.99 0.56 1.43 0.18l0.19-0.18 3.28-4.34h9.36c1.43 0 2.67-1.18 2.67-2.67v-17.17c0-1.43-1.18-2.6-2.67-2.61z m-14.75 15.13c-0.25 0-0.56-0.12-0.75-0.31l-3.34-3.35c-0.37-0.37-0.37-1.05 0-1.42 0.37-0.37 1.05-0.37 1.42 0l2.67 2.66 5.21-5.21c0.37-0.37 1.05-0.37 1.42 0 0.37 0.37 0.37 1.05 0 1.43l-5.89 5.89c-0.19 0.25-0.5 0.31-0.74 0.31z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'data_source',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M30.81 31.31l-3.28-3.47c0.99-1.12 1.55-2.54 1.55-4.03 0-3.29-2.67-5.95-5.95-5.95s-5.95 2.67-5.96 5.95 2.67 5.95 5.96 5.95c1.36 0 2.6-0.43 3.59-1.24l3.29 3.47c0.19 0.25 0.56 0.25 0.8 0 0.25-0.12 0.25-0.5 0-0.68z m-12.52-7.44c0-2.67 2.17-4.84 4.84-4.84s4.84 2.17 4.83 4.84-2.17 4.84-4.83 4.84-4.84-2.17-4.84-4.84z"></path><path d="M15.5 23.81c0-2.23 0.99-4.22 2.54-5.58-0.5 0-0.99 0.06-1.55 0.06h-2.91c-4.03-0.12-7.32-0.68-9.61-1.49-1.12-0.37-2.05-0.81-2.73-1.3v5.21c1.55 1.61 6.82 3.16 13.83 3.16 0.12-0.06 0.31-0.06 0.43-0.06z"></path><path d="M13.76 16.55h2.86c6.2-0.19 10.85-1.61 12.33-3.1v-5.2c-2.67 1.86-8.37 2.85-13.82 2.85s-11.16-1.05-13.89-2.85v5.2c1.49 1.55 6.08 2.91 12.34 3.1h0.18z"></path><path d="M28.89 6.26v-1.3c0-0.06 0-0.19-0.06-0.25-0.68-2.36-5.39-4.71-13.76-4.71-8.31 0-13.08 2.36-13.77 4.71 0 0.06-0.06 0.19-0.06 0.25v1.3c1.55 1.61 6.82 3.16 13.83 3.16s12.21-1.55 13.82-3.16z"></path><path d="M15.69 25.48h-0.62c-6.82 0-11.53-1.24-13.83-2.85v4.53c0 0.06 0 0.19 0.06 0.24 0.68 2.73 6.51 4.71 13.77 4.72 2.6 0 5.08-0.25 7.13-0.75-3.22-0.37-5.83-2.73-6.51-5.89z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'discount',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M20.09 18.23c-0.37 0-0.62 0.25-0.81 0.43-0.31 0.37-0.43 0.87-0.43 1.43 0 0.56 0.19 1.05 0.43 1.42 0.12 0.19 0.43 0.43 0.81 0.44 0.37 0 0.62-0.25 0.8-0.44 0.31-0.37 0.43-0.87 0.44-1.42 0-0.56-0.19-1.05-0.44-1.43-0.19-0.19-0.43-0.43-0.8-0.43z"></path><path d="M12.15 14.01c0.37 0 0.62-0.25 0.81-0.43 0.31-0.37 0.43-0.87 0.43-1.43 0-0.56-0.19-1.05-0.43-1.42-0.12-0.19-0.43-0.43-0.81-0.44s-0.62 0.25-0.8 0.44c-0.31 0.37-0.43 0.87-0.44 1.42 0 0.56 0.19 1.05 0.44 1.43 0.19 0.19 0.43 0.43 0.8 0.43z"></path><path d="M31.81 15.25l-3.91-2.97 1.43-4.72c0.19-0.56-0.12-1.12-0.69-1.3-0.12-0.06-0.19-0.06-0.31-0.06l-4.96-0.06-1.61-4.65c-0.12-0.31-0.37-0.56-0.68-0.68-0.31-0.12-0.68-0.06-0.93 0.12l-4.03 2.85-4.03-2.85c-0.5-0.31-1.12-0.19-1.49 0.25-0.06 0.06-0.12 0.19-0.12 0.25l-1.61 4.65-4.96 0.06c-0.56 0-1.05 0.5-1.06 1.05 0 0.12 0 0.19 0.06 0.31l1.43 4.78-3.97 2.97c-0.43 0.37-0.56 0.99-0.18 1.49l0.18 0.19 3.97 3.03-1.43 4.72c-0.19 0.56 0.12 1.12 0.69 1.3 0.12 0.06 0.19 0.06 0.31 0.06l4.96 0.06 1.61 4.65c0.19 0.56 0.81 0.87 1.36 0.62 0.06-0.06 0.19-0.06 0.25-0.12l4.03-2.85 4.03 2.85c0.5 0.31 1.12 0.19 1.49-0.25 0.06-0.06 0.12-0.19 0.12-0.25l1.61-4.65 4.96-0.06c0.56 0 1.05-0.5 1.06-1.05 0-0.12 0-0.19-0.06-0.31l-1.43-4.72 3.97-2.97c0.43-0.37 0.56-0.99 0.18-1.49-0.06-0.06-0.12-0.19-0.24-0.25z m-19.66-6.38c1.49 0 2.73 1.49 2.73 3.34 0 1.86-1.18 3.35-2.73 3.35s-2.73-1.49-2.73-3.35c0.06-1.86 1.24-3.35 2.73-3.34z m-0.18 14.57c-0.19 0.25-0.43 0.37-0.75 0.37-0.19 0-0.37-0.06-0.49-0.19-0.37-0.31-0.5-0.87-0.19-1.24l9.73-13.51c0.19-0.25 0.43-0.37 0.75-0.38 0.19 0 0.37 0.06 0.49 0.19 0.37 0.31 0.5 0.87 0.19 1.24 0-0.06-9.73 13.52-9.73 13.52z m8.12-0.07c-1.49 0-2.73-1.49-2.73-3.34 0-1.86 1.18-3.35 2.73-3.35s2.73 1.49 2.73 3.35c-0.06 1.86-1.24 3.35-2.73 3.34z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'expand',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M30.94 0h-9.86c-0.74 0-1.3 0.56-1.3 1.3s0.56 1.3 1.3 1.3h8.56v8.56c0 0.74 0.56 1.3 1.3 1.3s1.3-0.56 1.3-1.3v-9.86c0-0.74-0.56-1.3-1.3-1.3z"></path><path d="M11.16 29.64h-8.56v-8.56c0-0.74-0.56-1.3-1.3-1.3-0.74 0-1.3 0.56-1.3 1.3v9.86c0 0.74 0.56 1.3 1.3 1.3h9.86c0.74 0 1.3-0.56 1.3-1.3 0-0.74-0.56-1.3-1.3-1.3z"></path><path d="M31.87 0.37c-0.5-0.5-1.36-0.5-1.86 0l-11.53 11.53c-0.5 0.5-0.5 1.36 0 1.86 0.25 0.25 0.56 0.37 0.93 0.38s0.68-0.12 0.93-0.38l11.53-11.53c0.5-0.5 0.5-1.36 0-1.86z"></path><path d="M13.76 18.48c-0.5-0.5-1.36-0.5-1.86 0l-11.53 11.53c-0.5 0.5-0.5 1.36 0 1.86 0.25 0.25 0.56 0.37 0.93 0.37s0.68-0.12 0.93-0.37l11.53-11.53c0.5-0.5 0.5-1.36 0-1.86z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'gift',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M12.52 21.39c0 0.31 0.19 0.62 0.44 0.81 0.31 0.25 0.62 0.37 0.74 0.37 0.5 0.06 6.08 0.68 9.74 1.05l-0.25 2.48c-2.85-0.31-9.55-0.99-9.92-1.05-0.68-0.12-1.36-0.56-1.68-0.75-0.31-0.25-0.62-0.5-0.8-0.8l-6.02-5.95c-0.25-0.25-0.56-0.37-0.86-0.38-0.31 0-0.62 0.12-0.87 0.38-0.25 0.25-0.37 0.56-0.37 0.86 0 0.31 0.12 0.62 0.37 0.87l9.36 9.18c0.74 0.74 1.74 1.12 2.79 1.11h17.05v2.67h-17.24c-1.74 0-3.35-0.68-4.52-1.86l-9.36-9.18c-0.68-0.68-1.12-1.61-1.12-2.66 0-0.99 0.37-1.98 1.05-2.67 0.68-0.74 1.67-1.12 2.67-1.11 0.99 0 1.98 0.37 2.67 1.05l4.03 3.91c0.62-1.12 1.74-1.86 3.1-1.86h8.86v1.24-1.24c3.04 0.06 6.01 0.99 8.5 2.79l1.3 0.93v3.1l-2.79-1.99c-2.05-1.49-4.53-2.29-7.07-2.29h-8.87c-0.5 0-0.93 0.5-0.93 0.99z m1-11.1l-4.41-4.15 6.08-0.87 2.67-5.27 2.66 5.27 6.08 0.87-4.4 4.15 1.05 5.83-5.39-2.73-5.4 2.73 1.06-5.83z m1.11-2.42l1.61 1.49-0.37 2.17 2.05-1.05 2.04 1.05-0.37-2.17 1.61-1.49-2.23-0.31-1.11-1.98-1 2.05-2.23 0.24z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'handshake',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><g id="Layer_1_120_"><path d="M21.76 7.07c-0.06-0.06-0.19-0.12-0.25-0.19l-6.2-1.92c-2.48-0.74-4.09 0.56-4.46 0.99-0.25 0.25-0.43 0.5-0.56 0.75l-2.73 6.44c-0.19 0.37-0.12 0.87 0.13 1.37 0.37 0.68 0.99 1.18 1.73 1.36 0.87 0.19 1.74-0.06 2.42-0.74 0.19-0.19 0.31-0.37 0.44-0.56l0.93-1.74c0.19-0.31 0.37-0.56 0.62-0.8 0.81-0.81 1.18-0.43 1.3-0.25 1.36 1.3 8.62 8.62 8.62 8.62 0.25 0.25 0.19 0.74-0.13 1.05s-0.81 0.37-1.05 0.13l-2.05-2.05c-0.25-0.25-0.68-0.25-0.93 0-0.25 0.25-0.25 0.68 0 0.93l2.05 2.05c0.25 0.25 0.19 0.74-0.13 1.05s-0.81 0.37-1.05 0.12l-2.05-1.98c-0.25-0.25-0.68-0.25-0.93 0-0.25 0.25-0.25 0.68 0 0.93l2.05 2.05c0.25 0.25 0.19 0.74-0.12 1.05s-0.81 0.37-1.06 0.12l-2.04-2.04c-0.25-0.25-0.68-0.25-0.93 0.06-0.25 0.25-0.25 0.68 0 0.93l2.04 2.05c0.25 0.25 0.19 0.74-0.12 1.05s-0.81 0.37-1.06 0.12l-2.48-2.48c0.37-0.56 0.25-1.3-0.24-1.79-0.56-0.56-1.49-0.62-1.99-0.13 0.5-0.5 0.5-1.43-0.12-1.98-0.56-0.56-1.49-0.62-1.99-0.13 0.5-0.5 0.5-1.43-0.12-1.98-0.56-0.56-1.49-0.62-1.98-0.12 0.5-0.5 0.5-1.43-0.13-1.99-0.56-0.56-1.36-0.62-1.92-0.18l-4.03-4.03c-0.25-0.25-0.68-0.25-0.93 0s-0.25 0.68 0 0.93l3.97 3.96-1.3 1.12c-0.5 0.5-0.43 1.43 0.12 1.98 0.56 0.56 1.49 0.62 1.98 0.13-0.5 0.5-0.5 1.43 0.13 1.98 0.56 0.56 1.49 0.62 1.98 0.13-0.5 0.5-0.5 1.43 0.13 1.98 0.56 0.56 1.49 0.62 1.98 0.12-0.5 0.5-0.5 1.43 0.12 1.99 0.56 0.56 1.49 0.62 1.99 0.12l1.24-1.24 2.48 2.48c0.81 0.81 2.11 0.74 2.97-0.12 0.37-0.37 0.62-0.93 0.69-1.49 0.56-0.06 1.05-0.25 1.48-0.68 0.37-0.37 0.62-0.93 0.69-1.49 0.56-0.06 1.05-0.25 1.48-0.68 0.37-0.37 0.62-0.93 0.69-1.49 0.56-0.06 1.05-0.25 1.48-0.68 0.87-0.87 0.93-2.17 0.13-2.98l-1.06-1.05 4.28-4.28c0.25-0.25 0.25-0.68 0-0.93l-6.2-5.95z"></path><path d="M31.87 8.56l-5.4-5.4c-0.5-0.5-1.36-0.5-1.92 0l-1.92 1.92c-0.5 0.5-0.5 1.36 0 1.93l5.39 5.39c0.5 0.5 1.36 0.5 1.93 0l1.92-1.92c0.5-0.56 0.5-1.36 0-1.92z m-2.85 2.79c-0.62 0-1.12-0.5-1.12-1.12s0.5-1.12 1.12-1.12 1.12 0.5 1.11 1.12-0.5 1.12-1.11 1.12z"></path></g></g></svg>',
				set_id: 1
			},
			{
				name: 'hide',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M22.75 18.35c0.93-1.36 1.43-2.91 1.43-4.59 0-0.5-0.06-0.99-0.12-1.48l-5.03 9.05c1.55-0.62 2.79-1.55 3.72-2.98z"></path><path d="M23.5 5.95v-0.18c0-0.19-0.12-0.37-0.31-0.5-0.06 0-0.12-0.06-0.37-0.19-0.12-0.12-0.31-0.25-0.5-0.31-0.19-0.12-0.37-0.25-0.62-0.31-0.19-0.12-0.37-0.19-0.56-0.24-0.19-0.06-0.25-0.12-0.31-0.13-0.19 0-0.37 0.12-0.49 0.31l-1 1.74c-1.12-0.19-2.17-0.31-3.22-0.31-3.22 0-6.2 0.81-8.93 2.42-2.73 1.61-5.02 3.84-6.82 6.69-0.25 0.31-0.37 0.74-0.37 1.18s0.12 0.87 0.37 1.24c1.05 1.61 2.29 3.1 3.78 4.4 1.43 1.3 3.04 2.36 4.72 3.1-0.56 0.93-0.81 1.43-0.81 1.55 0 0.19 0.12 0.37 0.31 0.5 1.49 0.87 2.29 1.24 2.42 1.24 0.19 0 0.37-0.12 0.49-0.31l0.87-1.61c1.3-2.29 3.16-5.64 5.71-10.23 2.48-4.4 4.4-7.81 5.64-10.05z m-13.52 16.93c-3.1-1.43-5.7-3.66-7.69-6.76 1.8-2.85 4.09-4.96 6.89-6.32-0.74 1.24-1.12 2.6-1.12 4.03 0 1.3 0.31 2.48 0.87 3.65 0.56 1.18 1.43 2.11 2.42 2.86 0.06 0-1.36 2.54-1.37 2.54z m6.76-13.08c-0.19 0.19-0.37 0.25-0.62 0.24-1.05 0-1.92 0.37-2.67 1.12-0.74 0.74-1.12 1.61-1.11 2.67 0 0.25-0.06 0.43-0.25 0.62-0.19 0.19-0.37 0.25-0.62 0.24s-0.43-0.06-0.62-0.24c-0.19-0.19-0.25-0.37-0.25-0.62 0-1.49 0.56-2.79 1.61-3.85 1.05-1.05 2.36-1.61 3.85-1.61 0.25 0 0.43 0.06 0.62 0.25 0.19 0.19 0.25 0.37 0.25 0.62 0.06 0.19 0 0.43-0.19 0.56z"></path><path d="M31.87 14.88c-0.68-1.12-1.55-2.23-2.61-3.29-1.05-1.05-2.17-1.98-3.28-2.72l-1.12 2.04c1.98 1.36 3.72 3.16 5.09 5.27-1.43 2.23-3.29 4.09-5.4 5.52-2.17 1.43-4.53 2.23-7.07 2.48l-1.36 2.29c2.67 0 5.21-0.56 7.56-1.73 2.36-1.12 4.46-2.73 6.27-4.78 0.87-0.99 1.49-1.86 1.98-2.6 0.25-0.43 0.37-0.81 0.37-1.24-0.06-0.43-0.19-0.81-0.43-1.24z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'horizontal-layout',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M31.06 1.36h-29.88c-0.68 0-1.18 0.5-1.18 1.18v6.2c0 0.62 0.5 1.18 1.18 1.18h29.88c0.62 0 1.18-0.5 1.18-1.18v-6.2c0-0.68-0.5-1.18-1.18-1.18z"></path><path d="M31.06 11.84h-29.88c-0.68 0-1.18 0.56-1.18 1.18v6.2c0 0.62 0.5 1.18 1.18 1.18h29.88c0.62 0 1.18-0.5 1.18-1.18v-6.2c0-0.62-0.5-1.18-1.18-1.18z"></path><path d="M31.06 22.32h-29.88c-0.62 0-1.18 0.5-1.18 1.18v6.2c0 0.62 0.5 1.18 1.18 1.18h29.88c0.62 0 1.18-0.5 1.18-1.18v-6.2c0-0.62-0.5-1.18-1.18-1.18z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'lead',
				content: '<svg id="lead" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M19.62 5.46c0 2.34-1.92 4.2-4.26 4.2s-4.26-1.86-4.26-4.2c0-2.4 1.92-4.26 4.26-4.26s4.26 1.86 4.26 4.26z m9 7.08h-26.52c-0.9 0-1.26 1.14-0.48 1.68l6.9 4.44c0.36 0.24 0.54 0.66 0.36 1.08l-2.58 8.64c-0.3 0.9 0.96 1.56 1.68 0.84l6.72-7.08c0.36-0.42 1.08-0.42 1.44 0l6.72 7.08c0.66 0.72 1.92 0.06 1.68-0.84l-2.7-8.7c-0.12-0.36 0.06-0.84 0.36-1.08l6.9-4.44c0.78-0.48 0.42-1.62-0.48-1.62z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'opportunity_empty',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><g id="surface1"><path d="M27.34 17.73c-0.56-0.56-1.3-0.87-2.11-0.87-0.81 0-1.55 0.31-2.1 0.87l-2.17 2.11c0-2.67-2.17-4.84-4.84-4.84s-4.84 2.17-4.84 4.84l-2.17-2.17c-0.56-0.56-1.3-0.87-2.1-0.87s-1.55 0.31-2.11 0.87c-1.18 1.18-1.18 3.04 0 4.22l6.2 6.2v3.16c0 0.5 0.43 0.93 0.93 0.93h8.12c0.5 0 0.93-0.43 0.93-0.93v-3.16l6.2-6.2c1.18-1.12 1.18-3.04 0.06-4.16z m-11.22-0.8c1.61 0 2.98 1.36 2.98 2.97 0 1.61-1.36 2.98-2.98 2.98-1.61 0-2.98-1.36-2.98-2.98 0-1.67 1.36-2.98 2.98-2.97z m9.86 3.65l-6.51 6.51c-0.19 0.19-0.25 0.43-0.25 0.69v2.6h-6.2v-2.6c0-0.25-0.12-0.5-0.25-0.69l-6.51-6.51c-0.43-0.43-0.43-1.12 0-1.55 0.19-0.19 0.5-0.31 0.75-0.31 0.31 0 0.56 0.12 0.74 0.31l5.39 5.4c0.19 0.19 0.43 0.25 0.69 0.25h4.52c0.25 0 0.5-0.12 0.68-0.25l5.4-5.4c0.19-0.19 0.5-0.31 0.74-0.31 0.31 0 0.56 0.12 0.75 0.31 0.5 0.43 0.5 1.12 0.06 1.55z"></path><path d="M11.97 8.93l-0.69 3.84c-0.06 0.5 0.25 0.99 0.75 1.12h0.18c0.12 0 0.31-0.06 0.44-0.13l3.47-1.79 3.47 1.79c0.12 0.06 0.31 0.12 0.44 0.13 0.5 0 0.93-0.43 0.93-0.93v-0.19l-0.69-3.78 2.79-2.73c0.25-0.25 0.37-0.62 0.25-0.99-0.12-0.37-0.43-0.62-0.74-0.62l-3.91-0.56-1.73-3.53c-0.25-0.5-0.81-0.68-1.24-0.44-0.19 0.06-0.31 0.25-0.44 0.44l-1.73 3.53-3.91 0.56c-0.5 0.06-0.87 0.56-0.81 1.05 0 0.19 0.12 0.37 0.25 0.56l2.92 2.67z m2.35-3.1c0.31-0.06 0.56-0.25 0.68-0.5l1.12-2.23 1.12 2.23c0.12 0.25 0.37 0.43 0.68 0.5l2.48 0.37-1.8 1.74c-0.25 0.25-0.31 0.56-0.25 0.8l0.44 2.48-2.24-1.18c-0.25-0.12-0.62-0.12-0.86 0l-2.24 1.18 0.44-2.48c0.06-0.31-0.06-0.62-0.25-0.8l-1.8-1.74 2.48-0.37z"></path></g></g></svg>',
				set_id: 1
			},
			{
				name: 'opportunity_full',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><g id="surface1"><path d="M11.97 8.93l-0.69 3.84c-0.06 0.37 0.06 0.68 0.38 0.93 0.19 0.12 0.37 0.19 0.55 0.19 0.12 0 0.31-0.06 0.44-0.13l3.47-1.79 3.47 1.79c0.12 0.06 0.31 0.12 0.44 0.13 0.5 0 0.93-0.43 0.93-0.93v-0.19l-0.69-3.78 2.79-2.73c0.37-0.37 0.37-0.99 0-1.36-0.12-0.12-0.31-0.25-0.55-0.25l-3.91-0.56-1.74-3.53c-0.06-0.37-0.37-0.56-0.74-0.56s-0.68 0.19-0.87 0.5l-1.73 3.53-3.91 0.56c-0.5 0.06-0.87 0.56-0.81 1.05 0 0.19 0.12 0.37 0.25 0.56l2.92 2.73z"></path><path d="M12.65 20.34c0 1.92 1.55 3.47 3.47 3.47 1.92 0 3.47-1.55 3.47-3.47 0-1.92-1.55-3.47-3.47-3.48-1.92 0.06-3.47 1.61-3.47 3.48z"></path><path d="M27.28 19.34c-0.25-0.25-0.56-0.37-0.93-0.37s-0.68 0.12-0.93 0.37l-6.08 6.08c-0.19 0.19-0.43 0.25-0.68 0.25h-5.08c-0.25 0-0.5-0.12-0.68-0.25l-6.08-6.08c-0.25-0.25-0.56-0.37-0.93-0.37s-0.68 0.12-0.93 0.37c-0.25 0.25-0.37 0.56-0.37 0.93s0.12 0.68 0.37 0.93l7.25 7.32c0.19 0.19 0.25 0.43 0.25 0.68v3.04h7.19v-3.04c0-0.25 0.12-0.5 0.25-0.68l7.38-7.32c0.25-0.25 0.37-0.56 0.37-0.93 0.06-0.37-0.12-0.68-0.37-0.93z"></path></g></g></svg>',
				set_id: 1
			},
			{
				name: 'order',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M25.54 3.84h-4.71v-3.84h-9.42v4.4l-3.1-3.1-1.37 1.37 1.24 1.24h-7.25v1.86h7.25l-1.24 1.24 1.37 1.36 3.1-3.1v4.34h9.42v-3.91h4.71c2.6 0 4.77 2.11 4.78 4.72s-2.17 4.71-4.78 4.71h-1.48l1.24-1.24-1.37-1.37-3.1 3.1v-4.34h-9.42v3.79h-4.71c-3.66 0.12-6.7 3.1-6.7 6.69s3.04 6.63 6.7 6.64h1.48l-1.24 1.24 1.37 1.36 3.1-3.1v4.34h9.42v-9.49h-9.42v4.34l-3.1-3.1-1.37 1.37 1.24 1.24h-1.48c-2.6 0-4.77-2.11-4.78-4.71s2.17-4.71 4.78-4.72h4.71v3.79h9.42v-4.34l3.1 3.1 1.37-1.37-1.24-1.24h1.48c3.66 0 6.7-2.98 6.7-6.63s-3.04-6.63-6.7-6.64z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'product_lifecycle',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M10.6 17.05h11.35c0.5 0 0.93-0.43 0.93-0.93v-11.41c0-0.5-0.43-0.93-0.93-0.93h-2.85v-0.93c0-1.55-1.3-2.85-2.86-2.85s-2.85 1.3-2.85 2.85v0.93h-2.85c-0.5 0-0.93 0.43-0.93 0.93v11.41c0.06 0.5 0.5 0.93 0.99 0.93z m4.78-14.2c0-0.5 0.43-0.93 0.93-0.93s0.93 0.43 0.93 0.93v0.93h-1.86v-0.93z"></path><path d="M30.07 15.62c-0.19-0.31-0.5-0.43-0.81-0.43-1.67 0-3.16 0.93-3.96 2.42l-2.92 5.52c-0.5 0.93-1.43 1.49-2.48 1.48h-6.45c-0.5 0-0.93-0.43-0.93-0.93s0.43-0.93 0.93-0.93h6.39c0.37 0 0.68-0.19 0.87-0.49 0.19-0.31 0.68-1.24 1.05-2.05 0.12-0.25 0.12-0.56 0-0.8s-0.43-0.37-0.68-0.38h-9.86c-1.24 0-2.42 0.5-3.35 1.37l-5.58 5.58c-0.37 0.37-0.37 0.99 0 1.36l4.72 4.71c0.19 0.19 0.43 0.25 0.68 0.25s0.5-0.06 0.68-0.25l3.6-3.53h7.93c2.48 0 4.71-1.36 5.83-3.53l4.34-8.31c0.19-0.43 0.19-0.74 0-1.06z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'row',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M16.12 14.14c-3.84 0-6.88 3.1-6.88 6.88s3.04 6.88 6.88 6.88 6.88-3.1 6.88-6.88c0-3.84-3.04-6.88-6.88-6.88z m5.21 7.44h-4.59v4.58c0 0.31-0.25 0.56-0.56 0.56s-0.56-0.25-0.56-0.56v-4.58h-4.58c-0.31 0-0.56-0.25-0.56-0.56s0.25-0.56 0.56-0.56h4.58v-4.59c0-0.31 0.25-0.56 0.56-0.56s0.56 0.25 0.56 0.56v4.59h4.59c0.31 0 0.56 0.25 0.56 0.56s-0.25 0.56-0.56 0.56z"></path><path d="M23.31 17.36l0.19 0.37c0.06 0.12 0.12 0.25 0.12 0.31 0.06 0.12 0.12 0.25 0.13 0.37 0.06 0.12 0.06 0.25 0.12 0.38 0.06 0.12 0.06 0.25 0.12 0.43 0 0.12 0.06 0.25 0.07 0.37 0 0.12 0.06 0.31 0.06 0.44 0 0.12 0.06 0.25 0.06 0.37v0.12h8.06v-16.18h-32.24v16.12h8.06v-0.12c0-0.12 0-0.25 0.06-0.38 0-0.12 0.06-0.31 0.06-0.43 0-0.12 0.06-0.25 0.07-0.37 0.06-0.12 0.06-0.25 0.12-0.44 0.06-0.12 0.06-0.25 0.12-0.37 0.06-0.12 0.06-0.25 0.13-0.37 0.06-0.12 0.06-0.25 0.12-0.31l0.19-0.37c0.06-0.12 0.12-0.19 0.18-0.31l0.19-0.37c0.06-0.12 0.12-0.19 0.19-0.31 0.06-0.12 0.19-0.19 0.24-0.31 0.06-0.12 0.12-0.19 0.25-0.25 0.06-0.12 0.19-0.19 0.25-0.31l0.25-0.25c0.12-0.12 0.19-0.19 0.31-0.25l0.25-0.25c0.12-0.06 0.19-0.19 0.31-0.24 0.12-0.06 0.19-0.12 0.31-0.19l0.37-0.19c0.12-0.06 0.19-0.12 0.31-0.18l0.37-0.19c0.12-0.06 0.19-0.12 0.31-0.12 0.12-0.06 0.25-0.12 0.43-0.13 0.12-0.06 0.19-0.06 0.31-0.12s0.31-0.06 0.44-0.12c0.12 0 0.19-0.06 0.31-0.07 0.19-0.06 0.37-0.06 0.49-0.06 0.06 0 0.19 0 0.25-0.06h0.25v-6.94c0-0.31 0.25-0.56 0.56-0.56s0.56 0.25 0.56 0.56v6.94h0.24c0.06 0 0.19 0 0.25 0.06 0.19 0 0.37 0.06 0.5 0.06 0.12 0 0.19 0.06 0.31 0.07 0.12 0.06 0.31 0.06 0.43 0.12 0.12 0.06 0.19 0.06 0.31 0.12s0.25 0.12 0.44 0.13c0.12 0.06 0.19 0.12 0.31 0.12l0.37 0.19c0.12 0.06 0.19 0.12 0.31 0.18l0.37 0.19c0.12 0.06 0.19 0.12 0.31 0.19 0.12 0.06 0.25 0.19 0.31 0.24 0.06 0.06 0.19 0.12 0.25 0.25 0.12 0.06 0.19 0.19 0.31 0.25l0.25 0.25c0.06 0.12 0.19 0.19 0.24 0.31 0.06 0.06 0.12 0.19 0.25 0.25 0.06 0.12 0.19 0.19 0.25 0.31 0.06 0.12 0.12 0.19 0.19 0.31l0.18 0.37c0.19 0.12 0.25 0.25 0.31 0.37z m1.43-11.28c0-0.31 0.25-0.56 0.56-0.56s0.56 0.25 0.55 0.56v12.64c0 0.31-0.25 0.56-0.55 0.56s-0.56-0.25-0.56-0.56v-12.64z m-17.24 12.64c0 0.31-0.25 0.56-0.56 0.56s-0.56-0.25-0.55-0.56v-12.64c0-0.31 0.25-0.56 0.55-0.56s0.56 0.25 0.56 0.56v12.64z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'show',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M31.87 14.88c-1.67-2.73-3.97-4.96-6.76-6.63-2.85-1.67-5.83-2.48-8.99-2.48s-6.14 0.81-8.99 2.48-5.08 3.91-6.76 6.63c-0.25 0.43-0.37 0.81-0.37 1.24s0.12 0.81 0.37 1.24c1.67 2.73 3.97 4.96 6.76 6.63 2.85 1.67 5.83 2.48 8.99 2.48s6.14-0.81 8.99-2.48 5.08-3.84 6.76-6.63c0.25-0.43 0.37-0.81 0.37-1.24s-0.12-0.81-0.37-1.24z m-19.59-4.9c1.05-1.05 2.36-1.61 3.84-1.61 0.25 0 0.43 0.06 0.62 0.25 0.19 0.19 0.25 0.37 0.25 0.62s-0.06 0.43-0.25 0.62c-0.19 0.19-0.37 0.25-0.62 0.25-1.05 0-1.92 0.37-2.67 1.11-0.74 0.74-1.12 1.61-1.11 2.67 0 0.25-0.06 0.43-0.25 0.62-0.19 0.19-0.37 0.25-0.62 0.25s-0.43-0.06-0.62-0.25c-0.19-0.19-0.25-0.37-0.25-0.62 0.06-1.55 0.56-2.85 1.68-3.91z m11.65 12.03c-2.42 1.43-5.02 2.17-7.81 2.17s-5.39-0.74-7.81-2.17c-2.42-1.49-4.4-3.41-6.02-5.89 1.8-2.85 4.09-4.96 6.89-6.32-0.74 1.24-1.12 2.6-1.12 4.03 0 2.23 0.81 4.09 2.36 5.7 1.55 1.55 3.47 2.36 5.7 2.36 2.23 0 4.09-0.81 5.7-2.36 1.55-1.55 2.36-3.47 2.36-5.7 0-1.43-0.37-2.79-1.12-4.03 2.73 1.43 5.02 3.53 6.89 6.32-1.61 2.48-3.6 4.4-6.02 5.89z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'switch',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path class="st0" d="M28.4 4.59c0-2.54-2.05-4.59-4.59-4.59s-4.59 2.05-4.59 4.59c0 1.86 1.12 3.47 2.73 4.21-0.43 3.72-2.85 4.46-6.33 5.58-1.74 0.5-3.72 1.12-5.33 2.36v-7.87c1.61-0.68 2.79-2.36 2.79-4.22-0.06-2.6-2.11-4.65-4.65-4.65s-4.59 2.05-4.59 4.59c0 1.92 1.12 3.53 2.79 4.21v14.57c-1.61 0.68-2.79 2.36-2.79 4.22 0 2.54 2.05 4.59 4.59 4.59s4.59-2.05 4.59-4.59c0-1.86-1.12-3.47-2.73-4.22 0.43-3.72 2.85-4.46 6.33-5.58 3.53-1.12 8.31-2.6 8.86-8.99 1.74-0.62 2.91-2.29 2.92-4.21z m-22.63 0c0-1.49 1.24-2.67 2.72-2.61 1.43 0 2.6 1.18 2.61 2.61 0 1.49-1.12 2.67-2.61 2.73s-2.67-1.18-2.72-2.61v-0.12z m2.66 25.73c-1.49 0-2.67-1.18-2.66-2.67s1.18-2.67 2.66-2.66 2.67 1.18 2.67 2.66c0 1.43-1.18 2.67-2.67 2.67z m15.38-23.07c-1.49 0-2.67-1.18-2.67-2.66s1.18-2.67 2.67-2.67 2.67 1.18 2.66 2.67-1.24 2.67-2.66 2.66z" fill="#706e6b"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'table',
				content: '<svg id="table" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M9.9 23.58v-3.3c0-0.12-0.06-0.3-0.18-0.36-0.12-0.12-0.24-0.18-0.42-0.18h-5.46c-0.18 0-0.3 0.06-0.42 0.18-0.06 0.06-0.12 0.24-0.12 0.36v3.3c0 0.18 0.06 0.3 0.12 0.42 0.12 0.06 0.24 0.12 0.42 0.12h5.46c0.18 0 0.3-0.06 0.42-0.12 0.12-0.12 0.18-0.24 0.18-0.42z m0-6.6v-3.24c0-0.18-0.06-0.3-0.18-0.42s-0.24-0.18-0.42-0.18h-5.46c-0.18 0-0.3 0.06-0.42 0.18-0.06 0.12-0.12 0.24-0.12 0.42v3.24c0 0.18 0.06 0.3 0.12 0.42 0.12 0.12 0.24 0.18 0.42 0.18h5.46c0.18 0 0.3-0.06 0.42-0.18s0.18-0.24 0.18-0.42z m8.76 6.6v-3.3c0-0.12-0.06-0.3-0.18-0.36-0.06-0.12-0.24-0.18-0.36-0.18h-5.52c-0.12 0-0.3 0.06-0.36 0.18-0.12 0.06-0.18 0.24-0.18 0.36v3.3c0 0.18 0.06 0.3 0.18 0.42 0.06 0.06 0.24 0.12 0.36 0.12h5.52c0.12 0 0.3-0.06 0.36-0.12 0.12-0.12 0.18-0.24 0.18-0.42z m-8.76-13.14v-3.3c0-0.18-0.06-0.3-0.18-0.42-0.12-0.06-0.24-0.12-0.42-0.12h-5.46c-0.18 0-0.3 0.06-0.42 0.12-0.06 0.12-0.12 0.24-0.12 0.42v3.3c0 0.12 0.06 0.3 0.12 0.36 0.12 0.12 0.24 0.18 0.42 0.18h5.46c0.18 0 0.3-0.06 0.42-0.18 0.12-0.06 0.18-0.24 0.18-0.36z m8.76 6.54v-3.24c0-0.18-0.06-0.3-0.18-0.42-0.06-0.12-0.24-0.18-0.36-0.18h-5.52c-0.12 0-0.3 0.06-0.36 0.18-0.12 0.12-0.18 0.24-0.18 0.42v3.24c0 0.18 0.06 0.3 0.18 0.42 0.06 0.12 0.24 0.18 0.36 0.18h5.52c0.12 0 0.3-0.06 0.36-0.18 0.12-0.12 0.18-0.24 0.18-0.42z m8.76 6.6v-3.3c0-0.12-0.06-0.3-0.12-0.36-0.12-0.12-0.24-0.18-0.42-0.18h-5.46c-0.18 0-0.3 0.06-0.42 0.18-0.12 0.06-0.18 0.24-0.18 0.36v3.3c0 0.18 0.06 0.3 0.18 0.42 0.12 0.06 0.24 0.12 0.42 0.12h5.46c0.18 0 0.3-0.06 0.42-0.12 0.06-0.12 0.12-0.24 0.12-0.42z m-8.76-13.14v-3.3c0-0.18-0.06-0.3-0.18-0.42-0.06-0.06-0.24-0.12-0.36-0.12h-5.52c-0.12 0-0.3 0.06-0.36 0.12-0.12 0.12-0.18 0.24-0.18 0.42v3.3c0 0.12 0.06 0.3 0.18 0.36 0.06 0.12 0.24 0.18 0.36 0.18h5.52c0.12 0 0.3-0.06 0.36-0.18 0.12-0.06 0.18-0.24 0.18-0.36z m8.76 6.54v-3.24c0-0.18-0.06-0.3-0.12-0.42-0.12-0.12-0.24-0.18-0.42-0.18h-5.46c-0.18 0-0.3 0.06-0.42 0.18s-0.18 0.24-0.18 0.42v3.24c0 0.18 0.06 0.3 0.18 0.42s0.24 0.18 0.42 0.18h5.46c0.18 0 0.3-0.06 0.42-0.18 0.06-0.12 0.12-0.24 0.12-0.42z m0-6.54v-3.3c0-0.18-0.06-0.3-0.12-0.42-0.12-0.06-0.24-0.12-0.42-0.12h-5.46c-0.18 0-0.3 0.06-0.42 0.12-0.12 0.12-0.18 0.24-0.18 0.42v3.3c0 0.12 0.06 0.3 0.18 0.36 0.12 0.12 0.24 0.18 0.42 0.18h5.46c0.18 0 0.3-0.06 0.42-0.18 0.06-0.06 0.12-0.24 0.12-0.36z m2.22-5.52v18.66c0 0.78-0.3 1.38-0.84 1.92s-1.14 0.84-1.92 0.84h-23.04c-0.78 0-1.38-0.3-1.92-0.84s-0.84-1.14-0.84-1.92v-18.66c0-0.72 0.3-1.38 0.84-1.92s1.14-0.78 1.92-0.78h23.04c0.78 0 1.38 0.24 1.92 0.78s0.84 1.2 0.84 1.92z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'tag',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M8.68 28.02c0.99 0.99 2.54 0.99 3.47 0l12.03-12.02c0.37-0.37 0.62-0.74 0.81-1.18 1.18 0.31 2.36 0.5 3.41 0.49 2.54 0 3.41-1.12 3.65-1.79 0.25-0.68 0.5-2.05-1.3-3.91l-0.06-0.06c-1.12-1.12-2.73-2.11-4.59-2.92-0.31-0.12-0.68-0.25-0.99-0.37 0-1.49-1.18-2.67-2.67-2.66l-7.19-0.07c-0.93 0-1.86 0.37-2.54 1.06l-11.97 11.96c-0.99 0.99-0.99 2.54 0 3.48l7.94 7.99z m9.24-20.21c0.81-0.81 2.11-0.81 2.91 0 0.5 0.5 0.68 1.12 0.56 1.74 0.81 0.56 1.74 1.05 2.73 1.49 0.37 0.12 0.68 0.25 1.05 0.37l-0.06-2.92c0.06 0 0.12 0.06 0.19 0.07 1.55 0.68 2.98 1.55 3.9 2.48l0.06 0.06c0.87 0.87 0.93 1.43 0.87 1.61-0.25 0.56-2.67 0.99-6.32-0.5-1.05-0.43-2.11-0.99-2.92-1.61 0 0.06-0.06 0.06-0.06 0.13a2.06 2.06 0 0 1-2.91 0 2.06 2.06 0 0 1 0-2.92z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'tree_view',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M29.02 22.88v-3.54c0-2.67-2.17-4.84-4.84-4.83h-6.45v-3.47c2.29-0.68 4.03-2.85 4.03-5.4 0-3.1-2.54-5.64-5.64-5.64s-5.64 2.54-5.64 5.64c0 2.54 1.74 4.65 4.03 5.4v3.47h-6.45c-2.67 0-4.84 2.17-4.84 4.83v3.54c-1.86 0.68-3.22 2.42-3.22 4.52 0 2.67 2.17 4.84 4.84 4.84s4.84-2.17 4.83-4.84c0-2.11-1.36-3.84-3.22-4.52v-3.54c0-0.87 0.74-1.61 1.61-1.61h6.45v5.15c-1.86 0.68-3.22 2.42-3.23 4.52 0 2.67 2.17 4.84 4.84 4.84s4.84-2.17 4.84-4.84c0-2.11-1.36-3.84-3.23-4.52v-5.15h6.45c0.87 0 1.61 0.74 1.61 1.61v3.54c-1.86 0.68-3.22 2.42-3.22 4.52 0 2.67 2.17 4.84 4.83 4.84s4.84-2.17 4.84-4.84c0-2.11-1.36-3.84-3.22-4.52z m-24.18 6.14c-0.87 0-1.61-0.74-1.62-1.62 0-0.87 0.74-1.61 1.62-1.61 0.87 0 1.61 0.74 1.61 1.61s-0.74 1.61-1.61 1.62z m11.28 0c-0.87 0-1.61-0.74-1.61-1.62 0-0.87 0.74-1.61 1.61-1.61s1.61 0.74 1.61 1.61c0 0.87-0.74 1.61-1.61 1.62z m0-20.96c-1.36 0-2.42-1.05-2.42-2.42s1.05-2.42 2.42-2.42 2.42 1.05 2.42 2.42-1.05 2.42-2.42 2.42z m11.28 20.96c-0.87 0-1.61-0.74-1.61-1.62 0-0.87 0.74-1.61 1.61-1.61 0.87 0 1.61 0.74 1.62 1.61s-0.74 1.61-1.62 1.62z" class="nc-icon-wrapper"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'user_input',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M32.24 10.04c0-1.18-0.81-1.98-1.98-1.98h-28.28c-1.24 0-1.98 0.81-1.98 1.98v12.09c0 1.24 0.81 1.98 1.98 1.99h28.21c1.24 0 1.98-0.81 1.99-1.99v-12.09z m-1.98 12.16h-28.28v-12.16h28.21v12.16z"></path><path d="M4.03 12.09h1.98v8.06h-1.98v-8.06z"></path></g></svg>',
				set_id: 1
			},
			{
				name: 'vertical_layout',
				content: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="32" height="32" viewBox="0 0 32 32" xml:space="preserve"><g class="nc-icon-wrapper" stroke="none" fill="#706e6b"><path d="M0 29.76c0 1.12 0.87 1.98 1.98 1.98h5.27c1.12 0 1.98-0.87 1.99-1.98v-27.28c0-1.12-0.87-1.98-1.99-1.98h-5.27c-1.12 0-1.98 0.87-1.98 1.98v27.28z"></path><path d="M13.45 0.5c-1.12 0-1.98 0.87-1.98 1.98v27.28c0 1.12 0.87 1.98 1.98 1.98h5.27c1.12 0 1.98-0.87 1.99-1.98v-27.28c0-1.12-0.87-1.98-1.99-1.98h-5.27z"></path><path d="M24.99 31.74h5.27c1.12 0 1.98-0.87 1.98-1.98v-27.28c0-1.12-0.87-1.98-1.98-1.98h-5.27c-1.12 0-1.98 0.87-1.99 1.98v27.28c0 1.12 0.87 1.98 1.99 1.98z"></path></g></svg>',
				set_id: 1
			}
		];

		return (
			<IconsViewer icons={cloudSenseIcons} />
		);
	}
}

export default CloudSenseIconsPreview;
