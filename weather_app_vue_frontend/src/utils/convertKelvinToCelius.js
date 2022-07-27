export const convertKelvinToCelius = (tempInKelvin) => {
    return (tempInKelvin - 273.15).toFixed(1);
}