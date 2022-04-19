import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';
import ModalAll from "../components/Modal"
import Header from '../components/Header';
import AuthNavigator from './auth';
import { useSelector } from 'react-redux';

const AppNavigation = () => {

    const isAuth = useSelector(state => state.auth.userId);
    

    let content;
    const [modalVisible, setModalVisible] = useState(false)

    content = <ModalAll 
                visible={!modalVisible}
                text="BIENVENIDOS !!!"
                imagen={require('../../assets/komputerWillkommen.jpg')}
                />

    useEffect(() => {
        setTimeout(() => {
            content = setModalVisible(true)
        }, 3000);
    }, []);

    return (
        <NavigationContainer>
            <Header />
            {content}
            {isAuth ? <MainNavigator /> : <AuthNavigator />}
            
            
        </NavigationContainer>
    )
}

export default AppNavigation;