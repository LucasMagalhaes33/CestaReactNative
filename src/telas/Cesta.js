import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";

import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <Image source={topo} />
}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        //altura da imagem divide pela largura da imagem e multiplica pelo width
        height: 578 / 768 * width,
    }

})