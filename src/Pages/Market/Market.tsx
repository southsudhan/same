import { useState, useMemo } from "react";
import Header from "../../Components/Header/Header";
import { Table, Spin, Alert, Input, Select } from "antd";
import { BiSearch } from "react-icons/bi";
import { useCurrencies } from "../../Hooks/Currencies/useCurrencies";
import CryptoChartModal from "../../Components/CryptoModal/CryptoModal";

const { Option } = Select;

const TrendLine = ({ change }: any) => {
  const isUpward = change >= 0;

  return (
    <svg width="50" height="20">
      <polyline
        points="0,10 10,5 20,7 30,3 40,8 50,5"
        fill="none"
        stroke={isUpward ? "green" : "red"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Market = () => {
  const { data, error, isLoading } = useCurrencies();
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = useMemo(() => {
    return [
      {
        title: "Currency",
        dataIndex: "name",
        render: (text: any, record: any) => (
          <div
            className="flex items-center"
            onClick={() => handleRowClick(record)}
          >
            <img
              src={record.image}
              alt={text}
              className="inline-block w-6 h-6 mr-2"
            />
            <span className="text-[12px] text-center"> {text}</span>
          </div>
        ),
      },
      {
        title: "Symbol",
        dataIndex: "symbol",
        render: (text: any) => (
          <p className="text-[10px] text-center">{text.toUpperCase()}</p>
        ),
      },
      {
        title: "Current Price",
        dataIndex: "current_price",
        render: (text: any) => (
          <p className="text-[10px] text-center">{text.toFixed(2)}</p>
        ),
      },
      {
        title: "Market Cap",
        dataIndex: "market_cap",
        render: (text: any) => (
          <p className="text-[10px] text-center">{text.toLocaleString()}</p>
        ),
      },
      {
        title: "24h Change",
        dataIndex: "price_change_percentage_24h",
        render: (text: any) => (
          <span
            className={
              text >= 0
                ? "text-green-600"
                : "text-red-600 text-[12px] text-center"
            }
          >
            {text.toFixed(2)}%
          </span>
        ),
      },
      {
        title: "Trend",
        dataIndex: "price_change_percentage_24h",
        render: (text: any) => <TrendLine change={text} />,
      },
    ];
  }, []);

  const filteredData = useMemo(() => {
    let filtered = data;

    if (searchQuery) {
      const search = searchQuery.toLowerCase();
      filtered = filtered?.filter((item) => {
        const name = item.name.toLowerCase();
        const symbol = item.symbol.toLowerCase();
        return name.includes(search) || symbol.includes(search);
      });
    }

    if (filter) {
      filtered = filtered?.sort((a, b) => {
        if (filter === "asc") {
          return a.current_price - b.current_price;
        } else if (filter === "desc") {
          return b.current_price - a.current_price;
        }
        return 0;
      });
    }

    return filtered;
  }, [data, searchQuery, filter]);

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = (value: any) => {
    setFilter(value);
  };

  const handleRowClick = (currency: any) => {
    setSelectedCurrency(currency);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedCurrency(null);
  };

  if (isLoading) {
    return (
      <div className="text-center py-5">
        <Spin tip="Loading cryptocurrencies..." />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error"
        description={error.message || "An unexpected error occurred."}
        type="error"
        showIcon
        className="text-center py-5"
      />
    );
  }

  return (
    <>
      <Header />
      <div className="w-full flex justify-center gap-1 p-5 ">
        <div className="w-[100%] mt-[6vh] overflow-auto ">
          <div className="py-5 lg:flex grid gap-2 justify-between items-center border-b border-gray-200 ">
            <Input
              placeholder="Search Token, Coin, Airdrop"
              size="middle"
              className="bg-gray-100 h-[40px] placeholder:text-gray-500 w-[320px] outline-none border-none hover:bg-gray-100"
              value={searchQuery}
              prefix={<BiSearch />}
              onChange={handleSearch}
            />
            <Select
              size="large"
              value={filter}
              onChange={handleFilter}
              className="text-sm text-gray-700 w-[320px]"
            >
              <Option value="">Select Filter</Option>
              <Option value="asc">Ascending</Option>
              <Option value="desc">Descending</Option>
            </Select>
          </div>
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="id"
            pagination={{ pageSize: 10 }}
            style={{ fontSize: 12 }}
            size="middle"
            tableLayout="fixed"
            className="mb-10 mt-0"
          />
        </div>
      </div>
      <CryptoChartModal
        visible={isModalVisible}
        onClose={handleModalClose}
        currency={selectedCurrency}
        candlestickData={selectedCurrency || []}
      />
    </>
  );
};

export default Market;
