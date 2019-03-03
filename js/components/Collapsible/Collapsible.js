import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from 'react-native';
import styles from '../../config/styles';
import collapsibleStyles from './styles';
import PropTypes from 'prop-types';

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
      <View style={collapsibleStyles.container}>
        <TouchableOpacity
          onPress={this.handleToggleItem}
          style={collapsibleStyles.touchable}
        >
          <View>
            <Animated.Text
              style={[collapsibleStyles.touchableText, animatedStyles]}
            >
              {`${this.state.opened ? '-' : '+'}`}
            </Animated.Text>
          </View>
          <Text style={collapsibleStyles.touchableText}>
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

Collapsible.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
export default Collapsible;
