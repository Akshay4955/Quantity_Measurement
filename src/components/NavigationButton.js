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

/**
 * NavigationButton component for displaying a button with a title.
 *
 * @component
 * @param {Object} props - The properties for the NavigationButton component.
 * @param {string} props.title - The title to be displayed on the button.
 * @param {Function} props.handleClick - The function to be called when the button is pressed.
 * @returns {React.Element} A React element representing the NavigationButton component.
 */
const NavigationButton = ({title, handleClick}) => {
  return (
    <View style={styles.button_container}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.button_text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

/**
 * Stylesheet for the NavigationButton component using react-native StyleSheet.
 *
 * @constant {Object} styles - The styles for the NavigationButton component.
 * @property {Object} button_container - Style for the container of the button.
 * @property {string} button_container.justifyContent - Align items along the primary axis (center).
 * @property {string} button_container.alignContent - Align items within the container (center).
 * @property {string} button_container.alignItems - Align items along the secondary axis (center).
 * @property {string} button_container.backgroundColor - The background color of the button (mediumColor).
 * @property {string} button_container.borderColor - The border color of the button (black).
 * @property {number} button_container.borderWidth - The border width of the button (large).
 * @property {number} button_container.borderRadius - The border radius of the button (large).
 * @property {number} button_container.padding - The padding around the button (small).
 * @property {number} button_container.margin - The margin around the button (small).
 * @property {number} button_container.height - The height of the button.
 * @property {number} button_container.width - The width of the button.
 * @property {Object} button_text - Style for the text within the button.
 * @property {string} button_text.color - The color of the text (black).
 * @property {number} button_text.fontSize - The font size of the text (medium).
 * @property {string} button_text.fontWeight - The font weight of the text (bold).
 */
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
