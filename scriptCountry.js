function calculateWindChill(temp, speed) {

  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed, 0.16) +
    0.3965 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);

}

const temperature = 8;
const windSpeed = 10;

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;

if (temperature <= 10 && windSpeed > 4.8) {

  document.querySelector("#wind-chill").textContent =
    calculateWindChill(temperature, windSpeed);

} else {

  document.querySelector("#wind-chill").textContent = "N/A";

}

document.querySelector("#current-year").textContent =
  new Date().getFullYear();

document.querySelector("#last-modified").textContent =
  document.lastModified;