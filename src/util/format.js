let ratings = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
}

// const addRating = (feedback) => {
//     initialRating[]
// }


export const getRatingChartData = (feedbacks) => {

    feedbacks.forEach(({rating}) => (
        ratings[rating] += 1
    ));
    
    const data = Object.keys(ratings).map((val) => {
        console.log(val);
        return ratings[val];
    });

    return data;
}