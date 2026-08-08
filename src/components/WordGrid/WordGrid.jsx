import { useRef, useEffect } from 'react';
import WordCard from '../WordCard/WordCard';

function WordGrid({ words, categories, onWordClick, hasMoreWords, handleAddMore }) {
	const sentinelRef = useRef(null);


	useEffect(() => {
		if (!hasMoreWords) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					handleAddMore();
				}
			},
			{
				rootMargin: '0px 0px 150px 0px',
				threshold: 1,
			}
		);

		if (sentinelRef.current) {
			observer.observe(sentinelRef.current);
		}

		return () => observer.disconnect();
	}, [hasMoreWords, handleAddMore]);

	const categoriesById = Object.fromEntries(
		categories.map((category) => [category.id, category])
	);

	return (
		<>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{
					words.map((word) => {
						const category = categoriesById[word.category];

						return (
							<WordCard
								key={word.id}
								word={word}
								category={category}
								onClick={() => onWordClick(word)}
							/>
						)
					})
				}

			</div>
			{hasMoreWords && (
				<div
					ref={sentinelRef}
					className="mt-6 h-10 w-full"
				/>
			)}
		</>
	);
}

export default WordGrid;