import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardHeader,
} from '@material-ui/core';

import { getRatingChartData } from '../../../../util/format';
import BarChart from '../../../../common/widgets/BarChart/BarChart';

export default function RatingGraph({ feedbacks = [] }) {
    const data = getRatingChartData(feedbacks);

    const chartData = {
        labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
        datasets: [{
            label: "Total ratings",
            data: data,
            backgroundColor: "#ffb400",
            strokeColor: "brown",
            borderWidth: 1
        }],
    }

    return (
        <Card>
            <CardHeader
                title="Feedbacks"
                subheader={`${feedbacks.length} total ratings`}
            />
            <CardContent>
                <BarChart
                    data={chartData}
                />
            </CardContent>
        </Card>
    );
}

RatingGraph.propTypes = {
    feedbacks: PropTypes.array.isRequired
}