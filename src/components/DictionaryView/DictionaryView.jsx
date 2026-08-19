import { useState } from 'react';

/* иконки */
import lexicodeLogoUrl from './assets/lexicode-logo.svg?url';
import {
	Menu,
	X,
	ArrowUp
} from 'lucide-react';

/* компоненты */
import AlphabetFilter from '../AlphabetFilter/AlphabetFilter'
import SortFilter from '../AlphabetFilter/SortFilter';
import CategoryArea from '../CategoryArea/CategoryArea';
import WordGrid from '../WordGrid/WordGrid';
import WordModal from '../WordModal/WordModal';
import CategorySelect from '../CategorySelect/CategorySelect';

function DictionaryView({
	selectedDictionaryData,
	selectedDictionary,
	selectedLetter,
	handleLetterSelect,
	availableLetters,
	categories,
	selectedCategory,
	handleCategorySelect,
	sortType,
	setSortType,
	selectedCategoryData,
	filteredWords,
	error,
	loading,
	handleRetry,
	displayedWords,
	hasMoreWords,
	handleAddMore,
	selectedWord,
	setSelectedWord
}) {
	/* стейты */

	return (
		<main className="min-w-0 flex-1 lg:ml-64">
			<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
				<header className="mb-8">
					<div
						className="
									fixed inset-x-0 top-0 z-50
									flex h-14 items-center justify-between
									border-b border-slate-200/80
									bg-white/90
									px-4
									shadow-sm
									backdrop-blur-md
									lg:hidden
								"
					>
						<div className='flex'>
							<button
								onClick={toggleSidebar}
								type="button"
								className="
										flex h-9 w-9 shrink-0
										items-center justify-center
										rounded-lg
										text-indigo-600
										transition-colors
										hover:bg-indigo-50
										focus:outline-none
										focus:ring-2
										focus:ring-indigo-500/30
									"
								aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
							>
								{isOpen ? (
									<X size={21} strokeWidth={1.8} />
								) : (
									<Menu size={21} strokeWidth={1.8} />
								)}
							</button>

							<div className="ml-3 min-w-0">
								<p className="truncate text-sm font-semibold text-slate-900">
									{selectedDictionaryData?.label || selectedDictionary} Dictionary
								</p>
								<p className="truncate text-xs text-slate-500">
									English → Русский
								</p>
							</div>
						</div>
						<img src={lexicodeLogoUrl} alt="LexiCode" className='w-auto h-full' />
					</div>

					<div className="hidden lg:block">
						<div className="mb-6">
							<h1 className="mb-1 text-sm font-medium text-indigo-600">
								{selectedDictionaryData?.label || selectedDictionary} Dictionary
							</h1>

							<p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
								Англо-русский словарь для изучения {selectedDictionaryData?.label || selectedDictionary} и чтения технической
								документации.
							</p>
						</div>
					</div>
				</header>
				<section className='mt-12 lg:mt-0'>

					<AlphabetFilter
						selectedLetter={selectedLetter}
						onLetterSelect={handleLetterSelect}
						availableLetters={availableLetters}
					/>
					<div className="mb-5 grid grid-cols-[1fr_1fr_auto] gap-3">
						<CategorySelect
							categories={categories}
							selectedCategory={selectedCategory}
							onCategorySelect={handleCategorySelect}
						/>

						<SortFilter
							sortType={sortType}
							onSortChange={setSortType}
						/>
					</div>

					<CategoryArea
						category={selectedCategoryData}
						wordsCount={filteredWords.length}
					/>


					{error ? (
						<div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center">
							<p className="text-red-600 font-medium">Не удалось загрузить словарь.</p>
							<p className="mt-1 text-sm text-red-500">Попробуйте ещё раз.</p>
							<button
								onClick={handleRetry}
								className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
							>
								Попробовать снова
							</button>
						</div>
					) : loading ? (
						<div className="mt-8 flex justify-center py-12">
							<div className="h-8 w-8 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" />
							<p className="ml-3 text-sm text-slate-500">Идет загрузка слов...</p>
						</div>
					) : (
						<WordGrid
							words={displayedWords}
							categories={categories}
							onWordClick={(word) => setSelectedWord(word)}
							hasMoreWords={hasMoreWords}
							handleAddMore={handleAddMore}
						/>
					)}

					{selectedWord && (
						<WordModal
							word={selectedWord}
							onClose={() => setSelectedWord(null)}
						/>
					)}
				</section>
			</div>

			{showScrollToTop && (
				<button
					type='button'
					className='fixed 
							bottom-5
							right-3
							flex
              h-11
              items-center
              gap-2
              rounded-full
              px-3
              text-sm
              font-medium
              transition-colors
							text-white
							bg-indigo-400/50
							hover:bg-indigo-600
							transparent-0.5'
					onClick={pageUp}
				>
					<ArrowUp size={21} strokeWidth={1.8} />
				</button>
			)}
		</main>
	);
}

export default DictionaryView;