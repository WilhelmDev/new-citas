import React, { useState } from 'react'
import { Modal, Pressable, Text, StyleSheet, View, SafeAreaView, TextInput, ScrollView} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DateTimePicker from '@react-native-community/datetimepicker';
import { dateFormatter } from '../helpers';

export default function Form({modalHandler, modalVisible }) {
    const [namePatient, setNamePatient] = useState('')
    const [nameOwner, setNameOwner] = useState('')
    const [date, setDate] = useState('')
    const [showDate, setShowDate] = useState(false)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [symtomps, setSymtomps] = useState('')

    const handleDate = (event, selectedDate) => {
        if (event.type === 'dissmised') {
            setShowDate(false)
            setDate('')
        }
        if(date !== selectedDate) {
            const currentDate = selectedDate
            setShowDate(false)
            setDate(currentDate)
        }
        return
    }

    return (
        <Modal animationType='slide' visible={modalVisible} statusBarTranslucent={true}>

            <SafeAreaProvider style={styles.contentBox}>
                <ScrollView>

                    <Text style={styles.title}>Nueva 
                        <Text style={styles.titleBold}> Cita</Text>
                    </Text>

                    <Pressable style={styles.btnCancel}
                    onLongPress={() => modalHandler()}
                    >
                        <Text style={styles.btnTextCancel}>
                            X Cancelar
                        </Text>
                    </Pressable>

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
                        >Fecha de Alta</Text>
                        
                        <Pressable style={styles.btnNewDate}
                            onPress={() => setShowDate(true)}>
                                <Text style={styles.dateText}
                                >{date ? dateFormatter(date) : 'presione Para definir fecha'}</Text>
                        </Pressable>

                        {showDate && (
                        <DateTimePicker value={date ? date : new Date()} onChange={handleDate} display='spinner'
                        minimumDate={new Date()}/>)}

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
        // flex:1,
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
        marginTop:25,
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
    },
    dateText: {
        textAlign:'center',
        textAlignVertical:'center',
        textTransform: 'capitalize',
        color:'#6D28D9' ,
        paddingVertical:12,
        fontSize: 20,
        fontWeight:'600',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#fff'
    },
    btnNewDate: {
        backgroundColor: '#fff',
        marginHorizontal: 0,
        marginTop: 10,
        borderRadius: 10,
    },
    btnTextNewDate: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    btnCancel: {
        backgroundColor:'#5720ad',
        marginTop:20,
        padding:12,
        marginHorizontal:30,
        borderRadius:10,

    },
    btnTextCancel:{
        color: '#fff',
        textAlign:'center',
        fontWeight:'900',
        fontSize:15,
        textTransform:'uppercase'
    }
})
