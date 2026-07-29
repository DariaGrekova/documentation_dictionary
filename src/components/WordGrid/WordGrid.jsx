import WordCard from '../WordCard/WordCard';

function WordGrid({ words }) {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
			{words.map((word) => (
				<WordCard
					key={word.id}
					word={word}
				/>
			))}
		</div>
	);
}

export default WordGrid;