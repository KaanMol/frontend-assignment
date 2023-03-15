import { Card, Progressbar, Title } from '../atoms';

export function ProgressbarStatistic({
	title,
	value,
}: {
	title: string;
	value: number;
}) {
	return (
		<Card>
			<Title>{title}</Title>
			<Progressbar percentage={20} />
		</Card>
	);
}
