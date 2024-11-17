import React from "react";
import { useState } from 'react';

import {View, TextInput, Pressable, StyleSheet, Text} from 'react-native';

export default function ToDoForm({addTask}) {

  const [taskText, setTaskText] = useState('');

  const clear = () => {
    setTaskText('');
  };

  return(
    <View style={styles.form}>
      <TextInput
        id="textInput"
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Pressable style={styles.button} title="Add" onPress={() => {addTask(taskText); clear();}}>
        <Text style={styles.buttonText}>Add</Text>  
      </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
    button: {
      padding: 10,
      backgroundColor: '#2196F3',
      textAlign: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });