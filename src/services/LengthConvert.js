/**
 * Converts length from one unit to multiple units.
 *
 * @function
 * @param {string} fromUnit - The unit from which conversion is done (e.g., 'Kilometer').
 * @param {number} fromValue - The value to be converted.
 * @returns {Object} An object containing converted values in Kilometer, Meter, Centimeter, Foot, and Inch units.
 */
const LengthConvert = (fromUnit, fromValue) => {
  let value = {};

  switch (fromUnit) {
    case 'Kilometer':
      value.Kilometer = fromValue * 1;
      value.Meter = fromValue * 1000;
      value.Centimeter = fromValue * 100000;
      value.Foot = fromValue * 3281;
      value.Inch = fromValue * 39370;
      break;
    case 'Meter':
      value.Kilometer = fromValue / 1000;
      value.Meter = fromValue * 1;
      value.Centimeter = fromValue * 100;
      value.Foot = fromValue * 3.281;
      value.Inch = fromValue * 39.37;
      break;
    case 'Centimeter':
      value.Kilometer = fromValue / 100000;
      value.Meter = fromValue / 100;
      value.Centimeter = fromValue * 1;
      value.Foot = fromValue / 30.48;
      value.Inch = fromValue / 2.54;
      break;
    case 'Foot':
      value.Kilometer = fromValue / 3281;
      value.Meter = fromValue / 3.281;
      value.Centimeter = fromValue * 30.48;
      value.Foot = fromValue * 1;
      value.Inch = fromValue * 12;
      break;
    case 'Inch':
      value.Kilometer = fromValue / 39370;
      value.Meter = fromValue / 39.37;
      value.Centimeter = fromValue * 2.54;
      value.Foot = fromValue / 12;
      value.Inch = fromValue * 1;
      break;
  }

  return value;
};

export default LengthConvert;
