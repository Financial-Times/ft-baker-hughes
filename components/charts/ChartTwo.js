import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	padding: 0 10px;
	media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
	max-width: 860px;
	margin: 0 auto;
	padding: 40px 0;
	@media ${device.tablet} {
	}
`;

const ChartTwo = () => {
	const chartRef = useRef();
	useEffect(() => {
		var ctx = chartRef.current.getContext('2d');

		var data = {
			labels: [
				'Oil',
				'Natural gas/LNG',
				'Solar',
				'Wind',
				'Coal',
				'Biomass/waste-to-energy',
				'Hydrogen',
				'Synthetic fuels/gases',
				'Geothermal',
				'Energy storage',
				'CCUS',
				'Nuclear',
			],
			datasets: [
				{
					label: 'Now',
					backgroundColor: '#05322b',
					data: [47, 44, 42, 42, 26, 25, 19, 17, 14, 22, 14, 15],
				},
				{
					label: 'In future',
					backgroundColor: '#028374',
					data: [21, 42, 43, 32, 17, 40, 30, 28, 31, 35, 22, 23],
				},
			],
		};

		var myBarChart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: {
				maintainAspectRatio: false,
				scales: {
					x: {
						border: {
							display: false,
						},
						ticks: {
							autoSkip: false,
							maxRotation: 45,
							minRotation: 45,
						},
						grid: {
							display: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
					},
					y: {
						labels: 'Percentage',
						ticks: {
							min: 0,
							max: 50, // Your absolute max value
							callback: function (value) {
								return ((value / 100) * 100).toFixed(0) + '%'; // convert it to percentage
							},
						},

						border: {
							display: false,
						},
						grid: {
							display: false,
							drawOnChartArea: false,
							drawTicks: false,
						},
					},
				},
			},
		});
	}, []);
	return (
		<Container>
			<Wrapper>
				<canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
			</Wrapper>
		</Container>
	);
};

export default ChartTwo;
