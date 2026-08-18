import {
	BookOpen,
	Boxes,
	Braces,
	Cpu,
	Gauge,
	ArrowRightLeft,
	Code2,
	Layers,
	Sparkles,
	Zap,
	Wrench,
	Blocks
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
		id: 'props',
		label: 'Пропсы и передача данных',
		icon: ArrowRightLeft,
	},
	{
		id: 'conditional',
		label: 'Условный рендер и списки',
		icon: Code2,
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
		id: 'architecture',
		label: 'Архитектура и концепции',
		icon: Layers,
	},
	{
		id: 'react19',
		label: 'React 19',
		icon: Sparkles,
	},
	{
		id: 'dev',
		label: 'Разработка и отладка',
		icon: Zap,
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
	{
		id: 'modal',
		label: 'Оценочные и модальные слова',
		icon: Blocks,
	},
	{
		id: 'basic-types',
		label: 'Базовые типы',
		icon: Wrench,
	},
	{
		id: 'everyday-types',
		label: 'Часто используемые типы',
		icon: Wrench,
	}
];

