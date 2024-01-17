import {View, Text} from 'react-native';
import {useState} from 'react';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import Header from '../components/Header';
import UserInput from '../components/UserInput';
import {Picker} from '@react-native-picker/picker';
import NavigationButton from '../components/NavigationButton';
import WeightConvert from '../services/WeightConvert';

/**
 * Weight component for handling weight conversion.
 *
 * @component
 * @returns {React.Element} A React element representing the Weight component.
 */
const Weight = () => {
  const styles = GlobalStylesheet();
  const [fromUnit, setFromUnit] = useState('Tonne');
  const [toUnit, setToUnit] = useState('Tonne');
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [toTonneValue, setToTonneValue] = useState('0');
  const [toKilogramValue, setToKilogramValue] = useState('0');
  const [toGramValue, setToGramValue] = useState('0');
  const [toMiligramValue, setToMiligramValue] = useState('0');

  /**
   * Handles the conversion of weight units based on user input.
   * @function
   */
  const handleConvertClick = () => {
    const data = WeightConvert(fromUnit, fromValue);
    setToValue(data[toUnit]);
    setToTonneValue(data.Tonne);
    setToKilogramValue(data.Kilogram);
    setToGramValue(data.Gram);
    setToMiligramValue(data.Miligram);
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
            <Picker.Item label="Tonne" value={'Tonne'} />
            <Picker.Item label="Kilogram" value={'Kilogram'} />
            <Picker.Item label="Gram" value={'Gram'} />
            <Picker.Item label="Miligram" value={'Miligram'} />
          </Picker>
        </View>
        <Header title={'To :'} />
        <View style={styles.contentrow}>
          <UserInput value={toValue.toString()} />
          <Picker
            style={styles.picker_container}
            selectedValue={toUnit}
            onValueChange={(itemValue) => setToUnit(itemValue)}>
            <Picker.Item label="Tonne" value={'Tonne'} />
            <Picker.Item label="Kilogram" value={'Kilogram'} />
            <Picker.Item label="Gram" value={'Gram'} />
            <Picker.Item label="Miligram" value={'Miligram'} />
          </Picker>
        </View>
      </View>
      <NavigationButton title={'Convert'} handleClick={handleConvertClick} />
      <View style={styles.result_container}>
        <View style={styles.contentrow}>
          <UserInput value={toTonneValue.toString()} />
          <Text style={styles.list_text}>Tonne</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toKilogramValue.toString()} />
          <Text style={styles.list_text}>Kilogram</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toGramValue.toString()} />
          <Text style={styles.list_text}>Gram</Text>
        </View>
        <View style={styles.contentrow}>
          <UserInput value={toMiligramValue.toString()} />
          <Text style={styles.list_text}>Miligram</Text>
        </View>
      </View>
    </View>
  );
};

export default Weight;
