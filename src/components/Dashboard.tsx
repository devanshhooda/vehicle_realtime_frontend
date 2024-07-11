import DashboardProps from '../props/DashboardProps';
import Progressbar from './Progressbar';

const Dashboard = ({ speed, soc, energy, odo }: DashboardProps) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg mb-4">
            <Progressbar label={'Current Speed'} value={speed} unit={'km/h'} color={'bg-blue-500'} />
            <Progressbar label={'State of Charge'} value={soc} unit={'%'} color={'bg-green-500'} />
            <div className='flex flex-row'>
                <div className="mb-4 m-8">
                    <span className="block text-sm font-medium text-gray-700">Energy</span>
                    <span className="block text-sm font-medium text-gray-700">{energy} kW</span>
                </div>
                <div className='mb-4 m-8'>
                    <span className="block text-sm font-medium text-gray-700">Odometer</span>
                    <span className="block text-sm font-medium text-gray-700">{odo} km</span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
