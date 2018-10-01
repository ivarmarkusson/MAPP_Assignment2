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

  componentDidMount() {
    const data = require('./../data/ass2data.json');
    const sortedData = this.sortContacts(data);
    this.setState({ contacts: sortedData });
  }

  sortContacts = contacts => {
    let sectionSort = contacts.reduce((acc, contact) => {
      const key = contact.name.first_name[0];
      if (!(key in acc)) {
        acc[key] = {
          title: key,
          data: [],
        };
      }
      acc[key].data.push({ contact });

      return acc;
    }, {});

    // Sort the letter titles: A B C D...
    sectionSort = _.sortBy(sectionSort, ['title']);
    // Sort the data by first name: Abbott Abra...
    sectionSort.map(
      x =>
        (x.data = _.sortBy(x.data, obj => {
          return obj.contact.name.first_name;
        }))
    );

    return sectionSort;
  };

  onPress = contact => {
    this.props.navigation.navigate('Detail', contact);
  };

  renderItem = ({ item }) => {
    const { first_name } = item.contact.name;
    return (
      <TouchableOpacity onPress={() => this.onPress(item)}>
        <Text style={styles.text}>{first_name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>SectionList</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <SectionList
            renderItem={this.renderItem}
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
    padding: 16,
    backgroundColor: '#fff',
  },
  contactListContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 32,
  },
  sectionHeader: {
    fontSize: 20,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});
