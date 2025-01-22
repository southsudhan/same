import { Form, Input, Checkbox } from "antd";
import BlurCard from "../../Components/LeyOut/SignUpLeyout/BlurCard/BlurCard";
import VideoSignUp from "../../Components/LeyOut/SignUpLeyout/VideoSignUp/VideoSignUp";
import { BiArrowBack } from "react-icons/bi";
import Button from "../../Components/BasedComponents/BaseUi/Button/Button";
import { useSignUp } from "../../Hooks/SignUp/useSignUp";
import Alert from "antd/es/alert/Alert";

const SignUp = () => {
  const {
    Email,
    Password,
    ConfirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    HandleForm,
    ErrorPasswordConfirm,
    ErrorEmail,
    ErrorPassword,
    ErrorAll,
  } = useSignUp();

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
            Already have an account?{" "}
            <a href="/" className="text-orange-500">
              Log in
            </a>
          </p>
          <Form.Item
            name="firstName"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="First Name" className="p-3" minLength={3} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: `${ErrorEmail}` }]}
          >
            <Input
              type="email"
              placeholder="Email"
              className="p-3"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: `${ErrorPassword}` }]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="p-3"
              value={Password}
              minLength={8}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="confirm password"
            rules={[{ required: true, message: `${ErrorPasswordConfirm}` }]}
          >
            <Input.Password
              placeholder="Enter your Password again"
              className="p-3"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          {ErrorAll && (
            <Alert message={ErrorAll} type="error" showIcon closeIcon />
          )}
          <Button onClick={HandleForm}>Create account</Button>
        </Form>
      </div>

      <div className="md:w-1/2 w-full relative">
        <div
          onClick={() => (document.location = "/traderoom")}
          className="absolute top-4 border-b right-12 text-white items-center flex gap-2">
          <BiArrowBack />
          back to traderoom
        </div>
        <BlurCard />
        <VideoSignUp />
      </div>
    </div>
  );
};

export default SignUp;
