import React, { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { Chart } from "chart.js";

export default function BarChart({ data }) {
    const ref = useRef();

    // creating the chart data
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
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                        },
                        stacked: true
                    }]
                },
            },
        });

        // clearing up on unmount
        return () => {
            chart.destroy();
        };
    }, [data]);

    return (
        <canvas ref={ref} />
    );
}

BarChart.propTypes = {
    data: PropTypes.object.isRequired
}