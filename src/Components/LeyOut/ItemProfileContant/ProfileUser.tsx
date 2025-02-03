import { Avatar, Badge } from "antd";
import Button from "../../BasedComponents/BaseUi/Button/Button";

const ProfileUser = () => {
  return (
    <div className="lg:flex grid md:flex-row items-center bg-white rounded-lg border p-5  ml-0 justify-between lg:w-[100%] w-[70%]">
      <div className="lg:flex grid items-center gap-5">
        <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden flex relative lg:-top-0 -top-1/2  lg:-right-0 -right-1/3">
          <Avatar
            size={128}
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
          />
        </div>
        <div className="-mt-10 md:mt-0">
          <h2 className="text-xl font-bold">
            Mohamad Amin keimasi <span className="text-orange-500"> | PRO</span>
          </h2>
          <p className="text-gray-600 text-sm">
            Interface and Brand Designer based in San Antonio
          </p>
          <div className="flex  mt-5">
          <div className="flex items-center mr-4">
            <Badge count={2985} color="orange" />
            <span className="ml-2">Trade</span>
          </div>
          <div className="flex items-center mr-4">
            <Badge count={32} color="orange" />
            <span className="ml-2">Bonus</span>
          </div>
          <div className="flex items-center">
            <Badge count={5} className=" text-white" color="orange" />
            <span className="ml-2">Lunchers</span>
          </div>
          
        </div>
         
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="flex items-center gap-2">
          <p>My Total Wallet:</p>
          <h1 className="text-2xl font-semibold">$3200.00</h1>
        </div>
      
        <div className="flex space-x-2 mt-4">
            <Button height={40} width={120}>
              Edit
            </Button>
            <Button
              height={40}
              width={120}
              border="orange solid 1px"
              bgColor="#FFFFFF"
              color="orange"
            >
              Get in touch
            </Button>
          </div>
      </div>
    </div>
  );
};

export default ProfileUser;
