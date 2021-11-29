import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import {datafast} from '../model/datafastfood';
import Card from '../components/Card';

const CardListfastfooditem = ({navigation}) => {

    const renderItem = ({item}) => {
        return (
            <Card 
                itemData={item}
                onPress={()=> navigation.navigate('CardItemDetailsfastfood', {itemData: item})}
            />
        );
    };

    return (
      <View style={styles.container}>
        <FlatList 
            data={datafast}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
      </View>
    );
};

export default CardListfastfooditem;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '90%',
    alignSelf: 'center'
  },
});
