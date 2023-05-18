import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { color } from '../color';

const SearchDetailPage = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.category}>친구</Text>
          </View>
          <Text style={styles.contents}>~~</Text>
          <Text style={styles.contents}>~~</Text>
          <Text style={styles.contents}>~~</Text>
          <Text style={styles.contents}>~~</Text>
          
          <TouchableOpacity onPress={()=> navigation.navigate('search')}>
            <View>
            <Text>돌아가기</Text>
            </View>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    backgroundColor: color.lightyellow,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin: 30,
    borderRadius: 10, 
  },
  contents: {
    backgroundColor: color.lightyellow,
    borderRadius: 20, 
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin:10,
  }
});

export default SearchDetailPage;