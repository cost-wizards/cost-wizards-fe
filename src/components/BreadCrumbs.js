import React from 'react';
import { Breadcrumb } from 'antd';

const BreadCrumbs = (props) => {
	const { items } = props;
	return <Breadcrumb items={items} />;
};

export default BreadCrumbs;
