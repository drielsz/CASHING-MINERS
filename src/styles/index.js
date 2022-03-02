import styled from 'styled-components/native'
// Dimensões da tela do usuario, reponsavel por responsavidade
import { Dimensions, Image as ImageReact, TextInput as TextInputReact, ImageBackground as ImageBackgroundReact, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from './colors';
// Complementação do dimensios, estou pegando a largura e altura do celular do usuario e multiplicando por frações para fazer a responsividade.
var height = Dimensions.get("window").height
var width = Dimensions.get("window").width;
// Safe area View, responsavel por os componentes dentro do aplicativo em lugares seguros, ou seja, não deixar um texto no topo
// em cima de alguma coisa.
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';

// Vou utilizar bastante props, para caso se quiser mudar a cor, ou algo do tipo, é fácil de acessar e mudar, O Safe Area View vai ser o container do projeto
export const SafeAreaView = styled(SafeAreaContext)`
    flex:1;
    background: ${(props) => (props.bg ? colors.backgroundLogin: colors.inputLogin)}
    align-items: ${(props) => (props.align? 'center' : 'stretch')}
    justify-content: ${(props) => (props.justify ? 'center' : 'flex-start')}
`

export const View = styled.View`
    align-items: center;
    justify-content: center;
    top: ${(props) => props.top || height * 0.06}
`

export const Image = styled(ImageReact)`
    width: ${(props) => (props.sizeMoeda ? height * 0.2 : props.sizeImage ? height * 0.43 : '0px')}
    height: ${(props) => (props.sizeMoeda ? height * 0.2 : props.sizeImage ? height * 0.1 : '0px')}
    border-radius: ${height * 0.03}
`

export const Text = styled.Text`
    color: ${(props) => (props.color ? colors.textLogin : props.ouro ? colors.lineLogin : colors.redHome)}
    text-transform: ${(props) => (props.transform ? 'uppercase' : 'capitalize')}
    top: ${(props) => (props.distanceTop ? height * 0.05 : props.distanceCashing ? height * 0.12 : props.distanceLogin ? height * 0.172 : '0px')}
    font-family: ${(props) => (props.fontfamily? 'Montserrat_700Bold' : 'Montserrat_400Regular')}
    font-size: ${(props) => (props.big ? height * 0.045 : props.normal ? height * 0.024 : props.small ? height * 0.08 : props.button ? height * 0.032: '20px')};
    right: ${(props) => (props.right ? height * 0.155: '0px')}
    text-align: center;
` 

export const TextSenha = styled(Text)`
    right: ${(props) => props.right || height * 0.05}
`

export const ViewLine = styled.View`
    background: ${colors.lineLogin}
    width: ${(props) => props.width || height * 0.02}
    height: ${(props) => props.height || height * 0.002}
` 

export const TextInput = styled(TextInputReact)`
    width: ${height * 0.42}
    height: ${height * 0.1}
    background: ${colors.inputLogin}
    border-radius: ${height * 0.03}
    top: ${(props) => props.first ? height * 0.14 : props.second ? height * 0.19: '0px'}
`


export const Spacer = styled.View`
    width: 100%;
    height: ${(props) => props.size || height * 0.020};
`;

export const Button = styled(TouchableOpacity)`
    border-radius: ${height * 0.03}
    top: ${(props) => (props.top ? height * 0.25 : '0px')}
`

export const ImageBackground = styled(ImageBackgroundReact)`
    width: ${(props) => (props.sizeMoeda ? height * 0.2 : props.sizeImage ? height * 0.43 : '0px')}
    height: ${(props) => (props.sizeMoeda ? height * 0.2 : props.sizeImage ? height * 0.1 : '0px')}
    border-radius: ${height * 0.03}
    align-items: center;
    justify-content: center;
`

export const Header = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    width: ${(props) => props.width || width / 1.3}
`

export const SupportToInventory = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: ${height * 0.03}
    background: ${(props) => (props.bg ? colors.backgroundBottom : colors.backgroundLogin)} 
    width: ${(props)=> props.width || width * 0.35}
    height: ${(props) => props.height || height * 0.05}
    }
`

export const ViewPicareta = styled(TouchableOpacity)`
    background: ${colors.backgroundLogin}
    align-items: center;
    justify-content: center
    width: ${width * 0.5}
    height: ${height * 0.24}
    top: ${height * 0.15}
    border-radius: ${height * 0.15}
`

export const styles = StyleSheet.create({
    viewPicareta:{
        backgroundColor: colors.backgroundLogin,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.5,
        height: height * 0.24,
        top: height * 0.15,
        borderRadius: height * 0.15
    },
    SupportToInventory:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius: height * 0.03,
        backgroundColor: colors.backgroundLogin,
        width: height * 0.23,
        height: height * 0.11
    }
})