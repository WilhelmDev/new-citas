import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Form from './src/components/Form';
import Patient from './src/components/Patient';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false)
    const [patients, setPatients] = useState([])

    const modalHandler = () => {
    setModalVisible(!modalVisible)
    }

    const addNewPatient = (newPatient) => {
      //*addind pattient to state 
      setPatients([...patients, newPatient])

      //*Closing modal
        setModalVisible(!modalVisible)

    }

    const editPatient = (id) => {
        console.log('editing', id)
    }

    return (
        <SafeAreaProvider style={styles.appContainer}>
            <StatusBar  translucent={true}/>
            <View style={styles.container}>

                <Text style={styles.title}>
                    Administrador de Citas
                    <Text style={styles.tittleBold}> Veterinaria</Text>
                </Text>

                <Pressable style={styles.btnNewDate}
                onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.btnTextNewDate}>
                        Nueva Cita
                    </Text>
                </Pressable>

                {patients.length === 0
                    ? <Text style={styles.noPatients}> No hay pacientes aun </Text>
                    : <FlatList data={patients} style={styles.listStyles}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => {
                        return (
                            <Patient item={item} modalHandler={modalHandler} editPatient={editPatient}/>
                        )
                    }}/>}

                <Form modalHandler={modalHandler} modalVisible={modalVisible}
                addNewPatient={addNewPatient} />

            </View>
        </SafeAreaProvider>
    )}

const styles = StyleSheet.create({
    appContainer:{
        marginTop: StatusBar.currentHeight || 0,
        flex:1,
        backgroundColor: '#F3F4F6',
    },
    container: {
        backgroundColor: '#F3F4F6',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 35,
        color: '#374151',
        fontWeight: 'bold'
    },
    tittleBold: {
        fontWeight: '900',
        color: '#6D28D9',
    },
    btnNewDate: {
        backgroundColor: '#6D28D9',
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    btnTextNewDate: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
        textTransform: 'uppercase'
    },
    noPatients: {
        marginTop: 40,
        textAlign:'center',
        fontSize:24,
        fontWeight:'600'
    },
    listStyles:{
        marginTop:40,
        marginHorizontal:25
    }
});
