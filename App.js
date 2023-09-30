import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBar from './src/navigation/TabBar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabBar />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}