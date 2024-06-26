import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7E9E7',
        alignItems: 'center',
        gap: 8
    },
    comeco: {
        height: 50,
        width: 50,
        paddingRight: 335,
        paddingTop: 8
    },
    texto: {
        marginTop: 6, 
        height: 28
    },
    linha: {
        height: 2,
        marginTop: 8,
        marginBottom: 30
    },
    naosei: {
        width: 250,
        height: 28,
        backgroundColor: '#D9D9D9',
        marginTop: 20,
        marginBottom: 16,
        borderRadius: 55,
        borderBottomWidth: 1,
    },
    mais: {
        height: 28,
        width: 28,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        borderRadius: 55,
        marginTop: 20,
        borderBottomWidth: 1,
    },
    coisa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap:20,
    },
    maiss: {
        paddingTop: 2
    },
    final: {
        marginTop: 16
    }
});