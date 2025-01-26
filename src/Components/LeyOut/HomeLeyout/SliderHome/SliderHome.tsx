import React from "react";
import { Card, Typography, Row, Col } from "antd";
import Button from "../../../BasedComponents/BaseUi/Button/Button";

const { Title, Paragraph } = Typography;

const SliderHome = () => {
  const feedbackData = [
    {
      title: "Awesome Coin Services",
      description:
        "A vast range of services offered by us and our partners is one of the best ways we share a close knit with our users base, of our business and our customer’s satisfaction.",
      name: "Steven Smith",
      role: "Customer",
    },
    {
      title: "Awesome Coin Services",
      description:
        "A vast range of services offered by us and our partners is one of the best ways we share a close knit with our users base, of our business and our customer’s satisfaction.",
      name: "Steven Smith",
      role: "Customer",
    },
    {
      title: "Awesome Coin Services",
      description:
        "A vast range of services offered by us and our partners is one of the best ways we share a close knit with our users base, of our business and our customer’s satisfaction.",
      name: "Steven Smith",
      role: "Customer",
    },
  ];

  return (
    <div className="mt-10 justify-around p-3 lg:w-2/3 w-full lg:ml-80 m-0">
      <Title level={2} style={{ textAlign: "center" }}>
        Clients Feedback
      </Title>
      <p className="text-center text-gray-400 mb-5">
        Crypto Card Users Share their Experiences with Our Platform and Services
      </p>

      <Row gutter={16} justify="center" className="lg:flex-row flex-col">
        {feedbackData.map((feedback, index) => (
          <Col key={index} span={8}>
            <Card style={{ borderRadius: "10px" }}>
              <Title level={4} style={{ color: "#FBAF00" }}>
                {feedback.title}
              </Title>
              <Paragraph style={{}}>{feedback.description}</Paragraph>
              <Paragraph style={{ color: "#AAAAAA", marginBottom: 0 }}>
                {feedback.name} -{" "}
                <span style={{ fontStyle: "italic" }}>{feedback.role}</span>
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="flex justify-between mt-6 items-center ">
        <p>You can download the app from the following links:</p>
        <div className="flex gap-2 w-2/6">
          <Button border="solid 1px orange" bgColor="#FFFFFF" color="orange">
            Download App
          </Button>
          <Button border="solid 1px orange" bgColor="#FFFFFF" color="orange">
            More reviews
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
