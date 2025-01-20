import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";
import { useState } from "react";
import { Select, InputNumber, Card, Typography, Spin, Alert } from "antd";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import Button from "../../Ui/BaseUi/Button/Button";

const { Option } = Select;
const { Title } = Typography;

const SwapCurrencies = () => {
  const { data, error, isLoading } = useCurrencies();
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const fromCurrencyValue = data?.find(
    (currency) => currency.current_price === fromCurrency
  );
  const toCurrencyValue = data?.find(
    (currency) => currency.current_price === toCurrency
  );

  const convertedAmount =
    fromCurrencyValue && toCurrencyValue
      ? (amount * fromCurrencyValue.current_price) /
        toCurrencyValue.current_price
      : 0;

  if (isLoading) return <Spin tip="Loading..." style={{ color: "orange" }} />;
  if (error)
    return <Alert message="Error loading currencies" type="error" showIcon />;

  return (
    <Card title={<Title level={5}>Swap Currencies</Title>}>
      <div style={{ marginBottom: 16 }}>
        <label>From</label>
        <Select
          value={fromCurrency}
          onChange={(value) => setFromCurrency(value)}
          placeholder="Select Currency"
          className="w-[100%] h-[45px]"
          showSearch
        >
          <Option value="">Select Currency</Option>
          {data?.map((currency) => (
            <Option key={currency.id} value={currency.current_price}>
              {currency.name} ({currency.current_price})
            </Option>
          ))}
        </Select>
      </div>

      <div className="flex justify-between gap-2 w-[100%]">
        <InputNumber
          value={amount}
          onChange={(value) => setAmount(value || 0)}
          placeholder="Amount"
          className="w-[80%]"
        />
        <Button width={60} onClick={handleSwap}>
          <MdOutlineCurrencyExchange />
        </Button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label>To</label>
        <Select
          value={toCurrency}
          onChange={(value) => setToCurrency(value)}
          className="w-[100%] h-[45px]"
          placeholder="Select Currency"
          showSearch
        >
          <Option value="">Select Currency</Option>
          {data?.map((currency) => (
            <Option key={currency.id} value={currency.current_price}>
              {currency.name} ({currency.current_price})
            </Option>
          ))}
        </Select>
      </div>
      <hr />
      <div style={{ marginTop: 10 }}>
        <h4>Converted Amount</h4>
        <Typography.Text strong>
          {amount} {fromCurrencyValue?.name} {(fromCurrency)} is approximately{" "}
          {toCurrencyValue?.name} {convertedAmount.toFixed(2)} {(toCurrency)}
        </Typography.Text>
      </div>
    </Card>
  );
};

export default SwapCurrencies;
