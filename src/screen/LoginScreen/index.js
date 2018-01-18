import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableHighlight,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AndroidKeyboardAdjust from 'react-native-android-keyboard-adjust';

import loginback from '../../images/body-bg.png'
import fingerprint from '../../images/fingerprint.png'

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
        gesturesEnabled: false
    };

    constructor(){
        super();
        this.state = {
            
        };   
        if(Platform.OS!='ios') AndroidKeyboardAdjust.setAdjustPan();         
    }    

    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{flex:1}}
                 resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={false} extraHeight={10}>
                <Image
                    source={loginback}
                    style={{
                        width:'100%',
                        height:'100%',
                        position:'absolute'
                    }}
                />
                <View style={styles.container}>
                    <View style={{flex:4}}></View>
                    <View style={{flex:5}}>
                        <Text style={styles.wipay}>WIPAY</Text>
                        <Text style={styles.login}>Login to your Account</Text>
                    </View>
                    <View style={{flex:2}}>
                        <TextInput style={styles.username} underlineColorAndroid="transparent" placeholderTextColor="white" placeholder="Username"></TextInput>
                    </View>
                    <View style={{flex:2}}>
                        <TextInput style={styles.username} secureTextEntry={true} underlineColorAndroid="transparent" placeholderTextColor="white" placeholder="Password"></TextInput>
                    </View>
                    <View style={{flex:2}}>
                        <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                            <Text style={{color:'white',fontSize:25,fontWeight:'600'}}>Login</Text>
                        </RkButton>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.forgot}>Forgot your password ?</Text>
                    </View>
                    <View style={{alignItems:'center',}}>
                      <RkButton style={{backgroundColor:'transparent'}} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                        <Image
                            source={fingerprint}
                            style={{
                                width: 50,height: 50,
                                resizeMode:'contain'
                            }}
                        />
                      </RkButton>    
                    </View>    
                    <View style={{flex:4}}></View>
                    <View style={{flex:1}}>
                        <Text style={styles.forgot}>Register Now</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            );
    }
}

export default LoginScreen;

