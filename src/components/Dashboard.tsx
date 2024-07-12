import DashboardProps from '../props/DashboardProps';
import Meter from './Meter';
import Progressbar from './Progressbar';

const Dashboard = ({ speed, soc, energy, odo }: DashboardProps) => {
    return (
        <div className="p-2 bg-white rounded-lg shadow-lg mb-4">
            <Progressbar label='Current Speed' value={speed} max={120} unit='km/h' color='bg-blue-500' />
            <Progressbar label='State of Charge' value={soc} max={100} unit='%' color='bg-green-500' />

            <div className='flex flex-row gap-16'>
                <Meter label='Energy' value={energy} unit='kW' />
                <Meter label='Odometer' value={odo} unit='km' />
            </div>
        </div>
    );
};

export default Dashboard;
