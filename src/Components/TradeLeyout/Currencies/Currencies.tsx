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
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: any) => <img src={image} width={20} alt="" />,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (text: any) => <p>{text.toUpperCase()}</p>,
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
    <div className="border border-l-0 border-gray-100 w-[100%] mt-3 mb-10 ml-5 mr-5 h-[500px]">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        scroll={{ y: 400 }} // Set vertical scroll
        rowKey="symbol" // Unique key for each row
      />
    </div>
  );
};

export default Currencies;
