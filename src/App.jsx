import './App.css';
import { categories } from './data/categories';
import { words } from './data/words';
import { useState } from 'react';
import {
	Menu,
	X
} from 'lucide-react';
import Sidebar from './components/Sidebar/Sidebar';
import CategoryArea from './components/CategoryArea/CategoryArea';
import WordGrid from './components/WordGrid/WordGrid';

function App() {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(prev => !prev);


	const selectedCategoryData = categories.find(
		(category) => category.id === selectedCategory
	);

	const filteredWords = words.filter(
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
					onClose={toggleSidebar}
					isOpen={isOpen}
				/>

				<main className="min-w-0 flex-1">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<header className="mb-8">
							<div className="mb-6 flex lg:flex-col items-center justify-between  lg:items-start ">
								<button
									onClick={toggleSidebar}
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
