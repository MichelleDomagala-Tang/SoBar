import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 20
    },
    buttonContainer: {
        padding: 40
    },
    titleText: {
        padding: 20,
        fontSize: 18,
        color: 'red'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    }
});