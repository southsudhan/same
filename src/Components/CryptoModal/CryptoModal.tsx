import React from "react";
import { Modal } from "antd";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from "recharts";
import Button from "../BasedComponents/BaseUi/Button/Button";

interface CryptoChartModalProps {
  visible: boolean;
  onClose: () => void;
  cryptoData: any;
}

const CryptoChartModal: React.FC<CryptoChartModalProps> = ({
  visible,
  onClose,
  cryptoData,
}) => {
  const data = cryptoData?.market_data?.sparkline_7d?.price.map(
    (price: number, index: number) => ({
      value: price,
      time: index, // You might want to replace this with actual time data if available
    })
  );

  return (
    <Modal
      title={cryptoData?.name}
      visible={visible}
      onCancel={onClose}
      footer={null}
      width="100%"
      height={500}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Created" fill="rgb(255, 147, 24)" />
          <Bar dataKey="Solved" fill="rgb(0, 0, 0)" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex w-full gap-2 justify-start">
        <Button>Buy</Button>
        <Button>Sell</Button>
      </div>
    </Modal>
  );
};

export default CryptoChartModal;
