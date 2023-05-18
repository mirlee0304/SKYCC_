import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@record'; //'오늘의 질문'에 대한 답

const AddRecordPage = ({ navigation, route }) => {
  const records = route.params.records;
  const setRecords = route.params.setRecords;

  const date = new Date();

  const [text, setText] = useState();
  const onChangeText = (event) => setText(event);

  const onPress = async () => {
    addRecord();
    navigation.pop();
  };

  const saveRecords = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const addRecord = async () => {
    if (text == '') {
      return;
    }
    const newRecords = {
      ...records,
      [Date.now()]: { content: text, date: Date() },
    };
    await saveRecords(newRecords);
    setRecords(newRecords);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      <Text style={styles.question}>오늘의 기록 추가하기</Text>
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
    marginTop: 10,
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

export default AddRecordPage;
