import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function Cadastro1({navigation}) {

    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);

    const handleCadastro = () => {
        let campoNome;
        let campoData;
        let campoTelefone;
        let campoEmail;
        let campoSenha;
        let campoConfirmSenha;

        campoNome = nome;
        campoData = data;
        campoTelefone = telefone;
        campoEmail = email;
        campoSenha = password;
        campoConfirmSenha = validPassword;

        if (nome === '' || data === '' || telefone === '' || email === '' || password === '' || validPassword === '') {
            setErrorMessage("Todos os Campos são Obrigatórios!");
        } else {
            navigation.navigate('Home1')
        }
    }


    return (
     <View style={styles.container}>
                <Image 
                    styles={styles.icone} 
                    source={require('./../../../assets/iconePerfil.png')}
                />
       
                <Text style={styles.texto}>C A D A S T R O</Text>
                <TextInput
                    value={nome}
                    style={styles.input}
                    keyboardType='default'
                    onChangeText={(text) => setNome(text)}
                    placeholder='Nome Completo' />
                <TextInput
                    value={data}
                    style={styles.input}
                    keyboardType='default'
                    onChangeText={(text) => setData(text)} 
                    placeholder='Data de Nascimento'/>
  
                <TextInput
                    value={telefone}
                    style={styles.input}
                    keyboardType='number-pad'
                    onChangeText={(text) => setTelefone(text)} 
                    placeholder='Telefone'/>

                <TextInput
                    value={email}
                    style={styles.input}
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)} 
                    placeholder='E-mail'/>

                <TextInput
                    value={password}
                    style={styles.input}
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    placeholder='Senha' />

                <TextInput
                    value={validPassword}
                    style={styles.input}
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={(text) => setValidPassword(text)} 
                    placeholder='Confirmar Senha'/>

                <Text>{errorMessage}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleCadastro}>
                    <Text style={styles.textoButton}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
    )
};