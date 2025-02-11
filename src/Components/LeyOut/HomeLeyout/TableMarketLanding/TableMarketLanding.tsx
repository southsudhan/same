import { Table } from "antd";
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";
import Button from "../../../BasedComponents/BaseUi/Button/Button";

const TableMarketLanding = () => {
  const { data, error, isLoading } = useCurrencies();

  const topCurrencies = data ? data.slice(0, 5) : [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const columns = [
    {
      title: "Trading Pair",
      dataIndex: "symbol",
      render: (text: any, record: any) => (
        <div className="flex items-center">
          <img src={record.image} width={20} alt={text} className="mr-2" />
          <p className="text-[10px] text-center">{text}/USDT PERP</p>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "current_price",
      render: (text: any) => (
        <p className="text-[10px] text-center"> ${text}</p>
      ),
    },
    {
      title: "Change (24h)",
      dataIndex: "high_24h",
      render: ( record: any) => (
        <span
          className={`font-semibold ${
            record.low_24h > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          <p className="text-[12px] text-center">
            {record.high_24h > 0 ? "▲" : "▼"} {record.high_24h}%
          </p>
        </span>
      ),
    },

    {
      title: "Actions",
      render: () => <Button height={40}>Trade</Button>,
    },
  ];

  return (
    <div
      className="bg-gradient-to-r  justify-around rounded-lg p-4 lg:w-2/3 w-full lg:ml-80 ml-0 mt-10"
      onClick={() => (document.location = "/traderoom")}
    >
      <h2 className="lg:text-2xl text-sm font-semibold  mt-10  text-center mb-10">
        Popular Cryptocurrencies
      </h2>
      <Table
        dataSource={topCurrencies}
        columns={columns}
        rowKey="symbol"
        pagination={false}
        className="text-cente "
        size="small"
        tableLayout="fixed"
        bordered
      />
    </div>
  );
};

export default TableMarketLanding;
