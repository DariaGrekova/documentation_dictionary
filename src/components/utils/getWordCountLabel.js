export const getWordCountLabel = (wordsCount) => {
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