import { Layout, Row, Col, Typography, Space } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text } = Typography;

const FooterComponent = () => {
  return (
    <Footer className="grid w-screen text-center bg-white border-t mt-10">
      <h1 className="text-orange-500 mb-10">Crypto Exchange Hub</h1>
      <Row gutter={16} className="mb-3">
        <Col span={8}>
          {/* <Text strong>Pyth</Text>   */}
          <Space direction="vertical" size="small">
            <Text>Price Feeds</Text>
            <Text>Benchmarks</Text>
            <Text>Publishers</Text>
            <Text>Consumers</Text>
            <Text>Node Providers</Text>
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical" size="small">
            <Text>About</Text>
            <Text>Ranking</Text>
            <Text>Developers</Text>
            <Text>Documentation</Text>
            <Text>Media Room</Text>
          </Space>
        </Col>
        <Col span={8}>
          <Space direction="vertical" size="small">
            <Text>Blog</Text>
            <Text>Jobs</Text>
            <Text>Brand Assets</Text>
            <Text>Blockchain Guides</Text>
            <Text>Data Driven</Text>
          </Space>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }} justify="space-around">
        <Col>
          <Text>© 2023 Pyth Data Association</Text>
        </Col>
        <Col>
          <Space>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
          </Space>
        </Col>
        <Col>
          <Space>
            <InstagramOutlined />
            <TwitterOutlined />
            <LinkedinOutlined />
            <FacebookOutlined />
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
