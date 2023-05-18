import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TagButton = ( { text }) => {
  return (
    <TouchableOpacity style={styles.tagButton}>
      <Text style={styles.innerText}> #{text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tagButton: {
    marginHorizontal: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: 'cornflowerblue',
    borderRadius: 30
  },
  innerText: {
    fontSize: 20,
  },
});

export default TagButton;
