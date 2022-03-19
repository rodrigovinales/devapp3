import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ModalWelcome from '../components/Modal';
import MainStack from '../navigation/MainStack';

const App = () => {

  let content;
  const [modalVisible, setModalVisible] = useState(false)

  content = <ModalWelcome visible={!modalVisible} />

  useEffect(() => {
    setTimeout(() => {
      content = setModalVisible(true)
    }, 4000);
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {content}
      <MainStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5CFD1"
  }
});

export default App;
