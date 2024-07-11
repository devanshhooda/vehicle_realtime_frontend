import MeterProps from "../props/MeterProps"

const Meter = ({ label, value, unit }: MeterProps) => {
    return (
        <div className="mb-4 m-4">
            <span className="block text-sm font-medium text-gray-700">{label}</span>
            <span className="block text-sm font-medium text-gray-700">{value} {unit}</span>
        </div>
    )
}

export default Meter
