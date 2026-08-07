import WordCard from '../WordCard/WordCard';

function WordGrid({ words, categories, onWordClick, shouldShowButton, handleAddMore }) {

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
			{shouldShowButton && (
				<div className='flex justify-end mt-6'>
					<button
						type="button"
						className="flex
              h-10
              items-center
              gap-2
              rounded-lg
              px-3
              text-sm
              font-medium
              transition-colors
							text-white bg-indigo-600 hover:bg-indigo-700"
						onClick={handleAddMore}
					>
						Показать ещё
					</button>
				</div>
			)}
		</>
	);
}

export default WordGrid;