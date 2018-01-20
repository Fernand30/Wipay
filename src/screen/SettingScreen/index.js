import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,
    Button,TouchableHighlight,TouchableOpacity,View, Dimensions,StyleSheet,
    ScrollView,Image,ListView,TextInput,Switch} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
import * as Animatable from 'react-native-animatable';
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'

import user from '../../images/user.png'
import openlock from '../../images/open-lock.png'
import dollarsymbol from '../../images/dollar-symbol.png'
import musicplayersettings from '../../images/music-player-settings.png'
import share from '../../images/share.png'
import creditcard from '../../images/credit-card.png'

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerLeft: <TouchableOpacity onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={styles.headerImage} source={menu} />
                        </TouchableOpacity>,
            headerTitle: <Text style={styles.headerTitle}>Setting</Text>,           
            headerTitleStyle: {
                alignItems: 'center'
            },
            headerRight: <TouchableOpacity onPress={params ? params.gologin : () => {}}>
                            <Text style={styles.logoutText}>Log Out</Text>
                        </TouchableOpacity>, 
            headerStyle: {
                backgroundColor: 'white',
                height: 70,
                paddingLeft: 10,
                paddingRight: 10,
                alignSelf:'auto'
            }
        });
    };

    constructor(){
        super();
        this.state = {
            isOpen:false,
            switch1Value: false,
            switch3Value: true,
            switch4Value: true,
            switch5Value: true,
            switch2Value: true,
        };        
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.goBack(),
            gologin: () => this.props.navigation.navigate('LoginScreen')

        });        
    }

    render() {
        return (
                <View style={{flex:1}}>
                    <Image
                        source={loginback}
                        style={{
                            width:'100%',
                            height:'100%',
                            position:'absolute'
                        }}
                    />
                    <View style={styles.commonView}>        
                                                                   
                            <View style={styles.rowView}>
                                <Text style={styles.itemText}>PIN</Text>
                                <Switch onValueChange={ (value) => this.setState({ switch1Value: !this.state.switch1Value })} 
                                        value = {this.state.switch1Value}/> 
                            </View>  
                            <View style={styles.rowView}>
                                <Text style={styles.itemText}>Enroll Fingerprint</Text>
                                <Switch onValueChange={ (value) => this.setState({ switch2Value: !this.state.switch2Value })} 
                                        value = {this.state.switch2Value}/> 
                            </View>  
                            <View style={styles.rowView}>
                                <Text style={styles.itemText}>Enroll Wipay card</Text>
                                <Switch onValueChange={ (value) => this.setState({ switch3Value: !this.state.switch3Value })} 
                                        value = {this.state.switch3Value}/> 
                            </View>  
                            <View style={styles.rowView}>
                                <Text style={styles.itemText}>Enroll facial recognition</Text>
                                <Switch onValueChange={ (value) => this.setState({ switch4Value: !this.state.switch4Value })} 
                                        value = {this.state.switch4Value}/> 
                            </View>                    
                            <View style={styles.rowView}>
                                <Text style={styles.itemText}>Saved Documents</Text>
                                <Switch onValueChange={ (value) => this.setState({ switch5Value: !this.state.switch5Value })} 
                                        value = {this.state.switch5Value}/> 
                            </View>  

                    </View>
                </View>
        );
    }
}

export default HomeScreen;