import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Length from '../screens/LengthScreen';
import Temperature from '../screens/TemperatureScreen';
import Weight from '../screens/WeightScreen';
import GlobalStylesheet from '../utilities/GlobalStyleSheet';
import Home from '../screens/HomeScreen';

/**
 * Stack navigator for the different screens in the application.
 *
 * @constant {Object} Stack - The stack navigator created using createNativeStackNavigator.
 */
const Stack = createNativeStackNavigator();

/**
 * AppTab component representing the main navigation container for the application.
 *
 * @component
 * @returns {React.Element} A React element representing the AppTab component.
 */
const AppTab = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#023E8A' },
          headerTitleStyle: { fontSize: 30 },
        }}>
        <Stack.Screen name="Quantity Measurement" component={Home} />
        <Stack.Screen name="Temperature" component={Temperature} />
        <Stack.Screen name="Weight" component={Weight} />
        <Stack.Screen name="Length" component={Length} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppTab;
