import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import CheckBox from '../CheckBox';

import { AntDesign } from '@expo/vector-icons';

const AnswerPage = () => {
  const date = new Date();
  const question = '어떤 음악을 좋아하시나요?';

  const [text, setText] = useState();
  const onChangeText = (event) => setText(event);

  const onPress = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={text} onChangeText={onChangeText}/>
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.checkText}>다른 사람들과 공유할래요</Text>
        <CheckBox/>
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.submitBtn}>
          <Text style={{ color: 'white', fontSize: 15 }}> 다 썼어요 </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  date: {
    marginTop: 50,
  },
  question: {
    fontSize: 25,
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    minHeight: 300,
    marginTop: 30,
  },
  input: {
    width: '100%',
    height: 'auto',
    fontSize: 25,
  },
  checkContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  checkText: {
    fontSize: 20,
  },
  submitBtn: {
    backgroundColor: 'cornflowerblue',
    padding: 10,
    borderRadius: 50,
  },
});

export default AnswerPage;
