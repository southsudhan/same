import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useCurrency } from "../../Hooks/Currencies/useCurrency";
import {
  Card,
  Row,
  Col,
  Statistic,
  Typography,
  Image,
  Button,
  Table,
  Input,
} from "antd";

const { Text } = Typography;

const Currency = () => {
  const { coin } = useParams();
  const { data, error, isLoading } = useCurrency(coin);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const orderColumns = [
    { title: "Price (USD)", dataIndex: "price", key: "price" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Total", dataIndex: "total", key: "total" },
  ];

  const dummyOrders = [
    { key: "1", price: "29,342.50", amount: "0.15", total: "4,401.37" },
    { key: "2", price: "29,340.00", amount: "0.25", total: "7,335.00" },
    { key: "3", price: "29,339.75", amount: "0.10", total: "2,933.97" },
  ];

  return (
    <div>
      <Header />
      <div className="p-24">
        {data && (
          <>
            <Card
              title={
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Image
                    src={data.image.small}
                    alt={data.name}
                    width={24}
                    height={24}
                  />
                  <span>
                    {data.name} ({data.symbol})
                  </span>
                </div>
              }
              className="mb-4"
            >
              <Row gutter={[24, 24]} align="middle">
                <Col span={24}></Col>
                {/* <Divider /> */}
                <Col span={24}>
                  <div className="tradingview-widget-container">
                    <iframe
                      title={`${data.name} Chart`}
                      src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=${data.symbol.toUpperCase()}USD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=exchange`}
                      style={{ width: "100%", height: "400px" }}
                    />
                  </div>
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Statistic
                    title="Price (USD)"
                    value={data.market_data.current_price.usd}
                    precision={2}
                    prefix="$"
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Statistic
                    title="Market Cap (USD)"
                    value={data.market_data.market_cap.usd}
                    precision={0}
                    prefix="$"
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Statistic
                    title="24h Volume"
                    value={data.market_data.total_volume.usd}
                    precision={0}
                    prefix="$"
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Statistic
                    title="Market Cap Rank"
                    value={data.market_cap_rank}
                    prefix="#"
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Statistic
                    title="Circulating Supply"
                    value={data.market_data.circulating_supply}
                    precision={0}
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Statistic
                    title="Total Supply"
                    value={data.market_data.total_supply}
                    precision={0}
                  />
                </Col>
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Statistic
                    title="Max Supply"
                    value={data.market_data.max_supply}
                    precision={0}
                  />
                </Col>
                <Col xs={24}>
                  <Text type="secondary">
                    Last Updated: {new Date(data.last_updated).toLocaleString()}
                  </Text>
                </Col>
              </Row>
            </Card>

            <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
              <Col xs={24} lg={16}>
                <Card title="Order Book">
                  <Row gutter={[24, 24]}>
                    <Col span={12}>
                      <Table
                        columns={orderColumns}
                        dataSource={dummyOrders}
                        pagination={false}
                        size="small"
                        title={() => "Bids"}
                      />
                    </Col>
                    <Col span={12}>
                      <Table
                        columns={orderColumns}
                        dataSource={dummyOrders}
                        pagination={false}
                        size="small"
                        title={() => "Asks"}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Place Order">
                  <Row gutter={[16, 16]}>
                    <Col span={24}>
                      <Input.Group compact>
                        <Input
                          style={{ width: "70%" }}
                          placeholder="Amount"
                          type="number"
                        />
                        <Input
                          style={{ width: "30%" }}
                          disabled
                          value={data.symbol.toUpperCase()}
                        />
                      </Input.Group>
                    </Col>
                    <Col span={24}>
                      <Input
                        placeholder="Price in USD"
                        type="number"
                        prefix="$"
                      />
                    </Col>
                    <Col span={24}>
                      <Input
                        placeholder="Total in USD"
                        type="number"
                        prefix="$"
                        disabled
                      />
                    </Col>
                    <Col span={12}>
                      <Button
                        type="primary"
                        block
                        style={{ background: "#4CAF50" }}
                      >
                        Buy {data.symbol.toUpperCase()}
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button type="primary" danger block>
                        Sell {data.symbol.toUpperCase()}
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default Currency;
