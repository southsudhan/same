import { Form, Input, Typography, Alert, Checkbox } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '../BasedComponents/BaseUi/Button/Button';

const { Title, Text } = Typography;

const SignUp = () => {
  const { loginWithRedirect, isLoading, error } = useAuth0();

  const onFinish = (values: any) => {
    loginWithRedirect({
      appState: { returnTo: '/traderoom' },
      authorizationParams: {
        screen_hint: 'signup',
        login_hint: values.email
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Title level={2} className="text-center">Create your account</Title>
          <Text className="block text-center text-gray-600">
            Join Crypto Exchange Hub today
          </Text>
        </div>

        {error && (
          <Alert
            message="Registration Error"
            description={error.message}
            type="error"
            showIcon
            className="mb-4"
          />
        )}

        <Form
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          className="mt-8 space-y-6"
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input
              size="large"
              placeholder="Full name"
              className="rounded-md"
            />
          </Form.Item>

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
            rules={[
              { required: true, message: 'Please input your password!' },
              { min: 8, message: 'Password must be at least 8 characters!' }
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              { required: true, message: 'Please accept the terms and conditions' }
            ]}
          >
            <Checkbox>
              I agree to the{' '}
              <a href="/terms" className="text-orange-500">
                terms and conditions
              </a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              onClick={() => {}}
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create account'}
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center">
          <Text className="text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-orange-500 hover:text-orange-600">
              Sign in
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SignUp;