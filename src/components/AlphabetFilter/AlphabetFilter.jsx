const FULL_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const alphabet = ['all', ...FULL_ALPHABET];

function AlphabetFilter({ selectedLetter, onLetterSelect, availableLetters }) {
	return (
		<div className="custom-scroll mb-2 flex gap-1.5 overflow-x-auto pb-3 max-w-[90vw]">
			{alphabet.map((letter) => {
				const isAll = letter === 'all';
				const isAvailable = isAll || availableLetters.has(letter);

				return (
					<button
						key={letter}
						type="button"
						onClick={() => isAvailable && onLetterSelect(letter)}
						disabled={!isAvailable}
						className={[
							'flex h-9 min-w-9 shrink-0 items-center justify-center rounded-lg px-2 text-xs font-medium transition-colors',
							selectedLetter === letter
								? 'bg-indigo-600 text-white shadow-sm'
								: isAvailable
									? 'text-slate-500 hover:bg-white hover:text-slate-900'
									: 'text-slate-500/30 cursor-not-allowed',
						].join(' ')}
					>
						{isAll ? 'Все' : letter}
					</button>
				);
			})}
		</div>
	);
}

export default AlphabetFilter;