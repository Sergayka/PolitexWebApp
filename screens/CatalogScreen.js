// screens/CatalogScreen.js
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, } from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Компонент для отображения каталога товаров
const CatalogScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ключ для хранения данных в AsyncStorage
    const STORAGE_KEY = 'PRODUCTS_CACHE';

    // Функция для получения данных о товарах
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products?limit=20');
            const data = response.data;
            setProducts(data);
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data)); // Сохранение данных в локальное хранилище
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Функция для загрузки данных из локального хранилища
    const loadCachedProducts = async () => {
        try {
            const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
            if (cachedData) {
                setProducts(JSON.parse(cachedData));
                setLoading(false);
            } else {
                fetchProducts();
            }
        } catch (error) {
            console.error('Error loading cached products:', error);
            fetchProducts();
        }
    };

    // Используем хук useEffect для загрузки данных при монтировании компонента
    useEffect(() => {
        loadCachedProducts();
    }, []);

    // Используем useCallback для мемоизации функции рендеринга элементов списка
    const renderItem = useCallback(({ item }) => (
        <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}</Text>
        </View>
    ), []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

// Стили для компонента
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        flex: 1,
    },
    price: {
        fontSize: 16,
        color: 'green',
    },
});

export default CatalogScreen;
