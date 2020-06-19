import React from 'react';
import {
    Card,
    CardContent,
} from '@material-ui/core';

import { getRatingChartData } from '../../../../util/format';
import BarChart from '../../../../common/widgets/ratingWidget/BarChart';

export default function RatingGraph({ feedbacks = [] }) {

    const data = getRatingChartData(feedbacks);

    const chartData = {
        labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
        datasets: [{
            label: "Customer Ratings",
            data: data,
            backgroundColor: "#ffb400",
            strokeColor: "brown",
            borderWidth: 1
        }],
    }

    return (
        <Card>
            <CardContent>
                <BarChart data={chartData} />
            </CardContent>
        </Card>
    );
}