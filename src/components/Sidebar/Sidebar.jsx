import SidebarItem from './SidebarItem';
import { useEffect } from 'react';

function Sidebar({ categories, selectedCategory, onCategorySelect, isOpen, onClose }) {

	useEffect(() => {
		if (!isOpen) return;

		const previousOverflow = document.body.style.overflow;

		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = previousOverflow;
		};
	}, [isOpen]);

	return (
		<>
			<aside className={`fixed top-0 left-0 z-40 h-full max-w-[85vw] lg:w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
				${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:shadow-none
        `}>
				<div className="flex h-screen flex-col">
					<div className="hidden border-b border-slate-200 px-5 py-5 lg:flex">
						<div className="flex items-center gap-3">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white lg:flex">
								&lt;/&gt;
							</div>

							<div>
								<p className="font-semibold text-slate-900">
									React Words
								</p>

								<p className="text-xs text-slate-500">
									English → Русский
								</p>
							</div>
						</div>
					</div>

					<nav className="sidebar-scroll flex-1 overflow-y-auto px-3 py-5 mt-16 lg:mt-0">
						<p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
							Categories
						</p>

						<div className="space-y-1">
							{categories.map((category) => (
								<SidebarItem
									key={category.id}
									label={category.label}
									icon={category.icon}
									active={selectedCategory === category.id}
									onClick={() => {
										onCategorySelect(category.id);
									}}
								/>
							))}
						</div>
					</nav>
				</div>
			</aside>
			{isOpen && (
				<div
					className="fixed inset-0 z-30 bg-black/40 lg:hidden"
					onClick={onClose}
				/>
			)}
		</>
	);
}

export default Sidebar;