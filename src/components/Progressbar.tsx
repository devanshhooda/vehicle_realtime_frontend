import ProgressbarProps from "../props/ProgressbarProps";

const Progressbar = ({ label, value, unit, color }: ProgressbarProps) => {
    return (
        <div className="relative mb-4">
            <span className="block text-sm font-medium text-gray-700 m-2">{label}</span>
            <div className="relative w-full h-8 rounded bg-gray-200">
                <div
                    className={`absolute top-0 left-0 h-full rounded ${color}`}
                    style={{ width: `${value}%` }}
                ></div>
                <span className="absolute inset-0 flex items-center text-sm text-white font-medium p-4">
                    {value} {unit}
                </span>
            </div>
        </div>
    );
};

export default Progressbar;
