import Navbar from './(components)/Navbar';
import TodoItem from './(components)/TodoItem';

interface MockDataItem {
  id: string;
  title: string;
  description: string;
}

export default function Home() {
  const mockData: MockDataItem[] = [
    { id: '1', title: 'title1', description: 'description1' },
    { id: '2', title: 'title2', description: 'description2' },
    { id: '3', title: 'title3', description: 'description3' },
    { id: '4', title: 'title4', description: 'description4' },
    { id: '5', title: 'title5', description: 'description5' },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid justify-center gap-2 items-center xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 p-5">
        {mockData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center"
          >
            <TodoItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
