import Counter from '@/features/counter/Counter';
import MainLayout from '@/layouts/MainLayout';

const Home = () => {
	return (
		<MainLayout>
			<img src="./src/assets/why_it_works.png" alt="Why it works" className="w-1/3 mx-auto" />
			<h1 className="text-2xl font-bold text-center">Welcome to the Frontend Template</h1>
			<Counter />
		</MainLayout>
	);
};

export default Home;
