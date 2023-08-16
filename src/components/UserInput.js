import {View, TextInput, StyleSheet} from 'react-native';
import * as Constant from '../utilities/MyConstants'

const UserInput = ({value, onChange}) => {
  return (
    <View>
      <TextInput
        style={styles.input_style}
        placeholderTextColor= {Constant.color.mediumColor}
        value={value}
        onChangeText={onChange}
        keyboardType='numeric'
        maxLength={12}
        textAlign='center'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_style: {
    borderColor: Constant.color.mediumColor,
    borderRadius: Constant.borderRadius.small,
    borderWidth: Constant.borderWidth.small,
    color: Constant.color.darkColor,
    width: Constant.width.large,
    height: Constant.height.small,
    marginHorizontal: Constant.margin.extralarge,
  },
})
export default UserInput;
