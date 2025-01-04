import { useCurrencies } from "../../../Hooks/Currencies/useCurrencies";

const ChartCurrencies = () => {

    const {data, error, isLoading} = useCurrencies()

    return ( 
        <div className="flex justify-center gap-5 w-[100%]">
            <div className="w-[70%] flex flex-col gap-5 justify-between items-center">
                <div className="border border-gray-100 rounded-sm">
                    top
                    جزيیات 
                    انتخاب ارز مورد نباز برای نشون دادنش داخل چارت و اخرین وضعیت خرید و فروش
                </div>
                <div className="border border-gray-100 rounded-sm">
                    چارت
                </div>
            </div>
            <div className="w-[20%] h-[60vh] border border-gray-100 rounded-sm mt-20">
                <p> اخرین وضعیت</p>
            </div>
        </div>
     );
}
 
export default ChartCurrencies;