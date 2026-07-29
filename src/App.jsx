import './App.css'
import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';



function App() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<div className="flex min-h-screen">

				<Sidebar
					selectedCategory={selectedCategory}
					onCategorySelect={setSelectedCategory}
				/>
			</div>
		</div>
	);
}

export default App;
