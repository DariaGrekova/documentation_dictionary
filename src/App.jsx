import './App.css'
import { useState } from 'react';
import {
	BookOpen,
	Boxes,
	Braces,
	Cpu,
	Gauge,
	Layers,
	Wrench,
} from 'lucide-react';
import Sidebar from './components/Sidebar/Sidebar';
import CategoryArea from './components/CategoryArea/CategoryArea';
import WordGrid from './components/WordGrid/WordGrid';

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
const mockWords = [
	{
		id: 1,
		word: 'component',
		transcription: '[kəmˈpoʊnənt]',
		translation: 'компонент',
		category: 'basics',
	},
	{
		id: 2,
		word: 'render',
		transcription: '[ˈrɛndər]',
		translation: 'рендер / отрисовка',
		category: 'basics',
	},
	{
		id: 3,
		word: 'state',
		transcription: '[steɪt]',
		translation: 'состояние',
		category: 'state',
	},
	{
		id: 4,
		word: 'props',
		transcription: '[prɑps]',
		translation: 'пропсы / свойства',
		category: 'state',
	},
	{
		id: 5,
		word: 'useState',
		transcription: '[juːz steɪt]',
		translation: 'хук состояния',
		category: 'hooks',
	},
	{
		id: 6,
		word: 'composition',
		transcription: '[ˌkɑmpəˈzɪʃən]',
		translation: 'композиция',
		category: 'components',
	},
];

function App() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const selectedCategoryData = categories.find(
		(category) => category.id === selectedCategory
	);

	const filteredWords = mockWords.filter(
		(word) =>
			selectedCategory === 'all' ||
			word.category === selectedCategory
	);

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<div className="flex min-h-screen">
				<Sidebar
					categories={categories}
					selectedCategory={selectedCategory}
					onCategorySelect={setSelectedCategory}
				/>

				<main className="min-w-0 flex-1">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<header className="mb-8">
							<div className="mb-6">
								<p className="mb-1 text-sm font-medium text-indigo-600">
									React Dictionary
								</p>

								<h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
									React English Dictionary
								</h1>

								<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
									Англо-русский словарь для изучения React и чтения технической
									документации.
								</p>
							</div>
						</header>
						<section>

							<CategoryArea
								category={selectedCategoryData}
								wordsCount={filteredWords.length} />

							<WordGrid
								words={filteredWords}
								categories={categories}
							/>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
