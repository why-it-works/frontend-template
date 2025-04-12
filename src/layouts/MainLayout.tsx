type Props = {
	children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
	return <main className="mx-auto p-4 h-screen w-full flex flex-col items-center justify-center">{children}</main>;
};

export default MainLayout;
