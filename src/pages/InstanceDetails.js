import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Typography, Flex, Row, Col, Button } from 'antd';
import InstanceCard from '../components/InstanceCard';
import {
	useInstanceDetailQuery,
	useInstanceStatQuery,
} from '../query/useInstanceQuery';
import { CPUUtilization } from './CPUUtilization';
import { MemoryUtilization } from './MemoryUtilization';
import Loading from '../components/Loading';
import { Cumulative } from './Cumulative';
import BreadCrumbs from '../components/BreadCrumbs';

const InstanceDetails = () => {
	const { Title } = Typography;

	const { id } = useParams();

	const { isLoading, data } = useInstanceDetailQuery({
		payload: {
			id,
		},
	});

	const { isLoading: isChartLoading, data: chartData } = useInstanceStatQuery({
		payload: {
			id,
		},
	});

	const breadcrumbItems = [
		{
			title: <a href='/account-overview'>Account Overview</a>,
		},
		{
			title: <a href=''>{data?.name}</a>,
		},
	];

	return (
		<div className='your-account'>
			<Header />
			<Row align='center'>
				<Col span={18}>
					<BreadCrumbs items={breadcrumbItems} />
					<div className='instance-details-charts'>
						<Title
							level={2}
							style={{
								fontSize: '24px',
								lineHeight: '32px',
								fontWeight: '600',
							}}
						>
							{data?.name}
						</Title>

						<div className='chart-flex'>
							<div style={{ width: '33%' }}>
								<CPUUtilization
									data={chartData?.cpu || []}
									isLoading={isChartLoading}
								/>

								<Title
									level={5}
									style={{
										fontSize: '16px',
										lineHeight: '32px',
										fontWeight: '600',
										marginLeft: '20px',
									}}
								>
									CPU Utilization
								</Title>
							</div>

							<div style={{ width: '33%' }}>
								<MemoryUtilization
									data={chartData?.memory || []}
									isLoading={isChartLoading}
								/>

								<Title
									level={5}
									style={{
										fontSize: '16px',
										lineHeight: '32px',
										fontWeight: '600',
										marginLeft: '20px',
									}}
								>
									Memory Utilization
								</Title>
							</div>
							<div style={{ width: '33%' }}>
								<Cumulative
									data={chartData?.cumulative_price || []}
									isLoading={isChartLoading}
								/>

								<Title
									level={5}
									style={{
										fontSize: '16px',
										lineHeight: '32px',
										fontWeight: '600',
										marginLeft: '20px',
									}}
								>
									Cumulative Cost
								</Title>
							</div>
						</div>
					</div>

					<Title
						level={2}
						style={{
							fontSize: '24px',
							lineHeight: '32px',
							fontWeight: '700',
						}}
					>
						Instance Details
					</Title>
					<Flex
						align='center'
						justify='space-between'
						style={{ marginTop: '32px' }}
					>
						<div className='instance-details'>
							<InstanceCard
								data={data}
								isLoading={isLoading}
							/>
							<div className='magic-card'>
								<Title
									level={2}
									style={{ fontWeight: 700, fontSize: '24px', margin: 0 }}
								>
									Do you believe in MAGIC?
								</Title>
								<span className='magic-text'>
									If you do, that’s great! You can witness our tool cast some
									spells to lower your monthly charges on AWS. If you don’t, get
									ready to start believing now.
								</span>

								<Button
									style={{
										background: '#038E43',
										color: 'white',
										margin: '16px 0px',
									}}
								>
									✨PERFORM MAGIC
								</Button>

								<span className='magic-text'>
									Click to explore your instance optimization options with our
									book of spells and a tiny bit of AI potion.
								</span>
							</div>
						</div>
					</Flex>
				</Col>
			</Row>
		</div>
	);
};

export default InstanceDetails;
