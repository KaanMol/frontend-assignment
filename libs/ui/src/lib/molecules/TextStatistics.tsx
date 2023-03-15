import { Card, Progressbar, Title } from '../atoms';

type TextStatistic = {
	title: string;
	value: string;
};

type ProgressbarStatistic = {
	title: string;
	value: number;
	suffic: string;
};

function Statistic({ data }: { data: TextStatistic | ProgressbarStatistic }) {
	return (
		<>
			<h3 className="text-l dark:text-gray-100">{data.title}</h3>
			<h1 className="text-xl dark:text-gray-100">{data.value}</h1>
			<br />
		</>
	);
}

export function TextStatistics({
	title,
	statistics,
}: {
	title: React.ReactNode;
	statistics: StatisticData[];
}) {
	return (
		<Card>
			<Title>{title}</Title>
			{statistics.map((statistic) => (
				<Statistic key={statistic.title} data={statistic} />
			))}
			<Progressbar percentage={20} />
		</Card>
	);
}
