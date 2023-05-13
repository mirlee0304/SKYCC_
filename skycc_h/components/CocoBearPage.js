import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const CocoBearPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
            <Text>상점</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>밥 주기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cocoContainer}>
      <Image
        source={require('./images/cocobear.jpg')}
      />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  cocoContainer: {},
  cocoBear: {
    resizeMode: 'contain',
    width: 100,
    height: 200,
  },
});

export default CocoBearPage;
