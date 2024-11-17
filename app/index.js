import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    for (let task of tasks) {
      if (task.toLowerCase() === newTask.toLowerCase()) {
        return Alert.alert('Task was already added');
      }
    }

    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView style={{ padding: 20, marginVertical: 20 }}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Link href="/about" asChild>
        <Pressable>
          <Text>About</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};


export default Home;
