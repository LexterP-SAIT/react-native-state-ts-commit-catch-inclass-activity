import { StyleSheet, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { generateId } from "../utils/generateId";

export function TodoSection() {
  // TODO (state): Declare todos as state
  const todos = [
    { id: "1", text: "Learn useState" },
    {
      id: "2",
      text: "Practice typescript refactoring",
    },
  ];

  const addTodoItem = (title) => {
    const newTodo = { id: generateId(), title };
    todos.push(newTodo); 
  };

  const deleteTodoItem = (id) => {

  };

  return (
    <View style={styles.todoSection}>
      <TodoInput onAddTodo={addTodoItem} />
      <TodoList todos={todos} onDeleteItem={deleteTodoItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  todoSection: {
    padding: 20,
  },
});
