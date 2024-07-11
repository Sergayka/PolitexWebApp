import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SigninScreen from './screens/SigninScreen';
import CatalogScreen from './screens/CatalogScreen';

// Создание навигатора
const Stack = createStackNavigator();

// Основной компонент приложения
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главное меню' }} />
                <Stack.Screen name="Log in" component={LoginScreen} options={{ title: 'Вход' }} />
                <Stack.Screen name="Sign in" component={SigninScreen} options={{ title: 'Регистрация' }} />
                <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: 'Каталог товаров' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
