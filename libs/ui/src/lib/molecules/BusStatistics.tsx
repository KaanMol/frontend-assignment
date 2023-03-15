import { Card, Progressbar, Title } from '../atoms';

export type BusStatisticsData = {
	time: {
		title: string;
		value: string;
	};
	odometer: {
		title: string;
		value: string;
	};
	energy: {
		title: string;
		value: string;
	};
	speed: {
		title: string;
		value: number;
		suffix?: string;
	};
	charge: {
		title: string;
		value: number;
		suffix?: string;
	};
};

export function BusStatistics({
	title,
	statistics,
}: {
	title: React.ReactNode;
	statistics: BusStatisticsData;
}) {
	return (
		<Card>
			<Title>{title}</Title>

			<h3 className="text-l dark:text-gray-100">
				{statistics.time.title}
			</h3>
			<h1 className="text-xl dark:text-gray-100 font-bold">
				{statistics.time.value}
			</h1>
			<br />

			<h3 className="text-l dark:text-gray-100">
				{statistics.odometer.title}
			</h3>
			<h1 className="text-xl dark:text-gray-100 font-bold">
				{statistics.odometer.value}
			</h1>
			<br />

			<h3 className="text-l dark:text-gray-100">
				{statistics.energy.title}
			</h3>
			<h1 className="text-xl dark:text-gray-100 font-bold">
				{statistics.energy.value}
			</h1>
			<br />

			<h3 className="text-l dark:text-gray-100">
				{statistics.speed.title}
			</h3>
			<Progressbar
				percentage={statistics.speed.value}
				suffix={statistics.speed.suffix}
			/>

			<br />
			<h3 className="text-l dark:text-gray-100">
				{statistics.charge.title}
			</h3>
			<Progressbar
				percentage={statistics.charge.value}
				suffix={statistics.charge.suffix}
			/>
		</Card>
	);
}
