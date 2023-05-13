import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SearchDetailPage = () => {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.category}>친구</Text>
          </View>
          <Text style={styles.contents}>~~</Text>
          <Text style={styles.contents}>~~</Text>
          <Text style={styles.contents}>~~</Text>
          <Text style={styles.contents}>~~</Text>

            


          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    backgroundColor: 'tomato',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin: 30,
    borderRadius: 10, 
  },
  contents: {
    backgroundColor: 'tomato',
    borderRadius: 20, 
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin:10,
  }
});

export default SearchDetailPage;

  
