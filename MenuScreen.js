import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Box from './Box';
import tasks from './data/tasks';


function MenuScreen() {
    return (
        <View>
            <ScrollView style={styles.scroll}>
            <View style={styles.root}>
                {
                    tasks.map((task, i) => (
                        
                        <Box 
                            key={i}
                            id = {task.id}
                            description = {task.description}  
                            url = {task.url}
                            stock = {task.stock}
                            nombre = {task.nombre}
                        />
                    ))
                }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ccff90',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    scroll: {
        marginBottom: 50,
    }
})

export default MenuScreen;