import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Calendar} from 'react-native-calendars';

const STORAGE_KEY = '@Todos'

const SaveTodos = async (todos) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s != null) setToDos(JSON.parse(s));
  }

const TodayList = () => {
    return (
    <View style={styles.container}>
      <Calendar style={styles.calendar}></Calendar>
      <View style={styles.header}>
        <Text style={styles.todo_header}>오늘의 할 일</Text>
        
        <Text style={styles.record_header}>오늘의 기록</Text>
      </View>
      <View style={styles.header}>
        <View style={styles.todo}>
            <Text>~~</Text>
            <Text>~~</Text>
        </View>
        <View style={styles.record}>
            <Text>~~</Text>
            <Text>~~</Text>
        </View>
      </View> 

      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'teal',
        flex: 1,
      },
    calendar: {
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
      backgroundColor: 'tomato',
      margin: 50,
    }, 
    header: {
      fontSize: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 30,
      
    },
    todo_header: {
      backgroundColor: 'tomato',
      fontSize: 20,
      flexDirection: 'column'
    }, 
    record_header: {
        backgroundColor: 'tomato',
        fontSize: 20,
        flexDirection: 'column'
    }, 
    todo: {
        backgroundColor: 'tomato',
    },
    record: {
        backgroundColor: 'tomato',

    },

  });

export default TodayList