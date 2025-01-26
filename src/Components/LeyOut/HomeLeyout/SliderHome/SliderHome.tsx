import { Card, Typography, Col } from "antd";
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
      <h1 className="text-center lg:text-3xl text-xl font-semibold">
        Clients Feedback
      </h1>
      <p className="text-center text-gray-400 mb-5">
        Crypto Card Users Share their Experiences with Our Platform and Services
      </p>

      <div className="lg:flex grid gap-3">
        {feedbackData.map((feedback, index) => (
          <Col key={index} span={8}>
            <Card className="rounded-md lg:w-full w-[360px]">
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
      </div>

      <div className="lg:flex grid justify-between mt-6 items-center gap-2">
        <p className="text-sm text-gray-600 ">
          You can See and reade more from the following links:
        </p>
        <div className="lg:flex grid gap-2 ">
          <Button
            border="solid 1px orange"
            bgColor="#FFFFFF"
            color="orange"
            width={350}
          >
            More reviews
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
