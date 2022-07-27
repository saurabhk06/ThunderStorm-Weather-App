export const fetchNextdaysWeatherdata = (dataArr) => {
    let result = [dataArr[0], dataArr[4]];
    for (let i = 12; i < 30; i += 8) {
        result.push(dataArr[i])
    }
    return result;
}