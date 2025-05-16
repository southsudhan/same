import { useState } from 'react';
import { Form, Input, Select, Typography, Alert } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../BasedComponents/BaseUi/Button/Button';
import { useCurrencies } from '../../Hooks/Currencies/useCurrencies';
import { createTransaction } from '../../lib/supabase';

const { Title, Text } = Typography;
const { Option } = Select;

const TradeComponent = () => {
  const { isAuthenticated, user } = useAuth0();
  const { data: currencies, isLoading, error } = useCurrencies();
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');

  const handleTrade = async () => {
    if (!isAuthenticated) {
      return;
    }

    try {
      await createTransaction(
        user?.sub as string,
        tradeType,
        parseFloat(amount),
        selectedCurrency
      );

      // Reset form
      setAmount('');
      setSelectedCurrency('');
    } catch (error) {
      console.error('Trade error:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <Title level={3} className="text-center mb-6">Trade Cryptocurrencies</Title>

      {!isAuthenticated && (
        <Alert
          message="Authentication Required"
          description="Please sign in to start trading"
          type="warning"
          showIcon
          className="mb-4"
        />
      )}

      <Form layout="vertical">
        <Form.Item label="Trade Type">
          <Select
            value={tradeType}
            onChange={setTradeType}
            className="w-full"
          >
            <Option value="buy">Buy</Option>
            <Option value="sell">Sell</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Currency">
          <Select
            value={selectedCurrency}
            onChange={setSelectedCurrency}
            loading={isLoading}
            className="w-full"
          >
            {currencies?.map((currency) => (
              <Option key={currency.id} value={currency.id}>
                {currency.name} ({currency.symbol.toUpperCase()})
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Amount">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            step="0.000001"
            className="w-full"
          />
        </Form.Item>

        <Button
          onClick={handleTrade}
          disabled={!isAuthenticated || !amount || !selectedCurrency}
          className="w-full mt-4"
        >
          {tradeType === 'buy' ? 'Buy Now' : 'Sell Now'}
        </Button>
      </Form>

      {error && (
        <Alert
          message="Error"
          description={error.message}
          type="error"
          showIcon
          className="mt-4"
        />
      )}
    </div>
  );
};

export default TradeComponent;