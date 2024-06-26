import { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function Localizacao({ navigation }) {
    function localizacao() {
        navigation.navigate('Localizacao');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.local}>REGISTRO DE LOCALIZAÇÃO</Text>
            <Text style={styles.texto2}>
            LOCALIZAÇÃO DA ATIVIDADE REALIZADA  
            </Text>
            <Image
                style={styles.icone}
                source={require('./../../../assets/mapa.png')}
            />

            <View style={styles.rodape}>


                <TouchableOpacity style={styles.button2} onPress={() => alert('Concluido')}>
                    <Text style={styles.buttonText2}>CONCLUIDO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button3} onPress={localizacao}>
                    <Text style={styles.buttonText3}>VOLTAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};