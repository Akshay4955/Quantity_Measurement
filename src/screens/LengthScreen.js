import {View, Dimensions, Text} from 'react-native';
import {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import {Picker} from '@react-native-picker/picker';
import NavigationButton from '../components/NavigationButton';
import LengthConvert from '../services/LengthConvert';

/**
 * Length component for handling length conversion.
 *
 * @component
 * @returns {React.Element} A React element representing the Length component.
 */
const Length = () => {
  const styles = GlobalStylesheet();
  const [fromUnit, setFromUnit] = useState('Meter');
  const [toUnit, setToUnit] = useState('Meter');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [toKilometerValue, setToKilometerValue] = useState('0');
  const [toMeterValue, setToMeterValue] = useState('0');
  const [toCentimeterValue, setToCentimeterValue] = useState('0');
  const [toFootValue, setToFootValue] = useState('0');
  const [toInchValue, settoInchValue] = useState('0');

  const height = Dimensions.get('window').height;
  console.log(height);

  /**
   * Handles the conversion of length units based on user input.
   * @function
   */
  const handleConvert = () => {
    const data = LengthConvert(fromUnit, fromValue);
    setToValue(data[toUnit]);
    setToKilometerValue(data.Kilometer);
    setToMeterValue(data.Meter);
    setToCentimeterValue(data.Centimeter);
    setToFootValue(data.Foot);
    settoInchValue(data.Inch);
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
            <Picker.Item label="Kilometer" value={'Kilometer'} />
            <Picker.Item label="Meter" value={'Meter'} />
            <Picker.Item label="Centimeter" value={'Centimeter'} />
            <Picker.Item label="Foot" value={'Foot'} />
            <Picker.Item label="Inch" value={'Inch'} />
          </Picker>
        </View>
        <Header title={'To :'} />
        <View style={styles.contentrow}>
          <UserInput value={toValue.toString()} />
          <Picker
            style={styles.picker_container}
            selectedValue={toUnit}
            onValueChange={(itemValue) => setToUnit(itemValue)}>
            <Picker.Item label="Kilometer" value={'Kilometer'} />
            <Picker.Item label="Meter" value={'Meter'} />
            <Picker.Item label="Centimeter" value={'Centimeter'} />
            <Picker.Item label="Foot" value={'Foot'} />
            <Picker.Item label="Inch" value={'Inch'} />
          </Picker>
        </View>
      </View>
      <NavigationButton title={'Convert'} handleClick={handleConvert} />
      <View style={styles.result_container}>
        <View style={styles.contentrow}>
          <UserInput value={toKilometerValue.toString()} />
          <Text style={styles.list_text}>Kilometer</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toMeterValue.toString()} />
          <Text style={styles.list_text}>Meter</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toCentimeterValue.toString()} />
          <Text style={styles.list_text}>Centimeter</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toFootValue.toString()} />
          <Text style={styles.list_text}>Foot</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toInchValue.toString()} />
          <Text style={styles.list_text}>Inch</Text>
        </View>
      </View>
    </View>
  );
};

export default Length;
