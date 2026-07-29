const CategoryArea = ({ category }) => {
	return (
		<div className="mb-4 flex items-center justify-between">
			<div>
				<h2 className="text-lg font-semibold text-slate-900">
					{category.label}
				</h2>

				<p className="mt-1 text-sm text-slate-500">
					15 терминов
				</p>
			</div>
		</div>
	);
};

export default CategoryArea;