import { Form, Input, Typography, Alert } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../BasedComponents/BaseUi/Button/Button';

const { Title, Text } = Typography;

const SignIn = () => {
  const { loginWithRedirect, isLoading, error } = useAuth0();

  const onFinish = (values: any) => {
    loginWithRedirect({
      appState: { returnTo: '/traderoom' },
      authorizationParams: {
        login_hint: values.email
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Title level={2} className="text-center">Sign in to your account</Title>
          <Text className="block text-center text-gray-600">
            Welcome back to Crypto Exchange Hub
          </Text>
        </div>

        {error && (
          <Alert
            message="Authentication Error"
            description={error.message}
            type="error"
            showIcon
            className="mb-4"
          />
        )}

        <Form
          name="signin"
          onFinish={onFinish}
          layout="vertical"
          className="mt-8 space-y-6"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input
              size="large"
              placeholder="Email address"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {}}
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center">
          <Text className="text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-orange-500 hover:text-orange-600">
              Sign up
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SignIn;