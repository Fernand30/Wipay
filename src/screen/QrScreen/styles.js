import { Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const styles = {
    container: {
        flex: 1,
        backgroundColor:'transparent',
    },
    wipay:{
        color:'white',
        fontSize:responsiveFontSize(5),
        fontWeight:'300',
        alignSelf:'center',
    },
    headerImage:{
       height:responsiveWidth(7),
       width:responsiveWidth(7),
    },
    headerTitle:{
      color:'rgb(0,163,240)',
      fontSize:responsiveFontSize(4),
      alignSelf:'center',
      fontWeight:'300'
    },
    topView:{
        flex:2.5,
        justifyContent:'center',
        alignItems: 'center'
    },
    login:{
        color:'white',
        fontSize:16,
        fontWeight:'400',
        alignSelf:'center'
    },
    username:{
        width:'100%',
        alignSelf:'center',
        borderBottomWidth:2,
        borderColor:'#ddd',
        fontSize:20,
        paddingBottom:3,
        color:'black'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
    buttonTouchable: {
        padding: 16,
    },
    loginButton:{
        width:'40%',
        height:40,
        alignSelf:'center',
        borderRadius:15,
        backgroundColor:'transparent',
        borderColor:'rgb(0,138,220)',
        borderWidth:1
    },
    forgot:{
        color:'grey',
        fontSize:14,
        fontWeight:'400',
        alignSelf:'flex-start'
    },
    textBold: {
    fontWeight: '500',
    color: '#000',
  },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        backgroundColor: 'transparent',
    },
    line:{
        height:2,
        backgroundColor:'rgb(225,225,225)',
        width:'100%',
        marginBottom:10
    },
    labelButtonA:{
        backgroundColor:'rgb(82,151,250)',
        borderRadius:0,
        height: responsiveHeight(7)
    },
    labelButton:{
        backgroundColor:'rgb(0,85,227)',
        borderRadius:0,
        flex:1,
        height: responsiveHeight(7)
    },
    heads:{
        color:'white',
        fontWeight:'600',
    },
    tails:{
       color:'white',
       fontWeight:'200',
    }
}

export default styles