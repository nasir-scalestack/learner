import React from 'react';
import { View, Text, ListView } from 'react-native';
import { H3 } from '@styles';

const data = [
  { name: 'Favourite Courses', category: 'General' },
  { name: 'My Friends ', category: 'General' },
  { name: 'Achievements', category: 'General' },
  { name: 'Edit Login Details', category: 'Settings' },
  { name: 'Update Interests', category: 'Settings' },
  { name: 'Blocked Users', category: 'Settings' },
];

class SettingsList extends React.Component {
  constructor() {
    super();
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    console.log(this.convertArrayToMap(data));
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(
        this.convertArrayToMap(data)
      ),
    };
  }

  convertArrayToMap = menu => {
    const menuCategoryMap = {}; // Create the blank map
    menu.forEach(function(menuItem) {
      if (!menuCategoryMap[menuItem.category]) {
        menuCategoryMap[menuItem.category] = [];
      }
      menuCategoryMap[menuItem.category].push(menuItem);
    });
    return menuCategoryMap;
  };

  renderRow = menuItem => (
    <View
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Text>{menuItem.name}</Text>
    </View>
  );

  renderSectionHeader = (sectionData, category) => <H3>{category}</H3>;

  render() {
    const { dataSource } = this.state;
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }
}

export default SettingsList;
