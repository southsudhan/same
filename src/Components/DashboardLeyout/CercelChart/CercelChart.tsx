import { Card, Col, Row } from "antd";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const metricsData = [
  { name: "Creativity", percentage: 62.13 },
  { name: "Problem-Solving", percentage: 53.97 },
];

const data = [
  { name: "May 7", revenue: 10, target: 35 },
  { name: "May 8", revenue: 75, target: 231 },
  { name: "May 9", revenue: 75, target: 33 },
  { name: "May 10", revenue: 10, target: 80 },
];

const CercelChart = () => {
  return (
    <div className="mt-2">
      <Row gutter={16} className="lg:flex grid">
        <Col span={12}>
          <Card title="Training Progress" className="lg:w-full w-screen">
            <ResponsiveContainer width="100%" height={165}>
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => {
                    return [`$${value.toFixed(2)}`, name];
                  }}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#000000"
                  dot={{ fill: "#000000" }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#FBBF24"
                  dot={{ fill: "#ffa600" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Training Impact Metrics" className="w-full">
            <div className="mb-2">
              <span>+15% Technical Skills</span>
            </div>
            {metricsData.map((metric, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-center">
                  <span>{metric.name}</span>
                  <span>{metric.percentage}%</span>
                </div>
                <div className="relative">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-300 h-2 rounded-full"
                      style={{ width: `${metric.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="mb-2">
              <span>+13% Soft Skills</span>
            </div>
            <div className="mb-3">
              <div className="relative">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-orange-300 h-2 rounded-full"
                    style={{ width: `${metricsData[0].percentage}%` }} // Utilize an example metric
                  />
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CercelChart;
