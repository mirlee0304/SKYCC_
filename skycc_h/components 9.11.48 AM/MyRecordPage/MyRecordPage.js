import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import TagButton from './TagButton';
import ItemContainer from './ItemContainer';

const MyRecordPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>내가 쓴 글</Text>
      <View style={styles.tagContainer}>
        <TagButton text={'Q&A'} />
        <TagButton text={'고민'} />
      </View>
      <View style={styles.listContainer}>
        <ScrollView>
        <ItemContainer key={'key'}></ItemContainer>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 25,
  },
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  listContainer: {
    width: '100%',
    flewGrow: 1,
    padding: 10,
  },
});

export default MyRecordPage;
