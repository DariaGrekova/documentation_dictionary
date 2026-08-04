import WordCard from '../WordCard/WordCard';

function WordGrid({ words, categories, onWordClick }) {

	const categoriesById = Object.fromEntries(
		categories.map((category) => [category.id, category])
	);

	return (
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
	);
}

export default WordGrid;