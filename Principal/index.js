import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { BlurView } from 'expo-blur';

export default function Principal({ navigation }) {

    function agenda() {
        navigation.navigate('Agenda');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.sexta}>SEXTA-FEIRA</Text>
            <TextInput style={styles.input} placeholder='  Como você está hoje?'></TextInput>
            <View style={styles.boxGeral}>
                <View style={styles.boxEmocao}>
                <BlurView intensity={100} style={styles.blur}>
                    <TouchableOpacity style={styles.btnEmocao}
                        onPress={agenda}>
                        <Image 
                            style={styles.icone} 
                            source={require('./../../../assets/contente.png')}
                        />
                    </TouchableOpacity>
                </BlurView>
                    <h1 style={styles.btnText}>Contente</h1> 
                </View>
                <View style={styles.boxEmocao}>
                    <TouchableOpacity style={styles.btnEmocao}
                        onPress={agenda}>
                        <Image 
                            style={styles.icone} 
                            source={require('./../../../assets/cansado.png')}
                        />
                    </TouchableOpacity>
                    <h1 style={styles.btnText}>Cansado</h1>
                </View>
                <View style={styles.boxEmocao}>
                    <TouchableOpacity style={styles.btnEmocao}
                        onPress={agenda}>
                        <Image 
                            style={styles.icone} 
                            source={require('./../../../assets/triste.png')}
                        />
                    </TouchableOpacity>
                    <h1 style={styles.btnText}>Triste</h1>
                </View>
            </View>
            <View style={styles.boxGeral}>
                <View style={styles.boxEmocao}>
                    <TouchableOpacity style={styles.btnEmocao}
                        onPress={agenda}>
                        <Image 
                            style={styles.icone} 
                            source={require('./../../../assets/preocupado.png')}
                        />
                    </TouchableOpacity>
                    <h1 style={styles.btnText}>Preocupado</h1>
                </View>
                <View style={styles.boxEmocao}>
                    <TouchableOpacity style={styles.btnEmocao}
                    onPress={agenda}>
                        <Image 
                            style={styles.icone} 
                            source={require('./../../../assets/tranquilo.png')}
                        />
                    </TouchableOpacity>
                    <h1 style={styles.btnText}>Tranquilo</h1>
                </View>
            </View>
            <View style={styles.rodape}>
                <Image
                    style={styles.icone}
                    source={require('./../../../assets/rodape.png')}
                    />
            </View>
        </View>
    )
}