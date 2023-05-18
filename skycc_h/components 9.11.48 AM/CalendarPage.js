import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import StoryCircle from './StoryCircle';
import { color } from '../color';

/*
const [toDos, setToDos] = useState({});


const STORAGE_KEY = '@Todos'

const saveTodos = async (todos) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    if (s != null) setToDos(JSON.parse(s));
  }

useEffect(() => {loadToDos();}, []);

const addToDo = async () => {
    if (text=="") {
      return;
    }
    const newToDos = {...toDos, [Date.now()]: {text}};
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const editToDo = async (key) => {
    setEditText(toDos[key].text);
    setOriginText(toDos[key].text);
    const newToDos = {...toDos};
    newToDos[key].editing = true;
    setToDos(newToDos);
  }
  */

const list = {
  text: 'hh',
};

const TodayList = ({ navigation }) => {
  const [SelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [toDos, setToDos] = useState({});
  const [records, setRecords] = useState({});

  const loadToDos = async () => {
    let list = {};
    const s = await AsyncStorage.getItem('@toDos');
    if (s != null) list = JSON.parse(s);
    return setToDos(list);
  };

  const loadRecords = async () => {
    let list = {};
    const s = await AsyncStorage.getItem('@records');
    if (s != null) list = JSON.parse(s);
    return setRecords(list);
  };

  useEffect(() => loadToDos(), []);
  useEffect(() => loadRecords(), []);

  const today = new Date();
  const [selected, setSelected] = useState(today.toDateString());
  const [day, setDay] = useState(today.toDateString());

  return (
    <View style={styles.container}>
      <View style={styles.circlecontainer}>
        <StoryCircle onPress={() => navigation.navigate('answerqnapage')} />
        <StoryCircle onPress={() => navigation.navigate('othersstorypage')} />
        <StoryCircle onPress={() => navigation.navigate('othersstorypage')} />
        <StoryCircle onPress={() => navigation.navigate('othersstorypage')} />
      </View>
      <View>
        <Text>오늘의 질문</Text>
      </View>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          console.log(day, day.dateString);
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'blue',
          },
        }}
      />
      <View style={styles.section}>
        <Text style={{ ...styles.header, marginHorizontal: 10 }}>
          오늘의 고민
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('addTodo', {
                toDos: toDos,
                setToDos: setToDos,
              });
            }}>
            <Text style={styles.header}>오늘의 할 일</Text>
          </TouchableOpacity>
          <View style={styles.list}>
            {Object.keys(toDos).map((key) => {
              return <Text>{toDos[key].content}</Text>;
            })}
          </View>
        </View>
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('addRecord', {
                records: records,
                setRecords: setRecords,
              });
            }}>
            <Text style={styles.header}>오늘의 기록</Text>
          </TouchableOpacity>
          <View style={styles.list}>
            {Object.keys(records).map((key) => {
              return <Text>{records[key].content}</Text>;
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  circlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
    marginHorizontal: 50,
    marginVertical: 10,
  },
  sectionContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  section: {
    backgroundColor: color.lightyellow,
    flexGrow: 1,
    margin: 5,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    margin: 10,
    borderRadius: 20, 
  },
  list: {
    padding: 10,
    minHeight: 300,
    borderRadius: 20, 
  },
});

export default TodayList;
