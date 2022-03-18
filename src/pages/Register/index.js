import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native'
import {api} from '../../services/api'

export default function Register () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeName = (txtName) => {
        setName(txtName)
    }

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }

    const onChangePassword = (txtPassword) => {
        setPassword(txtPassword)
    }
 
    const RegisterUser = async () => {
        const response = await api.post("register", {
            name: name,
            email: email,
            password: password,
        }).then (async (response) => {
               alert("Conta cadastrada com sucesso", `Seja bem vindo, ${name}`)
        }).catch( async (error) => {
            console.log(error)
        }
        )
    }

    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center', padding: 10}}>
            <Text>Página de Cadastro</Text>
            <TextInput placeholder='Nome' onChangeText={txtName => onChangeName(txtName)}/>
            <TextInput placeholder='Email' onChangeText={txtEmail => onChangeEmail(txtEmail)}/>
            <TextInput placeholder='Senha' onChangeText={txtPassword => onChangePassword(txtPassword)}/>
            <Button title='Cadastrar' onPress={() => RegisterUser()}/>
        </View>
    )
}