export interface StatusLabelsProps {
  min: number;
  max: number;
  status?: string;
  showMinMax?: boolean;
}

const StatusLabels = (props: StatusLabelsProps) => {
  const { min, max, status, showMinMax = true } = props;

  const showWhenMinMax = (text: string) => (showMinMax ? `${text} ` : "");

  return (
    <div className="flex">
      <div className="flex-1 justify-center items-start">
        <p className="text-left text-foreground-light">
          {showWhenMinMax("Min.")}
          <span className="font-medium text-foreground">{min}</span>
        </p>
      </div>
      {status && (
        <div className="flex-1 justify-center items-center">
          <p className="text-center text-foreground-light">{status}</p>
        </div>
      )}
      <div className="flex-1 justif-center items-end">
        <p className="text-right text-foreground-light">
          {showWhenMinMax("Max.")}
          <span className="font-medium text-foreground">{max}</span>
        </p>
      </div>
    </div>
  );
};

export default StatusLabels;
