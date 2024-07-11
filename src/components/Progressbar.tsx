import ProgressbarProps from "../props/ProgressbarProps";

const Progressbar = ({ label, value, unit, color }: ProgressbarProps) => {
    return (
        <div className="relative mb-4">
            <span className="block text-sm font-medium text-gray-700 m-2">{label}</span>
            <div className="relative w-full h-8 rounded bg-gray-200">
                <div
                    className={`absolute top-0 left-0 h-full rounded ${color}`}
                    style={{ width: `${value}` }}
                ></div>
                <span className="absolute inset-0 flex items-center text-sm text-white font-medium p-4">
                    {value} {unit}
                </span>
            </div>

            {/* <div className="mb-4">
                <span className="block text-sm font-medium text-gray-700">State of Charge</span>
                <progress value={soc} max="100" className="w-full h-4 rounded bg-gray-200">
                    <div className="bg-green-500 h-4 rounded" style={{ width: `${soc}%` }}></div>
                </progress>
                <span className="block text-sm font-medium text-gray-700">{soc} %</span>
            </div> */}
        </div>
    );
};

export default Progressbar;
