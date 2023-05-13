import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';
import { format } from "date-fns";
import StoryCircle from './StoryCircle';


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
  text: "hh"
}

const TodayList = ({navigation}) => {
  const [SelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd"),
  );
    return (
    <View style={styles.container}>
      <View style={styles.circlecontainer}>
        <StoryCircle onPress={() => navigation.navigate()}/>
        <StoryCircle onPress={() => {}}/>
        <StoryCircle onPress={() => {}}/>
        <StoryCircle onPress={() => {}}/>
      </View>
      <Calendar 
      style={styles.calendar} 
      /*
      onDayPress={(day) => {
  
        //SelectedDate(day.dateString)*/
       />

      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('answerpage')}}>
        <Text style={styles.todo_header}>오늘의 할 일</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('mywviewpage')}}>
        <Text style={styles.record_header}>오늘의 기록</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.todo}>
            <Text>{list.text}</Text>
        </View>
        <View style={styles.record}>
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
      circlecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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

export default TodayList;