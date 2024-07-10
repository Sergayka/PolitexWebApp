import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SigninScreen from './screens/SigninScreen';

// Создание навигатора
const Stack = createStackNavigator();

// Основной компонент приложения
export default function App() {
    return (
        // NavigationContainer отвечает за управление состоянием навигации и связывает навигатор с остальной частью приложения
        <NavigationContainer>
            {/* Stack.Navigator определяет структуру навигации приложения с помощью стекового навигатора */}
            <Stack.Navigator initialRouteName="Home">
                {/* Stack.Screen определяет отдельные экраны внутри навигатора */}
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главное меню' }} />
                <Stack.Screen name="Log in" component={LoginScreen} options={{ title: 'Вход' }} />
                <Stack.Screen name="Sign in" component={SigninScreen} options={{ title: 'Регистрация' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
