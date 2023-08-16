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
