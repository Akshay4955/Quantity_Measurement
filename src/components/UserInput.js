import {View, TextInput, StyleSheet} from 'react-native';
import * as Constant from '../utilities/MyConstants'

/**
 * UserInput component for capturing user input through a TextInput field.
 *
 * @component
 * @param {Object} props - The properties for the UserInput component.
 * @param {string} props.value - The current value of the TextInput field.
 * @param {Function} props.onChange - The function to be called when the TextInput value changes.
 * @returns {React.Element} A React element representing the UserInput component.
 */
const UserInput = ({value, onChange}) => {
  return (
    <View>
      <TextInput
        style={styles.input_style}
        placeholderTextColor={Constant.color.mediumColor}
        value={value}
        onChangeText={onChange}
        keyboardType='numeric'
        maxLength={12}
        textAlign='center'
      />
    </View>
  );
};

/**
 * Stylesheet for the UserInput component using react-native StyleSheet.
 *
 * @constant {Object} styles - The styles for the UserInput component.
 * @property {Object} input_style - Style for the TextInput field.
 * @property {string} input_style.borderColor - The border color of the TextInput field (mediumColor).
 * @property {number} input_style.borderRadius - The border radius of the TextInput field (small).
 * @property {number} input_style.borderWidth - The border width of the TextInput field (small).
 * @property {string} input_style.color - The color of the text in the TextInput field (darkColor).
 * @property {number} input_style.width - The width of the TextInput field (large).
 * @property {number} input_style.height - The height of the TextInput field (small).
 * @property {number} input_style.marginHorizontal - The horizontal margin around the TextInput field (extralarge).
 */
const styles = StyleSheet.create({
  input_style: {
    borderColor: Constant.color.mediumColor,
    borderRadius: Constant.borderRadius.small,
    borderWidth: Constant.borderWidth.small,
    color: Constant.color.darkColor,
    width: Constant.width.large,
    height: Constant.height.small,
    marginHorizontal: Constant.margin.extralarge,
  },
});

export default UserInput;
