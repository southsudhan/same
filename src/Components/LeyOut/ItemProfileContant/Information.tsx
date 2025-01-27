import { Card } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhone, BiSolidRename } from "react-icons/bi";

const renderInformation = () => (
    <div className="lg:flex grid w-full gap-2">
      <Card className="mt-4 lg:w-1/2 w-full " title="Information">
        <h3 className="flex items-center gap-2">
          <BiSolidRename /> Name: Mohamad Amin keimasi
        </h3>
        <b />
        <h3 className="flex items-center gap-2">
          <BiPhone /> Number Phone: +989134278124{" "}
        </h3>
        <p className="flex items-center">
          <AiOutlineMail className="mr-2" /> <span>moakeimasi@email.com</span>
        </p>
      </Card>
      <Card className="mt-4 lg:w-1/2 w-full" title="Location">
        <p className="flex items-center">
          <span className="mr-2">🌍</span> New York, USA
        </p>
  
        <a href="https://alextrader.com" className="text-blue-600 underline">
          alextrader.com
        </a>
      </Card>
    </div>
  );

export default renderInformation; 
  