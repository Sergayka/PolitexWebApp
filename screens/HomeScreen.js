// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Экран главного меню
const HomeScreen = ({ navigation }) => {
    return (
        // Контейнер для компонентов экрана
        <View style={styles.container}>
            {/* Заголовок экрана */}
            <Text style={styles.title}>Добро пожаловать в SergaykaShop!</Text>
            {/* Кнопки для навигации к экранам "Log in" и "Sign in" */}
            <Button
                title="Log in"
                onPress={() => navigation.navigate('Log in')}
            />
            <Button
                title="Sign in"
                onPress={() => navigation.navigate('Sign in')}
                style={styles.button}
            />
        </View>
    );
};

// Стили для экрана
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
    }
});

export default HomeScreen;
