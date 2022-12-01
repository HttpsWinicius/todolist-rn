import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
 container: { 
   flex:1,
   backgroundColor:'#fff'
 },
 label:{
  width:"90%",
  marginTop: 20,
  fontSize:16,
  marginLeft: 20,
  color:"#000"
 },
 textoInput:{
  width:"90%",
  marginTop:10,
  padding:10,
  height:50,
  borderBottomWidth: 1,
  borderBottomColor:"#ffd900",
  marginLeft:"auto",
  marginRight:"auto"
 },
 botaoTouchEditarTarefa:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 30,
  left:20,
  backgroundColor:"#000",
  justifyContent:"center",
  alignItems: "center"
 },
 botaoSalvarEdicao:{
  color:"#ffffff",
  fontSize:16,
  fontWeight:"bold",
 }
 
});

export default styles