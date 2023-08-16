import {Text, View, Dimensions, useWindowDimensions} from 'react-native';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import MyButton from '../components/NavigationButton';
import { useScaleComponent } from '../utilities/useScaleComponent';

const styles = GlobalStylesheet();
const Home = ({navigation}) => {
  const handleLengthClick = () => {
    navigation.navigate('Length');
  };
  const handleWeightClick = () => {
    navigation.navigate('Weight');
  };
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
      {/* <View
        style={{
          width: scaleHeight(200),
          backgroundColor: height > 420 ? 'red' : 'yellow',
          
          alignItems: 'center',
        }}>
        <Text>Dimension Check</Text>
      </View> */}
    </View>
  );
};

export default Home;
