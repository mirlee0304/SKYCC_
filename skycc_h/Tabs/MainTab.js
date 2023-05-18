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
import OthersStoryPage from '../components/OthersStoryPage';

const Stack = createNativeStackNavigator();

const MainTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="calendar" component={CalendarPage} />
        <Stack.Screen name="addTodo" component={AddTodoPage} />
        <Stack.Screen name="addRecord" component={AddRecordPage} />
        <Stack.Screen name="answerqnapage" component={AnswerQnaPage} />
        <Stack.Screen name="othersstorypage" component={OthersStoryPage} />
        <Stack.Screen name="myrecordpage" component={MyRecordPage} />
        <Stack.Screen name="mywviewpage" component={MyWviewpage} />
        <Stack.Screen name="Wviewpage" component={Wviewpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainTab;
