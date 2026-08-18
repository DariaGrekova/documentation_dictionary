

import {
	ListFilter,
	ChevronDown,
} from 'lucide-react';

const CategorySelect = ({ categories, selectedCategory, onCategorySelect }) => {
	return (
		<div className="relative mb-3 w-full">
			<div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
				<ListFilter size={18} />
			</div>
			<select
				value={selectedCategory}
				onChange={(event) => onCategorySelect(event.target.value)}
				className="
          h-12 w-full appearance-none rounded-xl
					border border-slate-200
					bg-white
					px-4 pr-10 pl-10
					text-sm font-medium text-slate-700
					shadow-sm
					transition-all
					hover:border-indigo-300
					focus:border-indigo-400
					focus:outline-none
					focus:ring-2 focus:ring-indigo-500/20
					cursor-pointer
        "
			>
				<option value="all">Все категории</option>

				{categories.map((category) => {
					return (
						<option key={category.id} value={category.id}>{category.label}</option>

					)
				})}
			</select>


			<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
				<ChevronDown size={18} />
			</div>

		</div>

	);
};

export default CategorySelect;