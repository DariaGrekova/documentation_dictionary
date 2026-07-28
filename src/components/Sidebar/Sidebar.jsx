import {
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
	return (
		<aside className="w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
			<div className="sticky top-0 flex h-screen flex-col">
				<div className="border-b border-slate-200 px-5 py-5">
					<div className="flex items-center gap-3">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
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
	);
}

export default Sidebar;