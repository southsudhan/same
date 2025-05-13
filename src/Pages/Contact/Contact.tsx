import { Form, Input, Typography } from 'antd';
import Button from '../../Components/BasedComponents/BaseUi/Button/Button';
import Header from '../../Components/Header/Header';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Handle form submission
  };

  return (
    <>
      <Header />
      <div className="mt-24 p-8 max-w-2xl mx-auto">
        <Title level={2} className="text-center mb-2">Get in Touch</Title>
        <Text className="text-gray-500 block text-center mb-8">
          We're here to help with any questions about our platform
        </Text>

        <Form
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: 'Please enter a subject' }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea rows={6} />
          </Form.Item>

          <Form.Item>
            <Button width={200}>
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Contact;