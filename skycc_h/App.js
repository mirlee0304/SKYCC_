import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import TodaysQuestion from './components/page2'
import MyWviewpage from './components/page6-1'
//import SearchPage from './components/page9'
import Wviewpage from './components/page6';
import Myrecordpage from './components/MyRecordPage/MyRecordPage'
import AnswerPage from './components/AnswerPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CalendarPage from './components/CalendarPage';
import HomeScreen from './components/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="calendar" component={CalendarPage}/>
        <Stack.Screen name="page3" component={AnswerPage}/>
        <Stack.Screen name="page6-1" component={MyWviewpage}/>
        <Stack.Screen name="page6" component={Wviewpage}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


