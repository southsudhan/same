import { AiOutlineLineChart } from "react-icons/ai";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import Button from "../../Ui/BaseUi/Button/Button";
import { Tooltip } from "antd";

const ProfileContent = () => {
  const data = [
    { name: "May 7", revenue: 10, target: 35 },
    { name: "May 8", revenue: 75, target: 21 },
    { name: "May 9", revenue: 75, target: 33 },
    { name: "May 10", revenue: 10, target: 80 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Floor Price | New Admin</h2>
        <Button width={200}>
          <AiOutlineLineChart className="mr-2" />
          Chart
        </Button>
      </div>

      <div className="border rounded-lg p-4 bg-white ">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="4 4" />
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
            <Line
              type="basis"
              dataKey="newbalance"
              stroke="#ffea28"
              dot={{ fill: "#ffa600" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid md:grid-cols-8 gap-4">
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">12.0064 SOL</h3>
          <p>Floor price</p>
        </div>
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">138.056 SOL</h3>
          <p>Total volume</p>
        </div>
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">1,782</h3>
          <p>Listed</p>
        </div>
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">2,683</h3>
          <p>Unique Owners</p>
        </div>
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">10.056</h3>
          <p>Total rested</p>
        </div>
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">263 Days</h3>
          <p>Avg Rested period</p>
        </div>
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">$426k</h3>
          <p>TVL</p>
        </div>
        <div className="p-4 border rounded-lg bg-white ">
          <h3 className="text-lg font-medium">1.25m</h3>
          <p>XP Farmed</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
