export function Button({
	text,
	onClick,
}: {
	text: string;
	onClick: () => void;
}) {
	return (
		<button className="bg-sky-700 text-white p-1" onClick={onClick}>
			{text}
		</button>
	);
}
