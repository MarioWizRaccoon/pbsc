import {White, Black, Orange, Dark_Grey} from '../constant/color';
import {StyleSheet, Text, View} from "react-native";

export default class dateCounter extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: White,
    maxHeight: 500,
    maxWidth: 500,
    fontFamily: 'Roboto, sans-serif',

  },
  counter: {
    fontSize: 18,
    textAlign: 'left',
    height: 60,
    alignItems: 'center',
    backgroundColor: Dark_Grey,
    fontcolor: Black,
    paddingLeft: 16,
  },
});