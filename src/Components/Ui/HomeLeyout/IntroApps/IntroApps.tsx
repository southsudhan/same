import { Typography } from "antd";
import {
  AppstoreAddOutlined,
  LockOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import Button from "../../BaseUi/Button/Button";

const { Title, Paragraph } = Typography;

const IntroApps = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 ">
      <Title className="lg:text-3xl text-sm mb-4">
        Trade Anywhere By Download The App
      </Title>
      <Paragraph className="mb-6">
        We have a strong presence in North America, Southeast Asia, Eastern and
        Western Europe and Latin America. Our offices are located in Canada, CIS
        and across western Europe.
      </Paragraph>
      <div className="lg:flex grid justify-between gap-20 mt-20 mb-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center ">
            <AppstoreAddOutlined className="text-4xl mb-2" />
            <Title level={4}>Manage your portfolio</Title>
            <Paragraph className="text-center">
              Buy and sell popular digital currencies, keep track of them in the
              one place.
            </Paragraph>
          </div>
          <div className="flex flex-col items-center">
            <LockOutlined className="text-4xl mb-2" />
            <Title level={4}>Buy with credit card</Title>
            <Paragraph className="text-center">
              Thanks to our partnership with ADVCash you can buy crypto directly
              with your credit card.
            </Paragraph>
          </div>
          <div className="flex flex-col items-center">
            <MobileOutlined className="text-4xl mb-2" />
            <Title level={4}>Mobile apps</Title>
            <Paragraph className="text-center">
              Stay on top of the markets with the Biconomy app for Android or
              iOS.
            </Paragraph>
          </div>
          <div className="flex">
            <Button className="ant-btn ant-btn-dark mr-2 " width={200}>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600" width={200}>
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
            </Button>
          </div>
        </div>

        <div className="flex space-x-4"></div>
        <img
            width={200}
            height={300}
          src="https://play-lh.googleusercontent.com/ARDf5Xlyt22hO3DMMaLrQ4JSlPTvN_FKR-Z5g1QyoAa5mQGG0RbzQeZswl_skLcjFII=w526-h296-rw"
          alt=""
        />
      </div>
    </div>
  );
};

export default IntroApps;
