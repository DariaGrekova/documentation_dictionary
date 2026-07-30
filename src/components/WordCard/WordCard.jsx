import { ArrowUpRight } from 'lucide-react';

function WordCard({ word, category }) {
	return (
		<button
			type="button"
			className="
        group
        relative
        flex
        min-h-40
        w-full
        flex-col
        rounded-xl
        border
        border-slate-200
        bg-white
        p-5
        text-left
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-indigo-200
        hover:shadow-md
        focus:outline-none
        focus:ring-4
        focus:ring-indigo-500/10
      "
		>
			<div className="flex items-start justify-between gap-4">
				<div>
					<h3 className="text-lg font-semibold text-slate-900">
						{word.word}
					</h3>

					<p className="mt-1 font-mono text-xs text-slate-400">
						{word.transcription}
					</p>
				</div>

				<ArrowUpRight
					size={18}
					className="
            text-slate-300
            transition-colors
            group-hover:text-indigo-500
          "
				/>
			</div>

			<div className="mt-auto pt-6">
				<span className="
          inline-flex
          rounded-md
          bg-slate-100
          px-2.5
          py-1
          text-xs
          font-medium
          text-slate-500
        ">
					{category.label}
				</span>
			</div>
		</button>
	);
}

export default WordCard;