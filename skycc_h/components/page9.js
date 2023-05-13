import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SearchPage = () => {
    return (
        <View style={styles.container}>
          <View>
            <TextInput
             style={styles.search}
             placeholder='검색어를 입력하세요'
             returnKeyType='search'/>
          </View>
        <View style={styles.categories_header}>
            <View style={styles.categories}>
                <Text style={styles.categories}>친구</Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categories}>진로</Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categories}>취직</Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categories}>다이어트</Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categories}>가족</Text>
            </View>
            <View style={styles.categories}>
                <Text style={styles.categories}>육아</Text>
            </View>
            

        </View>
          <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    backgroundColor: 'tomato',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin: 30,
    borderRadius: 10, 
  },
  categories_header: {
    justifyContent: 'center', 
    alignContent: 'space-around',
    flexWrap: 'wrap',
  },
  categories: {
    backgroundColor: 'tomato',
    borderRadius: 20, 
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin:10,
  }
});

export default SearchPage;

  
