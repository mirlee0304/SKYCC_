import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { color } from '../color';

const SearchPage = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View>
            <TextInput
             style={styles.search}
             placeholder='검색어를 입력하세요'
             returnKeyType='search'/>
          </View>
        <View style={styles.categories_header}>
          <TouchableOpacity onPress={() => navigation.navigate('searchdetailpage')}>
            <View style={styles.categories}>
                <Text style={styles.categories}>친구</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('searchdetailpage')}>
            <View style={styles.categories}>
                <Text style={styles.categories}>연애</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('searchdetailpage')}>
            <View style={styles.categories}>
                <Text style={styles.categories}>인간관계</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('searchdetailpage')}>
            <View style={styles.categories}>
                <Text style={styles.categories}>가족</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('searchdetailpage')}>
            <View style={styles.categories}>
                <Text style={styles.categories}>취업</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('searchdetailpage')}>
            <View style={styles.categories}>
                <Text style={styles.categories}>진로</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: color.lightyellow,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    margin: 20,
    marginTop: 50,
    borderRadius: 10, 
  },
  categories_header: {
    alignContent: 'space-around',
    margin: 30,
  },
  categories: {
    backgroundColor: color.lightyellow,
    borderRadius: 10, 
    paddingVertical: 20,
    paddingHorizontal: 50,
    margin: 10,
  }
});

export default SearchPage;