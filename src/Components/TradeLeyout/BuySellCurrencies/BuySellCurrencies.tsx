import { Alert, Button, Form, Input, message, Select } from "antd";  
import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";  
import { useState } from "react";  
import { FaDollarSign } from 'react-icons/fa'; // Import an icon  

const { Option } = Select;  

const DollerPrice = 80000; // Placeholder for IRL conversion rate  

const BuySellCurrencies = () => {  
  const [form] = Form.useForm();  
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);  
  const [amount, setAmount] = useState<number>(0);  
  const [walletBalance, setWalletBalance] = useState<number>(10000); // Initial wallet balance  
  const [currencyInventory, setCurrencyInventory] = useState<number>(0); // Inventory for selected currency  
  const [spentAmount, setSpentAmount] = useState<number>(0); // Amount spent  
  const [currentPrice, setCurrentPrice] = useState<number | null>(null); // Current price of selected currency  

  const { data, error, isLoading } = useCurrencies();  

  const handleCurrencyChange = (value: string) => {  
    setSelectedCurrency(value);  
    const selectedCurrencyData = data?.find(  
      (currency) => currency.id === value  
    );  
    if (selectedCurrencyData) {  
      setCurrentPrice(selectedCurrencyData.current_price);  
    }  
  };  

  const handleSubmit = () => {  
    if (!selectedCurrency || amount <= 0) {  
      message.error("Please fill all fields correctly.");  
      return;  
    }  

    if (amount > walletBalance) {  
      message.error("Insufficient wallet balance.");  
      return;  
    }  

    const currencyAmount = amount / (currentPrice || 1);  

    setWalletBalance(walletBalance - amount);  
    setCurrencyInventory(currencyInventory + currencyAmount);  
    setSpentAmount(spentAmount + amount);  

    // Show success message with icon  
    message.success(  
      <>  
        <FaDollarSign style={{ marginRight: '5px' }} />  
        Transaction successful! Bought {currencyAmount.toFixed(2)} of {selectedCurrency}.  
      </>  
    );  
  };  

  if (error) {  
    return (  
      <Alert  
        closable  
        message="Error loading currencies"  
        type="error"  
        showIcon  
      />  
    );  
  }  

  const Iranian_Inventory = currencyInventory * DollerPrice;  

  return (  
    <div className="w-[350px]  bg-white rounded-lg border border-gray-100 p-6 flex flex-col">  
      <p className="text-sm font-bold mb-4">Buy Currencies</p>  
      <div className="flex flex-col gap-4 mb-6">  
        <div className="flex justify-between items-center">  
          <span className="text-sm font-semibold">My Wallet:</span>  
          <span className="text-lg">${walletBalance.toLocaleString()}</span>  
        </div>  

        <Form form={form} onFinish={handleSubmit}>  
          <Form.Item  
            name="amount"  
            rules={[{ required: true, message: "Please enter an amount!" }]}  
          >  
            <Input  
              type="number"  
              placeholder="Enter amount"  
              onChange={(e) => setAmount(parseFloat(e.target.value))}  
              className="h-[42px]"  
            />  
          </Form.Item>  

          <Form.Item  
            name="currency"  
            rules={[{ required: true, message: "Please select a currency!" }]}  
          >  
            <Select  
              placeholder="Select a currency"  
              onChange={handleCurrencyChange}  
              loading={isLoading}  
              className="h-[42px]"  
            >  
              {data?.map((currency) => (  
                <Option key={currency.id} value={currency.id}>  
                  {currency.name} ({currency.symbol})  
                </Option>  
              ))}  
            </Select>  
          </Form.Item>  

          {currentPrice !== null && (  
            <div className="text-sm">  
              <strong>Current {selectedCurrency} Price:</strong> $  
              {currentPrice.toFixed(2)}  
            </div>  
          )}  

          <Button  
            type="primary"  
            htmlType="submit"  
            className=" text-white rounded-md h-[40px]  w-full bg-orange-500"  
          >  
            Buy  
          </Button>  
        </Form>  
      </div>  

      <div className="border-t pt-4 text-sm">  
        <div className="flex justify-between">  
          <span className="font-semibold">Currency Inventory:</span>  
          <span>  
            {/* here ... {} {currencyInventory.toLocaleString()}   */}
            {selectedCurrency ? `${currencyInventory.toLocaleString()} ${selectedCurrency}` : "N/A"}
          </span>  
        </div>  
        <div className="flex justify-between">  
          <span className="font-semibold">You have spent:</span>  
          <span>${spentAmount}</span>  
        </div>  
        <div className="flex justify-between">  
          <span className="font-semibold">IRL Inventory:</span>  
          <span>IRL {Iranian_Inventory.toLocaleString()}</span>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default BuySellCurrencies;