import {
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useScaleComponent} from '../utilities/useScaleComponent';
import * as Constant from '../utilities/MyConstants';

const NavigationButton = ({title, handleClick}) => {
  return (
    <View style={styles.button_container}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.button_text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button_container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Constant.color.mediumColor,
    borderColor: 'black',
    borderWidth: Constant.borderWidth.large,
    borderRadius: Constant.borderRadius.large,
    padding: Constant.padding.small,
    margin: Constant.margin.small,
    height: Constant.height.small,
    width: Constant.width.large,
  },
  button_text: {
    color: 'black',
    fontSize: Constant.fontSize.medium,
    fontWeight: 'bold',
  },
});

export default NavigationButton;
