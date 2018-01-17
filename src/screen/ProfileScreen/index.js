import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableHighlight,TouchableOpacity,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FooterScreen from '../Footer'
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'
import setting from '../../images/setting.png'

class DepositScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

        return ({
            gesturesEnabled: false,
            headerTitle: <Text style={{color:'rgb(0,163,240)',fontSize:35,alignSelf:'center',fontWeight:'300'}}>Profile Setting</Text>,
            headerLeft: <TouchableHighlight onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={{height:30,width:30}} source={menu} />
                        </TouchableHighlight>,
            headerTitleStyle: {
            alignCenter: 'center'
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
            isOpen:false,
            activeWindow:"0"
        };        
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onOpenSideMenu: () => this.props.navigation.navigate('SideMenuScreen'),
            onOpenSetting: () => this.props.navigation.navigate('SettingScreen'),
        });        
    }

    handleNavigation(){
        var index = parseInt(this.state.activeWindow);
        if(index == 3){
            index = 0;
        }else{
            index = index + 1;
        }
        index = index.toString();
        this.setState({activeWindow: index});        
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
                            nItemSelected={this.onMenuItemSelected} />;
            
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
                
                <View style={styles.container}>
                    <View style={{
                                    flex:3,
                                    justifyContent:'space-between',
                                    flexDirection:'row',
                                    paddingRight:10,
                                    paddingLeft:10
                                }}>
                        <View/>
                        {
                            this.state.activeWindow == "0"
                            ?
                            <Text style={styles.wipay}>KYC</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <Text style={styles.wipay}>Bank</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <Text style={styles.wipay}>User</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "3"
                            ?
                            <Text style={styles.wipay}>Password</Text>
                            :
                            null
                        }
                        <View/>
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <RkButton style={this.state.activeWindow == "0" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "0" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>KYC</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "1" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "1" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Bank</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "2" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "2" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>User</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "3" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "3" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Password</Text>
                            </RkButton>
                        </View>
                        <KeyboardAwareScrollView
                            contentContainerStyle={{flex:1}}
                             resetScrollToCoords={{ x: 0, y: 0 }}
                            scrollEnabled={false}   extraHeight={350} >
                        {
                            this.state.activeWindow == "0"
                            ?
                            <View style={{flex:1,paddingTop: 10}}>
                                <Text style={styles.label}>Level 1: Basic Verification</Text>
                                <View style={styles.verifiaction}>
                                    <Text style={styles.verfiedText}>VERIFIED</Text>
                                </View>
                                <View style={styles.greyView}/>
                                <Text style={styles.label}>Level 2: Identify Verification</Text>
                                <View style={{flex:1,width:'70%',alignSelf:'center'}}>
                                    <Text style={styles.forgot}>Photo ID or Passport</Text>
                                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                                        <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                                        <TouchableOpacity style={styles.buttonView}>
                                            <Text style={styles.uploadText}>Upload</Text>
                                        </TouchableOpacity>
                                    </View> 
                                </View>
                                <View style={{flex:1,width:'70%',alignSelf:'center'}}>
                                    <Text style={styles.forgot}>Proof of Address</Text>
                                    <View style={{flexDirection:'row',alignSelf:'center'}}>
                                        <TextInput underlineColorAndroid='transparent' style={styles.username}></TextInput>
                                        <TouchableOpacity style={styles.buttonView}>
                                            <Text style={styles.uploadText}>Upload</Text>
                                        </TouchableOpacity>
                                    </View> 
                                </View>
                                <View style={{flex:0.7}}>
                                    <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                        <Text style={{color:'rgb(0,168,220)',fontSize:25,fontWeight:'300'}}>Verify</Text>
                                    </RkButton>
                                </View>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                           <View style={{flex:1,paddingTop:20}}>
                                
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Bank Name</Text>
                                    <TextInput underlineColorAndroid='transparent' style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Bank Account Number</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Name on Bank Account</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2}}>
                                    <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                        <Text style={{color:'rgb(0,168,220)',fontSize:25,fontWeight:'300'}}>Submit</Text>
                                    </RkButton>
                                </View>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <View style={{flex:1,paddingTop:20}}>
                                
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Phone#</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Password</Text>
                                    <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Bank</Text>
                                    <TextInput underlineColorAndroid='transparent' style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2}}>
                                    <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                        <Text style={{color:'rgb(0,168,220)',fontSize:25,fontWeight:'300'}}>Submit</Text>
                                    </RkButton>
                                </View>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "3"
                            ?
                            <View style={{flex:1,paddingTop:20}}>
                                
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Old Password</Text>
                                    <TextInput underlineColorAndroid='transparent' style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>New Password</Text>
                                    <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Confirm New password</Text>
                                    <TextInput underlineColorAndroid='transparent' secureTextEntry={true} style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2}}>
                                    <RkButton style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeScreen')}>
                                        <Text style={{color:'rgb(0,168,220)',fontSize:25,fontWeight:'300'}}>Submit</Text>
                                    </RkButton>
                                </View>
                            </View>
                            :
                            null
                        }
                        </KeyboardAwareScrollView>
                    </View>                        
                </View>
                
                <View style={{}}>
                    <FooterScreen navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

export default DepositScreen;