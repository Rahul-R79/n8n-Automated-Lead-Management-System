import LeadForm from './components/LeadForm';

function App() {
	return (
		<div className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden bg-gray-50">
			<div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
			<div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
			<div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

			<div className="z-10 w-full flex flex-col items-center max-w-7xl mx-auto">
				<div className="mb-12 text-center">
					<span className="inline-block py-1 px-3 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
						Automated System
					</span>
					<h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-6 drop-shadow-sm">
						Lead Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Pro</span>
					</h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
						Seamlessly capture, track, and automate your leads with our intelligent automated system.
					</p>
				</div>

				<LeadForm />

				<footer className="mt-16 text-center text-gray-400 text-sm font-medium">
					&copy; {new Date().getFullYear()} Lead Management System. All rights reserved.
				</footer>
			</div>
		</div>
	);
}

export default App;
