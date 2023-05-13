import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
import TodaysQuestion from './components/TodayQuestion'
import MyWviewpage from './components/MyWviewpage'
//import SearchPage from './components/page9'
import Wviewpage from './components/WviewPage';
import Myrecordpage from './components/MyRecordPage/MyRecordPage'
import AnswerPage from './components/AnswerPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CalendarPage from './components/CalendarPage';
import HomeScreen from './components/HomeScreen';
import SearchDetailPage from './components/SearchDetailPage'
import SearchPage from './components/SearchPage'
import MyRecordPage from './components/MyRecordPage/MyRecordPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="calendar" component={CalendarPage}/>
        <Stack.Screen name="answerpage" component={AnswerPage}/>
        <Stack.Screen name="myrecordpage" component={MyRecordPage}/>
        <Stack.Screen name="mywviewpage" component={MyWviewpage}/>
        <Stack.Screen name="Wviewpage" component={Wviewpage}/>
        <Stack.Screen name="searchdetailpage" component={SearchDetailPage}/>
        <Stack.Screen name="search" component={SearchPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}


