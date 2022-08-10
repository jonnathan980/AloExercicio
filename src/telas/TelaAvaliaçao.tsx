import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react" ;
import Icon from 'react-native-vector-icons/FontAwesome';
import Imagem from "../modelos/Imagem";
import { View,Text, ListRenderItem, FlatList, TouchableOpacity, Image, SafeAreaView,Button, TouchableWithoutFeedback, ImageComponent} from "react-native";
import styles from "../stilhos/estilhosPagina1";
import { StackParams } from "./Navegaçao";
import { StyleSheet, } from "react-native"
import imagen from "../stilhos/estilhosPagina1";
        
const item: Imagem [] = [
    {
    id: 1,
    url:'https://i.pinimg.com/236x/af/1c/30/af1c30d6d881d9447dec06149f61d2f9--drawings-of-girls-anime-drawings-girl.jpg',
    pontos:1,
    },
    {id: 2,
    url:'https://i.pinimg.com/236x/af/1c/30/af1c30d6d881d9447dec06149f61d2f9--drawings-of-girls-anime-drawings-girl.jpg',
    pontos:1
    },
   {id: 3,
        url:'https://cdn-icons-png.flaticon.com/512/33/33308.png',
        pontos:1
    },
    {id: 4,
        url:'https://cdn-icons-png.flaticon.com/512/33/33308.png',
        pontos:1
    },
]

type Props = NativeStackScreenProps<StackParams,'TelaAvaliaçao'>;
const TelaAvaliaçao: React.FC<Props>= (Props) => {
    const [Botaoicon, setBotaoicon] = useState(true)
    const [Botaoicon02, setBotaoicon02] = useState(false)


   const IcomUm = () => {
        if(Botaoicon){
            setBotaoicon(false)
            setBotaoicon02(true)
        } 
   }

    const renderIMagems: ListRenderItem<Imagem> = ({item}) => {
        return (
            <View>
             <Image  style={styles.imagen} source={{uri: item.url}}/>
                <TouchableOpacity style={styles.container02} onPress={IcomUm}> 
                {
                    Botaoicon && (
                     <Icon name="star" size={35} color="#000000" />)
                     
                }
                {
                    Botaoicon && (
                     <Icon name="star" size={35} color="#000000" />)
                     
                }
                {
                    Botaoicon && (
                     <Icon name="star" size={35} color="#000000" />)
                     
                }
                {
                    Botaoicon02 && (
                     <Icon name="star" size={35} color="#0000FF" />)
                }
                {
                    Botaoicon02 && (
                     <Icon name="star" size={35} color="#0000FF" />)
                }
                {
                    Botaoicon02 && (
                     <Icon name="star" size={35} color="#0000FF" />)
                }
                </TouchableOpacity>
          </View>
      )
      }
    return(
        <View style={styles.container01}>
        <FlatList renderItem={renderIMagems} data={item} />
        </View>
    )
}
export default TelaAvaliaçao