import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const StoryCircle = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <Image
        style={styles.image}
        source={require('../images/profile.jpg')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 40,
    overflow: 'hidden'
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  }
});

export default StoryCircle;