import React from 'react';
import { View, Button, StyleSheet, Text} from 'react-native'
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
    }
})

const Perfil: React.FC = () => {
   const {user, signOut} = useAuth();
   function handleSignOut () {
       signOut()
   }

   return (
       <View style={styles.container}>
           <Text>{user?.name}</Text>
           <Button title='Sign Out' onPress={handleSignOut}/>
       </View>
   )
};

export default Perfil;