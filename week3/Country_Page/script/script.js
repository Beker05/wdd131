// Function to calculate Wind Chill
function calculateWindChill(temperature, windSpeed) {
  // Check if the conditions meet the requirements
  if (temperature <= 10 && windSpeed > 4.8) {
    // Formula for wind chill in Celsius
    return (13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
  } else if (temperature <= 50 && windSpeed > 3) {
    // Formula for wind chill in Fahrenheit
    return (35.74 + 0.6215 * temperature -  35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
  } else {
    return "N/A"; // Return "N/A" if conditions are not met
  }
}

// Static values for the weather section
const temperature = 8; // Example temperature in Celsius
const windSpeed = 10; // Example wind speed in km/h

// Calculate the wind chill
const windChill = calculateWindChill(temperature, windSpeed);

// Update the weather section content
document.getElementById("temperature").textContent = temperature;
document.getElementById("wind-speed").textContent = windSpeed;
document.getElementById("wind-chill").textContent = windChill; // Display Wind Chill

// Update the footer with the current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
