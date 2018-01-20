import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,Dimensions,TouchableHighlight,TouchableOpacity,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import {RkButton} from 'react-native-ui-kitten'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SideMenu from 'react-native-side-menu';
import SideMenuScreen from '../SideMenuScreen';
//import Icon from 'react-native-vector-icons/Ionicons';
import FooterScreen from '../Footer'
import loginback from '../../images/body-bg.png'
import menu from '../../images/menu.png'
import setting from '../../images/setting.png'

class DepositScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => {
        const { state: { params } } = navigation;

       return ({
            gesturesEnabled: false,
            headerLeft: <TouchableOpacity onPress={params ? params.onOpenSideMenu : () => {}}>
                            <Image style={styles.headerImage} source={menu} />
                        </TouchableOpacity>,
            headerTitle: <Text style={styles.headerTitle}>Deposit</Text>,           
            headerTitleStyle: {
                alignItems: 'center'
            },
            headerRight: <TouchableOpacity onPress={params ? params.onOpenSetting : () => {}}>
                            <Image style={styles.headerImage} source={setting} />
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
                    <View style={styles.topView}>
                        {
                            this.state.activeWindow == "0"
                            ?
                            <Text style={styles.wipay}>Credit Card</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <Text style={styles.wipay}>Bank Transfer</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <Text style={styles.wipay}>Card Swipe</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "3"
                            ?
                            <Text style={styles.wipay}>Voucher</Text>
                            :
                            null
                        }
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <RkButton style={this.state.activeWindow == "0" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "0" })}>
                                <Text style={styles.submenutext}>Credit Card</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "1" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "1" })}>
                                <Text style={styles.submenutext}>Bank Transfer</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "2" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "2" })}>
                                <Text style={styles.submenutext}>Card Swipe</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "3" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "3" })}>
                                <Text style={styles.submenutext}>Voucher</Text>
                            </RkButton>
                        </View>
                        <KeyboardAwareScrollView
                            contentContainerStyle={{flex:1}}
                             resetScrollToCoords={{ x: 0, y: 0 }}
                            scrollEnabled={false} extraScrollHeight={Dimensions.get('window').height/2.5} >
                        {
                            this.state.activeWindow == "0"
                            ?<View>
                                <View style={styles.amountView}>
                                    <Text style={styles.forgot}>Amount</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                                </View>
                                <RkButton style={styles.submitButton} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                                    <Text style={styles.submitText}>Submit</Text>
                                </RkButton>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <View style={{flex:1}}>
                                <View style={{flex:3}}>
                                    <View style={styles.greenView}>
                                        <View style={{flexDirection:'row',alignSelf:'center'}}>
                                            <Text style={styles.heads}>Bank:</Text>
                                            <Text style={styles.tails}>First Citizens Bank</Text>
                                        </View>
                                        <View style={styles.greenunderView}>
                                            <Text style={styles.heads}>Account Name:</Text>
                                            <Text style={styles.tails}>Wipay Financial Services</Text>
                                        </View>
                                        <View style={{flexDirection:'row',alignSelf:'center'}}>
                                            <Text style={styles.heads}>Account #:</Text>
                                            <Text style={styles.tails}>2356726</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.makeView}>
                                    <Text style={[styles.forgot,{color:'rgb(119,119,119)'}]}>Make a Bank Deposit and</Text>
                                    <Text style={[styles.forgot,{color:'rgb(119,119,119)'}]}>enter the reference code below</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                                </View>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <View style={{flex:1}}>
                                <View style={styles.blueView}>
                                    <Text style={[styles.tails,{color:'black',fontSize:12}]}>A Transaction fee of 3% + $5 TTD will be deducted</Text>
                                </View>
                                <View style={styles.enterView}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Enter Total</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                                </View>
                                <RkButton style={styles.submitButton1} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                                    <Text style={styles.submitText}>Submit</Text>
                                </RkButton>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "3"
                            ?
                            <View style={{flex:1}}>
                                <View style={{borderRadius:3,marginTop:10,width:'70%',alignSelf:'center'}}>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Scan Here</Text>
                                    <View style={styles.scanView}/>
                                    <Text style={[styles.forgot,{color:'rgb(83,83,83)'}]}>Wipay Serial #</Text>
                                    <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done" style={styles.username}></TextInput>
                                    <RkButton style={styles.submitButton2} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                                        <Text style={styles.submitText}>Submit</Text>
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