import React, { Component } from 'react';
import { FlatList, StatusBar, ScrollView, Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import { inject } from 'mobx-react/native';

import ProductCard from '../components/ProductCard';

class ListScreen extends Component {

  render() {
    return (
      <Box>
        <Box f={1} center>
          <StatusBar barStyle="light-content" />
        </Box>
        <Box center>
          <FlatList
            data={[{name: 'john'}]}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({ item }) =>
              <Text>
                {item.name}
              </Text>}
          />
        </Box>
      </Box>
    );
  }
}

export default ListScreen;
