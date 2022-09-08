import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ToDo } from "../../components/ToDo";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons"

export function Home() {
  const [toDos, setToDos] = useState<string[]>([])
  const [toDoName, setToDoName] = useState('')

  function handleToDoAdd() {
    if (toDos.includes(toDoName)) {
      return Alert.alert("Tarefa já existe")
    }

    setToDos(prevState => [...prevState, toDoName])
    setToDoName('')
  }

  function handleToDoRemove(name: string) {
    Alert.alert("Remover", "Remover a tarefa?", [
      {
        text: "Sim",
        onPress: () => setToDos(prevState => prevState.filter(toDo => toDo !== name))
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>

        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setToDoName}
          value={toDoName}
          multiline

        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleToDoAdd}
        >
          <Text
            style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoStatus}>
        <View style={styles.statusContainer}>
          <Text style={styles.criadas}>Criadas</Text>
          <View style={styles.statusNumberContainer}>
            <Text style={styles.statusNumber}> 4 </Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.criadas}>Concluídas</Text>
          <View style={styles.statusNumberContainer}>
            <Text style={styles.statusNumber}> 4 </Text>
          </View>
        </View>
      </View>
      <FlatList
        data={toDos}
        keyExtractor={item => item}
        renderItem={({ item }) => (

          <ToDo
            key={item}
            name={item}
            onRemove={() => handleToDoRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.textContainer}>
            <Image
              source={require('../../../assets/Clipboard.png')}
              style={styles.clipboard}
            />
            <Text style={styles.textBold}>
              Voce ainda não tem tarefas cadastradas.
            </Text>
            <Text style={styles.text}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  )
}