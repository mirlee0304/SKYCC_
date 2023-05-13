import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import TodaysQuestion from './components/page2'
//import MyWviewpage from './components/page6-1'
import SearchPage from './components/page9'

export default function App() {
  return (
    //<TodaysQuestion></TodaysQuestion>
    //<Wviewpage></Wviewpage>
    //<MyWviewpage></MyWviewpage>
    <SearchPage></SearchPage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
