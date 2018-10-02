import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#F5F5F5',
  },
});

class SectionHeader extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

export default SectionHeader;
