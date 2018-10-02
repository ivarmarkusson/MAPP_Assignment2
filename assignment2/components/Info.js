import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: '25%',
  },
  text: {
    fontSize: 16,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: 160,
    alignSelf: 'center',
    padding: 15,
    backgroundColor: '#0082ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeFlag: true,
    };
  }

  toggleFlag = () => {
    const { homeFlag } = this.state;
    if (homeFlag) {
      this.setState({ homeFlag: false });
    } else {
      this.setState({ homeFlag: true });
    }
  };

  render() {
    const { homeFlag } = this.state;
    const { homeInfo, workInfo } = this.props;

    if (homeFlag) {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.toggleFlag}>
            <Text style={styles.buttonText}>Show work Info</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{homeInfo.address}</Text>
          <Text style={styles.text}>{homeInfo.email}</Text>
          <Text style={styles.text}>{homeInfo.phone_number}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.toggleFlag}>
          <Text style={styles.buttonText}>Show home Info</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{workInfo.address}</Text>
        <Text style={styles.text}>{workInfo.email}</Text>
        <Text style={styles.text}>{workInfo.phone_number}</Text>
        <Text style={styles.text}>{workInfo.company_name}</Text>
        <Text style={styles.text}>{`${workInfo.department}, ${workInfo.job_title}`}</Text>
      </View>
    );
  }
}

export default Info;
