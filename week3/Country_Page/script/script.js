function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    return (13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
  } else if (temperature <= 50 && windSpeed > 3) {
    return (35.74 + 0.6215 * temperature -  35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
  } else {
    return "N/A";
  }
}

const temperature = 8; 
const windSpeed = 10; 

const windChill = calculateWindChill(temperature, windSpeed);

document.getElementById("temperature").textContent = temperature;
document.getElementById("wind-speed").textContent = windSpeed;
document.getElementById("wind-chill").textContent = windChill;

document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
