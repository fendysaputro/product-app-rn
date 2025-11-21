import { RouteProp, useRoute } from "@react-navigation/native";
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from "../types/navigation";

type DetailRoute = RouteProp<RootStackParamList, "ProductDetail">;

export default function ProductDetail() {
    const route = useRoute<DetailRoute>();
    const { product } = route.params;
    const Separator = () => <View style={styles.separator} />;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: '60%' }}>
                <Image source={{ uri: product.image }} style={styles.image} />
            </View>
            <Text numberOfLines={1} style={styles.text}>{product.title}</Text>
            <Text style={styles.price}>$${product.price}</Text>
            <View style={{ margin: 8, borderRadius: 8 }}>
                <Button
                    onPress={() => Alert.alert('Simple Button pressed')}
                    title="Buy Now"
                    color="#7d7e0aff"
                    accessibilityLabel="Learn more about this purple button">
                </Button>
            </View>
            <Separator />
            <Text style={styles.price}>
                {product.description}
            </Text>
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
        margin: 8
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
        height: '100%',
        marginEnd: 8,
        marginStart: 8
    },
    title: {
        marginTop: 10,
        fontWeight: '600',
        textAlign: 'center',
    },
    price: {
        margin: 8,
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 400
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
