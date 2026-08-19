import './App.css';
import { useState, useEffect } from 'react';
import { dictionaries } from './data/dictionaries';

/* компоненты */
import DictionaryView from './components/DictionaryView/DictionaryView';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	const [words, setWords] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedDictionary, setSelectedDictionary] = useState('react');
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen(prev => !prev);

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

	const handleDictionarySelect = (dictionary) => {
		setSelectedDictionary(dictionary);
		setIsOpen(false);
		window.scrollTo(0, 0);
	}

	const handleRetry = () => {
		setError(null);
		setLoading(true);
		fetchWords();
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
				<DictionaryView
					words={words}
					error={error}
					loading={loading}
					handleRetry={handleRetry}
					selectedDictionary={selectedDictionary}
					toggleSidebar={toggleSidebar}
					isOpen={isOpen}
				/>
			</div>

		</div>
	);
}

export default App;
