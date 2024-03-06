import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Modal, Animated, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Options(props) {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const handleOptionsPress = () => {
        setOptionsVisible(!optionsVisible);
    };

    const slideAnimation = new Animated.Value(0);

    const slideIn = () => {
        Animated.timing(slideAnimation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const slideOut = () => {
        Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setOptionsVisible(false));
    };

    const optionsTranslateY = slideAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [300, 0],
    });

    return (
        <>
            <TouchableOpacity onPress={handleOptionsPress}>
                <Entypo style={props.style} name="dots-three-horizontal" size={24} color="black" />
            </TouchableOpacity>
            <Modal style={styles.fild} transparent={true} visible={optionsVisible} animationType="slide">
                <Animated.View
                    style={[
                        styles.optionsContainer,
                        { transform: [{ translateY: optionsTranslateY }] },
                    ]}
                >
                    <TouchableOpacity onPress={slideOut} style={styles.closeButton}>
                        <Ionicons name="close-circle-outline" size={24} color="black" />
                    </TouchableOpacity>

                    {<Text style={styles.menu}>Time</Text>}
                    {<Text style={styles.menu}>Place</Text>}
                </Animated.View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    optionsContainer: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-end', // Align to the right
        width: '100%', // Ensure it covers the entire screen width
    },    
    fild: {
        justifyContent: 'left',
    },
    closeButton: {
        marginTop: -600,
        padding: 10,
        backgroundColor: 'lightgray',
        borderWidth: 1,
    },
    menu: {
        alignSelf: 'flex-start',
        fontSize: 25,
    },
});