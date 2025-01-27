import { Typography } from "antd";
import Button from "../../BasedComponents/BaseUi/Button/Button";

const cardDetails = {
  cardName: "Andri Juliansyah",
  cardNumber: "**** **** **** 9097",
  expDate: "09/24",
  cvv: "249",
  balance: "$32,197.00",
};

const { Text } = Typography;

const renderCardDetails = () => (
  <div className="flex flex-col">
    <Text>Card Name: {cardDetails.cardName}</Text>
    <Text>Card Number: {cardDetails.cardNumber}</Text>
    <Text>Exp Date: {cardDetails.expDate}</Text>
    <Text>CVV: {cardDetails.cvv}</Text>
    <Text type="secondary" className="mt-2">
      Balance: {cardDetails.balance}
    </Text>
    <Button className="mt-2" width={30} bgColor="#FFFFFF" color="orange">
      Copy
    </Button>
    <Button width={150}> + Add Card</Button>
  </div>
);
export default renderCardDetails;