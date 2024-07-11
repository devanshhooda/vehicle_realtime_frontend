import Dashboard from './components/Dashboard';
import Charts from './components/Charts';
import useWebsocket from './hooks/useWebsocket';

function App() {
  const url = 'ws://localhost:3000';
  const data = useWebsocket(url);

  if (!data.length) return <div className="text-center text-gray-700">Loading...</div>;

  return (
    <div className="App container mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        {/* <Map gps={data[data.length - 1].gps} /> */}
        <Dashboard
          speed={data[data.length - 1].speed}
          soc={data[data.length - 1].soc}
          energy={data[data.length - 1].energy}
          odo={data[data.length - 1].odo}
        />
        <Charts label="Speed" data={data} />
        <Charts label="State of Charge" data={data} />
      </div>
    </div>
  );
};

export default App;
