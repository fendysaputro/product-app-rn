import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CardCategory = ({ category, isSelected, onPress }) => {
    return (
        // <View style={styles.cardRow}>
        <TouchableOpacity
            onPress={onPress}
            style={{
                borderRadius: 8,
                padding: 8,
                margin: 5,
                backgroundColor: isSelected ? '#ff6961' : '#fff'
            }}
        >
            <Text style={{ color: isSelected ? 'white' : 'black' }}>
                {category}
            </Text>
        </TouchableOpacity>
        // </View>
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
