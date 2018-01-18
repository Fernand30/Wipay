import React from 'react';
import {connect} from 'react-redux';
import {Platform,Text,Alert,ActivityIndicator,Button,TouchableOpacity,View, StyleSheet,ScrollView,Image,ListView,TextInput} from 'react-native';
import styles from './styles'
import { RkText, RkTheme, RkButton} from 'react-native-ui-kitten';
import home from '../../images/home.png'
import qrcode from '../../images/qrcodefooter.png'
import bitcoin from '../../images/bitcoin.png'
import barcode from '../../images/barcode.png'

class FooterScreen extends React.Component {
   
    constructor(){
        super();
        this.state = {
            isOpen:false,
        };        
    }

    render() {
            
        return (
            <View style={{
                        backgroundColor:'white',
                        width:'100%',
                        alignSelf:'center',
                        flexDirection:'row',
                        justifyContent:'space-between',
                    }}>
                <TouchableOpacity style={{alignSelf:'center'}} onPress={ () => this.props.navigation.navigate('WipayScreen')}>
                    <View>
                        <View style={{height: 3,width:55,backgroundColor: 'transparent',alignSelf:'center'}}></View>
                        <Image style={styles.footerStyle} source={home} />
                        <RkText style={{fontSize:12,alignSelf:'center',marginTop:5,marginBottom:5,fontWeight:'300', color:'black'}}>HOME</RkText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity   onPress={ () => this.props.navigation.navigate('QrScreen')}>
                    <View style={{alignSelf:'center'}}>
                        <View style={{height: 3,width:55,backgroundColor: 'transparent',alignSelf:'center'}}></View>
                        <Image style={styles.footerStyle} source={qrcode} />
                        <RkText style={{fontSize:12,alignSelf:'center',marginTop:5,marginBottom:5,fontWeight:'300', color:'black'}}>MY QR</RkText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={ () => this.props.navigation.navigate('CoinScreen')}>
                    <View style={{alignSelf:'center'}}>
                        <View style={{height: 3,width:55,backgroundColor: 'transparent',alignSelf:'center'}}></View>
                        <Image style={styles.footerStyle} source={bitcoin} />
                        <RkText style={{fontSize:12,alignSelf:'center',marginTop:5,marginBottom:5,fontWeight:'300', color:'black'}}>COIN</RkText>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={ () => {}}>
                <View style={{alignSelf:'center'}}>
                    <View style={{height: 3,width:55,backgroundColor: 'transparent',alignSelf:'center'}}></View>
                    <Image style={styles.footerStyle} source={barcode} />
                    <RkText style={{fontSize:12,alignSelf:'center',marginTop:5,marginBottom:5,fontWeight:'300', color:'black'}}>SCAN</RkText>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default FooterScreen;