import ReactLogo from '../assets/react.svg?react';
import TypeScriptLogo from '../assets/typescript.svg?react';

export const dictionaries = [
	{
		id: 'react',
		label: 'React',
		icon: ReactLogo,
		categories: [
			{ id: 'basics', label: 'Базовые понятия' },
			{ id: 'state', label: 'Состояние и данные' },
			{ id: 'props', label: 'Пропсы и передача данных' },
			{ id: 'conditional', label: 'Условный рендер и списки' },
			{ id: 'hooks', label: 'Хуки' },
			{ id: 'components', label: 'Компоненты и композиция' },
			{ id: 'architecture', label: 'Архитектура и концепции' },
			{ id: 'react19', label: 'React 19' },
			{ id: 'dev', label: 'Разработка и отладка' },
			{ id: 'performance', label: 'Производительность' },
			{ id: 'technical', label: 'Общетехническая лексика' },
			{ id: 'modal', label: 'Оценочные и модальные слова' },
		]
	},
	{
		id: 'typescript',
		label: 'TypeScript',
		icon: TypeScriptLogo,
		categories: [
			{ id: 'basic-types', label: 'Базовые типы' },
			{ id: 'everyday-types', label: 'Часто используемые типы' },
		]
	}
];