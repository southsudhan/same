import React from "react";
import { Modal } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

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
      width={1200}
      height={500}
    >
      <LineChart width={1100} height={700} data={data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#ccc" />
        <Tooltip />
      </LineChart>
    </Modal>
  );
};

export default CryptoChartModal;
