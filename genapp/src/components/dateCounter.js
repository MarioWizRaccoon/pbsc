import {White, Black, Orange, Dark_Grey} from '../constant/color';
import {StyleSheet, Text, View} from "react-native";

// TODO: if counter is higher than 5, color is orange
// TODO: if counter is below 5, color is white

export default class DateCounter extends Component<Props> {

  constructor(props){
    super(props);
    this.state = { count: 0 }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.count} > 4 ?
        <Text style={styles.counter}{{backgrounColor: 'Orange'}}>{this.state.count}</Text>
        :
        <Text style={styles.counter}>{this.state.count}</Text>
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
    height: 500,
    width: 500,
    fontFamily: 'Roboto, sans-serif',

  },
  counter: {
    fontSize: 18,
    textAlign: 'left',
    height: 60,
    alignItems: 'center',
    backgroundColor: Dark_Grey,
    color: Black,
    paddingLeft: 16,
  },
});