/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {useState} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';


function App() {


  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);



  return (
    <SafeAreaView>
     <ToDoList tasks = {tasks}/>
      <ToDoForm />
    </SafeAreaView>
  );
}


export default App;
