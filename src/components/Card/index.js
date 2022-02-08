import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const Card = (props) => {

    return (
        <View style={styles.card}>
            <View style={styles.card_header}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.card_content}>
                {props.children}
            </View>
        </View>
    );
};

export default Card;