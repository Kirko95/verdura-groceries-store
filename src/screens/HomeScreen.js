import React, { Component } from 'react';
import { StatusBar, FlatList, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import { Box, Text } from 'react-native-design-utility';

import CategoryCard from '../components/CategoryCard';
import { theme } from '../constants/theme';
import DealCaroussel from '../components/DealCaroussel';
import ProfileBtn from '../commons/ProfileBtn';

import categories from '../constants/categories';

const NUM_COLUMNS = 3;

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Verdura',
    headerLeft: <ProfileBtn />,
  };

  state = {};

  renderItem = ({ item, index }) => {
    let style = {};

    if (index % NUM_COLUMNS !== 0) {
      style.borderLeftWidth = 2;
      style.borderLeftColor = theme.color.greyLighter;
    }
    return (
      <Box w={1 / NUM_COLUMNS} bg="white" h={120} style={style}>
        <CategoryCard {...item} />
      </Box>
    );
  };

  keyExtractor = item => String(item.id);

  separator = () => <Box h={2} bg="greyLighter" />;

  render() {
    return (
      <Box f={1}>
        <Box>
          <StatusBar barStyle="light-content" />
          <Box h={130} bg="white" w='100%'>
            <DealCaroussel />
          </Box>

          <Box bg="greyLighter" p={10} style={{alignItems: 'center',justifyContent: 'center'}}>
            <Text>Categories</Text>
          </Box>

          <Box p={10}>
            <FlatList
              data={categories}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              numColumns={NUM_COLUMNS}
              ItemSeparatorComponent={this.separator}
            />
          </Box>

          <Box bg="greyLighter" p={10} style={{alignItems: 'center',justifyContent: 'center'}}>
            <Text>Products</Text>
          </Box>

        </Box>
      </Box>
    );
  }
}

export default HomeScreen;
