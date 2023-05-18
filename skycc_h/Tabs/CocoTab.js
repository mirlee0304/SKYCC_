import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TodaysQuestion from '../components/TodayQuestion';
import MyWviewpage from '../components/MyWviewpage';
//import SearchPage from './components/page9'
import Wviewpage from '../components/WviewPage';
import Myrecordpage from '../components/MyRecordPage/MyRecordPage';
import AnswerQnaPage from '../components/AnswerQnaPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CalendarPage from '../components/CalendarPage';
import AddTodoPage from '../components/AddTodoPage';
import AddRecordPage from '../components/AddRecordPage';
import HomeScreen from '../components/HomeScreen';
import SearchDetailPage from '../components/SearchDetailPage';
import SearchPage from '../components/SearchPage';
import MyRecordPage from '../components/MyRecordPage/MyRecordPage';
import CocoBearPage from '../components/CocoBearPage';

const Stack = createNativeStackNavigator();

const CocoTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="coco" component={CocoBearPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default CocoTab;

