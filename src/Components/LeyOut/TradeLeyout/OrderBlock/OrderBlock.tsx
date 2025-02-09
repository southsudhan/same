import { Card, Spin } from "antd";  
import { useCurrencies } from "../../../../Hooks/Currencies/useCurrencies";  

const OrderBlock = () => {  
  const { data, error, isLoading } = useCurrencies();  

  if (isLoading) {  
    return <Spin size="default" />;  
  }  
  if (error) {  
    return <div>Error: {error.message}</div>;  
  }  

  return (  
    <Card  
      title="Order Block"  
      size="default"  
      className="overflow-y-scroll overflow-x-clip h-[700px] lg:w-full w-screen"  
    >  
      <div className="grid grid-cols-1 gap-1">  
        {data?.map((crypto) => {  
          const isPositive = crypto.price_change_percentage_24h > 0;  
          const isNegative = crypto.price_change_percentage_24h < 0;  
          const bgColor = isPositive  
            ? "bg-green-100"  
            : isNegative  
            ? "bg-red-100"  
            : "bg-gray-100";  
          const priceColor = isPositive ? "text-green-600" : isNegative ? "text-red-600" : "text-gray-600";  

          return (  
            <div  
              key={crypto.id}  
              className={`flex justify-between items-center p-2 rounded-md ${bgColor} `}  
            >  
              <span className={`text-[12px] ${priceColor}`}>  
                {crypto.market_cap.toLocaleString()}  
              </span>  
              <span className={`text-[12px] ${priceColor}`}>  
                {crypto.price_change_percentage_24h.toFixed(6)}  
              </span>  
            </div>  
          );  
        })}  
      </div>  
    </Card>  
  );  
};  

export default OrderBlock;