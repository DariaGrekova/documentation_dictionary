import WordCard from '../WordCard/WordCard';

function WordGrid({ words, categories }) {


	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
			{
				words.map((word) => {
					const category = categories.find((category) => category.id === word.category);
					return (
						<WordCard
							key={word.id}
							word={word}
							category={category}
						/>
					)
				})
			}
		</div>
	);
}

export default WordGrid;