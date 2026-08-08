import './App.css';
import { categories } from './data/categories';
import { useState, useEffect } from 'react';
import {
	Menu,
	X
} from 'lucide-react';
import Sidebar from './components/Sidebar/Sidebar';
import CategoryArea from './components/CategoryArea/CategoryArea';
import WordGrid from './components/WordGrid/WordGrid';
import WordModal from './components/WordModal/WordModal';

function App() {
	const [words, setWords] = useState([]);
	const [visibleBatches, setVisibleBatches] = useState({ all: 1 });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(prev => !prev);
	const [selectedWord, setSelectedWord] = useState(null);
	const WORDS_PER_BATCH = 6;

	const getWords = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/DariaGrekova/remote_data/refs/heads/main/dictonary/words.json'
		);

		if (!response.ok) {
			throw new Error('Не удалось загрузить словарь');
		}

		return response.json();
	};

	const fetchWords = () => {
		getWords()
			.then((data) => {
				setWords(data);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchWords();
	}, []);

	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
		setIsOpen(false);

		window.scrollTo(0, 0);
	};

	const handleRetry = () => {
		setError(null);
		setLoading(true);
		fetchWords();
	};

	const filteredWords = words.filter(
		(word) =>
			selectedCategory === 'all' ||
			word.category === selectedCategory
	);

	const currentBatch = visibleBatches[selectedCategory] || 1;
	const displayedWords = filteredWords.slice(0, WORDS_PER_BATCH * currentBatch);

	const hasMoreWords = filteredWords.length > displayedWords.length;

	const selectedCategoryData = categories.find(
		(category) => category.id === selectedCategory
	);

	const handleAddMore = () => {
		setVisibleBatches(prev => ({
			...prev,
			[selectedCategory]: (prev[selectedCategory] || 1) + 1
		}));
	};

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<div className="flex min-h-screen">
				<Sidebar
					categories={categories}
					selectedCategory={selectedCategory}
					onCategorySelect={handleCategorySelect}
					onClose={toggleSidebar}
					isOpen={isOpen}
				/>

				<main className="min-w-0 flex-1 lg:ml-64">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<header className="mb-8">
							<div className="mb-6 flex lg:flex-col items-center justify-between  lg:items-start ">
								<button
									onClick={toggleSidebar}
									type="button"
									className="relative z-50
														flex h-10 w-10 items-center justify-center
														rounded-lg
														border border-slate-200
														bg-white
														text-indigo-500
														shadow-sm
														transition-all duration-200
														hover:border-indigo-200
														hover:bg-indigo-50
														hover:text-indigo-600
														focus:outline-none
														focus:ring-1 focus:ring-indigo-500/30
														lg:hidden"
									aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
								>
									{isOpen ? (
										<X size={21} strokeWidth={1.8} />
									) : (
										<Menu size={21} strokeWidth={1.8} />
									)}
								</button>
								<p className="mb-1 text-sm font-medium text-indigo-600">
									React Dictionary
								</p>
								<div className='hidden lg:block'>


									<h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
										React English Dictionary
									</h1>

									<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
										Англо-русский словарь для изучения React и чтения технической
										документации.
									</p>
								</div>
							</div>
						</header>
						<section>

							<CategoryArea
								category={selectedCategoryData}
								wordsCount={filteredWords.length} />

							{error ? (
								<div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center">
									<p className="text-red-600 font-medium">Не удалось загрузить словарь.</p>
									<p className="mt-1 text-sm text-red-500">Попробуйте ещё раз.</p>
									<button
										onClick={handleRetry}
										className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
									>
										Попробовать снова
									</button>
								</div>
							) : loading ? (
								<div className="mt-8 flex justify-center py-12">
									<div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
									<p className="ml-3 text-sm text-slate-500">Идет загрузка слов...</p>
								</div>
							) : (
								<WordGrid
									words={displayedWords}
									categories={categories}
									onWordClick={(word) => setSelectedWord(word)}
									hasMoreWords={hasMoreWords}
									handleAddMore={handleAddMore}
								/>
							)}

							{selectedWord && (
								<WordModal
									word={selectedWord}
									onClose={() => setSelectedWord(null)}
								/>
							)}
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
