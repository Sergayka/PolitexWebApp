// screens/SigninScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Экран для регистрации
const SigninScreen = () => {
    // Состояние для хранения введенного email и пароля
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        // Контейнер для компонентов экрана
        <View style={styles.container}>
            {/* Заголовок экрана */}
            <Text style={styles.title}>Регистрация</Text>
            {/* Поле ввода для email или логина */}
            <TextInput
                style={styles.input}
                placeholder="email / login"
                value={email}
                onChangeText={setEmail}
            />
            {/* Поле ввода для пароля */}
            <TextInput
                style={styles.input}
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {/* Кнопка для подтверждения ввода */}
            <Button title="подтвердить" onPress={() => {}} />
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default SigninScreen;
