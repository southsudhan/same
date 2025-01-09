import { Button, Form, Input } from "antd";
import Title from "antd/es/skeleton/Title";

const SignUp = () => {
  return (
    <div>
      <div className="flex justify-between gap-20 w-screen h-screen ">
        <div className="w-1/2 h-screen relative ">
          <video
            src="https://cdn.dribbble.com/userupload/13232137/file/original-1d289cafb1e7de3fc9bf914f448e079b.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          ></video>
        </div>
        <div className="w-1/2 justify-between  flex flex-col gap-1 transform relative mt-72">
          <Form className="flex flex-col gap-5 w-1/2">
            <Form.Item
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input type="text" placeholder="Name" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: "Please confirm your password!" },
              ]}
            >
              <Input type="password" placeholder="Confirm Password" />
            </Form.Item>
            <Button color="primary" variant="filled" htmlType="submit">
              SignUp
            </Button>
            <hr />
            <p>
              Already have an account? <a href="/">Login</a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
