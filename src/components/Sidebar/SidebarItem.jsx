function SidebarItem({
	label,
	icon: Icon,
	active,
	onClick,
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={[
				'flex w-full items-center gap-2.5 md:gap-3 rounded-lg px-2 py-2 md:px-3 md:py-2.5 text-left transition-colors',
				'text-sm md:text-base',
				active
					? 'bg-indigo-50 font-medium text-indigo-700'
					: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
			].join(' ')}
		>
			<Icon
				size={16}
				strokeWidth={1.8}
				className={['flex-shrink-0 transition-colors',
					active ? 'text-indigo-600' : 'text-slate-400'].join(' ')}
			/>
			<span>{label}</span>
		</button>
	);
}

export default SidebarItem;