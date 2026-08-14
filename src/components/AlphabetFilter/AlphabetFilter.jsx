const alphabet = [
	'all',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'R',
	'S',
	'T',
	'U',
	'V',
];

function AlphabetFilter({ selectedLetter, onLetterSelect }) {
	return (
		<div className="mb-2 flex gap-1.5 max-w-[90vw] overflow-x-auto pb-3">
			{alphabet.map((letter) => (
				<button
					key={letter}
					onClick={() => {
						onLetterSelect(letter);
						console.log(letter)
					}}
					type="button"
					className={[
						'flex h-9 min-w-9 shrink-0 items-center justify-center rounded-lg px-2 text-xs font-medium transition-colors',
						selectedLetter === letter
							? 'bg-indigo-600 text-white shadow-sm'
							: 'text-slate-500 hover:bg-white hover:text-slate-900',
					].join(' ')}
				>
					{letter === 'all' ? 'Все' : letter}
				</button>
			))}
		</div>
	);
}

export default AlphabetFilter;