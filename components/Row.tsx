import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Todo } from '../types/Todo';

type Props = {
  item: Todo;
  toggleTodo: (id: number, completed: number) => void;
  deleteTodo: (id: number) => void;
};

export function TodoItem({ item, toggleTodo, deleteTodo }: Props) {
  
  const done = item.completed === 1;

  return (
    <View style={styles.todoItem}>
      {/* Painamalla tekstiä toggle */}
      <TouchableOpacity
        style={styles.todoText}
        onPress={() => toggleTodo(item.id, item.completed)}
        activeOpacity={0.7}
      >
        <Text style={[styles.todoTextContent, done && styles.completedText]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      {/* Delete-nappi */}
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodo(item.id)}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  todoText: {
    flex: 1,
  },
  todoTextContent: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
