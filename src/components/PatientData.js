import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar, Pressable } from "react-native";

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

                <Text>{patient?.email}</Text>
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
    },
    btnTextCancel:{
        color: '#fff',
        textAlign:'center',
        fontWeight:'900',
        fontSize:15,
        textTransform:'uppercase'
    },
})