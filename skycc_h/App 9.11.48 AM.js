import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CocoTab from './Tabs/CocoTab';
import MainTab from './Tabs/MainTab';
import SearchTab from './Tabs/SearchTab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="main"
        screenOptions={{ headerShown: false }}>
        <Tab.Screen name="coco" component={CocoTab} />
        <Tab.Screen name="main" component={MainTab} />
        <Tab.Screen name="search" component={SearchTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
