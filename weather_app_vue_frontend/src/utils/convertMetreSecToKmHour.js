/**
 * This utility method is used to convert speed from metre/sec to km/hr.
 * @param {*} speedInMetreSec 
 * @returns 
 */
export const convertMetreSecToKmHour = (speedInMetreSec) => {
    return ((18/5) * speedInMetreSec).toFixed(1);
}