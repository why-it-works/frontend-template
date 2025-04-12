import Counter from '@/features/counter/Counter';
import MainLayout from '@/layouts/MainLayout';

const Home = () => {
	return (
		<MainLayout>
			<h1 className="text-2xl font-bold text-center">Welcome to the Frontend Template</h1>
			<Counter />
		</MainLayout>
	);
};

export default Home;
