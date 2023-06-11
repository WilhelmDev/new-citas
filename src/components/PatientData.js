import { Button, Text } from "react-native";

export default function PatientData({modalDataHandler}) {
    return (
        <>
            <Text>informacion Paciente</Text>
            <Button title="close modal" onPress={modalDataHandler}/>
        </>
    )
}
