import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import logo from "../assets/images/Check.png";
import { colors } from "../constants/colors";
import Task from "../components/Task";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getTasksAsyncStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("tasks");
        if (jsonValue !== null) {
          setTasks(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTasksAsyncStorage();
  }, []);

  useEffect(() => {
    const setTasksAsyncStorage = async () => {
      try {
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem("tasks", jsonValue);
      } catch (e) {
        console.log(e);
      }
    };

    setTasksAsyncStorage();
  }, [tasks]);

  const addTaks = () => {
    if (text.trim() === "") {
      alert("Por favor, insira um título para a tarefa.");
      return;
    }
    const newTask = { id: tasks.length + 1, completed: false, text: text };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const calculateProgress = () => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter((task) => task.completed).length;
    return (completedTasks / tasks.length) * 100;
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearAllTasks = () => {
    setTasks([]);
    AsyncStorage.removeItem("tasks");
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.rowContainer}>
        <Image source={logo} style={style.image} />
        <Text style={style.title}>Minhas Tarefas!</Text>
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
            { backgroundColor: pressed ? "blue" : colors.primary },
          ]}
        >
          <Text style={style.buttonText}>+</Text>
        </Pressable>
      </View>

      <View style={style.progressContainer}>
        <View style={style.progressBar}>
          <View
            style={[
              style.progressFill,
              { width: `${calculateProgress()}%` },
            ]}
          />
        </View>
        <Text style={style.progressText}>
          {calculateProgress().toFixed(0)}% concluído
        </Text>
      </View>

      <View>
        {tasks.length === 0 ? (
          <Text style={style.emptyMessage}>Nenhuma tarefa encontrada. Adicione suas tarefas e acompanhe o progresso conforme você as conclui!</Text>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Task
                text={item.text}
                initialCompleted={item.completed}
                toggleCompletion={() => toggleTaskCompletion(item.id)}
                deleteTask={() =>
                  setTasks(tasks.filter((t) => t.id !== item.id))
                }
              />
            )}
          />
        )}
      </View>

      <Pressable
        onPress={clearAllTasks}
        style={style.clearButton}
      >
        <Text style={style.clearButtonText}>Excluir Todas as Tarefas</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },

  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: "600",
    color: colors.primary,
    marginRight: 30,
  },

  input: {
    height: 40,
    paddingHorizontal: 16,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1,
  },

  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
  },

  mainContainer: {
    margin: 20,
  },

  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },

  progressContainer: {
    marginBottom: 20,
    alignItems: "center",
  },

  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 5,
  },

  progressBar: {
    width: "100%",
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
  },

  clearButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#042c4d",
    borderRadius: 10,
    alignItems: "center",
  },

  clearButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "grey",
    marginTop: 20,
  },
});