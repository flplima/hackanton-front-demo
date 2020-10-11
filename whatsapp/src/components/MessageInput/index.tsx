import React from 'react';

import './styles.scss';

interface props {
	value: string;
	handleChange: (event: any) => any;
}

const Component: React.FC<props> = ({ handleChange, value }) => {
	return (
		<div id="messageInput">
			<input type="text" placeholder="Type a message" onChange={handleChange} value={value} />
		</div>
	);
}

export default Component;