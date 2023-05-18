import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Wviewpage = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.date}>2023.05.07</Text>
          <Text style={styles.ihaveW}>#고민이 있어요</Text>
          <View style={styles.Wtext}>
            <Text>~~~</Text>
          </View>

          <View style={styles.response}>
            <Text>response</Text>
          </View>


          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'teal',
    flex: 1,
    marginTop: 40,
  },
  date: {
    backgroundColor: 'tomato',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
    borderRadius: 10, 
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 10,
    marginRight:10,
  },
  ihaveW: {
    fontSize: 13,
    backgroundColor: 'tomato',
    marginTop: -10, 
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 10,
    marginRight:10,
  },
  Wtext: {
    marginVertical: 15,
    backgroundColor: 'tomato',
    marginTop: 10,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  response: {
    backgroundColor: 'tomato',
    fontSize: 15,
    alignSelf: 'flex-end',
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexGrow:1,
    margin:10
  },

});

export default Wviewpage;