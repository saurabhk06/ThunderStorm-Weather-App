/**
 * This utility method is used to convert temp from Kelvin to Celcius.
 * 
 * @param {*} tempInKelvin 
 * @returns 
 */
export const convertKelvinToCelius = (tempInKelvin) => {
    return (tempInKelvin - 273.15).toFixed(1);
}