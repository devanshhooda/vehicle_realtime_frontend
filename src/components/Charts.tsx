import { useRef, useEffect, useState } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartProps from '../props/ChartProps';

// Register the necessary components
Chart.register(...registerables);

const Charts = ({ label, data }: ChartProps) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);
    const [debouncedData, setDebouncedData] = useState(data);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedData(data);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [data]);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            if (ctx) {
                const chartData = {
                    labels: debouncedData.map((point) => new Date(point.time).toLocaleTimeString()),
                    datasets: [
                        {
                            label: label,
                            data: debouncedData.map((point) =>
                                label.includes('Charge') ? point.soc : point.speed
                            ),
                            borderColor: label.includes('Charge') ? 'green' : 'blue',
                            fill: true,
                        },
                    ],
                };

                const config: ChartConfiguration = {
                    type: 'line',
                    data: chartData,
                };

                // Destroy the previous chart instance if it exists
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                // Create new chart instance
                chartInstance.current = new Chart(ctx, config);
            }
        }

        // Cleanup function to destroy the chart instance when the component unmounts
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [debouncedData, label]);

    return <canvas ref={chartRef} className="bg-white rounded-lg shadow-lg p-8 my-auto mr-96" />;
};

export default Charts;
