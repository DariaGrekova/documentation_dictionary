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
				'flex w-full items-start gap-2.5 lg:gap-3 rounded-lg px-2 py-2 lg:px-3 lg:py-2.5 text-left transition-colors',
				'text-[18px] lg:text-sm lg:text-base',
				active
					? 'bg-indigo-50 font-medium text-indigo-700'
					: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
			].join(' ')}
		>
			<Icon
				size={16}
				height={16}
				strokeWidth={1.8}
				className={['flex-shrink-0 transition-colors mt-[5px]',
					active ? 'text-indigo-600' : 'text-slate-400'].join(' ')}
			/>
			<span>{label}</span>
		</button>
	);
}

export default SidebarItem;