import { useRef, useEffect } from 'react';
import { Chart, ChartConfiguration } from 'chart.js';
import ChartProps from '../props/ChartProps';

const SpeedChart = ({ data }: ChartProps) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                const chartData = {
                    labels: data.map((point) => new Date(point.time).toLocaleTimeString()),
                    datasets: [
                        {
                            label: 'Speed (km/h)',
                            data: data.map((point) => point.speed),
                            borderColor: 'blue',
                            fill: false,
                        },
                    ],
                };

                const config: ChartConfiguration = {
                    type: 'line',
                    data: chartData,
                };

                new Chart(ctx, config);
            }
        }
    }, [data]);

    return <canvas ref={chartRef} className="bg-white rounded-lg shadow-lg p-4 mb-4" />;
};

export default SpeedChart;
