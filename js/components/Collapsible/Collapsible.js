import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';
import styles, { Colors } from '../../config/styles';

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
  }

  handleToggleItem = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { item } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={this.handleToggleItem}>
          <Text style={{ ...styles.Paragraph, color: Colors.purple }}>
            {`${this.state.opened ? '-' : '+'} ${item.title}`}
          </Text>
        </TouchableOpacity>
        {this.state.opened && (
          <Text style={styles.Paragraph}>
            {item.description}
            {item.order}
          </Text>
        )}
      </View>
    );
  }
}

export default Collapsible;
