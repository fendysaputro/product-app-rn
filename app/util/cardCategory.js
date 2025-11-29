import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CardCategory = ({ category, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.cardRow}>
                <Text style={styles.cardTitle}>{category}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardRow: {
        flex: 1,
        borderRadius: 8,
        padding: 8,
        margin: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default CardCategory;
