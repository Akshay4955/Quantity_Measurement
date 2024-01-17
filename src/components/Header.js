import {Text, View, StyleSheet} from 'react-native';
import * as Constant from '../utilities/MyConstants'

/**
 * Header component for displaying a title in a header container.
 *
 * @component
 * @param {Object} props - The properties for the Header component.
 * @param {string} props.title - The title to be displayed in the header.
 * @returns {React.Element} A React element representing the Header component.
 */
const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

/**
 * Stylesheet for the Header component using react-native StyleSheet.
 *
 * @constant {Object} styles - The styles for the Header component.
 * @property {Object} headerContainer - Style for the container of the header.
 * @property {string} headerContainer.flexDirection - The flex direction for the container (row).
 * @property {string} headerContainer.justifyContent - Align items along the primary axis (flex-start).
 * @property {string} headerContainer.alignItems - Align items along the secondary axis (center).
 * @property {number} headerContainer.width - The width of the header container.
 * @property {number} headerContainer.height - The height of the header container.
 * @property {Object} headerText - Style for the text within the header.
 * @property {string} headerText.color - The color of the text (darkColor).
 * @property {number} headerText.fontSize - The font size of the text (large).
 * @property {string} headerText.alignItems - Align items along the secondary axis (center).
 * @property {string} headerText.justifyContent - Align items along the primary axis (center).
 * @property {string} headerText.fontWeight - The font weight of the text (bold).
 * @property {number} headerText.padding - The padding around the text (large).
 */
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Constant.width.large,
    height: Constant.height.small,
  },
  headerText: {
    color: Constant.color.darkColor,
    fontSize: Constant.fontSize.large,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: Constant.padding.large,
  },
});

export default Header;
