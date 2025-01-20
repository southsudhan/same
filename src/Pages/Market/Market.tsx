import React, { useState, useMemo } from "react";  
import Header from "../../Components/Header/Header";  
import { Table, Spin, Alert, Input, Select } from "antd";  
import { BiSearch } from "react-icons/bi";  
import CryptoChartModal from "../../Components/CryptoModal/CryptoModal";  
import { useCurrencies } from "../../Hooks/Currencies/useCurrencies";  

const { Option } = Select;  

interface CurrencyTableProps {  
  data2: any;  
  error2: any;  
  isLoading2: boolean;  
}  

const TrendLine = ({ change }: { change: number }) => {  
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

const Market: React.FC<CurrencyTableProps> = ({ data2, error2, isLoading2 }) => {  
  const { data, error, isLoading } = useCurrencies();  
  const [searchQuery, setSearchQuery] = useState("");  
  const [filter, setFilter] = useState("");  
  const [selectedCrypto, setSelectedCrypto] = useState(null);  
  const [isModalOpen, setIsModalOpen] = useState(false);  

  const columns = useMemo(() => {  
    return [  
      {  
        title: "Currency",  
        dataIndex: "name",  
        render: (text: any, record: any) => (  
          <div className="flex items-center" onClick={() => handleRowClick(record)}>  
            <img  
              src={record.image}  
              alt={text}  
              className="inline-block w-6 h-6 mr-2"  
            />  
            <span>{text}</span>  
          </div>  
        ),  
      },  
      {  
        title: "Symbol",  
        dataIndex: "symbol",  
        render: (text: any) => text.toUpperCase(),  
      },  
      {  
        title: "Current Price",  
        dataIndex: "current_price",  
        render: (text: any) => `$${text.toFixed(2)}`,  
      },  
      {  
        title: "Market Cap",  
        dataIndex: "market_cap",  
        render: (text: any) => `$${text.toLocaleString()}`,  
      },  
      {  
        title: "24h Change",  
        dataIndex: "price_change_percentage_24h",  
        render: (text: any) => (  
          <span className={text >= 0 ? "text-green-600" : "text-red-600"}>  
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
        return 0; // No sorting if filter is not recognized  
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

  const handleRowClick = (record: any) => {  
    setSelectedCrypto(record);  
    setIsModalOpen(true);  
  };  

  const handleModalClose = () => {  
    setIsModalOpen(false);  
  };  

  if (isLoading) {  
    return (  
      <div className="text-center py-5">  
        <Spin />  
      </div>  
    );  
  }  

  if (error) {  
    return (  
      <Alert  
        message="Error"  
        description={error.message}  
        type="error"  
        showIcon  
        className="text-center py-5"  
      />  
    );  
  }  

  return (  
    <>  
      <Header />  
      <div className="w-full flex justify-center gap-1 p-5">  
        <div className="w-[100%] mt-[9vh] overflow-auto ">  
          <div className="py-5 lg:flex grid gap-2 justify-between items-center border-b border-gray-200 mb-4 lg:mt-0 mt-5">  
            <Input  
              placeholder="Search Token, Coin, Airdrop"  
              size="middle"  
              className="bg-gray-100 h-[40px] placeholder:text-gray-500 w-[330px] outline-none border-none hover:bg-gray-100"  
              value={searchQuery}  
              prefix={<BiSearch />}  
              onChange={handleSearch}  
            />  
            <Select  
              size="large"  
              value={filter}  
              onChange={handleFilter}  
              className="text-sm text-gray-700 w-[330px]"  
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
          />  
        </div>  
      </div>  
      <CryptoChartModal  
        visible={isModalOpen}  
        onClose={handleModalClose}  
        cryptoData={selectedCrypto}  
      />  
    </>  
  );  
};  

export default Market;  