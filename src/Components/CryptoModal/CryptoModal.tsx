import React from "react";
import { Modal } from "antd";
import Button from "../BasedComponents/BaseUi/Button/Button";
import CandlestickChart from "../LeyOut/TradeLeyout/ChartCurrencies/CandlestickChart";

interface Currency {
  name: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  chartData: {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

interface CryptoChartModalProps {
  visible: boolean;
  onClose: () => void;
  currency: Currency | null;
  candlestickData: {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
}

const CryptoChartModal: React.FC<CryptoChartModalProps> = ({
  visible,
  onClose,
  currency,
  candlestickData,
}) => {
  if (!currency) return null;

  return (
    <Modal
      title={`${currency.name} Details`}
      visible={visible}
      onCancel={onClose}
      footer={null}
      className="rounded-lg shadow-lg"
      width={1000}
    >
      <div className="p-4">
        <div className="flex gap-3 justify-between text-sm font-semibold">
          <h3 className="mb-2">
            Current Price:{" "}
            <span className="text-green-500">
              ${currency.current_price.toFixed(2)}
            </span>
          </h3>
          <h4 className=" mb-2">
            Market Cap:{" "}
            <span className="text-gray-700">
              ${currency.market_cap.toLocaleString()}
            </span>
          </h4>
          <h4 className=" mb-4">
            24h Change:{" "}
            <span
              className={
                currency.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {currency.price_change_percentage_24h.toFixed(2)}%
            </span>
          </h4>
        </div>
        <hr className="my-4" />
        <CandlestickChart data={candlestickData} />{" "}
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
            Buy
          </Button>
          <Button className="bg-red-500 text-white hover:bg-red-600 transition duration-200">
            Sell
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CryptoChartModal;
