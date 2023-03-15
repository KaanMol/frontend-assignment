import { Disclosure } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Logo } from './molecules';
import { Dropdown } from './atoms';
import { useState } from 'react';

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [{ name: 'Dashboard', href: '#', current: true }];

const userNavigation = [
	{ name: 'Your Profile', href: '#' },
	{ name: 'Settings', href: '#' },
	{ name: 'Sign out', href: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export function Page({
	children,
	locale,
}: {
	children: React.ReactNode;
	locale: {
		currentLocale: string;
		locales: { name: string; action: () => void }[];
	};
}) {
	return (
		<>
			<div className="min-h-full">
				<Disclosure as="nav" className="bg-sky-800">
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<Logo height={10} width={10} />
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className={classNames(
															item.current
																? 'bg-sky-900 text-white'
																: 'text-white hover:bg-sky-700 hover:bg-opacity-75',
															'rounded-md px-3 py-2 text-sm font-medium'
														)}
														aria-current={
															item.current
																? 'page'
																: undefined
														}
													>
														{item.name}
													</a>
												))}
											</div>
										</div>
									</div>
									<div className="hidden md:block">
										<div className="ml-4 flex items-center md:ml-6">
											{/* Locale dropdown */}
											<Dropdown items={locale.locales}>
												{locale.currentLocale}
											</Dropdown>
										</div>
									</div>
									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-sky-600 p-2 text-sky-200 hover:bg-sky-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600">
											<span className="sr-only">
												Open main menu
											</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							<Disclosure.Panel className="md:hidden">
								<div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
									{navigation.map((item) => (
										<Disclosure.Button
											key={item.name}
											as="a"
											href={item.href}
											className={classNames(
												item.current
													? 'bg-sky-700 text-white'
													: 'text-white hover:bg-sky-500 hover:bg-opacity-75',
												'block rounded-md px-3 py-2 text-base font-medium'
											)}
											aria-current={
												item.current
													? 'page'
													: undefined
											}
										>
											{item.name}
										</Disclosure.Button>
									))}
								</div>
								<div className="border-t border-sky-700 pt-4 pb-3">
									<div className="flex items-center px-5">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src={user.imageUrl}
												alt=""
											/>
										</div>
										<div className="ml-3">
											<div className="text-base font-medium text-white">
												{user.name}
											</div>
											<div className="text-sm font-medium text-sky-300">
												{user.email}
											</div>
										</div>
										<button
											type="button"
											className="ml-auto flex-shrink-0 rounded-full bg-sky-600 p-1 text-sky-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-600"
										>
											<span className="sr-only">
												View notifications
											</span>
											<BellIcon
												className="h-6 w-6"
												aria-hidden="true"
											/>
										</button>
									</div>
									<div className="mt-3 space-y-1 px-2">
										{userNavigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-sky-500 hover:bg-opacity-75"
											>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>

				<header className="dark:bg-slate-900 bg-white shadow-sm">
					<div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
						<h1 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100">
							Dashboard
						</h1>
					</div>
				</header>
				<main>
					<div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-3">
						{children}
					</div>
				</main>
			</div>
		</>
	);
}
