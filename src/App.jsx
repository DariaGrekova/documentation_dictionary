import './App.css';
import { dictionaries } from './data/dictionaries';
import { useState, useEffect } from 'react';

/* компоненты */
import DictionaryView from './components/DictionaryView/DictionaryView';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	/* стейты */

	const [words, setWords] = useState([]);
	const [visibleBatches, setVisibleBatches] = useState({ all: 1 });
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	/* меню */
	const [selectedDictionary, setSelectedDictionary] = useState('react');

	/* фильтры */
	const [selectedCategory, setSelectedCategory] = useState('all');
	const [selectedWord, setSelectedWord] = useState(null);
	const [selectedLetter, setSelectedLetter] = useState('all');
	const [sortType, setSortType] = useState('default');

	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => setIsOpen(prev => !prev);
	const [showScrollToTop, setShowScrollToTop] = useState(false);
	const WORDS_PER_BATCH = 6;


	const getWords = async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/DariaGrekova/remote_data/refs/heads/main/dictionary/words.json'
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

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollToTop(window.scrollY > 400)
		};

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const dictionaryWords = words.filter(
		(word) => word.section === selectedDictionary
	);

	const handleDictionarySelect = (dictionary) => {
		setSelectedDictionary(dictionary);

		setSelectedCategory('all');
		setSelectedLetter('all');
		setSortType('default');

		setIsOpen(false);

		window.scrollTo(0, 0);
	}


	const handleCategorySelect = (category) => {
		setSelectedCategory(category);

		setSelectedLetter('all');
		setVisibleBatches(prev => ({
			...prev,
			[`${selectedDictionary}-${category}`]: 1
		}));

		setIsOpen(false);

		window.scrollTo(0, 0);
	};

	const handleRetry = () => {
		setError(null);
		setLoading(true);
		fetchWords();
	};

	const pageUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const handleLetterSelect = (letter) => {
		setSelectedLetter(letter);

		setVisibleBatches(prev => ({
			...prev,
			[`${selectedDictionary}-${selectedCategory}`]: 1
		}));

		window.scrollTo(0, 0);
	};

	const categoryWords = dictionaryWords.filter(
		(word) =>
			selectedCategory === 'all' ||
			word.category === selectedCategory
	);

	const filteredWords = categoryWords.filter(
		(word) =>
			selectedLetter === 'all' ||
			word.word[0].toUpperCase() === selectedLetter
	);

	const availableLetters = new Set(
		categoryWords.map(word => word.word[0].toUpperCase())
	);

	const sortedWords = [...filteredWords].sort((a, b) => {
		if (sortType === 'asc') {
			return a.word.localeCompare(b.word);
		}

		if (sortType === 'desc') {
			return b.word.localeCompare(a.word);
		}

		return 0;
	})

	/* составной ключ для корректной работы Infinite Scroll */
	const batchKey = `${selectedDictionary}-${selectedCategory}`;
	const currentBatch = visibleBatches[batchKey] || 1;

	const displayedWords = sortedWords.slice(0, WORDS_PER_BATCH * currentBatch);

	const hasMoreWords = sortedWords.length > displayedWords.length;

	/* выбор раздела */
	const selectedDictionaryData = dictionaries.find(
		dictionary => dictionary.id === selectedDictionary
	);

	/* выбор категории */
	const categories = selectedDictionaryData?.categories ?? [];

	const selectedCategoryData =
		selectedCategory === 'all'
			? { id: 'all', label: 'Все слова' }
			: categories.find(
				(category) => category.id === selectedCategory
			);

	const handleAddMore = () => {
		setVisibleBatches(prev => ({
			...prev,
			[batchKey]: (prev[batchKey] || 1) + 1
		}));
	};

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<div className="flex min-h-screen">
				<Sidebar
					dictionaries={dictionaries}
					selectedDictionary={selectedDictionary}
					onDictionarySelect={handleDictionarySelect}
					onClose={toggleSidebar}
					isOpen={isOpen}
				/>
			</div>

			<DictionaryView
				selectedDictionaryData={selectedDictionaryData}
				selectedDictionary={selectedDictionary}

				selectedLetter={selectedLetter}
				handleLetterSelect={handleLetterSelect}
				availableLetters={availableLetters}

				categories={categories}
				selectedCategory={selectedCategory}
				handleCategorySelect={handleCategorySelect}

				sortType={sortType}
				setSortType={setSortType}

				selectedCategoryData={selectedCategoryData}
				filteredWords={filteredWords}

				error={error}
				loading={loading}
				handleRetry={handleRetry}

				displayedWords={displayedWords}
				hasMoreWords={hasMoreWords}
				handleAddMore={handleAddMore}

				selectedWord={selectedWord}
				setSelectedWord={setSelectedWord}
			/>
		</div>
	);
}

export default App;
