const CategoryArea = ({ category, wordsCount }) => {


	const getWordCountLabel = (wordsCount) => {
		const n = Number(wordsCount);
		const lastDigit = n % 10;
		const lastTwoDigits = n % 100;

		if (lastDigit === 1 && lastTwoDigits !== 11) {
			return `${n} термин`;
		}

		if (
			lastDigit >= 2 &&
			lastDigit <= 4 &&
			(lastTwoDigits < 10 || lastTwoDigits >= 20)
		) {
			return `${n} термина`;
		}

		return `${n} терминов`;
	};

	return (
		<div className="mb-4 flex items-center justify-between">
			<div>
				<h2 className="text-lg font-semibold text-slate-900">
					{category.label}
				</h2>

				<p className="mt-1 text-sm text-slate-500">
					{getWordCountLabel(wordsCount)}
				</p>
			</div>
		</div>
	);
};

export default CategoryArea;