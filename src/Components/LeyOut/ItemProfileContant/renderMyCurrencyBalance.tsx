import { Table } from "antd";

const currencyData = [
  {
    currency: "Tether",
    balance: 1500.0,
    icon: "https://cdn3d.iconscout.com/3d/premium/thumb/tether-coin-usdt-3d-icon-download-in-png-blend-fbx-gltf-file-formats--crypto-pack-science-technology-icons-5326798.png?f=webp",
  },
  {
    currency: "Bitcoin",
    balance: 0.12005,
    icon: "https://static.vecteezy.com/system/resources/previews/019/767/932/non_2x/bitcoin-logo-bitcoin-icon-transparent-free-png.png",
  },
  {
    currency: "Solana",
    balance: 1800.75,
    icon: "https://cryptologos.cc/merch/solana-sol-sticker.jpg?v=040",
  },
  {
    currency: "Cardano",
    balance: 2500.0,
    icon: "https://logowik.com/content/uploads/images/cardano-ada-icon19.logowik.com.webp",
  },
];

const columns = [
  {
    title: "Currency",
    dataIndex: "currency",
    key: "currency",
    render: (text, record) => (
      <div className="flex items-center">
        <img src={record.icon} alt={text} className="w-7 h-6 mr-2" />
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    render: (text: any) => text.toFixed(2),
  },
];

// Function to calculate total balance
const calculateTotalBalance = (data: any) => {
  return data.reduce((total, item) => total + item.balance, 0).toFixed(2);
};

const renderMyCurrencyBalance = () => {
  const totalBalance = calculateTotalBalance(currencyData);

  return (
    <div className=" grid w-full gap-2">
      <div className="justify-between items-center flex">
        <h2 className="text-sm mb-2 font-semibold">My Currency Balance</h2>
        <p className="text-gray-600">
          <h2>Total Balance: ${totalBalance}</h2>
        </p>
      </div>
      <Table
        className="w-full"
        dataSource={currencyData}
        columns={columns}
        rowKey={(record) => record.currency}
        pagination={false}
      />
      <div className="total-balance"></div>
    </div>
  );
};

export default renderMyCurrencyBalance;
