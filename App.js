import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Form from './src/components/Form';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false)


    const modalHandler = () => {
    setModalVisible(!modalVisible)
    }

    return (
        <SafeAreaProvider>
          <StatusBar  translucent={true}/>
            <View >

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

                <Form modalHandler={modalHandler} modalVisible={modalVisible}/>

            </View>
        </SafeAreaProvider>
    )}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
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
    marginTop: 10,
    borderRadius: 10,
  },
  btnTextNewDate: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});
