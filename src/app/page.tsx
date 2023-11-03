import Navbar from './(components)/Navbar';

interface MockDataItem {
  title: string;
  description: string;
}

export default function Home() {
  const mockData: MockDataItem[] = [
    { title: 'title1', description: 'description1' },
    { title: 'title2', description: 'description2' },
    { title: 'title3', description: 'description3' },
    { title: 'title4', description: 'description4' },
    { title: 'title5', description: 'description5' },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      
    </div>
  );
}
