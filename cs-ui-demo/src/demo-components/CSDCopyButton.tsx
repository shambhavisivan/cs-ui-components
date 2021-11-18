import React, { useEffect, useRef, useState } from 'react';
import { CSButton } from '@cloudsense/cs-ui-components';

export interface CSDCopyButtonProps {
	code?: string;
}

const CSDCopyButton = ({ code = '' }: CSDCopyButtonProps) => {
	const copyButtonIconTimer = useRef<ReturnType<typeof setTimeout> | number>(0);
	const [copyButtonSuccess, setCopyButtonSuccess] = useState(false);

	const handleCopyButton = () => {
		navigator.clipboard.writeText(code || '');
		setCopyButtonSuccess(true);
		copyButtonIconTimer.current = setTimeout(() => {
			setCopyButtonSuccess(false);
		}, 3000);
	};

	useEffect(() => () => clearTimeout(copyButtonIconTimer.current as ReturnType<typeof setTimeout>), []);

	return (
		<CSButton
			label={copyButtonSuccess ? 'Copied' : 'Copy code'}
			labelHidden={!copyButtonSuccess}
			size="small"
			className="csd-toolbar-right"
			color="#666"
			iconName={copyButtonSuccess ? 'check' : 'copy'}
			onClick={handleCopyButton}
		/>
	);
};

export default CSDCopyButton;
