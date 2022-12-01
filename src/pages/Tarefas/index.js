import React, {useState, useEffect} from "react";
import {
     View, 
     Text,
     TouchableOpacity,
     FlatList,
     Alert} from "react-native";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import Ionicons from '@expo/vector-icons/Ionicons';

import {database}  from "../../config/firebase"
import styles from "./style";

export default function Tarefas({navigation}) {
    
    const [tarefas, setTarefas] = useState([]);

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
            console.log("Parabéns, você concluiu uma tarefa");
        }).catch (error => {
            console.log("Ah não, erro ao concluir tarefa");
        })

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
                        style={styles.deletarTarefaStyle}
                        onPress={() => deletarTarefa(item.id)}
                    >
                        <Ionicons
                        size={28}
                        color="#228b22"
                        name="checkmark-done-outline"
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