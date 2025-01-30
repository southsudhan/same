import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  data: CandlestickData[];
}

const CandlestickChart = ({ data }: CandlestickChartProps) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "green",
      downColor: "red",
      wickUpColor: "#4FFF00",
      wickDownColor: "#FF8C00",
    });

    if (data && data.length > 0) {
      candlestickSeries.setData(data);
    }

    return () => {
      chart.remove();
    };
  }, [data]);

  return (
    <div ref={chartContainerRef} className="lg:w-full w-full h-[60vh] z-0" />
  );
};

export default CandlestickChart;
