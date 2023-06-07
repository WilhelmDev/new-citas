import React, { useState } from 'react'
import { Modal, Pressable, Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function Form({newDateHandler, modalVisible }) {
    const [namePatient, setNamePatient] = useState('')
    const [nameOwner, setNameOwner] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [symtomps, setSymtomps] = useState('')

    return (
        <Modal animationType='slide' visible={modalVisible} statusBarTranslucent={true}>

            <SafeAreaProvider style={styles.contentBox}>
                <ScrollView>

                    <Text style={styles.title}>Nueva 
                        <Text style={styles.titleBold}> Cita</Text>
                    </Text>

                    <View style={styles.contentForm}>

                        <Text style={styles.label}
                        >Nombre Paciente</Text>
                        <TextInput style={styles.input} value={namePatient} onChangeText={setNamePatient}
                        placeholder='Nombre Mascota' />

                    </View>

                    <View style={styles.contentForm}>

                        <Text style={styles.label}
                        >Nombre Propietario</Text>
                        <TextInput style={styles.input} value={nameOwner} onChangeText={setNameOwner}
                        placeholder='Nombre Propietario' />

                    </View>

                    <View style={styles.contentForm}>

                        <Text style={styles.label}
                        >Email Propietario</Text>
                        <TextInput style={styles.input} value={email} onChangeText={setEmail}
                        placeholder='Email Propietario' keyboardType='email-address' />

                    </View>

                    <View style={styles.contentForm}>

                        <Text style={styles.label}
                        >Telefono Propietario</Text>
                        <TextInput style={styles.input} value={phone} onChangeText={setPhone}
                        placeholder='Telefono Propietario'keyboardType='number-pad' />

                    </View>

                    <View style={styles.contentForm}>

                        <Text style={styles.label}
                        >Sintomas</Text>
                        <TextInput style={styles.input} value={symtomps} onChangeText={setSymtomps}
                        placeholder='Sintomas Mascota' numberOfLines={3} multiline={true} />

                    </View>

                </ScrollView>
            </SafeAreaProvider>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6D28D9',
  },
    contentBox: {
        backgroundColor: '#6D28D9',
        flex:1,
        paddingTop: 35
    },
    title: {
        fontSize:30,
        fontWeight:'600',
        textAlign:'center',
        marginTop:25,
        color: '#FFF'
    },
    titleBold: {
        fontWeight: '800'
    },
    contentForm: {
        marginTop:30,
        marginHorizontal:30,
    },
    label: {
        color:'#FFFF',
        marginBottom:10,
        fontSize:20,
        fontWeight:'600'
    },
    input: {
        backgroundColor:'#FFF',
        padding:12,
        borderRadius:10
    }
})