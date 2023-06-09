import React from 'react'
import {Text} from 'react-native'

export default function Patient({item}) {
    const {namePatient} = item
    return (
        <Text>{namePatient}</Text>
    )
}
