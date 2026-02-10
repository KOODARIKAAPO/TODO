import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"
import { useState } from "react"
import { TodoItem } from "./components/Row"
import { useTodos } from "./hooks/useTodos"

export default function App() {
  const { state, handleAdd, handleRemove, handleToggle } = useTodos()
  const [inputText, setInputText] = useState("")
  
  const addTodo = () => {
    handleAdd(inputText)
    setInputText("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={addTodo}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            toggleTodo={(id) => handleToggle(id)}
            deleteTodo={(id) => handleRemove(id)}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F0E7",
    paddingTop: 70,
    paddingHorizontal: 18
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 18,
    textAlign: "left",
    color: "#2F3E2F",
    letterSpacing: 1.2,
    textTransform: "uppercase"
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 18
  },
  input: {
    flex: 1,
    backgroundColor: "#FFFBF4",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    marginRight: 12,
    fontSize: 16,
    color: "#2A2A2A",
    borderWidth: 1,
    borderColor: "#E4DEC8",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2
  },
  addButton: {
    backgroundColor: "#2F3E2F",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3
  },
  addButtonText: {
    color: "#F9F5E9",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.6,
    textTransform: "uppercase"
  },
  list: {
    flex: 1,
    marginTop: 6
  }
})

