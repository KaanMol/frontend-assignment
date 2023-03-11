// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
	const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:3000");

	useEffect(() => {
		console.log(lastMessage)
	}, [lastMessage]);

	return (
		<>


			<div />
		</>
	);
}

export default App;
