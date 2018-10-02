import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 32,
  },
});

class Header extends Component {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    );
  }
}

export default Header;
