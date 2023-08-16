import {View, Text, Dimensions} from 'react-native';
import React from 'react';


  const assumeHeight = 803;
  const assumeWidth = 411;
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  export const scaleHeight = size => (height / assumeHeight) * size;

  export const scaleWidth = size => (width / assumeWidth) * size;

  export const scaleSize = size => (width / assumeWidth) * (height / assumeHeight) * size;