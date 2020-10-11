import React from "react";

import "./styles.scss";

interface props {
	isMe: boolean;
	name?: string;
	message: string;
	time: string;
}

const Component: React.FC<props> = ({ isMe, name, message, time }) => {
	return (
		<div
			id="message"
			style={
				isMe
					? { justifyContent: "flex-end" }
					: {}
			}
		>
			<main style={isMe ? { backgroundColor: "var(--active-tab-marker" } : {}}>
				<div id="messageInfo">{isMe ? "" : <span>{name}</span>}</div>

				<p>
					{message}
					<span> {time} </span>
				</p>
			</main>
		</div>
	);
};

export default Component;
