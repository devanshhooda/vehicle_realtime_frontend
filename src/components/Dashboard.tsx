import DashboardProps from '../props/DashboardProps';

const Dashboard = ({ speed, soc, energy, odo }: DashboardProps) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg mb-4">
            <div className="mb-4">
                <span className="block text-sm font-medium text-gray-700">Current Speed</span>
                <progress value={speed} max="120" className="w-full h-4 rounded bg-gray-200">
                    <div className="bg-blue-500 h-4 rounded" style={{ width: `${(speed / 120) * 100}%` }}></div>
                </progress>
                <span className="block text-sm font-medium text-gray-700">{speed} km/h</span>
            </div>
            <div className="mb-4">
                <span className="block text-sm font-medium text-gray-700">State of Charge</span>
                <progress value={soc} max="100" className="w-full h-4 rounded bg-gray-200">
                    <div className="bg-green-500 h-4 rounded" style={{ width: `${soc}%` }}></div>
                </progress>
                <span className="block text-sm font-medium text-gray-700">{soc} %</span>
            </div>
            <div className="mb-4">
                <span className="block text-sm font-medium text-gray-700">Energy</span>
                <span className="block text-sm font-medium text-gray-700">{energy} kW</span>
            </div>
            <div>
                <span className="block text-sm font-medium text-gray-700">Odometer</span>
                <span className="block text-sm font-medium text-gray-700">{odo} km</span>
            </div>
        </div>
    );
};

export default Dashboard;
