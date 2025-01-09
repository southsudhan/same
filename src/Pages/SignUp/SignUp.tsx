import { Form, Input } from "antd";
import { BiArrowToLeft, BiArrowToRight, BiSupport } from "react-icons/bi";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-start p-10 ">
        <h1 className="text-4xl font-bold leading-tight">Hi there!</h1>
        <p className="text-lg mb-4">Welcome to Haze. Community Dashboard</p>

        <Form className="flex flex-col gap-4 w-full max-w-sm">
          <p className="text-center">or</p>
          <Form.Item
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="email" placeholder="Your email" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input type="password" placeholder="Confirm password" />
          </Form.Item>
          <p className="text-right text-blue-500 cursor-pointer">
            Forgot password?
          </p>
          <button>Log In</button>
          <p className="text-center">
            Don't have an account? <a href="/">Sign up</a>
          </p>
        </Form>
      </div>

      <div className="md:w-1/2 w-full relative">
        <button
          className="absolute bg-transparent right-0 top-1"
          onClick={() => (document.location = "/traderoom")}
        >
          back to traderoom
        </button>
        <div
          className="absolute bottom-14 left-10 md:left-16 text-white md:w-[800px] w-[200px] h-[200px] p-5
         bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-[17.5px] justify-center gap-5  flex-col md:flex hidden"
        >
          <h2 className="text-xl text-gray-300">
            Go anywhere you want in a Galaxy full of wonders!
          </h2>
          <p className="text-gray-100">
            this is user account page you can see more data info about traderoom
            |<span className="text-black font-bold text-lg ml-1">Crypto</span>
            <span className="text-orange-500 font-bold text-lg">Hub</span>
          </p>
          <div className="flex justify-between items-center">
            <button className="w-1/3">see info</button>

            <BiSupport />
          </div>
        </div>
        <video
          src="https://cdn.dribbble.com/userupload/13232137/file/original-1d289cafb1e7de3fc9bf914f448e079b.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover md:block hidden"
        ></video>
      </div>
    </div>
  );
};

export default SignUp;
