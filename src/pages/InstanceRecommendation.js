import React from 'react';
import { Typography, Row, Col } from 'antd';
import BreadCrumbs from '../components/BreadCrumbs';
import Header from '../components/Header';

const InstanceRecommendation = () => {
	const { Title } = Typography;
	const breadcrumbItems = [
		{
			title: <a href='/account-overview'>Account Overview</a>,
		},
		{
			title: <a href=''>Instance Recommendations</a>,
		},
	];

	const titleStyle = {
		fontWeight: '700',
	};

	return (
		<div>
			<Header />

			<Row align='center'>
				<Col span={18}>
					<BreadCrumbs items={breadcrumbItems} />
					<Title
						level={2}
						style={titleStyle}
					>
						Instance 1
					</Title>

          <div className="instance">
            <div className="chart"></div>
            <div className="chart"></div>
          </div>

          <div className="instance-table"></div>
				</Col>
			</Row>
		</div>
	);
};

export default InstanceRecommendation;
