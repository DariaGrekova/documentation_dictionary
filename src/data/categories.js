import {
	BookOpen,
	Boxes,
	Braces,
	Cpu,
	Gauge,
	Layers,
	Wrench,
} from 'lucide-react';

export const categories = [
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

