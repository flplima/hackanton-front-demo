import React, { useState } from "react";

import MessageItem from "../MessageItem";
import MessageInput from "../MessageInput";

import { Container } from "./styles";

const RightSide: React.FC = () => {
	const [newMessage, setNewMessage] = useState("");

	const [messages, setMessages] = useState([
		{
			id: 0,
			isMe: false,
			message: "Olá, estou sendo desenvolvida ainda, favor falar com o Pedro",
			time: "00:00",
			name:"Bot"
		},
	]);

	const handleChange = ({ target }: any) => {
		setNewMessage(target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setMessages([
			...messages,
			{
				id: messages.length + 1,
				isMe: true,
				message: newMessage,
				time: "19:09",
				name: "Pedro"
			},
		]);
		setNewMessage("");
	};

	return (
		<Container>
			<main>
				{messages.map((message) => {
					return (
						<MessageItem
							key={message.id}
							isMe={message.isMe}
							message={message.message}
							time={message.time}
							name={message.name}
						/>
					);
				})}
			</main>

			<form onSubmit={handleSubmit}>
				<MessageInput handleChange={handleChange} value={newMessage} />
			</form>
		</Container>
	);
};

export default RightSide;
