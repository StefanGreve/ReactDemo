import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={Math.max(
            ...props.dataPoints.map((dataPoint) => dataPoint.value)
          )}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
