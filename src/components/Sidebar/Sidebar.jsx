import { useState } from 'react';
import {
	Menu,
	X,
	BookOpen,
	Boxes,
	Braces,
	Cpu,
	Gauge,
	Layers,
	Wrench,
} from 'lucide-react';

import SidebarItem from './SidebarItem';

const categories = [
	{
		id: 'all',
		label: 'Все слова',
		icon: BookOpen,
	},
	{
		id: 'basics',
		label: 'Базовые понятия',
		icon: Braces,
	},
	{
		id: 'state',
		label: 'Состояние и данные',
		icon: Layers,
	},
	{
		id: 'hooks',
		label: 'Хуки',
		icon: Cpu,
	},
	{
		id: 'components',
		label: 'Компоненты и композиция',
		icon: Boxes,
	},
	{
		id: 'performance',
		label: 'Производительность',
		icon: Gauge,
	},
	{
		id: 'technical',
		label: 'Общетехническая лексика',
		icon: Wrench,
	},
];

function Sidebar({ selectedCategory, onCategorySelect }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(!isOpen);

	return (
		<div className="relative min-h-screen bg-gray-100 flex">
			<button
				onClick={toggleSidebar}
				className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden hover:bg-gray-50 transition-colors"
			>{isOpen ? (
				<X className="w-6 h-6 text-gray-800" />
			) : (
				<Menu className="w-6 h-6 text-gray-800" />
			)}
			</button>

			<aside className={`fixed top-0 left-0 z-40 h-full w-64 shrink-0 border-r border-slate-200 bg-white lg:block shadow-2xl transform transition-transform duration-300 ease-in-out 
				${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:shadow-none
        `}>
				<div className="sticky top-0 flex h-screen flex-col">
					<div className="border-b border-slate-200 px-5 py-5">
						<div className="flex items-center gap-3 ml-12 lg:ml-0">
							<div className="hidden flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white lg:flex">
								&lt;/&gt;
							</div>

							<div>
								<p className="font-semibold text-slate-900">
									React Words
								</p>

								<p className="text-xs text-slate-500">
									English → Русский
								</p>
							</div>
						</div>
					</div>

					<nav className="flex-1 overflow-y-auto px-3 py-5">
						<p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
							Categories
						</p>

						<div className="space-y-1">
							{categories.map((category) => (
								<SidebarItem
									key={category.id}
									label={category.label}
									icon={category.icon}
									active={selectedCategory === category.id}
									onClick={() => onCategorySelect(category.id)}
								/>
							))}
						</div>
					</nav>
				</div>
			</aside>
			{isOpen && (
				<div
					className="fixed inset-0 z-30 bg-black/40 lg:hidden"
					onClick={toggleSidebar}
				/>
			)}
		</div>
	);
}

export default Sidebar;