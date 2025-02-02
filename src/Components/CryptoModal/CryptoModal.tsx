import React from "react";
import { Modal } from "antd";
import Button from "../BasedComponents/BaseUi/Button/Button";

// Define the Currency type
interface Currency {
  name: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  // Add any other properties you expect from the currency object
}

// Define the props type for the CryptoChartModal
interface CryptoChartModalProps {
  visible: boolean;
  onClose: () => void;
  currency: Currency | null; // Currency can be null if not selected
}

const CryptoChartModal: React.FC<CryptoChartModalProps> = ({
  visible,
  onClose,
  currency,
}) => {
  if (!currency) return null;

  return (
    <Modal
      title={`${currency.name} Details`}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <h3 className="font-semibold">
        Current Price: ${currency.current_price.toFixed(2)}
      </h3>
      <h4 className="font-semibold">
        Market Cap: ${currency.market_cap.toLocaleString()}
      </h4>
      <h4 className="font-semibold">
        24h Change: {currency.price_change_percentage_24h.toFixed(2)}%
      </h4>
      {/* Add your chart component here */}
      <div>
        {/* Placeholder for chart */}
        <p>Chart goes here...</p>
        <hr />
        <div className="flex mt-10 gap-2 ">
          <Button>Buy</Button>
          <Button>Sell</Button>
        </div>
      </div>
      {/* Add your table component here if needed */}
    </Modal>
  );
};

export default CryptoChartModal;
