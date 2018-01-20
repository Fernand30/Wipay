import { Platform } from 'react-native';
import { Dimensions } from "react-native"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = {
    container: {
        flex: 1,
        backgroundColor:'transparent',
    },
     wipay:{
        color:'white',
        fontSize:responsiveFontSize(6),
        fontWeight:'400',
        alignSelf:'center',
        marginTop:responsiveHeight(2),
    },
    headerImage:{
       height:responsiveWidth(7),
       width:responsiveWidth(7),
    },
    headerTitle:{
      color:'rgb(0,163,240)',
      fontSize:responsiveFontSize(3),
      alignSelf:'center',
      fontWeight:'300'
    },
    topView:{
        flex:2.5,
        justifyContent:'center',
        alignItems: 'center'
    },
     totalText:{
        color:'white',
        fontSize:responsiveFontSize(4),
        fontWeight:'400',
        alignSelf:'center',
        marginTop:10
    },
    shapeImage:{
        width:'10%',
        height:'8%',
        position:'absolute',
        bottom:-1,
        right: Dimensions.get('window').width/2-Dimensions.get('window').width*0.05
    },
    login:{
    	color:'white',
    	fontSize:responsiveFontSize(2),
    	fontWeight:'400',
    	alignSelf:'center'
    },
    username:{
    	width:'80%',
    	alignSelf:'center',
    	borderBottomWidth:2,
    	borderColor:'white',
    	fontSize:22,
    	paddingBottom:8,
    	color:'white'
    },
    buttonText:{
        color:'white',
        fontSize:responsiveFontSize(2)
    },
    rowView:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        paddingLeft:20
    },
    paddingLayout:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        paddingLeft:20
    },
    loginButton:{
    	width:'48%',
    	height:responsiveHeight(5),
    	alignSelf:'center',
    	borderRadius:responsiveHeight(2),
    },
    forgot:{
    	color:'white',
    	fontSize:responsiveFontSize(2),
    	fontWeight:'400',
    	alignSelf:'center',
        marginTop: responsiveHeight(7),
    },
    line:{
        height:2,
        backgroundColor:'rgb(225,225,225)',
        width:'100%',
        marginVertical:10
    },
    mainView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:responsiveHeight(3),
    },
    eachText:{
        fontSize:responsiveFontSize(1.5)
    },
}

export default styles