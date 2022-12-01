import { addDoc, collection } from "firebase/firestore";
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import {database}  from "../../config/firebase"
import styles from "./style";

export default function NovaTarefa({navigation}) {

    const [descricao, setDescricao] = useState('');

    const adicionarNovaTarefa = () => {
            console.log(descricao);
            if (descricao === '') {
                Alert.alert(
                    "Erro",
                    "Preencha o campo para adicionar uma tarefa!")
                    console.log("Preencha o campo para adicionar uma tarefa!");
            } else {
                addDoc(collection(database, "Tarefas"),
                {
                    descricao: descricao,
                    status: false
                })
                .then(() => {
                    Alert.alert(
                        "Sucesso",
                        "Tarefa adicionada com sucesso!")
                    console.log("Tarefa adicionada com sucesso!");
                    navigation.navigate("Tarefas")
                })
                .catch(error => {
                    console.log("Falha ao adicionar tarefa!");
                    Alert.alert(
                        "Erro",
                        "Falha ao adicionar tarefa!")
                })
            }

    
            setDescricao('');

    } 

    return(
        <View style={styles.container}>
            <Text style={styles.label}>
                Descrição
            </Text>
            <TextInput
                style={styles.textoInput}
                placeholder="Adicione uma descrição..."
                onChangeText={setDescricao}
                value={descricao}
            />
            <TouchableOpacity 
            style={styles.botaoTouchSalvarTarefa}
            onPress={() => {
                adicionarNovaTarefa()
            }}
            >
                <Text style={styles.botaoSalvar}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}