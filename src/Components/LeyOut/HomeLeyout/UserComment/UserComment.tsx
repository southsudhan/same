import { Card, Col, Typography } from "antd";
import Button from "../../../BasedComponents/BaseUi/Button/Button";

const { Title, Text } = Typography;

const UserComment = () => {
  const articles = [
    {
      title: "What can you anticipate during technical interview?",
      date: "Sep 1, 2022",
      author: "Steven Smith",
      image:
        "https://itc.ua/wp-content/uploads/2025/01/DALL-E-2025-01-03-17.38.57-A-horizontal-illustration-capturing-the-essence-of-Bitcoins-history-and-impact.-The-scene-features-a-symbolic-representation-of-the-Genesis-Block-bei.webp", // Placeholder image
    },
    {
      title: "What can you anticipate during technical interview?",
      date: "Sep 1, 2022",
      author: "Steven Smith",
      image:
        "https://blockchainmagazine.com/wp-content/uploads/Analyzing-Crypto-Charts-Top-Tools-for-Traders-in-2025.jpg",
    },
    {
      title: "What can you anticipate during technical interview?",
      date: "Sep 1, 2022",
      author: "Steven Smith",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQFVRRrfCtTQ5A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726131350568?e=2147483647&v=beta&t=oKwErLU1IyhLJbDOKNp7tHyqUUVdGQ_A4Z7wNt28_1k",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-10 ">
      <Title level={3} className=" text-center">
        Meet the Worldwide <span className="text-orange-500">Community.</span>
      </Title>
      <div className="lg:flex grid gap-3">
        {articles.map((article, index) => (
          <Col key={index} span={8}>
            <Card
              hoverable
              cover={<img alt="article" src={article.image} />}
              className="lg:w-[400px] w-[330px]"
            >
              <Text strong style={{ color: "lightgrey" }}>
                Social Network
              </Text>
              <Text style={{ display: "block" }}>{article.title}</Text>
              <div style={{ marginTop: "10px", color: "grey" }}>
                <Text>{article.author}</Text>
                <span style={{ margin: "0 5px" }}>|</span>
                <Text className="text-gray-400">{article.date}</Text>
              </div>
            </Card>
          </Col>
        ))}
      </div>
      <div className="lg:flex gap-2 justify-around mt-8 w-[95%]  ">
        <p className="text-gray-600 text-sm">
          You can reade more user comment on our social media:
        </p>
        <div className="flex gap-2 lg:w-1/6 w-full">
          <Button
            border="solid 1px "
            bgColor="#FFFFFF"
            color="orange"
            width={350}
          >
            reade More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
