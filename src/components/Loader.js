import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

const LoaderSpinner = (props) => {
    const { visible } = props;

    if (!visible) return null;

    return (
        <ActivityIndicator size='large' />
    )
}

export default LoaderSpinner;