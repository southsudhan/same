import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";
import { useState } from "react";
import {
  Select,
  InputNumber,
  Button,
  Card,
  Typography,
  Spin,
  Alert,
} from "antd";
import { MdOutlineCurrencyExchange } from "react-icons/md";

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

  if (isLoading) return <Spin tip="Loading..." />;
  if (error)
    return <Alert message="Error loading currencies" type="error" showIcon />;

  return (
    <Card
      title={<Title level={5}>Swap Currencies</Title>}
      style={{ width: 350, borderRadius: 8, border: "1px solid #f0f0f0" }}
    >
      <div style={{ marginBottom: 16 }}>
        <label>From</label>
        <Select
          value={fromCurrency}
          onChange={(value) => setFromCurrency(value)}
          placeholder="Select Currency"
          className="w-[100%] h-[45px]"
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
        <Button
          size="small"
          type="primary"
          onClick={handleSwap}
          className="bg-orange-500 text-white rounded-md h-[40px] w-[20%]"
        >
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
        >
          <Option value="">Select Currency</Option>
          {data?.map((currency) => (
            <Option key={currency.id} value={currency.current_price}>
              {currency.name} ({currency.current_price})
            </Option>
          ))}
        </Select>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Title level={5}>Converted Amount</Title>
        <Typography.Text strong>
          {amount} {fromCurrency} is approximately {convertedAmount.toFixed(2)}{" "}
          {toCurrency}
        </Typography.Text>
      </div>
    </Card>
  );
};

export default SwapCurrencies;
