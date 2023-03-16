
import { BusStatistics, LineChart, Loading, Map } from '@front-end-assignment/ui';
import { Page } from '@front-end-assignment/ui';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { toBusStatisticsData } from '../helpers/busStatistics';
import { languages } from '../locales';
import { BusData } from '../types/busData';

export function App() {
	const { i18n } = useTranslation();

	const [state, setState] = useState([] as BusData[]);
	const { lastMessage, readyState } = useWebSocket('ws://localhost:3000');

	useEffect(() => {
		const data = lastMessage?.data;
		if (data === undefined) return;

		const parsedData = JSON.parse(data);
		parsedData.gps = parsedData.gps.split('|');
		parsedData.time = new Date(parsedData.time);

		if (state.length >= 500) {
			state.shift();
		}

		setState([...state, parsedData]);
	}, [lastMessage, state]);

	const locales = Object.keys(languages).map((languageCode) => {
		const currentLanguage =
			languages[languageCode as keyof typeof languages];

		return {
			name: currentLanguage.name,
			action: () => {
				i18n.changeLanguage(languageCode);
				setLocale({
					...locale,
					currentLocale: currentLanguage.name,
				});
			},
		};
	});

	const [locale, setLocale] = useState({
		currentLocale: languages[i18n.language as keyof typeof languages]?.name ?? languages.en.name,
		locales,
	});

	return (
		<Page locale={locale}>
			{state.at(-1) === undefined || readyState !== ReadyState.OPEN ? (
				<Loading />
			) : (
				<Dashboard state={state} />
			)}
		</Page>
	);
}

function Dashboard({ state }) {
	const { t } = useTranslation();
	const lastMessage = state.at(-1);

	return (
		<>
			<Map
				title={t('dashboard.live_position')}
				position={lastMessage.gps}
			/>
			<BusStatistics
				title={t('dashboard.current_statistics')}
				statistics={toBusStatisticsData(lastMessage)}
			/>

			<LineChart
				title={t('dashboard.speed_over_time')}
				data={state}
				dataKey="speed"
			/>
			<LineChart
				title={t('dashboard.state_of_charge_over_time')}
				data={state}
				dataKey="soc"
			/>
		</>
	);
}

export default App;
