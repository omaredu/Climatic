import StatusLabels from "@/components/status-labels"

const WeatherCard = () => {
    return (
        <div>
            <StatusLabels max={28} min={29} status="Cielo claro" />
        </div>
    )
}

export default WeatherCard