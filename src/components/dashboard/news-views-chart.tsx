import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Typography } from '@mui/material';
Chart.register(...registerables);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'News Views',
            data: [100, 200, 150, 300, 250, 400],
            fill: false,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            tension: 0.1,
        },
    ],
};


const NewsViewsChart = () => {
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <Typography variant="h5">News Views Over Time</Typography>
            <Line data={data} options={options} />
        </div>
    );
};

export default NewsViewsChart;
