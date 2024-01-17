/**
 * Converts temperature from one unit to multiple units.
 *
 * @function
 * @param {string} fromUnit - The unit from which conversion is done (e.g., 'DegreeCelsius').
 * @param {number} fromValue - The value to be converted.
 * @returns {Object} An object containing converted values in DegreeCelsius, Fahrenheit, and Kelvin units.
 */
const TemperatureConvert = (fromUnit, fromValue) => {
  let value = {};

  switch (fromUnit) {
    case 'DegreeCelsius':
      value.DegreeCelsius = fromValue * 1;
      value.Fahrenheit = (fromValue * 9) / 5 + 32;
      value.Kelvin = fromValue + 273.15;
      break;
    case 'Fahrenheit':
      value.DegreeCelsius = ((fromValue - 32) * 5) / 9;
      value.Fahrenheit = fromValue * 1;
      value.Kelvin = ((fromValue - 32) * 5) / 9 + 273.15;
      break;
    case 'Kelvin':
      value.DegreeCelsius = fromValue - 273.15;
      value.Fahrenheit = ((fromValue - 273.15) * 9) / 5 + 32;
      value.Kelvin = fromValue * 1;
      break;
  }

  return value;
};

export default TemperatureConvert;
