import { StyleSheet } from 'react-native';


// @brief Defines global styles to be used in applications
export const globalStyles = StyleSheet.create({
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
        borderRadius: 150
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    button: {
        width: '40%',
    },
    titleText: {
        padding: 15,
        fontSize: 18,
        color: 'black'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    cancel: {
        position: 'absolute',
        right: 0,
        width: 35
    },
    mapContainer: {
        height: '84%',
        width: '100%'
    },
    map : {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    prefContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 60,
        paddingLeft: 50,
    },
    barsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 21,
        width: '100%',
    },
    screen: {
        flex: 1
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 8,
        width: '90%'
    },
    bar: {
        fontSize: 13
    },
    subInfo: {
        fontSize: 11
    }
});