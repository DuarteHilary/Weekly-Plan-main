import { StyleSheet, } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#D7E9E7',
        alignItems: 'center',
        gap: 4
    },

    local: {
        fontSize: 24,
        alignItems: 'Center',
        fontFamily: 'Libre Caslon Text',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 65
    },

    texto2: {
        color: "#5A5252",
        fontSize: 18,
        justifyContent: 'center',
        marginTop: 30,
        paddingHorizontal: 10,
        padding:10,
        borderRadius: 15,
        backgroundColor: "#5CC6BA",
        textAlign: 'center'
    },

    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#E11A1A',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: "#FFF",
        fontSize: 20,
        //fontFamily: 'Jockey One'
    },
    button2: {
        backgroundColor: "#179042",
        paddingHorizontal: 32,
        paddingVertical: 4,
        borderRadius: 16,
        marginTop: 10,
        justifyContent: 'flex-end'
    },
    buttonText2: {
        color: "#FFF5F5",
        fontSize: 18,
        //fontFamily: 'Jockey One'
    },
    button3: {
        backgroundColor: "#5CC6BA",
        paddingHorizontal: 4,
        paddingVertical: 4,
        width: 120,
        borderRadius: 16,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText3: {
        color: "#FFF",
        fontSize: 16,
        //fontFamily: 'Jockey One'
    },
    rodape: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 10
    },
    icone: {
        marginTop: 20
    }
});