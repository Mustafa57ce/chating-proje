import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";


const Button = ({title, varient}) => {
    return(
        <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: varient === 'primary'? 'black': 'transparent', paddingHorizontal: varient ==='primary'? 18:0,}]}>
            <Text style={[styles.buttonLabel, {color: varient==='primary'?'white':'black'}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        paddingVertical:12,
        borderRadius:6,
    },
    buttonLabel:{
        fontSize:18,
    },
})
export default Button;