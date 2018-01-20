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
    logoutText:{
      fontSize:responsiveFontSize(2.5),
      fontWeight:'700',
      color:'#14a7fd'
    },
    rowView:{
      flexDirection:'row',
      paddingHorizontal: responsiveHeight(7),
      justifyContent:'space-between'
    },
    itemText:{
      backgroundColor:'transparent',
      color:'white',
      fontSize:responsiveFontSize(2.2)
    },
    commonView:{
      flex:1,
      paddingVertical: responsiveHeight(20),
      justifyContent:'space-between'
    },

}

export default styles