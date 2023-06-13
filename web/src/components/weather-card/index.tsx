import StatusLabels from "@/components/status-labels";
import Divider from "@/components/divider";

export interface WeatherCardProps {
  min: number;
  max: number;
  current: number;
  status: string;
}

const WeatherCard = (props: WeatherCardProps) => {
  const { min = 0, max = 0, current = 0, status } = props;

  return (
    <div className="sm:border-2 border-primary p-10 sm:p-5 w-screen sm:w-[370px] rounded sm:bg-white">
      <p className="text-foreground-light capitalize">{status}</p>
      <div className="flex">
        <p className="text-[40px] font-medium">{current}</p>
        <span className="text-slate-400 text-[25px]">º</span>
      </div>
      <Divider />
      <StatusLabels {...{ min, max }} />
    </div>
  );
};

export default WeatherCard;
