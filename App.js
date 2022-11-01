import { StyleSheet } from 'react-native';
import BenefitsScreen from './screens/BenefitsScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterFinishScreen from './screens/RegisterFinishScreen';
import PetRegister from './screens/PetRegister';
import LoginScreen from './screens/LoginScreen';
import LoginScreenPassword from './screens/LoginScreenPassword';
import ForgottenPassword from './screens/ForgottenPassword';
import CreatePassword from './screens/CreatePassword';
import CreatedPassword from './screens/CreatedPassword';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileDetailsScreen from './screens/ProfileDetailsScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BenefitsScreen">
      {/* <Stack.Navigator initialRouteName="ProfileDetailsScreen"> */}
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="BenefitsScreen" component={BenefitsScreen} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="RegisterFinishScreen" component={RegisterFinishScreen} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="PetRegister" component={PetRegister} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="LoginScreenPassword" component={LoginScreenPassword} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="ForgottenPassword" component={ForgottenPassword} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="CreatePassword" component={CreatePassword} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="CreatedPassword" component={CreatedPassword} />

        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen styles={styles.container} options={{headerShown: false, animation: 'slide_from_right'}} name="ProfileDetailsScreen" component={ProfileDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
