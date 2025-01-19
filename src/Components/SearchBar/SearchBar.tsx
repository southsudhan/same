import Input from "antd/es/input/Input";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useCurrencies } from "../../Hooks/Currencies/useCurrencies";
import { List, Spin } from "antd";
import { CurrenciesModel } from "../../Models/Currencies";

const SearchBar = () => {
  const { data, error, isLoading } = useCurrencies();
  const [searchValue, setSearchValue] = useState("");
  const [filteredCurrencies, setFilteredCurrencies] = useState<
    CurrenciesModel[]
  >([]);

  const handleSearch = (value: any) => {
    setSearchValue(value);
    if (value) {
      const filtered = data?.filter(
        (currency) =>
          currency.name.toLowerCase().includes(value.toLowerCase()) ||
          currency.symbol.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCurrencies(filtered);
    } else {
      setFilteredCurrencies([]);
    }
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setFilteredCurrencies([]);
  };

  if (isLoading) return <Spin />;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <Input
        size="middle"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search Token, Coin, Airdrop"
        className="bg-gray-100 h-[40px] placeholder:text-gray-500 w-[350px] lg:relative absolute lg:right-0 right-4 lg:top-0 top-16 outline-none border-none hover:bg-gray-100"
        prefix={<BiSearch />}
      />
      {filteredCurrencies.length > 0 && (
        <List
          className="absolute z-10 max-h-[700px] overflow-x-scroll mt-2 w-[350px] bg-white border border-gray-300"
          bordered
          dataSource={filteredCurrencies}
          renderItem={(item) => (
            <List.Item onClick={handleClearSearch}>
              <div className="justify-between items-center flex gap-2">
                <img src={item.image} alt="" width={15} />
                <strong>{item.name}</strong> ({item.symbol})
              </div>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default SearchBar;
