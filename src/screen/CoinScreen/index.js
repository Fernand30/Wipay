import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,Dimensions,TouchableOpacity,TouchableHighlight,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
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
            headerTitle: <Text style={styles.headerTitle}>Wicoin</Text>,           
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
            activeWindow:"0",
            myNumber:''
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

    onChanged(text){
        let newText = '';
        let numbers = '0123456789';

        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                //alert("please enter numbers only");
            }
        }
        this.setState({ myNumber: newText });
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
                            <Text style={styles.wipay}>Buy</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <Text style={styles.wipay}>Sell</Text>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <Text style={styles.wipay}>Transfer</Text>
                            :
                            null
                        }
                    </View>
                    <View style={{flex:5,backgroundColor:'white'}}>
                        <View style={{
                            flexDirection:'row',
                        }}>
                            <RkButton style={this.state.activeWindow == "0" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "0" })}>
                                <Text style={styles.submenutext}>Buy</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "1" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "1" })}>
                                <Text style={styles.submenutext}>Sell</Text>
                            </RkButton>
                            <RkButton style={this.state.activeWindow == "2" ? styles.labelButtonA : styles.labelButton} onPress={() => this.setState({ activeWindow: "2" })}>
                                <Text style={styles.submenutext}>Transfer</Text>
                            </RkButton>
                            
                        </View>
                        <KeyboardAwareScrollView
                    contentContainerStyle={{flex:1}}
                     resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={false}   extraScrollHeight={Dimensions.get('window').height/2.5} >
                        {
                            this.state.activeWindow == "0"
                            ?
                            <View style={{flex:1,paddingTop:10}}>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I JMD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I BBD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <Text style={styles.amountsell}>Enter WiCoin Amount to Sell</Text>
                                
                                <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done"  placeholder="WiCoin Amount" style={styles.username}
                                    onChangeText={(text)=> this.onChanged(text)}
                                    value={this.state.myNumber}/>
                                
                                <TextInput underlineColorAndroid='transparent' editable={false} placeholder="TDD Amount" style={styles.username}/>
                                <RkButton style={styles.submitButton} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                                    <Text style={styles.submitText}>Buy</Text>
                                </RkButton>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "1"
                            ?
                            <View style={{flex:1,paddingTop:10}}>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I JMD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I BBD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <Text style={styles.amountsell}>Enter WiCoin Amount to Sell</Text>
                                
                                <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done"  placeholder="WiCoin Amount" style={styles.username}
                                    onChangeText={(text)=> this.onChanged(text)}
                                    value={this.state.myNumber}/>
                                
                                <TextInput underlineColorAndroid='transparent' editable={false} placeholder="TDD Amount" style={styles.username}/>
                                <RkButton style={styles.submitButton} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                                    <Text style={styles.submitText}>Sell</Text>
                                </RkButton>
                            </View>
                            :
                            null
                        }
                        {
                            this.state.activeWindow == "2"
                            ?
                            <View style={{flex:1,paddingTop:10}}>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I TTD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I JMD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <View style={styles.rowView}>
                                    <Text style={styles.forgot}>WiCoin I BBD</Text>
                                    <Text style={styles.forgot}>6.8</Text>
                                </View>
                                <Text style={styles.amountsell}>Enter WiCoin Amount to Sell</Text>
                                
                                <TextInput underlineColorAndroid='transparent' keyboardType = 'numeric' returnKeyType="done"  placeholder="WiCoin Amount" style={styles.username}
                                    onChangeText={(text)=> this.onChanged(text)}
                                    value={this.state.myNumber}/>
                                
                                <TextInput underlineColorAndroid='transparent' editable={false} placeholder="TDD Amount" style={styles.username}/>
                                <RkButton style={styles.submitButton} onPress={() => this.props.navigation.navigate('WipayScreen')}>
                                    <Text style={styles.submitText}>Transfer</Text>
                                </RkButton>
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