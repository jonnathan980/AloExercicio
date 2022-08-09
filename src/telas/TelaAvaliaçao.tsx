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
    url:'https://i.pinimg.com/236x/af/1c/30/af1c30d6d881d9447dec06149f61d2f9--drawings-of-girls-anime-drawings-girl.jpg'
    },
    {id: 2,
    url:'https://i.pinimg.com/236x/af/1c/30/af1c30d6d881d9447dec06149f61d2f9--drawings-of-girls-anime-drawings-girl.jpg'
   },
   {id: 3,
        url:'https://cdn-icons-png.flaticon.com/512/33/33308.png'
    },
    {id: 4,
        url:'https://cdn-icons-png.flaticon.com/512/33/33308.png'
    },
]

type Props = NativeStackScreenProps<StackParams,'TelaAvaliaçao'>;
const TelaAvaliaçao: React.FC<Props>= (Props) => {
   

    const renderIMagems: ListRenderItem<Imagem> = ({item}) => {

       ({} ? {} : {})
        return (
            <View>
             <Image  style={styles.imagen} source={{uri: item.url}}/>
                <View>
                 <Icon.Button name="star"size={35} backgroundColor="#FFFF00"
                    onPress={() => {}}>  
                 </Icon.Button>
                <TouchableOpacity onPress={() => {}}> 
                <Icon name="star" size={35} color="#E0FFFF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}> 
                <Icon name="star" size={35} color="#E0FFFF" />
                </TouchableOpacity>
                
                 

                 
                </View>
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