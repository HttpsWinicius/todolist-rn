import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerStyle: {
    flex: 1,
    backgroundColor:"#fff",
    paddingTop: 20
 },
 tarefasStyle:{
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:5
 },
 deletarTarefaStyle:{
  justifyContent:"center",
  alignItems: "center",
  paddingRight:18,
 },
 concluirTarefaStyle:{
  justifyContent:"center",
  alignItems: "center",
  paddingRight:18,
 },
 descricaoTarefaStyle:{
  width:"75%",
  alignContent:"flex-start",
  backgroundColor:"#000",
  padding:12,
  paddingHorizontal: 20,
  borderRadius:50,
  marginBottom: 5,
  marginRight:15,
  color:"#fff",
 },
 botaoNovaTarefaStyle:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 30,
  left:20,
  backgroundColor:"#000",
  justifyContent:"center",
  alignItems: "center"
 },
 botaoAddStyle:{
  color:"#ffffff",
  fontSize:25,
  fontWeight:"bold",
 },
});

export default styles