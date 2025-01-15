import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, Progress } from "antd";

interface SessionData {
  country: string;
  sessions: number;
  percentage: number;
  flag: string; // URL or path to flag image
}

const sessionData: SessionData[] = [
  {
    country: "BitCoin",
    sessions: 634,
    percentage: 90,
    flag: "https://static-00.iconduck.com/assets.00/bitcoin-icon-2048x2048-t8gwld81.png",
  },
  {
    country: "Ethereum",
    sessions: 589,
    percentage: 50,
    flag: "https://www.iconarchive.com/download/i109534/cjdowner/cryptocurrency-flat/Ethereum-ETH.1024.png",
  },
  {
    country: "Solana",
    sessions: 562,
    percentage: 60,
    flag: "https://img.freepik.com/premium-vector/solana-flat-coin_48203-261.jpg",
  },
  {
    country: "DogeCoin",
    sessions: 453,
    percentage: 20,
    flag: "https://www.kindpng.com/picc/m/202-2028344_dogecoin-doge-icon-metro-symbole-hd-png-download.png",
  },
  {
    country: "TonCoin",
    sessions: 453,
    percentage: 75,
    flag: "https://cryptologos.cc/logos/toncoin-ton-logo.png",
  },
  {
    country: "XRP ",
    sessions: 453,
    percentage: 35,
    flag: "https://static-00.iconduck.com/assets.00/xrp-cryptocurrency-icon-2048x2048-2a0bicgj.png",
  },
];

const data = [
  { name: "Mar 2023", revenue: 12000, target: 10000 },
  { name: "Jun 2023", revenue: 15000, target: 11000 },
  { name: "Sep 2023", revenue: 13000, target: 12000 },
  { name: "Dec 2023", revenue: 18000, target: 13000 },
  { name: "Mar 2024", revenue: 16000, target: 14000 },
  { name: "Jun 2024", revenue: 20000, target: 16000 },
  { name: "Sep 2024", revenue: 12823.98, target: 10100 },
  { name: "Dec 2024", revenue: 22000, target: 17000 },
];

const ChartOwner = () => {
  return (
    <div className="p-0 lg:flex grid gap-2 ">
      <Card
        title="Revenue Over Time"
        className="rounded-lg lg:w-3/4 w-full h-[450px]"
      >
        <ResponsiveContainer width="100%" height={390}>
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
              stroke="#0D9488"
              dot={{ fill: "#0D9488" }}
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
      <Card className="lg:w-1/4 w-full h-[450px]" title="Session by Country">
        <p className="text-gray-500 mb-4">Showing Data for Top Session</p>
        <div className="flex flex-col gap-2">
          {sessionData.map(({ country, sessions, percentage, flag }) => (
            <div key={country} className="flex items-center gap-1">
              <div className="">
                <img
                  src={flag}
                  alt={`${country} flag`}
                  className="w-5 h-5 mr-2"
                />
                <span className="flex-1 font-semibold text-sm">{country}</span>
                <span className="mr-4">{percentage}%</span>
              </div>
              <Progress
                percent={percentage}
                showInfo={false}
                strokeColor="#ffa909"
                className="w-full"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ChartOwner;
