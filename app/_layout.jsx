import {Alert, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View} from "react-native"
import logo from "../assets/images/Check.png"
import { colors } from "../constants/colors"
import Task from "../components/Task"
import { useState } from "react"


const initialTasks = [
  { id: 1, completed: true, text: "Fazer café" },
  { id: 2, completed: false, text: "Estudar React Native" },
  { id: 3, completed: false, text: "Academia" }
]


export default function RootLayout() {
  const [tasks, setTasks] = useState(initialTasks)
  const [text, setText] = useState("")

  const addTaks = () => {
    const newTask = {id: tasks.length +1, completed: false, text:text}
    setTasks([...tasks, newTask])
    setText("")
  }


  return(
    <View style={style.mainContainer}>
      <View style={style.rowContainer}>
      <Image source={logo}  style={style.image}/>
      <Text style={style.title}>Minhas Tarefas</Text>
      </View>

      <View style={style.rowContainer}>
      <TextInput 
        value={text}
        onChangeText={setText}
        style={style.input}
      />
      <Pressable
        onPress={addTaks}
        style={({ pressed }) => [
        style.button, 
        {backgroundColor: pressed ? "blue" : colors.primary}
        ]}
      >
        <Text style={style.buttonText}>+</Text>
      </Pressable>
      </View>
      
      <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Task text={item.text} completed={item.completed}/>}
      />
      </View>
      
    </View>
  )
  
}


const style = StyleSheet.create({
  image : {
    width: 40,
    height: 40,
    
  },

  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: "600",
    color: colors.primary,
    marginRight: 30
    
  },

  input: {
    height:40,
    paddingHorizontal: 16,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1,
  },

  button: {
    width: 40,
    height:40,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor  : colors.primary
  },

  buttonText:{
    color: "white", 
    fontSize: 20},


  mainContainer: {
    margin: 20
  },
  rowContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
    
  }
})