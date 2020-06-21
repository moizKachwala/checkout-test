/**
 * A method to generate the data for the chart
 * 
 * @param {*} [feedbacks=[]] - Accepts the feedbacks and generate a series of data for chart
 * @returns series of data for chart.
 */

export const getRatingChartData = (feedbacks = []) => {
    // initial ratings.
    let ratings = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
    }
    
    // Loop through the feedback and construct the ratings
    feedbacks.forEach(({rating}) => (
        ratings[rating] += 1
    ));
    
    // return the rating data for the chart
    const data = Object.keys(ratings).map((rating) => {
        return ratings[rating];
    });

    return data;
}