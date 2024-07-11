import { useRef, useEffect, useState } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import ChartProps from '../props/ChartProps';

// Register the necessary components
Chart.register(...registerables);

const Charts = ({ label, data }: ChartProps) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);
    const [debouncedData, setDebouncedData] = useState(data);

    // Debouncing data
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedData(data);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [data]);

    // Initializing charts
    useEffect(() => {
        if (chartRef.current && !chartInstance.current) {
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
                    data: chartData
                };

                // console.log("Creating new chart instance");
                chartInstance.current = new Chart(ctx, config);
            }
        }
    }, [label]);

    // Updating chart data
    useEffect(() => {
        if (chartInstance.current) {
            const chart = chartInstance.current;
            chart.data.labels = debouncedData.map((point) => new Date(point.time).toLocaleTimeString());
            chart.data.datasets[0].data = debouncedData.map((point) =>
                label.includes('Charge') ? point.soc : point.speed
            );
            chart.update();
        }
    }, [debouncedData]);

    return (
        // <canvas ref={chartRef} className="bg-white rounded-lg shadow-lg p-8 my-auto mr-96" />
        <div className="bg-white rounded-lg shadow-lg p-2" style={{ height: '350px', width: '710px' }}>
            <canvas ref={chartRef} className="w-full h-full" />
        </div>
    );
};

export default Charts;
