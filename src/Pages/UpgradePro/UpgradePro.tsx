import { Card, Typography } from 'antd';
import Button from '../../Components/BasedComponents/BaseUi/Button/Button';
import Header from '../../Components/Header/Header';

const { Title, Text } = Typography;

const UpgradePro = () => {
  const plans = [
    {
      title: 'Basic Pro',
      price: '$19.99',
      features: [
        'Real-time market data',
        'Advanced trading tools',
        'Priority support',
        'Custom alerts'
      ]
    },
    {
      title: 'Premium Pro',
      price: '$49.99',
      features: [
        'All Basic Pro features',
        'API access',
        'Portfolio analytics',
        'Advanced charting',
        'Multiple portfolio tracking'
      ]
    },
    {
      title: 'Enterprise Pro',
      price: '$99.99',
      features: [
        'All Premium Pro features',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced API features',
        'Unlimited portfolios'
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="mt-24 p-8">
        <Title level={2} className="text-center mb-8">
          Upgrade to Pro
        </Title>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <Title level={3}>{plan.title}</Title>
              <Text className="text-3xl font-bold block my-4">{plan.price}</Text>
              <Text className="text-gray-500 block mb-4">per month</Text>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 text-gray-700">{feature}</li>
                ))}
              </ul>
              <Button width={200}>
                Choose {plan.title}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpgradePro;