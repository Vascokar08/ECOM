import React from 'react';
import ChatBot from 'react-chatbotify';

const MyChatBot = () => {
	const [form, setForm] = React.useState({});
	const formStyle = {
		marginTop: 10,
		marginLeft: 20,
		border: "1px solid #491d8d",
		padding: 10,
		borderRadius: 5,
		maxWidth: 300
	}

	const flow={
		start: {
			message: "Hello there! What is your name?",
			function: (params) => setForm({...form, name: params.userInput}),
			path: "ask_choice"
		},
		ask_choice: {
			message: (params) => `Nice to meet you ${params.userInput}, Which category of product are you looking for?`,
			checkboxes: {items: ["Smart watch", "Laptop", "Headphones", "TV", "Mobile"], min: 1, max: 4},
			chatDisabled: true,
			function: (params) => setForm({...form, pet_choices: params.userInput}),
			path: "end"
		},
		end: {
			message: "Thank you for your interest, we will get back to you shortly!",
			chatDisabled: true,
			path: "start"
		},
	}
	return (
		<ChatBot options={{header: {title: "Jarvis"}, theme: {embedded: false, showFooter: false}, chatHistory: {storageKey: "example_advanced_form"}}} flow={flow}/>
	);
};

export default MyChatBot