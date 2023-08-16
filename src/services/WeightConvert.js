const WeightConvert = (fromUnit, fromValue) => {
  let value = {};
  switch (fromUnit) {
    case 'Tonne':
        value.Tonne = fromValue * 1;
        value.Kilogram = fromValue * 1000;
        value.Gram = fromValue * 1000000;
        value.Miligram = fromValue * 1000000000;
        break;
    case 'Kilogram':
        value.Tonne = fromValue / 1000;
        value.Kilogram = fromValue * 1;
        value.Gram = fromValue * 1000;
        value.Miligram = fromValue * 1000000;
      break;
    case 'Gram':
        value.Tonne = fromValue / 1000000;
        value.Kilogram = fromValue / 1000;
        value.Gram = fromValue * 1;
        value.Miligram = fromValue * 1000;
      break;
    case 'Miligram':
        value.Tonne = fromValue / 1000000000;
        value.Kilogram = fromValue / 1000000;
        value.Gram = fromValue / 1000;
        value.Miligram = fromValue * 1;
      break;
  }
  return value;
};

export default WeightConvert;
