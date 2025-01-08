import { message, Table, Spin } from "antd";
import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";

const Currencies = () => {
  const { data, error, isLoading } = useCurrencies();

  if (isLoading) {
    return <Spin size="large" />;
  }
  if (error) {
    message.error("An error occurred while fetching data.");
    return null; // Optionally return null or a fallback UI
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: any) => <p>{text}</p>,
    },
    {
      title: "Symbol & Image",
      key: "symbolAndImage",
      render: (record: any) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={record.image} width={20} alt="" style={{ marginRight: 8 }} />
          <p>{record.symbol.toUpperCase()}</p>
        </div>
      ),
    },
    {
      title: "Current Price",
      dataIndex: "current_price",
      key: "current_price",
      render: (price: any) => <p>${price}</p>,
    },
    {
      title: "24h Price Change",
      dataIndex: "price_change_percentage_24h",
      key: "price_change_percentage_24h",
      render: (change: any) => (
        <p className={change > 0 ? "text-green-500" : "text-red-500"}>
          {change.toFixed(2)}%
        </p>
      ),
    },
    {
      title: "Total Volume",
      dataIndex: "total_volume",
      key: "total_volume",
      render: (volume: any) => <p>{volume}</p>,
    },
  ];
  return (
      <Table
        dataSource={data}
        columns={columns}
        size="small"
        pagination={false}
        className=" h-[100%] p-5"
        scroll={{ y: 400}} // Set vertical scroll
        rowKey="symbol" // Unique key for each row
      />
  );
};

export default Currencies;
