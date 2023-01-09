import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';

const Container = styled.div`
	@media ${device.tablet} {
	}
`;

const Wrapper = styled.div`
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
					label: 'Blue',
					backgroundColor: 'blue',
					data: [3, 7, 4],
				},
				{
					label: 'Red',
					backgroundColor: 'red',
					data: [4, 3, 5],
				},
				{
					label: 'Green',
					backgroundColor: 'green',
					data: [7, 2, 6],
				},
			],
		};

		var myBarChart = new Chart(ctx, {
			type: 'bar',
			data: data,
			options: {
				barValueSpacing: 10,
				scales: {
					yAxes: [
						{
							ticks: {
								min: 0,
							},
						},
					],
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
