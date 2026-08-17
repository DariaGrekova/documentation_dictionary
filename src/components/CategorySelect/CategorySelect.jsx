

const CategorySelect = ({ sortType, onSortChange }) => {
	return (
		<div>
			<select
				value={sortType}
				onChange={(event) => onSortChange(event.target.value)}
				className="
          h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white
          px-4 pr-8 text-sm font-medium text-slate-700 shadow-sm
          transition-all duration-200 hover:border-indigo-300 hover:shadow-md
          focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20
          cursor-pointer
        "
			>
				<option value="default">По умолчанию</option>
				<option value="asc">A → Z</option>
				<option value="desc">Z → A</option>
			</select>


			<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
				<svg
					className="h-4 w-4 text-slate-400 transition-transform duration-200"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</div>

		</div>

	);
};

export default CategorySelect;