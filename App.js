import { useState } from 'react';
import { Button, FlatList, Modal, Pressable, StyleSheet, Text, View, ScrollView, Alert, SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Form from './src/components/Form';
import Patient from './src/components/Patient';
import PatientData from './src/components/PatientData';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false)
    const [patients, setPatients] = useState([])
    const [patient, setPatient] = useState({})
    const [modalPatient, setModalPatient] = useState(false)

    const modalHandler = () => {
    setModalVisible(!modalVisible)
    }

    const modalDataHandler = (id) => {
        editPatient(id)
        setModalPatient(!modalPatient)
        }

    const newDateHandler = () => {
        modalHandler()
        setPatient({})
    }

    const addNewPatient = (newPatient) => {
      //*addind pattient to state 
        setPatients([...patients, newPatient])

      //*Closing modal and reset patient object
        setModalVisible(!modalVisible)
        setPatient({})

    }

    const editPatient = (id) => {
        const patientEdit = patients.filter((patient) => patient.id === id)
        setPatient(patientEdit[0])
    }

    const editPatients = (newPatient) => {
        //* create a new array with the new patient
        const patientsUpdated = patients.map((arrayPatient) => 
        arrayPatient.id === newPatient.id ? newPatient : arrayPatient)
        //* set it in the global state
        setPatients(patientsUpdated)
        modalHandler()
    }

    const deletePatient = (id) => {
        Alert.alert(
            '¿Deseas eliminar este pacente?',
            'Un paciente eliminado no se puede recuperar',
            [
                {text:'Cancelar'},
                {text:'Si, Eliminar', onPress: () => {
                    //* Update Array
                    const patientsUpdated = patients.filter((arrayItem) => arrayItem.id !== id)
                    setPatients(patientsUpdated)
                }}
            ]
            )
    }

    return (
        <SafeAreaView style={styles.appContainer}>
            <StatusBar translucent={true}/>
            <View style={styles.container}>

                <Text style={styles.title}>
                    Administrador de Citas
                    <Text style={styles.tittleBold}> Veterinaria</Text>
                </Text>

                <Pressable style={styles.btnNewDate}
                onPress={() => newDateHandler()}
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
                                <Patient item={item} modalHandler={modalHandler} 
                                editPatient={editPatient} deletePatient={deletePatient}
                                modalDataHandler={modalDataHandler}/>
                                )
                            }}/>}

                <Form modalHandler={modalHandler} modalVisible={modalVisible}
                addNewPatient={addNewPatient} patient={patient} editPatients={editPatients}/>

                <Modal animationType='slide' visible={modalPatient} statusBarTranslucent={true}>

                    <PatientData modalDataHandler={modalDataHandler} patient={patient}/>

                </Modal>

            </View>
        </SafeAreaView>
    )}

const styles = StyleSheet.create({
    appContainer:{
        flex:1,
        backgroundColor: '#F3F4F6',
    },
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
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
        marginHorizontal:25,
    }
});
