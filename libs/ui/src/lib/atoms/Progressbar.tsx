export function Progressbar({
	percentage,
	suffix,
}: {
	percentage: number;
	suffix?: string;
}) {
	console.log(suffix);
	return (
		<>
			<p className="dark:text-white font-bold">
				{percentage} {suffix}
			</p>
			<div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
				<div
					className="bg-blue-600 text-xs font-medium pl-2 text-blue-100 p-1 leading-none rounded-full"
					style={{ width: `${percentage}%` }}
				></div>
			</div>
		</>
	);
}
