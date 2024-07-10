interface ChartProps {
    label: string
    data: {
        time: number;
        speed: number;
        soc: number;
    }[];
}

export default ChartProps;
