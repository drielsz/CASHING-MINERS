import React, {} from 'react'
import {Dimensions, Button} from 'react-native'
// Estilos
import { SafeAreaView, View, Image, Text, ViewLine, TextInput, TextSenha} from '../../styles'
// Complementing the dimensions, I'm taking the width and height of the user's cell phone and multiplying by fractions to make the responsiveness.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width
// API
import {useAuth} from '../../contexts/auth'



const Login = ({navigation}) => {
    const {signed, user, signIn} = useAuth();
    console.log(signed)
    console.log(user)

    async function handleSignIn () {
        signIn()
    }
    return(
        <SafeAreaView bg>
            <View>
                <Image sizeMoeda source={require('../../assets/logo.png')} resizeMode='contain'/>
                <Text color big transform distanceTop>cashing miners</Text>
                <Text color transform normal right distanceCashing>login{"\n"}<ViewLine/></Text>
                <TextInput first onChangeText={text => setUser(text)}/>
                <TextSenha right={height * 0.15} distanceLogin transform color>senha{"\n"}<ViewLine/></TextSenha>
                <TextInput second onChangeText={text => setPassword(text)}/>
                <Button title='Enviar' onPress={handleSignIn}>
                </Button>
            </View>
        </SafeAreaView>
    )
}

export default Login    