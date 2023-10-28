import React from "react";
import ChartBar from "./ChartBar";
import './chart.css'

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximun = Math.max(...dataPointValue);


    return (
        <>
            <div className="chart">
                {props.dataPoints.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxvalue={totalMaximun}
                        label={dataPoint.label}
                    />
                ))}
            </div>

        </>
    )
}

export default Chart;  