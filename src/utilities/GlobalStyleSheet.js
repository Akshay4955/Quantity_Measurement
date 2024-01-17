import {StyleSheet, Dimensions} from 'react-native';
import * as Constant from './MyConstants';



/**
 * Generates a global stylesheet with consistent styling based on device dimensions.
 *
 * @function
 * @returns {Object} A StyleSheet object containing style definitions for various components.
 */
const GlobalStylesheet = () => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  /**
   * StyleSheet object with consistent styling.
   *
   * @typedef {Object} StyleSheet
   * @property {Object} container - Style for the main container.
   * @property {Object} contentrow - Style for a row in the content.
   * @property {Object} list_text - Style for text in lists.
   * @property {Object} picker_container - Style for picker components.
   * @property {Object} result_container - Style for the result container.
   * @property {Object} screen_container - Style for the screen container.
   */

  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: height > width ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Constant.color.backgroundColor,
      borderColor: Constant.color.borderColor,
      borderWidth: Constant.borderWidth.large,
    },
    contentrow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: Constant.margin.large,
    },
    list_text: {
      fontSize: Constant.fontSize.medium,
      fontWeight: 'bold',
      color: 'black',
      margin: Constant.margin.large,
    },
    picker_container: {
      width: Constant.width.medium,
      color: Constant.color.darkColor,
      justifyContent: 'center',
      alignContent: 'center',
      tintColor: Constant.color.mediumColor,
    },
    result_container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignContent: 'center',
      backgroundColor: Constant.color.backgroundColor,
    },
    screen_container: {
      alignContent: 'center',
      backgroundColor: Constant.color.backgroundColor,
    },
  });
};

export default GlobalStylesheet;
