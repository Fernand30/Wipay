import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableHighlight,Dimensions,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
import * as Animatable from 'react-native-animatable';
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'
import setting from '../../images/setting.png'
import shape from '../../images/shape.png'

var {height, width} = Dimensions.get('window');

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerLeft: <TouchableHighlight onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={{height:30,width:30}} source={menu} />
                        </TouchableHighlight>,
            headerTitleStyle: {
            alignItems: 'center'
            },
            headerRight: <TouchableHighlight onPress={params ? params.onOpenSetting : () => {}}>
                            <Image style={{height:30,width:30}} source={setting} />
                        </TouchableHighlight>,
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
            isOpen:false
        };        
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.navigate('SideMenuScreen'),
            onOpenSetting: () => this.props.navigation.navigate('SettingScreen'),
        });        
    }



    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item =>{
        this.setState({
            selectedItem: item,
        });
        const { navigate } = this.props.navigation;
        this.props.navigation.navigate(item);
    }

    render() {
        const menu = <SideMenuScreen
                            navigation = {this.props.navigation}
                            onItemSelected={this.onMenuItemSelected} />;
            
        return (

                <View style={{flex:1}}>
                    <Image
                        source={loginback}
                        style={{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                        }}
                    />
                    <View style={styles.container}>
                    <View style={{flex:5}}>
                        <View style={{flex:4}}>
                            <Text style={styles.wipay}>WIPAY</Text>
                            <Text style={styles.login}>Account Balance</Text>
                            <Text style={styles.totalText}>$2500TT</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.forgot}>KYC Level 1</Text>
                        </View>
                        <Image
                            source={shape}
                            style={{
                                width:'10%',
                                height:'7%',
                                position:'absolute',
                                bottom:0,
                                right: 175,
                            }}
                        />
                    </View>
                        <View style={{flex:5,backgroundColor:'white'}}>
                            <View style={{
                                            flex:1,
                                            flexDirection:'row',
                                            justifyContent:'space-between',
                                            paddingLeft:20,
                                            paddingRight:20
                                    }}>
                                <RkButton style={[styles.loginButton,{backgroundColor:'rgb(0,198,250)'}]} onPress={() => {}}>
                                    <Text style={{color:'white',fontSize:15,fontWeight:'600'}}>Request Payment</Text>
                                </RkButton>
                                <RkButton style={[styles.loginButton,{backgroundColor:'rgb(0,238,107)'}]} onPress={() => {}}>
                                    <Text style={{color:'white',fontSize:15,fontWeight:'600'}}>Peer-To-Peer</Text>
                                </RkButton>
                            </View>
                            <View style={{flex:4,paddingTop:10}}>
                                
                                <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:20,paddingLeft:20}}>
                                    <Text style={{fontWeight:'700',fontSize:14}}>Date</Text>
                                    <Text style={{fontWeight:'700',fontSize:14}}>Detail</Text>
                                    <Text style={{fontWeight:'700',fontSize:14}}>Amount</Text>
                                </View>
                                <ScrollView style={{}}>
                                    <View style={styles.line}></View>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:20,paddingLeft:20}}>
                                            <Text style={{fontWeight:'700',fontSize:14}}>2017-12-03{'\n'}13:36:43</Text>
                                            <Text style={{fontWeight:'700',fontSize:14}}>Payment from Wicoins{'\n'}Syst(WiCoins)</Text>
                                            <Text style={{fontWeight:'700',fontSize:14}}>$3.40TT</Text>
                                        </View>
                                   
                                        
                                    <View style={styles.line}></View>
                                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:20,paddingLeft:20}}>
                                            <Text style={{fontWeight:'700',fontSize:14}}>2017-12-03{'\n'}13:34:49</Text>
                                            <Text style={{fontWeight:'700',fontSize:14}}>Payment to Wicoins{'\n'}Syst()</Text>
                                            <Text style={{fontWeight:'700',fontSize:14}}>$1.00TT</Text>
                                        </View>
                                    
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}

export default HomeScreen;