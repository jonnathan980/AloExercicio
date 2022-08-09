import React, { useState } from "react" 
import { StyleSheet, } from "react-native"

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        padding: 32,
        backgroundColor: '#B0E0E6',
        
    },
    Input:{
        fontSize : 24,
        borderWidth:1,
        backgroundColor: '#F5FFFA',
        
    },
    linkNovoUsuario:{
        padding:5,
        alignItems:'center',
    },
    buttonTextLinkeNovoUsuario:{
        color:'#0000FF',
    },
    Button:{
        backgroundColor: '#C0C0C0',
        alignItems:'center',
        borderWidth:1,
        padding:10,
        borderRadius:8
    },
    buttonText:{
        color:'#fff',
        fontSize : 24,
    },
    MansagemDeerror:{
        textTransform:'uppercase',
        alignItems:'center',
       
    },
    MansagemDesucesso:{
        textTransform:'uppercase',
    },
    imagen:{
     width:300,
      height:400,
      margin:10,
      borderWidth:3,
      
     },
     container01:{
        width:'100%',
        height:'100%',
        backgroundColor:'#EEEEEE',
        alignItems:'center',
    },
    container02:{
        marginTop:20,
        alignItems:'center',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
}) 

export default styles