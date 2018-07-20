import React from 'react';
import {StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';

export default class Superman extends React.Component {
    render() {
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                style={styles.container}
            >
                <View style={styles.compo}>
                    <Text style={styles.text}>Video</Text>
                </View>
                <View style={[styles.compo, styles.compoTwo]}>
                    <Text style={styles.text}>Houses</Text>
                </View>
                <View style={[styles.compo,styles.compoThree]}>
                    <Text style={styles.text}>Car</Text>
                </View>
                <View style={[styles.compo,styles.compoFour]}>
                    <Text style={styles.text}>Bikes</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    compo: {
        backgroundColor: '#00bf8f',
        justifyContent: 'center',
        alignItems:'center',
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
    },
    compoTwo: {
        backgroundColor: '#8e44ad',

    },
    compoThree: {
        backgroundColor: '#f1c40f',

    },
    compoFour: {
        backgroundColor: '#d35400',
    },
});