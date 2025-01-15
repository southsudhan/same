import React from 'react';  
import { Card, Row, Col } from 'antd';  
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';  
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';  

const dataRadar = [  
  { subject: 'Europe', A: 2728 },  
  { subject: 'Americas', A: 2409 },  
  { subject: 'Asia', A: 2843 },  
  { subject: 'Africa', A: 3028 },  
  { subject: 'Pacific', A: 1838 },  
  { subject: 'Middle East', A: 800 },  
];  

const dataPie = [  
  { name: 'Amazon', value: 45 },  
  { name: 'Tokopedia', value: 25 },  
  { name: 'Alibaba', value: 35 },  
];  

const COLORS = ['#0088FE', '#ffa600', '#ff0000'];  

const CercelChart = () => {  
  return (  
    <div className=" mt-3 ">  
      <Row gutter={16}>  
        <Col span={8}>  
          <Card title="Sales by Region"  className='h-[280px] border border-gray-100'>  
            <ResponsiveContainer  height={186}>  
              <RadarChart outerRadius={90} data={dataRadar}>  
                <PolarGrid />  
                <PolarAngleAxis dataKey="subject" />  
                <PolarRadiusAxis />  
                <Radar name="Sales" dataKey="A" stroke="#c08300" fill="#ffaf1b" fillOpacity={0.6} />  
              </RadarChart>  
            </ResponsiveContainer>  
          </Card>  
        </Col>  
        <Col span={8}>  
          <Card title="Sales by E-commerce Platform" className='h-[280px] border border-gray-100'>  
            <ResponsiveContainer width="100%" height={185}>  
              <PieChart>  
                <Pie   
                  data={dataPie}   
                  cx="50%"   
                  cy="50%"   
                  innerRadius={40}   
                  outerRadius={80}   
                  fill="#8884d8"   
                  dataKey="value"  
                >  
                  {dataPie.map((entry, index) => (  
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />  
                  ))}  
                </Pie>  
              </PieChart>  
            </ResponsiveContainer>  
          </Card>  
        </Col>  
        <Col span={8}>  
          <Card title="Registered Users" className='h-[280px] border border-gray-100'>  
            <div className="flex flex-col items-center">  
              <div className="text-3xl">2,324</div>  
              <div className="text-gray-500">Total Users</div>  
              <div className="mt-4">  
                <div>1,809 Premium Plan</div>  
                <div>515 Basic Plan</div>  
              </div>  
            </div>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
  );  
};  

export default CercelChart;