import React from 'react';  
import { Card, Col, Row } from 'antd';  

const UserWallet = () => {  
  return (  
    <div className="rounded-lg py-2 w-full text-black lg:overflow-clip overflow-scroll">  
      <Row gutter={16}>  
        <Col span={6}  className='lg:overflow-clip overflow-scroll'>  
          <Card title="Total Income" bordered className='lg:w-full w-[100px]'>  
            <p className="lg:text-2xl text-sm">$32,499.93</p>  
            <p className="text-green-600">+ 12.95% Compared to last month</p>  
          </Card>  
        </Col>  
        <Col span={6}>  
          <Card title="Profit" bordered>  
            <p className="text-2xl">$10,499.93</p>  
            <p className="text-red-600">- 0.33% Compared to last month</p>  
          </Card>  
        </Col>  
        <Col span={6}>  
          <Card title="Total Views" bordered>  
            <p className="text-2xl">5,211,832</p>  
            <p className="text-green-600">+ 0.32% Compared to last month</p>  
          </Card>  
        </Col>  
        <Col span={6}>  
          <Card title="Conversion Rate" bordered>  
            <p className="text-2xl">4.83%</p>  
            <p className="text-green-600">+ 8.05% Compared to last month</p>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
  );  
};  

export default UserWallet;