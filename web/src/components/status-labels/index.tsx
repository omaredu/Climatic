export interface StatusLabelsProps {
    min: number
    max: number
    status: string
    showMinMax?: boolean
}

const StatusLabels = (props: StatusLabelsProps) => {
    const { min, max, status, showMinMax = true } = props;

    const showWhenMinMax = (text: string) => showMinMax ? `${text} ` : '';

    return (
        <div className="flex">
            <div className="flex-1 justify-center items-start">
                <p className="text-left">{showWhenMinMax('Min.')}<span>{min}</span></p>
            </div>
            <div className="flex-1 justify-center items-center">
                <p className="text-center">{status}</p>
            </div>
            <div className="flex-1 justif-center items-end">
                <p className="text-right">{showWhenMinMax('Max.')}<span>{max}</span></p>
            </div>
        </div>
    )
}

export default StatusLabels;
