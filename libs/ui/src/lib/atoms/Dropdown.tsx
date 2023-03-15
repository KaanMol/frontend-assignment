import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function DropdownItem({ item }) {
	return (
		<Menu.Item>
			{({ active }) => (
				<button
					onClick={item.action}
					className={classNames(
						active
							? 'bg-gray-100 dark:bg-slate-700 text-gray-900'
							: 'text-gray-700',
						'block px-4 py-2 text-sm dark:text-gray-100 w-full text-left'
					)}
				>
					{item.name}
				</button>
			)}
		</Menu.Item>
	);
}

export function Dropdown({
	items,
	children,
}: {
	items: { name: string; action: () => void }[];
	children: React.ReactNode;
}) {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-sky-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset hover:bg-sky-900">
					{children}
					<ChevronDownIcon
						className="-mr-1 h-5 w-5 text-white"
						aria-hidden="true"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{items.map((item) => (
							<DropdownItem key={item.name} item={item} />
						))}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
