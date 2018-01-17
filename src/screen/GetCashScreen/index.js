import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableHighlight,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
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
            headerTitle: <Text style={{color:'rgb(0,163,240)',fontSize:35,alignSelf:'center',fontWeight:'300'}}>Get Cash</Text>,
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
                            <Text style={styles.wipay}>Bank</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <Text style={styles.wipay}>Withdraw</Text>
                            :
                            null
                        }
                        
                        <View/>
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <View style={{backgroundColor:'rgb(0,85,227)',flex:1}}/>
                            <RkButton style={this.state.activeWindow == "0" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "0" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Bank</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "1" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "1" })}>
                                <Text style={{fontSize:12,color:'white',fontWeight:'500'}}>Withdraw</Text>
                            </RkButton>
                            <View style={{backgroundColor:'rgb(0,85,227)',flex:1}}/>
                        </View>
                        <KeyboardAwareScrollView
                            contentContainerStyle={{flex:1}}
                             resetScrollToCoords={{ x: 0, y: 0 }}
                            scrollEnabled={false}  extraHeight={350} >
                        {
                            this.state.activeWindow == "0"
                            ?
                            <View style={{flex:1}}>
                                <View style={styles.balance}>
                                    <Text style={styles.balanceText}>Amount Balance</Text>
                                    <View style={styles.rowView}>
                                        <View style={styles.blackView}/>
                                        <Text style={styles.balanceText}>TTD Balance</Text>
                                    </View>
                                    
                                </View>
                                <View style={{flex:3,width:'70%',alignSelf:'center'}}>
                                    <Text style={styles.forgot}>Amount</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
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
                            this.state.activeWindow == "1"
                            ?
                            <View style={{flex:1,paddingTop:20}}>
                                
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Bank Name:</Text>
                                    <TextInput underlineColorAndroid='transparent' style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Account:</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done"  style={styles.username1}></TextInput>
                                </View>
                                <View style={{flex:2,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Date:</Text>
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
                            this.state.activeWindow == "2"
                            ?
                            <View style={{flex:1}}>
                                <View style={{flex:3}}>
                                    <View style={{borderRadius:3,marginTop:30,width:'90%',alignSelf:'center',backgroundColor:'rgb(0,255,254)'}}>
                                        <View style={{flexDirection:'row',alignSelf:'center',marginTop:15,marginBottom:15}}>
                                            <Text style={[styles.tails,{color:'black',fontSize:12}]}>A Transaction fee of 3% + $5 TTD will be deducted</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{flex:3,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Enter Total</Text>
                                    <TextInput underlineColorAndroid='transparent' style={styles.username}></TextInput>
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
                            <View style={{flex:1}}>
                                <View style={{flex:5}}>
                                    <View style={{borderRadius:3,marginTop:10,width:'70%',alignSelf:'center'}}>
                                        <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Scan Here</Text>
                                    </View>
                                </View>
                                <View style={{flex:3,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Wipay Serial #</Text>
                                    <TextInput underlineColorAndroid='transparent' style={styles.username}></TextInput>
                                    <RkButton style={[styles.loginButton,{marginTop:8}]} onPress={() => this.props.navigation.navigate('HomeScreen')}>
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