import {Text, View, Dimensions, useWindowDimensions} from 'react-native';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import MyButton from '../components/NavigationButton';

/**
 * Home component representing the main screen of the application.
 *
 * @component
 * @param {Object} props - The properties for the Home component.
 * @param {Object} props.navigation - The navigation object for navigating between screens.
 * @returns {React.Element} A React element representing the Home component.
 */
const Home = ({ navigation }) => {
  /**
   * Handles the click event for navigating to the 'Length' screen.
   * @function
   */
  const handleLengthClick = () => {
    navigation.navigate('Length');
  };

  /**
   * Handles the click event for navigating to the 'Weight' screen.
   * @function
   */
  const handleWeightClick = () => {
    navigation.navigate('Weight');
  };

  /**
   * Handles the click event for navigating to the 'Temperature' screen.
   * @function
   */
  const handleTemperatureClick = () => {
    navigation.navigate('Temperature');
  };

  return (
    <View style={styles.container}>
      <View>
        <MyButton title={'Length'} handleClick={handleLengthClick} />
        <MyButton title={'Weight'} handleClick={handleWeightClick} />
        <MyButton title={'Temperature'} handleClick={handleTemperatureClick} />
      </View>
    </View>
  );
};

export default Home;
