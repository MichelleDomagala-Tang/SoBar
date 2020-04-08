import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    screen: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 90,
        padding: 30,
        backgroundColor: '#7BD6A8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '50%',
        height: 60,
        resizeMode: 'contain',
        borderRadius: 100,
        borderColor: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30
      },
    titleText: {
        padding: 20,
        fontSize: 18,
        color: 'red'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    button: {
        width: "40%",
    }
});