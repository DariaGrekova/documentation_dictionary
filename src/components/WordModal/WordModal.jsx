import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function WordModal({ word, onClose }) {
	const slides = ['example', 'translation'];
	const [currentSlide, setCurrentSlide] = useState(slides[0]);

	if (!word) {
		return null;
	}

	const goToPrevSlide = () => {
		const currentIndex = slides.indexOf(currentSlide);
		if (currentIndex > 0) {
			setCurrentSlide(slides[currentIndex - 1]);
		}
	};

	const goToNextSlide = () => {
		const currentIndex = slides.indexOf(currentSlide);
		if (currentIndex < slides.length - 1) {
			setCurrentSlide(slides[currentIndex + 1]);
		}
	};

	return (
		<div
			className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-900/40
        p-4
        backdrop-blur-sm
      "
		>
			<div
				className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
        "
			>
				<button
					type="button"
					onClick={() => {
						setCurrentSlide(slides[0]);
						onClose();
					}}
					className="
            absolute
            right-4
            top-4
            z-10
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-slate-400
            transition-colors
            hover:bg-slate-100
            hover:text-slate-700
          "
					aria-label="Закрыть"
				>
					<X size={20} />
				</button>
				<div className="border-b border-slate-200 px-6 py-5 sm:px-8">
					<p className="text-md lg:text-xl font-semibold text-slate-900">
						{word.word}
					</p>

					<p className="mt-1 font-mono text-sm text-slate-400">
						{word.transcription}
					</p>
				</div>

				<div className="px-6 py-8 sm:px-8">
					<div className="mb-8 flex justify-center gap-2">
						{slides.map((slide) => (
							<span
								key={slide}
								className={`text-xs font-medium text-slate-400
									h-1.5 w-8 rounded-full transition-colors duration-300
									${currentSlide === slide ? 'bg-indigo-600' : 'bg-slate-200'}
								`}
							/>
						))}
					</div>

					<div className="min-h-64">

						{currentSlide === 'example' ? (
							<>
								<p className="mb-2 text-s font-semibold uppercase tracking-wider text-indigo-600">
									EN
								</p>

								<p className="lg:text-lg text-slate-600">
									{word.example?.en}
								</p>
							</>
						) : (
							<>
								<p className="mb-2 text-s font-semibold uppercase tracking-wider text-indigo-600">
									RU
								</p>

								<h2 className="mb-2 text-lg lg:text-2xl font-semibold text-slate-900">
									{word.translation}
								</h2>

								<p className="text-s lg:text-lg text-slate-600">
									{word.example?.ru}
								</p>
							</>
						)}
					</div>
				</div>




				<div className="flex items-center justify-between border-t border-slate-200 px-6 py-4 sm:px-8">
					<button
						type="button"
						onClick={goToPrevSlide}
						disabled={currentSlide === slides[0]}
						className={`
              flex
              h-10
              items-center
              gap-2
              rounded-lg
              px-3
              text-sm
              font-medium
              transition-colors
							${currentSlide === slides[0]
								? 'text-slate-300 cursor-not-allowed'
								: 'text-white bg-indigo-600 hover:bg-indigo-700'}
            `}
					>
						<ChevronLeft size={18} />
						Назад
					</button>


					<button
						type="button"
						onClick={goToNextSlide}
						disabled={currentSlide === slides[slides.length - 1]}
						className={`
              flex
              h-10
              items-center
              gap-2
              rounded-lg
              px-3
              text-sm
              font-medium
              transition-colors
							${currentSlide === slides[slides.length - 1]
								? 'text-slate-300 cursor-not-allowed'
								: 'text-white bg-indigo-600 hover:bg-indigo-700'}
            `}
					>
						Далее
						<ChevronRight size={18}
						/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default WordModal;