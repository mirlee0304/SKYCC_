import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ItemContainer = ({ key }) => {
  const date = Date.now();    //data[key].date
  const content = "내용";     //data[key].content

return (
  <View style={styles.container}>
  <Text style={styles.date}>{date}</Text>
  <Text style={styles.content}>{content}</Text>
  </View>
)
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    height: 70,
    padding: 10,
    borderRadius: 10,
  },
  date: {
    fontSize: 20,
    color: 'grey'
  }, 
  content: {
    fontSize: 25,
    color: 'black'
  },
});

export default ItemContainer;