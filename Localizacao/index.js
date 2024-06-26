import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function Localizacao({ navigation }) {
    function local() {
        navigation.navigate('Local');
    }

    function agenda() {
        navigation.navigate('Agenda');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.registro}>REGISTRO DA ATIVIDADE</Text>
            <Text style={styles.texto2}>
                Se  já realizou a atividade,
                tire uma foto para poder
                desbloquear seu aparelho.
            </Text>
                    <Image
                        style={styles.icone}
                        source={require('./../../../assets/adicionarfoto.png')}
                    />

                    <View style={styles.rodape}>
                        <TouchableOpacity style={styles.button} onPress={() => alert('Botão Pressionado!')}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button2} onPress={local}>
                            <Text style={styles.buttonText2}>MARCAR LOCALIZAÇÃO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button3} onPress={agenda}>
                            <Text style={styles.buttonText3}>VOLTAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                );
};