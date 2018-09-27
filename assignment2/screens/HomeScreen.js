import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  sortContacts = contacts => {
    let sectionSort = contacts.reduce((r, e) => {
      let title = e.name.first_name[0];
      if (!r[title]) {
        r[title] = {
          title,
          data: [e.name.first_name + ' ' + e.name.last_name],
        };
      } else {
        r[title].data.push(e.name.first_name + ' ' + e.name.last_name);
      }
      return r;
    }, {});

    sectionSort = _.sortBy(sectionSort, ['title', 'data']);
    sectionSort.map(x => (x.data = _.sortBy(x.data)));
    let results = Object.values(sectionSort);
    return results;
  };

  componentDidMount() {
    var data = require('./../data/ass2data.json');
    var sortedData = this.sortContacts(data);
    this.setState({ contacts: sortedData });
  }

  /*renderContact = ({ item }) => {
    return (
      <TouchableOpacity onPress={this.onPress(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };*/

  onPress = contact => {
    this.props.navigation.navigate('Info', contact);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Section List</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <SectionList
            renderItem={({ item, index, section }) => <Text>{item}</Text>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            sections={this.state.contacts}
            keyExtractor={(item, index) => item + index}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contactListContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 32,
  },
  SectionText: {
    fontSize: 16,
    padding: 5,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
