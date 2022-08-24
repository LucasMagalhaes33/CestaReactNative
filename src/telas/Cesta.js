import React from "react";
import { Text, StyleSheet, Dimensions, Image } from "react-native";

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return  <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Detalhes da cesta</Text>
    </>
}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        //altura da imagem divide pela largura da imagem e multiplica pelo width
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        width: "100%",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    }

})