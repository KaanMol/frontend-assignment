// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LineChart, Map, TextStatistics } from '@front-end-assignment/ui';
import { Page } from '@front-end-assignment/ui';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import i18next from '../translations';

type BusData = {
	time: Date,
	energy: number,
	gps: [number, number],
	odo: number,
	speed: number,
	soc: number
}

export function App() {
	const { t } = useTranslation();
	const [state, setState] = useState([] as BusData[]);
	const { lastMessage, readyState } = useWebSocket("ws://localhost:3000");

	useEffect(() => {
		const data = lastMessage?.data;
		if (data === undefined) return;

		let parsedData = JSON.parse(data);
		parsedData.gps = parsedData.gps.split("|");
		parsedData.time = new Date(parsedData.time);

		if (state.length >= 500) {
			state.shift();
		}

		setState([...state, parsedData])
	}, [lastMessage]);

	return (
		<Page>
			{
				state.at(-1) === undefined || readyState !== ReadyState.OPEN ?
					<p>Loading</p> :
					<Dashboard state={state} />
			}
		</Page>
	);
}

function Dashboard({ state }) {
	const { t } = useTranslation();
	const lastMessage = state.at(-1);
	const textStatisticsData = [
		{
			title: t("dashboard.time"),
			value: lastMessage.time.toLocaleTimeString()
		},
		{
			title: t("dashboard.odometer"),
			value: `${lastMessage.odo} km`
		},
		{
			title: t("dashboard.energy"),
			value: `${lastMessage.energy} kW`
		},
		{
			title: t("dashboard.speed"),
			value: `${lastMessage.speed} km/h`
		},
		{
			title: t("dashboard.charge"),
			value: `${lastMessage.soc} %`
		}
	]
	return <>
		<Map title="Live position" position={lastMessage.gps} />
		<TextStatistics title="Current statistics" statistics={textStatisticsData} />
		<LineChart title="Speed over time" data={state} dataKey="speed" />
		<LineChart title="State of charge over time" data={state} dataKey="soc" />
	</>
}

export default App;
