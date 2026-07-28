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
				'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
				active
					? 'bg-indigo-50 font-medium text-indigo-700'
					: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
			].join(' ')}
		>
			<Icon
				size={18}
				strokeWidth={1.8}
				className={active ? 'text-indigo-600' : 'text-slate-400'}
			/>
			<span>{label}</span>
		</button>
	);
}

export default SidebarItem;