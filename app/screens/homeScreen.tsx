import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import Swiper from 'react-native-swiper';
import { Product } from '../model/Product';
import { RootStackParamList } from '../types/navigation';

type NavProp = NativeStackNavigationProp<RootStackParamList, "ProductDetail">;

export default function homeScreen() {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setData(res.data);
        } catch (err) {
            console.log('ERROR FETCH: ', err);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    const navigation = useNavigation<NavProp>();

    const handlePress = (item: Product) => {
        navigation.navigate("ProductDetail", { product: item });
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: '50%' }}>
                <Swiper autoplay showsPagination>
                    <Image source={{ uri: 'https://picsum.photos/500/400' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/500/401' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/500/402' }} style={styles.image} />
                </Swiper>
            </View>

            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ padding: 10 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
                        <Image source={{ uri: item.image }} style={styles.imageGrid} />
                        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
    },
    card: {
        backgroundColor: '#fff',
        width: '48%',       // kartu 2 kolom
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        elevation: 3,       // shadow Android
        shadowColor: '#000',// shadow iOS
    },
    imageGrid: {
        width: '100%',
        height: 120,
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        marginTop: 10,
        fontWeight: '600',
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
