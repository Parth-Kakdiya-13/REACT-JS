import React from "react";
import './ChartBar.css'

const ChartBar = (props) => {
    let barFillHeight = "0%";

    if (props.maxvalue > 0) {
        barFillHeight = Math.max((props.value / props.maxvalue) * 100) + "%";
        console.log(barFillHeight)
    }



    return (
        <>
            <div className="chart-bar">
                <div className="chart-bar__inner">
                    <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
                </div>
                <div className="chart-bar__label">
                    {props.label}
                </div>
            </div>
        </>
    )
}

export default ChartBar;  