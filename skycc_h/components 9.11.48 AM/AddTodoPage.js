import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@toDos';  //할 일 목록

const AddTodoPage = ({navigation, route}) => {
  const toDos = route.params.toDos;
  const setToDos = route.params.setToDos;

  const date = new Date();

  const [text, setText] = useState();
  const onChangeText = (event) => setText(event);

  const onPress = async () => {
    addToDo();
    navigation.pop();
  };

  const saveTodos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const addToDo = async () => {
    if (text=="") {
      return;
    }
    const newToDos = {...toDos, [Date.now()]: {content: text, date: Date()}};
    await saveTodos(newToDos);
    setToDos(newToDos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      <Text style={styles.question}>오늘 할 일 추가하기</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.submitBtn}>
          <Text style={{ color: 'white', fontSize: 20 }}> 완료 </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  date: {
    fontSize: 20,
    color: 'grey',
  },
  question: {
    fontSize: 25,
    marginTop: 10
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    minHeight: 100,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 'auto',
    fontSize: 25,
  },
  submitBtn: {
    backgroundColor: 'cornflowerblue',
    padding: 10,
    borderRadius: 50,
  },
});

export default AddTodoPage;
