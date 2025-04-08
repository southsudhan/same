import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useCurrency } from "../../Hooks/Currencies/useCurrency";
import { Card, Row, Col, Statistic, Typography, Image } from "antd";

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

  return (
    <div>
      <Header />
      <div className="p-2  mt-24">
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
          </>
        )}
      </div>
    </div>
  );
};

export default Currency;
