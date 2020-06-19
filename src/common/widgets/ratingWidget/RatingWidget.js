import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

export default function BarChart({ title, desc, data }) {
    const ref = useRef();
    useEffect(() => {
        const chart = new Chart(ref.current, {
            data,
            type: "horizontalBar",
            options: {
                legend: { display: false },
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        stacked: true
                    }]
                }
            },
        });

        return () => {
            chart.destroy();
        };
    }, [data]);

    return (
        <div className="kt-widget14">
            <div className="kt-widget14__header kt-margin-b-30">
                <h3 className="kt-widget14__title">{title}</h3>
                <span className="kt-widget14__desc">{desc}</span>
            </div>
            <div>
                <canvas ref={ref} />
            </div>
        </div>
    );
}