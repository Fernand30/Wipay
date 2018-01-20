import { Platform } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const styles = {
    container: {
        flex: 8,
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
    submenutext:{
        fontSize:responsiveFontSize(1.5),
        color:'white',
        fontWeight:'500'
    },
    login:{
    	color:'white',
    	fontSize:16,
    	fontWeight:'400',
    	alignSelf:'center'
    },
    otherView:{
        flex:1,
        paddingVertical:20
    },
    username:{
    	width:'100%',
    	alignSelf:'center',
    	borderBottomWidth:2,
    	borderColor:'#ddd',
    	fontSize:responsiveFontSize(2),
    	paddingBottom:responsiveHeight(1),
    	color:'black',
        height: responsiveHeight(5)
    },
    submitButton:{
        marginTop:responsiveHeight(0),
        height:responsiveHeight(6),
        alignSelf:'center',
        borderRadius:responsiveHeight(2),
        backgroundColor:'transparent',
        borderColor:'rgb(0,138,220)',
        borderWidth:1,
        justifyContent:'center'
    },
    submitText:{
        color:'rgb(0,168,220)',
        fontSize:responsiveFontSize(3),
        fontWeight:'300'
    },
    balance:{
        borderColor:'#ddd',
        width:'80%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        marginVertical:responsiveHeight(3),
        paddingVertical:responsiveHeight(1.5),
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
    	fontSize:responsiveFontSize(1.5),
    	fontWeight:'400',
    	alignSelf:'flex-start'
    },
    rowView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:responsiveHeight(0.7),
    },
    blackView:{
        width:responsiveHeight(3),
        height:responsiveHeight(3),
        backgroundColor:'black',
        marginRight: responsiveHeight(0.7),
    },
    username1:{
        width:'100%',
        alignSelf:'center',
        borderBottomWidth:2,
        borderColor:'#ddd',
        fontSize:18,
        paddingBottom:3,
        color:'black',
        height: 30
    },
    balanceText:{
        color:'grey',
        fontSize:responsiveFontSize(1.5),
        fontWeight:'400',
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
        flex:1,
    },
    labelButton:{
        backgroundColor:'rgb(0,85,227)',
        borderRadius:0,
        flex:1,
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