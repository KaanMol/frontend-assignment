export function Card(
	{ children }:
	{
		children: React.ReactNode
	}) {
	return <div className={`dark:bg-slate-900 bg-white rounded-md overflow-hidden px-5 py-2`}>
		{children}
	</div>
}