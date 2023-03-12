import { CartesianGrid, Label, Legend, Line, LineChart as RechartsLineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, Title } from '../atoms';

export function LineChart({ title, data, dataKey }) {
	return (
		<Card>
			<Title>{title}</Title>
			<ResponsiveContainer width="100%" aspect={3}>
				<RechartsLineChart data={data}>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="time" hide={true} />
					<YAxis width={20} />
					<Tooltip />
					<Line type="monotone" dataKey={dataKey} stroke="#ef7622" />
				</RechartsLineChart>
			</ResponsiveContainer>
		</Card>
	);
}