import { Card, Title } from "../atoms";

type StatisticData = {
	title: string,
	value: string
}

function Statistic({ data }: { data: StatisticData }) {
	return <>
		<h3 className="text-l dark:text-gray-100">{data.title}</h3>
		<h1 className="text-xl dark:text-gray-100">{data.value}</h1>
		<br />
	</>
}

export function TextStatistics({ title, statistics }: { title: React.ReactNode, statistics: StatisticData[] }) {
	return <Card>
		<Title>{title}</Title>
		{statistics.map(statistic => <Statistic key={statistic.title} data={statistic} />)}
	</Card>
}