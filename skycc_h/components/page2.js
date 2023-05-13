import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const TodaysQuestion = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.todaysQ}>
              <Text style={styles.header_todaysQ}>오늘의 질문</Text>
              <Text style={styles.text_todaysQ}>무엇을 좋아하나요</Text>
            </View>

            <View style={styles.todaysQ}>
              <Text style={styles.header_todaysQ}>오늘의 기록</Text>
              <Text style={styles.text_todaysQ}>무엇을 했나요</Text>
            </View>

          <TouchableOpacity onPress={()=>{navigation.navigate('page3')}}>
            <View style={styles.todaysQ}>
              <Text style={styles.header_todaysQ}>오늘의 고민</Text>
              <Text style={styles.text_todaysQ}>무엇이 고민인가요</Text>
            </View>
          </TouchableOpacity>

          
          
          
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todaysQ: {
    backgroundColor: 'tomato',
    flex: 0.2,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
    borderRadius: 10, 
  },
  header_todaysQ: {
    fontSize: 13,
    marginLeft: 100,
    marginRight: 100,
  },
  text_todaysQ: {
    marginVertical: 15,
    marginTop: 10,
    fontSize: 18,
  }

});

export default TodaysQuestion;

  
