import { Ionicons } from "@expo/vector-icons";
import { Animated, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { useState, useEffect } from "react";
import { Directions, FlingGestureHandler, State, GestureHandlerRootView } from "react-native-gesture-handler";

export default function Task({ text, initialCompleted, toggleCompletion, deleteTask }) {
  const [completed, setCompleted] = useState(initialCompleted);

  useEffect(() => {
    setCompleted(initialCompleted);
  }, [initialCompleted]);

  const swipe = new Animated.Value(0);

  const handleFling = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Animated.timing(swipe, {
        toValue: 500,
        duration: 300,
        useNativeDriver: true,
      }).start(deleteTask);
    }
  };

  return (
    <GestureHandlerRootView>
      <FlingGestureHandler direction={Directions.RIGHT} onHandlerStateChange={handleFling}>
        <Animated.View style={[style.rowContainer, { transform: [{ translateX: swipe }] }]}>
          <Ionicons
            name="checkmark-circle"
            size={32}
            color={completed ? colors.primary : "grey"}
            onPress={() => {
              setCompleted(!completed);
              toggleCompletion();
            }}
          />
          <Text style={[style.taskText, completed && style.completedText]}>{text}</Text>
          <Ionicons
            name="trash"
            size={24}
            color="red"
            onPress={deleteTask}
          />
        </Animated.View>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: "#def0ff",
    padding: 10,
    borderRadius: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});