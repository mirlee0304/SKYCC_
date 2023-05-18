import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const OthersStoryPage = ({navigation}) => {
  const date = new Date();
  const question = '무슨 음악 좋아해?';
  const response = '윤하의 Black Hole!!';

  const onPress = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{date.toLocaleDateString()}</Text>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.inputContainer}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>{response}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.submitBtn}>
          <Text style={{ color: 'white', fontSize: 20 }}> 뒤로가기 </Text>
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

export default OthersStoryPage;
