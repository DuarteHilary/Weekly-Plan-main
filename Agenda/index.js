import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function Agenda({navigation}) {
    function princial() {
        navigation.navigate('Principal');
    }

    function localizacao() {
        navigation.navigate('Localizacao');
    }

    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity 
                    style={styles.comeco}
                    onPress={princial}>
                    <Image
                        style={styles.volta}
                        source={require('./../../../assets/voltar.png')}
                        />
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    style={styles.agenda}
                    source={require('./../../../assets/agendaDiaria.png')}
                    />
            </View>
            <View>
                <Image
                    style={styles.texto}
                    source={require('./../../../assets/texto.png')}
                    />
            </View>
            <View>
                <Image
                    style={styles.linha}
                    source={require('./../../../assets/Line 3.png')}
                    />
            </View>
            <View>
                <Image
                    style={styles.sexta}
                    source={require('./../../../assets/sexta.png')}
                    />
            </View>
            <View style={styles.coisa}>
                <TextInput style={styles.naosei}></TextInput>
                <TouchableOpacity style={styles.mais}>
                    <Text style={styles.maiss}>+</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image
                    style={styles.tudo}
                    source={require('./../../../assets/tudo.png')}
                    />
            </View>
            <TouchableOpacity style={styles.final}
            onPress={localizacao}>
            <Image
                source={require('./../../../assets/continuar.png')}
                />
            </TouchableOpacity>
            <Image
                source={require('./../../../assets/rodape.png')}
                />
        </View>
    );
};