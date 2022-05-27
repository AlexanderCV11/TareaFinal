import React from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

function DetailScreen({route, navigation}) {

    const {stock, id, description, url, nombre} = route.params;

    navigation.setOptions({
        title: description,
        headerRight: () => (
            <Button
            title = "Buy"
            onPress={() => {}}
            disabled={stock === 0}
            />
        ),
    });
    
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#66bb6a'}}>
            <Image
                style={styles.tinyLogo}
                source={{uri:url,}}
            />
            <Text>Nombre: {description}</Text>
            <Text>Descripcion: {nombre}</Text>
            <Text>stock: {stock}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#98ee99',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    },
    tinyLogo: {
        width: 300,
        height: 300,
      }
})

export default DetailScreen;
