import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import { dateFormatter } from "../helpers";

export default function PatientData({modalDataHandler, patient}) {
    return (
        <SafeAreaView style={styles.appContainer}>
            <StatusBar translucent={true} />

            <View style={styles.container}>

                <Text style={styles.title}>Informacion
                        <Text style={styles.titleBold}> Paciente</Text>
                    </Text>

                <View>
                    <Pressable style={styles.btnCancel}
                    onPress={modalDataHandler}
                    >
                        <Text style={styles.btnTextCancel}>
                            X Cerrar
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.content}>

                    <View style={styles.itemContent}>
                        <Text style={styles.label}>Nombre</Text>
                        <Text style={styles.textContent}>{patient?.namePatient}</Text>
                    </View>

                    <View style={styles.itemContent}>
                        <Text style={styles.label}>Propietario</Text>
                        <Text style={styles.textContent}>{patient?.nameOwner}</Text>
                    </View>

                    <View style={styles.itemContent}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.textContent}>{patient?.email}</Text>
                    </View>

                    <View style={styles.itemContent}>
                        <Text style={styles.label}>Telefono</Text>
                        <Text style={styles.textContent}>{patient?.phone}</Text>
                    </View>

                    <View style={styles.itemContent}>
                        <Text style={[styles.label, {textTransform:'capitalize'}]}>Fecha de alta</Text>
                        <Text style={[styles.textContent, {textTransform:'capitalize'}]}>{dateFormatter(patient?.date)}</Text>
                    </View>

                    <View style={styles.itemContent}>
                        <Text style={styles.label}>Sintomas</Text>
                        <Text style={styles.textContent}>{patient?.symtomps}</Text>
                    </View>

                </View>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    appContainer:{
        flex:1,
        backgroundColor:'#06b6d4',
    },
    container: {
        marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        fontSize:30,
        fontWeight:'600',
        textAlign:'center',
        marginTop:5,
        color: '#FFF'
    },
    titleBold: {
        fontWeight: '800'
    },
    btnCancel: {
        backgroundColor:'#058ba2',
        marginTop:20,
        padding:12,
        marginHorizontal:30,
        borderRadius:10,
        marginBottom:30
    },
    btnTextCancel:{
        color: '#fff',
        textAlign:'center',
        fontWeight:'900',
        fontSize:15,
        textTransform:'uppercase'
    },
    content:{
        backgroundColor: '#fff',
        marginHorizontal:30,
        borderRadius: 10,
        padding:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    itemContent:{
        marginBottom:10
    },
    label:{
        textTransform:'uppercase',
        color:'#374151',
        fontWeight:'600',
    },
    textContent:{
        fontWeight:'700',
        fontSize:20,
        color:'#334155'
    }
})