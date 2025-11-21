import { Image, StyleSheet, View } from 'react-native';

const CircularImage = ({ imageUri }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.circularImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Optional: for centering the image or adding other layout styles
        justifyContent: 'center',
        alignItems: 'center',
    },
    circularImage: {
        width: 100, // Set desired width
        height: 100, // Set desired height, must be equal to width for a perfect circle
        borderRadius: 50, // Half of the width/height
        overflow: 'hidden', // Crucial to ensure content is clipped to the border radius
        // Optional: Add border if needed
        // borderWidth: 2,
        // borderColor: 'blue',
    },
});

export default CircularImage;