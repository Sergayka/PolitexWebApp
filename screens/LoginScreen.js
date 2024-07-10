// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// Экран для входа
const LoginScreen = ({ navigation }) => {
    // Состояние для хранения введенного email и пароля
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Функция для проверки, заполнены ли все поля
    const isFormValid = () => {
        return email.length > 0 && password.length > 0;
    };

    // Функция для обработки входа
    const handleLogin = () => {
        Alert.alert(
            'Вход подтвержден',
            '',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('Home'),  // Переход на главный экран после подтверждения
                },
            ]
        );
    };

    return (
        // Контейнер для компонентов экрана
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {/* Заголовок экрана */}
                <Text style={styles.title}>Вход</Text>
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
                <Button
                    title="Подтвердить"
                    onPress={handleLogin}
                    disabled={!isFormValid()}  // Кнопка активна только если все поля заполнены
                />
            </View>
        </View>
    );
};

// Стили для экрана
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    formContainer: {
        width: '100%',
        padding: 20,
        marginTop: 50,  // Отступ сверху для размещения формы
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});

export default LoginScreen;
