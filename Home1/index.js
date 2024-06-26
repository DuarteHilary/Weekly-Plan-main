import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function Home1({ navigation }) {

  function acessCadastro1() {
    navigation.navigate('Cadastro1');
}

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const acessPrincipal = () => {
      let campoUsuario;
      let campoSenha;

      campoUsuario = usuario;
      campoSenha = senha;

      if (usuario === '' || senha === '') {
          setErrorMessage("Todos os Campos são Obrigatórios!");
      }else {
        navigation.navigate('Principal')
      }
    }
  return (
    <View style={styles.container}>
      <Image 
        styles={styles.icone} 
        source={require('./../../../assets/iconePerfil.png')}
      />

      <Text style={styles.texto2}>
        F A Ç A  L O G I N
      </Text>

      <TextInput style={styles.input} placeholder="Usuário" onChangeText={(text) => setUsuario(text)}/>
      <TextInput style={styles.input} placeholder="Senha" onChangeText={(text) => setSenha(text)}/>

      <Text>{errorMessage}</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={acessPrincipal}>
        <Text 
        style={styles.texto}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={acessCadastro1}>
        <Text>Criar Conta</Text>
      </TouchableOpacity>

    </View>
      );
}
