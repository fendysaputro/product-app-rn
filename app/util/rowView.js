import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyRowView = ({ iconItem, name, iconArrow }) => {
    return (
        <View style={styles.container}>
            {/* Left items */}
            <View style={styles.leftItems}>
                {/* {iconItem && <Icon name={iconItem} size={30} color="#900" />} */}
                <Icon name={iconItem} size={30} color="#900"></Icon>
                <Text style={styles.item}>{name}</Text>
            </View>

            {/* Right item */}
            <View style={styles.rightItem}>
                <Icon name={iconArrow} size={30} color="#900"></Icon>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Distributes space between the left and right groups
        alignItems: 'center', // Aligns items vertically in the center
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
    },
    leftItems: {
        flexDirection: 'row', // Arranges Item 1 and Item 2 horizontally
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightItem: {
        alignContent: 'center',
        justifyContent: 'center'
        // No specific flex properties needed here, as it's a single item
    },
    item: {
        padding: 10,
        margin: 5,
        alignContent: 'center',
        justifyContent: 'center'
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Optional: Distributes items evenly
        alignItems: 'center', // Optional: Aligns items vertically in the center
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // For Android shadow
    },
});

export default MyRowView;