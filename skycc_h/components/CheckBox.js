import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CheckBox = () => {
  const [isChecked, setChecked] = useState(false);
  const onPress = () => setChecked(!isChecked);

  return (
    <TouchableOpacity onPress={onPress}>
      {isChecked ? (
        <Feather name="check-square" size={24} color="black" />
      ) : (
        <Feather name="square" size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
