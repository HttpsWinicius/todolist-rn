import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity, Alert}  from "react-native"
import { doc, updateDoc} from "firebase/firestore";
 
import {database}  from "../../config/firebase"
import styles from "./style";

export default function Detalhes({navigation, route}) {

    const [descricaoTarefa, setDescricaoTarefa] = useState(route.params.descricao)
    const idTarefa = route.params.id

    const editarTarefa = (descricao, id) => {
        updateDoc(doc(database, "Tarefas", id), {
            descricao: descricao
        })
        .then( ()=> {
            Alert.alert(
                "Sucesso",
                "A tarefa foi editada.")
            console.log("A tarefa foi editada com sucesso");
            window.location.reload(true);
            navigation.navigate("Tarefas")
        })
        .catch(erro => {
            Alert.alert(
                "Erro",
                "Erro ao editar tarefa.")
            console.log("Erro ao editar tarefa", erro.message);
        })
    }

    return(
        <View style={styles.container}>
        <Text style={styles.label}>Editar Descrição</Text>
        <TextInput
        style={styles.textoInput}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescricaoTarefa}
        value={descricaoTarefa}
        />
        <TouchableOpacity 
          style={styles.botaoTouchEditarTarefa}
          onPress={()=>{
            editarTarefa(descricaoTarefa, idTarefa)
          }}
        >
          <Text style={styles.botaoSalvarEdicao}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
}