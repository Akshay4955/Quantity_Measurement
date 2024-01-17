import {View, Text} from 'react-native';
import {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import {Picker} from '@react-native-picker/picker';
import NavigationButton from '../components/NavigationButton';
import TemperatureConvert from '../services/TemperatureConvert';

/**
 * Temperature component for handling temperature conversion.
 *
 * @component
 * @returns {React.Element} A React element representing the Temperature component.
 */
const Temperature = () => {
  const styles = GlobalStylesheet();
  const [fromUnit, setFromUnit] = useState('DegreeCelsius');
  const [toUnit, setToUnit] = useState('DegreeCelsius');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [toDegreeCelsiusValue, setToDegreeCelsiusValue] = useState('0');
  const [toFahrenheitValue, setToFahrenheitValue] = useState('0');
  const [toKelvinValue, setToKelvinValue] = useState('0');

  /**
   * Handles the conversion of temperature units based on user input.
   * @function
   */
  const handleConvertClick = () => {
    const data = TemperatureConvert(fromUnit, fromValue);
    setToValue(data[toUnit]);
    setToDegreeCelsiusValue(data.DegreeCelsius);
    setToFahrenheitValue(data.Fahrenheit);
    setToKelvinValue(data.Kelvin);
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen_container}>
        <Header title={'From :'} />
        <View style={styles.contentrow}>
          <UserInput
            value={fromValue}
            onChange={(value) => setFromValue(value)}
          />
          <Picker
            style={styles.picker_container}
            selectedValue={fromUnit}
            onValueChange={(itemValue) => setFromUnit(itemValue)}>
            <Picker.Item label="DegreeCelsius" value={'DegreeCelsius'} />
            <Picker.Item label="Fahrenheit" value={'Fahrenheit'} />
            <Picker.Item label="Kelvin" value={'Kelvin'} />
          </Picker>
        </View>
        <Header title={'To :'} />
        <View style={styles.contentrow}>
          <UserInput value={toValue.toString()} />
          <Picker
            style={styles.picker_container}
            selectedValue={toUnit}
            onValueChange={(itemValue) => setToUnit(itemValue)}>
            <Picker.Item label="DegreeCelsius" value={'DegreeCelsius'} />
            <Picker.Item label="Fahrenheit" value={'Fahrenheit'} />
            <Picker.Item label="Kelvin" value={'Kelvin'} />
          </Picker>
        </View>
      </View>
      <NavigationButton title={'Convert'} handleClick={handleConvertClick} />
      <View style={styles.result_container}>
        <View style={styles.contentrow}>
          <UserInput value={toDegreeCelsiusValue.toString()} />
          <Text style={styles.list_text}>DegreeCelsius</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toFahrenheitValue.toString()} />
          <Text style={styles.list_text}>Fahrenheit</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toKelvinValue.toString()} />
          <Text style={styles.list_text}>Kelvin</Text>
        </View>
      </View>
    </View>
  );
};

export default Temperature;
