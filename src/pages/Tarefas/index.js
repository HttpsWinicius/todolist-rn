import React, {useState, useEffect} from "react";
import {
     View, 
     Text,
     TouchableOpacity,
     FlatList,
     Alert} from "react-native";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import Ionicons from '@expo/vector-icons/Ionicons';

import {database}  from "../../config/firebase"
import styles from "./style";

export default function Tarefas({navigation}) {
    
    const [tarefas, setTarefas] = useState([]);
    const [iconeTarefaNaoConcluida, setIconeTarefaConcluida] = useState("checkmark-outline");
    const [corIconeTarefaNaoConcluida, setCorIconeTarefa] = useState("#696969");
    const [iconeTarefaConcluida, setIconeTarefaNaoConcluida] = useState("checkmark-done-outline");
    const [corIconeTarefaConcluida, setCorIconeTarefaNaoConcluida] = useState("#228b22");


    useEffect(() => {
        listarTarefa();
    }, [])

    const listarTarefa = async () => {

        const querySnapshot = await getDocs(collection(database, "Tarefas"));
        const listarTarefas = [];
        querySnapshot.forEach((doc) => {
            listarTarefas.push({
                id: doc.id,
                 ...doc.data()});
        });

        setTarefas(listarTarefas);
    }

    const deletarTarefa = (id) => {
        deleteDoc(doc(database, "Tarefas", id))
        .then(() => {
            Alert.alert(
                "Parabéns!!!",
                "Você concluiu uma tarefa.")
                window.location.reload(true);
            console.log("Parabéns, você concluiu uma tarefa");
        }).catch (error => {
            console.log("Ah não, erro ao concluir tarefa");
        })

    }

    const tarefaConcluida = (status, id) => {

        if (status) {
            Alert.alert(
                "Erro",
                "A tarefa já foi concluida.")
            console.log("Erro! A tarefa já foi concluida");
        } else {
            updateDoc(doc(database, "Tarefas", id), {
                status: true
            })
            .then( ()=> {
                Alert.alert(
                    "Sucesso",
                    "A tarefa foi concluida.")
                console.log("A tarefa foi concluida com sucesso");
                window.location.reload(true);
            })
            .catch(erro => {
                Alert.alert(
                    "Erro",
                    "Erro ao editar tarefa.")
                console.log("Erro ao editar tarefa", erro.message);
            })
        }

    }


    return(
        <View style={styles.containerStyle}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={tarefas}
            renderItem={({item}) => {
                return(        
                <View style={styles.tarefasStyle}>  
                        <TouchableOpacity 
                        style={styles.concluirTarefaStyle}
                        onPress={() => tarefaConcluida(item.status, item.id)}
                    >
                        <Ionicons
                        size={28}
                        color={item.status === true ? corIconeTarefaConcluida : corIconeTarefaNaoConcluida}
                        name={item.status === true ? iconeTarefaConcluida : iconeTarefaNaoConcluida}
                        >
                        </Ionicons>
                    </TouchableOpacity>
                    <Text
                    style={styles.descricaoTarefaStyle}
                    onPress={()=>
                        navigation.navigate("Detalhes",{
                          id: item.id,
                          descricao: item.descricao,
                        })
                      }
                    >
                        {item.descricao}
                    </Text>
                    <TouchableOpacity 
                        style={styles.deletarTarefaStyle}
                        onPress={() => deletarTarefa(item.id)}
                    >
                        <Ionicons
                        size={20}
                        color="#FF0000"
                        name="trash-bin-outline"
                        >
                        </Ionicons>
                    </TouchableOpacity>
    
                    </View>)
   
            }}
            />
            <TouchableOpacity 
                style={styles.botaoNovaTarefaStyle}
                onPress={() => navigation.navigate("NovaTarefa")}
            >
                <Text style={styles.botaoAddStyle}>
                    <Ionicons size="large" name="add-outline"></Ionicons>
                </Text>
            </TouchableOpacity>
        </View>
    )
}