import ChartBar from './ChartBar';
import styles from "./Chart.module.css";

const Chart = (props) => {
    const totalMaximum = Math.max(
        ...props.dataPoints.map(dataPoint => dataPoint.value)
    );

    return (
        <div className={styles.chart}>
            {
                props.dataPoints.map(
                    dataPoint => <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                )
            }
        </div>
    )
};

export default Chart;
