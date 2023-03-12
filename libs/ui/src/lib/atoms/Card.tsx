export function Card(
	{ children, paddingX = 5, paddingY = 2 }:
		{
			paddingX?: number,
			paddingY?: number,
			children: React.ReactNode | React.ReactNode[]
		}) {
	return <div className={`dark:bg-slate-900 bg-white rounded-md overflow-hidden px-${paddingX} py-${paddingY}`}>
		{children}
	</div>
}