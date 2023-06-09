import React from 'react'
import {Pressable, StyleSheet, Text, View} from 'react-native'
import { dateFormatter } from '../helpers'

export default function Patient({item}) {
    const {namePatient, nameOwner, email, phone, date, symtomps} = item
    
    return (
        <View style={styles.container}>

            <Text style={styles.label}
            >Paciente: </Text>

            <Text style={styles.text}
            >{namePatient}</Text>

            <Text  style={styles.date}
            >{dateFormatter(date)}</Text>

            <View style={styles.containerButtons}>

                <Pressable style={[styles.btn, styles.btnEdit]}>
                    <Text style={styles.btnText}>Editar</Text>
                </Pressable>

                <Pressable style={[styles.btn, styles.btnDelete]}>
                    <Text style={styles.btnText}>Eliminar</Text>
                </Pressable>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        padding:20,
        borderBottomColor: '#94a3b8',
        borderBottomWidth:1,
        marginBottom: 5,
        borderRadius: 10
    },
    label:{
        color:'#374151',
        textTransform:'uppercase',
        fontWeight:'700',
        marginBottom:3,
    },
    text: {
        color:'#6D28D9',
        fontSize:24,
        fontWeight:'700',
        marginBottom:5
    },
    date: {
        color:'#374151',
        textTransform:'capitalize'
    },
    containerButtons:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 15
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius:5
    },
    btnEdit: {
        backgroundColor:'#06b6d4'
    },
    btnDelete: {
        backgroundColor:'#ef4444'
    },
    btnText: {
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize: 15,
        color:'#fff'
    }
})
