import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#5CC6BA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: "#BLACK",
        fontSize: 30, 
        marginBottom : 25,
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "#fff",
        marginBottom : 20
    },
    button: {
        backgroundColor: "#179042",
        paddingHorizontal: 32,
        paddingVertical: 4,
        borderRadius: 16,
        marginTop: 10
    },
    textoButton: {
        color: "#FFF",
        fontSize: 20,
        //fontFamily: 'Jockey One',
    },
    icone: {
        marginTop: 100,
        paddingTop: 550
    }
});