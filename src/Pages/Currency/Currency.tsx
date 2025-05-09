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
  Tabs,
  Descriptions,
  Tag,
  Progress,
  Alert,
  Spin,
} from "antd";

const { Title } = Typography;

const Currency = () => {
  const { coin } = useParams();
  const { data, error, isLoading } = useCurrency(coin);

  if (isLoading) {
    return <Spin />;
  }
  if (error) {
    return <Alert type="error" message={`Error: ${error.message}`} banner />;
  }

  return (
    <>
      <Header />
      <div className="p-4 mt-24  mx-auto">
        {data && (
          <>
            <Card
              bordered={false}
              className="shadow-none"
              title={
                <div className="flex items-center gap-4">
                  <Image
                    src={data.image.small}
                    alt={data.name}
                    width={32}
                    height={32}
                    preview={false}
                  />
                  <Title level={3} style={{ margin: 0 }}>
                    {data.name}{" "}
                    <Tag color="blue">{data.symbol.toUpperCase()}</Tag>
                  </Title>
                </div>
              }
            >
              <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Price Overview" key="1">
                  <Row gutter={[24, 24]} align="middle">
                    <Col span={24}>
                      <div className="tradingview-widget-container">
                        <iframe
                          title={`${data.name} Chart`}
                          src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=${data.symbol.toUpperCase()}USD&interval=D&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=light&style=1&timezone=exchange`}
                          style={{
                            width: "100%",
                            height: "500px",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <Card className="h-full">
                        <Statistic
                          title={<span className="text-lg">Price (USD)</span>}
                          value={data.market_data.current_price.usd}
                          precision={2}
                          prefix="$"
                          className="text-green-500"
                        />
                        <Progress
                          percent={
                            ((data.market_data.current_price.usd -
                              data.market_data.low_24h.usd) /
                              (data.market_data.high_24h.usd -
                                data.market_data.low_24h.usd)) *
                            100
                          }
                          status="active"
                          size="small"
                        />
                      </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <Card className="h-full">
                        <Statistic
                          title={
                            <span className="text-lg">Market Cap (USD)</span>
                          }
                          value={data.market_data.market_cap.usd}
                          precision={0}
                          prefix="$"
                        />
                      </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <Card className="h-full">
                        <Statistic
                          title={<span className="text-lg">24h Volume</span>}
                          value={data.market_data.total_volume.usd}
                          precision={0}
                          prefix="$"
                        />
                      </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6}>
                      <Card className="h-full">
                        <Statistic
                          title={
                            <span className="text-lg">Market Cap Rank</span>
                          }
                          value={data.market_cap_rank}
                          prefix="#"
                          valueStyle={{ color: "#1890ff" }}
                        />
                      </Card>
                    </Col>
                  </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Supply Information" key="2">
                  <Descriptions
                    bordered
                    column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
                  >
                    <Descriptions.Item label="Circulating Supply">
                      <Statistic
                        value={data.market_data.circulating_supply}
                        precision={0}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="Total Supply">
                      <Statistic
                        value={data.market_data.total_supply}
                        precision={0}
                      />
                    </Descriptions.Item>
                    <Descriptions.Item label="Max Supply">
                      <Statistic
                        value={data.market_data.max_supply}
                        precision={0}
                      />
                    </Descriptions.Item>
                  </Descriptions>
                </Tabs.TabPane>
              </Tabs>
              <div className="mt-6">
                <Alert
                  message="Last Updated"
                  description={new Date(data.last_updated).toLocaleString()}
                  type="info"
                  showIcon
                />
              </div>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default Currency;
