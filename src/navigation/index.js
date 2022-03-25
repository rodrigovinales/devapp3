import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';
import ModalWelcome from "../components/Modal"
import Header from '../components/Header';


const AppNavigation = () => {

    let content;
    const [modalVisible, setModalVisible] = useState(false)

    content = <ModalWelcome visible={!modalVisible} />

    useEffect(() => {
        setTimeout(() => {
            content = setModalVisible(true)
        }, 4000);
    }, []);

    return (
        <NavigationContainer>
            <Header />
            {content}
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigation;