import {Text, View, StyleSheet} from 'react-native';
import * as Constant from '../utilities/MyConstants'

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Constant.width.large,
    height: Constant.height.small,
  },
  headerText: {
    color: Constant.color.darkColor,
    fontSize: Constant.fontSize.large,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: Constant.padding.large,
  },
});

export default Header;
