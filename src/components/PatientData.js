import { Button, Text } from "react-native";

export default function PatientData({modalDataHandler, patient}) {
    return (
        <>
            <Text>informacion Paciente</Text>
            <Text>{patient?.email}</Text>
            <Button title="close modal" onPress={modalDataHandler}/>
        </>
    )
}
