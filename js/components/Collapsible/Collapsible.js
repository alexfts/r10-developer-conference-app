import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from 'react-native';
import styles, { Colors, Fonts } from '../../config/styles';
import Icon from 'react-native-vector-icons/Ionicons';
class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
      spinValue: new Animated.Value(0)
    };
  }

  animatePlusMinus = () => {
    this.setState({ spinValue: new Animated.Value(0) }, () => {
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 600
      }).start();
    });
  };

  handleToggleItem = () => {
    this.animatePlusMinus();
    LayoutAnimation.easeInEaseOut();
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const spinDegree = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    let animatedStyles = {
      transform: [{ rotate: spinDegree }]
    };
    const { item } = this.props;
    return (
      <View style={{ paddingTop: 10, paddingBottom: 10 }}>
        <TouchableOpacity
          onPress={this.handleToggleItem}
          style={{ flexDirection: 'row' }}
        >
          <View>
            <Animated.Text
              style={[
                {
                  ...styles.Paragraph,
                  fontFamily: Fonts.regular,
                  color: Colors.purple
                },
                animatedStyles
              ]}
            >
              {`${this.state.opened ? '-' : '+'}`}
            </Animated.Text>
          </View>
          <Text
            style={{
              ...styles.Paragraph,
              fontFamily: Fonts.regular,
              color: Colors.purple
            }}
          >
            {` ${item.title}`}
          </Text>
        </TouchableOpacity>
        {this.state.opened && (
          <Text style={styles.Paragraph}>{item.description}</Text>
        )}
      </View>
    );
  }
}

export default Collapsible;
