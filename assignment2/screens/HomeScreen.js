import React from 'react';
import { ScrollView, StyleSheet, Text, View, SectionList } from 'react-native';
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
        r[title] = { title, data: [e.name.first_name] };
      } else {
        r[title].data.push(e.name.first_name);
      }
      return r;
    }, {});

    let results = Object.values(sectionSort);
    return results;
  };

  componentDidMount() {
    var data = require('./../data/ass2data.json');
    var sortedData = this.sortContacts(data);
    this.setState({ contacts: sortedData });
  }

  /*  renderContacts = ({ item }) => {
    return <Text>Contact Name</Text>;
  };
*/
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Section List</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <SectionList
            renderItem={({ item, index, section }) => (
              <Text key={index}>{item}</Text>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={{ fontWeight: 'bold' }}>{title}</Text>
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
  text: {
    fontSize: 12,
  },
});
