import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7E9E7',
        alignItems: 'center',
        gap: 8
    },
    sexta: {
        color: "#179042",
        fontSize: 32,
        marginTop: 28
    },
    input: {
      borderWidth: 1,
      height: 56,
      paddingHorizontal: 10,
      marginTop: 40,
      fontSize: 27,
      borderRadius: 15,
      backgroundColor: "#D9D9D9",
      marginBottom : 20
    },
    btnEmocao: {
        width: 110,
        height: 110,
        backgroundColor: "#CAE2E2",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.85)',
        shadowOffset: { width: -16, height: 10 },
        shadowOpacity: 0.08,
        shadowRadius: 3.84,
        elevation: 10,
    },
    boxEmocao: {
        flexDirection: 'colum',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 110,
    },
    btnText: {
        fontSize: 20,
        margin: 0,
        padding: 0,
        marginTop: 5,
        fontFamily: 'Aptos'
    },
    boxGeral: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap:20,
        marginBottom: 60,
    },
    rodape: {
        marginTop: 15
    },
    blur: {
        width: 200,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});