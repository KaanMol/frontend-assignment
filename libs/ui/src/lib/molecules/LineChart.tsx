import {
	CartesianGrid,
	Line,
	LineChart as RechartsLineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { Card, Title } from '../atoms';

export function LineChart({
	title,
	data,
	dataKey,
}: {
	title: React.ReactNode;
	data: any[];
	dataKey: string;
}) {
	return (
		<Card>
			<Title>{title}</Title>
			<ResponsiveContainer width="100%" aspect={3}>
				<RechartsLineChart data={data}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="time" hide={true} />
					<YAxis width={25} />
					<Tooltip />
					<Line type="monotone" dataKey={dataKey} stroke="#ef7622" />
				</RechartsLineChart>
			</ResponsiveContainer>
		</Card>
	);
}
