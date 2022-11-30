import React, {useState, useEffect} from "react";
import {
     SafeAreaView,
     View, 
     Text,
     TouchableOpacity,
     FlatList} from "react-native";
import {database}  from "../../config/firebase"
import styles from "./style"
import { collection, getDocs } from "firebase/firestore";

export default function Tarefas() {
    
    const [tarefas, setTarefas] = useState([]);


    useEffect(() => {
            listarTarefas();
            console.log(tarefas);
    }, [])

    const listarTarefas = async () => {
        const listarTarefas = [];
        const querySnapshot = await getDocs(collection(database, "Tarefas"));

        querySnapshot.forEach((doc) => {
            listarTarefas.push({...doc.data, id: doc.id})
            setTarefas(listarTarefas);
        });

        setTarefas(listarTarefas);
        console.log(listarTarefas);

    }


    return(
        <View>
            <Text>
                Pagina de Tarefas
            </Text>
        </View>
    )
}