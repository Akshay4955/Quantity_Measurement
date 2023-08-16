import { scaleHeight, scaleWidth, scaleSize} from "./useScaleComponent";

export const color = {
  backgroundColor: '#ADE8F4',
  lightColor: '#90E0EF',
  mediumColor: '#0096C7',
  darkColor: '#023E8A',
  borderColor: '#023E8A',
};
export const borderWidth = {
  small: 0.7,
  medium: 0.9,
  large: 1.1,
  extralarge: 1.3,
};
export const margin = {
  small: 8,
  medium: 10,
  large: 12,
  extralarge: 14,
};
export const fontSize = {
  small: scaleSize(16),
  medium: scaleSize(20),
  large: scaleSize(24),
  extralarge: scaleSize(26),
};
export const width = {
  small: scaleWidth(100),
  medium: scaleWidth(130),
  large: scaleWidth(160),
  extralarge: scaleWidth(190),
};
export const height = {
  verysmall: scaleHeight(30),
  small: scaleHeight(50),
  medium: scaleHeight(70),
  large: scaleHeight(90),
  extralarge: scaleHeight(100),
};
export const padding = {
  small: 8,
  medium: 10,
  large: 12,
  extralarge: 14,
};
export const borderRadius = {
  small: 16,
  medium: 20,
  large: 24,
  extralarge: 26,
};
