import React from 'react';
import { StyleSheet, View } from 'react-native';
import Avatar from '../components/Avatar';
import Info from '../components/Info';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class DetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const { contact } = navigation.state.params;
    const { home, work, avatar } = contact;
    const firstName = contact.name.first_name;
    const lastName = contact.name.last_name;
    const fullName = `${firstName} ${lastName}`;

    return (
      <View style={styles.container}>
        <Avatar img={avatar} name={fullName} />
        <Info homeInfo={home} workInfo={work} />
      </View>
    );
  }
}

export default DetailScreen;
