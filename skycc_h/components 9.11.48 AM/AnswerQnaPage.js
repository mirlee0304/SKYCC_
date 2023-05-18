import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@qna_response';  //'오늘의 질문'에 대한 답

const AnswerQnaPage = ({navigation}) => {
  const date = new Date();
  const question = '무슨 음악 좋아해?';

  const [text, setText] = useState();
  const onChangeText = (event) => setText(event);

  const onPress = async () => {
    saveResponse(text);
    navigation.pop();
  };

  const saveResponse = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.submitBtn}>
          <Text style={{ color: 'white', fontSize: 20 }}> 등록하기 </Text>
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
    minHeight: 300,
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

export default AnswerQnaPage;
