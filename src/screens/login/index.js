// import React from "react";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Button } from "react-native";


// const { height, width } = Dimensions.get('window');

// const Welcome = ({navigation}) => {

//     return (
//         <SafeAreaView style={styles.main}>
//             <ScrollView>
//                 <View style={styles.head}>
//                     <Text style={styles.title}>Insumos de {'\n'}Computacion</Text>
//                     <Image style={styles.img} source={require('../../../assets/komputerWillkommen.png')} />
//                 </View>

//                 <View style={styles.description}>
//                     <View style={styles.ovalado} />
//                     <Text style={styles.meta}>Podras ver todos nuestros productos usando tecnología <Text style={{ color: "whitesmoke", fontWeight: 'bold' }}>{'\n'}React & Redux</Text></Text>

//                     <TouchableOpacity style={styles.btnStar} onPress={() => navigation.navigate('Home')}>
//                         <Text style={styles.textBtn}>Login</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         backgroundColor: "#798A8A"
//     },
//     ovalado: {
//         width: width - 220,
//         height: 150,
//         backgroundColor: '#6A6886',
//         borderRadius: 200,
//         position: 'absolute',
//         top: -80,
//         transform: [
//             { scaleX: 3 }
//         ]
//     },
//     textBtn: {
//         textAlign: "center",
//         position: 'relative',
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: '500',
//         fontFamily: "SmoochSans-Medium"

//     },
//     btnStar: {
//         flexDirection: 'row',
//         marginTop: 20,
//         alignItems: "center",
//         backgroundColor: "#002248",
//         paddingHorizontal: 30,
//         borderRadius: 10
//     },
//     meta: {
//         color: "#110F39",
//         fontSize: 20,
//         textAlign: "center",
//         marginTop: -50,
//         fontFamily: "Montserrat-Light"
//     },
//     description: {
//         padding: 40,
//         height,
//         alignItems: "center",
//         backgroundColor: 'white',
//         position: 'relative',
//         top: 220,
//         backgroundColor: "#6A6886",

//     },
//     head: {
//         padding: 25,
//     },
//     title: {
//         fontSize: 45,
//         color: '#fff',
//         fontFamily: "Montserrat-Thin",
//         textAlign:"center"
//     },
//     img: {
//         position: 'absolute',
//         top: 130,
//         left: 50
//     }
// })

// export default Welcome;



////////////////////////////////////////////////////////////

import React from 'react';
import { styles } from './styles'
import { Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-ionicons'

 const Welcome = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Icon
                color='#000'
                name='person'
                type='font-awesome'
                size={80}
              />
            </View>
            <Text style={styles.loginTitleText}>Ingreso</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                secureTextEntry={true}
                textContentType='password'
              />
            </View>
              
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.registerText}>
                Don't have an account? Register Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Welcome