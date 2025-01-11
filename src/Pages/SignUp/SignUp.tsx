import { Form, Input, Checkbox } from "antd";
import BlurCard from "../../Components/SignUpLeyout/BlurCard/BlurCard";
import VideoSignUp from "../../Components/SignUpLeyout/VideoSignUp/VideoSignUp";
import { BiArrowBack } from "react-icons/bi";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="justify-between items-center flex absolute top-3 left-5">
        <p className=" lg:block hidden border-b-2">Join us</p>
      </div>
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-start p-10  ">
        <Form
          className="flex flex-col gap-4 w-full max-w-sm justify-center lg:translate-x-1/2"
          layout="vertical"
        >
          <h1 className="lg:text-4xl text-2xl font-bold mb-4 text-center">
            Create an account
          </h1>
          <p className="text-sm mb-4 text-center">
            Already have an account? <a href="/" className="text-orange-500">Log in</a>
          </p>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="First Name" className="p-3" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="email" placeholder="Email" className="p-3" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" className="p-3" />
          </Form.Item>

          <Form.Item
            name="confirm password"
            rules={[{ required: true, message: "Password is not match!" }]}
          >
            <Input.Password
              placeholder="Enter your Password again"
              className="p-3"
            />
          </Form.Item>

          <Form.Item>
            <Checkbox>
              I agree to the{" "}
              <a className="text-orange-500" href="#">
                Terms & Conditions
              </a>
            </Checkbox>
          </Form.Item>

          <button>Create account</button>
        </Form>
      </div>

      <div className="md:w-1/2 w-full relative">
        <button
          className="absolute bg-transparent right-0 top-1 justify-center flex items-center gap-3 cursor-pointer"
          onClick={() => (document.location = "/traderoom")}
        >
          <BiArrowBack />
          back to traderoom
        </button>

        <BlurCard />

        <VideoSignUp />
      </div>
    </div>
  );
};

export default SignUp;
