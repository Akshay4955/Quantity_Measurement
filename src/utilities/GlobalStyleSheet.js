import {StyleSheet, Dimensions} from 'react-native';
import * as Constant from './MyConstants';




const GlobalStylesheet = () => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

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
